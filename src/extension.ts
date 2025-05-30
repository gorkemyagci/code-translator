import * as vscode from "vscode";
import { helpersCode, pythonDictionary } from "./utils";

export function activate(context: vscode.ExtensionContext) {
  console.log('Extension "code-translator" is now active!');

  let disposable = vscode.commands.registerCommand(
    "code-translator.translate",
    async () => {
      console.log("Translate command triggered");

      const editor = vscode.window.activeTextEditor;
      if (!editor) {
        vscode.window.showInformationMessage("Aktif editor bulunamadı.");
        return;
      }

      const selection = editor.selection;
      if (selection.isEmpty) {
        vscode.window.showInformationMessage("Lütfen önce bir metin seçin.");
        return;
      }

      const text = editor.document.getText(selection).trim();
      console.log("Selected text:", text);

      if (!text) {
        vscode.window.showInformationMessage("Seçilen metin boş.");
        return;
      }

      let translated = text;

      for (const [key, value] of Object.entries(pythonDictionary)) {
        const regex = new RegExp(`\\b${key}\\b`, "gi");
        translated = translated.replace(regex, value);
      }

      console.log(`Translating '${text}' to '${translated}'`);

      await editor.edit((editBuilder) => {
        editBuilder.replace(selection, translated);
      });

      vscode.window.showInformationMessage(
        `'${text}' metni '${translated}' olarak çevrildi`
      );
    }
  );

  context.subscriptions.push(disposable);

  let translateAllDisposable = vscode.commands.registerCommand(
    "code-translator.translateAll",
    async () => {
      const editor = vscode.window.activeTextEditor;
      if (!editor) {
        vscode.window.showInformationMessage("Aktif editor bulunamadı.");
        return;
      }

      const document = editor.document;
      const fullText = document.getText();

      let translatedText = fullText;

      for (const [key, value] of Object.entries(pythonDictionary)) {
        const regex = new RegExp(`\\b${key}\\b`, "gi");
        translatedText = translatedText.replace(regex, value);
      }

      const fullRange = new vscode.Range(
        document.positionAt(0),
        document.positionAt(fullText.length)
      );

      await editor.edit((editBuilder) => {
        editBuilder.replace(fullRange, translatedText);
      });

      vscode.window.showInformationMessage("Dosyanın tamamı sözlük kullanılarak çevrildi.");
    }
  );

  context.subscriptions.push(translateAllDisposable);

  let createHelperDisposable = vscode.commands.registerCommand(
    "code-translator.createHelperFunctions",
    async () => {
      const workspaceFolders = vscode.workspace.workspaceFolders;
      if (!workspaceFolders || workspaceFolders.length === 0) {
        vscode.window.showInformationMessage("Workspace klasörü bulunamadı.");
        return;
      }

      const rootPath = workspaceFolders[0].uri.fsPath;
      const helpersUri = vscode.Uri.file(`${rootPath}/turkce_python_helpers.py`);

      try {
        await vscode.workspace.fs.writeFile(
          helpersUri,
          Buffer.from(helpersCode, "utf8")
        );
        vscode.window.showInformationMessage("turkce_python_helpers.py oluşturuldu.");

        const editor = vscode.window.activeTextEditor;
        if (!editor) return;

        const importLine = "from turkce_python_helpers import *\n";

        const document = editor.document;
        const firstLine = document.lineAt(0);

        if (!document.getText().includes("from turkce_python_helpers import")) {
          await editor.edit((editBuilder) => {
            editBuilder.insert(firstLine.range.start, importLine);
          });

          vscode.window.showInformationMessage("Import satırı mevcut dosyaya eklendi.");
        } else {
          vscode.window.showInformationMessage("Import satırı zaten mevcut.");
        }
      } catch (err) {
        vscode.window.showErrorMessage("turkce_python_helpers.py oluşturulamadı: " + err);
      }
    }
  );

  context.subscriptions.push(createHelperDisposable);

  // Yeni komut: Sözlük görüntüleme
  let showDictionaryDisposable = vscode.commands.registerCommand(
    "code-translator.showDictionary",
    async () => {
      const panel = vscode.window.createWebviewPanel(
        'pythonDictionary',
        'Python Türkçe Sözlük',
        vscode.ViewColumn.One,
        {}
      );

      const dictionaryEntries = Object.entries(pythonDictionary)
        .sort(([a], [b]) => a.localeCompare(b))
        .map(([turkish, english]) => `<tr><td>${turkish}</td><td>${english}</td></tr>`)
        .join('');

      panel.webview.html = `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="UTF-8">
          <title>Python Türkçe Sözlük</title>
          <style>
            body { font-family: Arial, sans-serif; margin: 20px; }
            table { width: 100%; border-collapse: collapse; }
            th, td { padding: 8px; text-align: left; border-bottom: 1px solid #ddd; }
            th { background-color: #f2f2f2; }
            tr:hover { background-color: #f5f5f5; }
            .search { margin-bottom: 20px; padding: 10px; width: 100%; }
          </style>
        </head>
        <body>
          <h1>Python Türkçe Sözlük</h1>
          <p>Bu sözlük ${Object.keys(pythonDictionary).length} adet Türkçe-İngilizce çeviri içeriyor.</p>
          <input type="text" class="search" placeholder="Aramak istediğiniz kelimeyi yazın..." onkeyup="filterTable()">
          <table id="dictionaryTable">
            <thead>
              <tr>
                <th>Türkçe</th>
                <th>İngilizce (Python)</th>
              </tr>
            </thead>
            <tbody>
              ${dictionaryEntries}
            </tbody>
          </table>
          <script>
            function filterTable() {
              const input = document.querySelector('.search');
              const filter = input.value.toLowerCase();
              const table = document.getElementById("dictionaryTable");
              const tr = table.getElementsByTagName("tr");

              for (let i = 1; i < tr.length; i++) {
                const td1 = tr[i].getElementsByTagName("td")[0];
                const td2 = tr[i].getElementsByTagName("td")[1];
                if (td1 && td2) {
                  const txtValue1 = td1.textContent || td1.innerText;
                  const txtValue2 = td2.textContent || td2.innerText;
                  if (txtValue1.toLowerCase().indexOf(filter) > -1 || 
                      txtValue2.toLowerCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                  } else {
                    tr[i].style.display = "none";
                  }
                }
              }
            }
          </script>
        </body>
        </html>
      `;
    }
  );

  context.subscriptions.push(showDictionaryDisposable);
}

export function deactivate() {
  console.log('Extension "code-translator" deactivated.');
}