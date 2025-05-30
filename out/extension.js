"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = activate;
exports.deactivate = deactivate;
const vscode = __importStar(require("vscode"));
function activate(context) {
    console.log('Extension "code-translator" is now active!');
    // Kapsamlı Python sözlüğü
    const pythonDictionary = {
        // Temel fonksiyonlar
        yaz: "print",
        yazdır: "print",
        girdi: "input",
        uzunluk: "len",
        aralık: "range",
        toplam: "sum",
        maksimum: "max",
        minimum: "min",
        mutlak: "abs",
        yuvarlak: "round",
        güç: "pow",
        sırala: "sorted",
        ters: "reversed",
        enumere: "enumerate",
        zip: "zip",
        filtre: "filter",
        harita: "map",
        hepsi: "all",
        herhangi: "any",
        // String metodları
        büyük: "upper",
        küçük: "lower",
        başlık: "title",
        büyükBaşharf: "capitalize",
        değiştir: "replace",
        böl: "split",
        birleştir: "join",
        bulStr: "find", // String'deki find
        saydır: "count",
        başlar: "startswith",
        biter: "endswith",
        kırp: "strip",
        solKırp: "lstrip",
        sağKırp: "rstrip",
        format: "format",
        // Liste metodları
        ekleList: "append", // Liste için ekle
        ekleHep: "extend",
        yerleştir: "insert",
        kaldır: "remove",
        çıkar: "pop",
        temizle: "clear",
        dizin: "index",
        kopyala: "copy",
        sıralaYerinde: "sort",
        tersÇevir: "reverse",
        // Dictionary metodları
        anahtarlar: "keys",
        değerler: "values",
        öğeler: "items",
        alDict: "get", // Dictionary için al
        güncelle: "update",
        çıkarDict: "pop",
        çıkarÖğe: "popitem",
        varsayılan: "setdefault",
        // Set metodları
        ekleSet: "add",
        kaldırSet: "discard",
        çıkarSetRemove: "remove", // Set için remove
        kesişim: "intersection",
        birleşim: "union",
        fark: "difference",
        simetrikFark: "symmetric_difference",
        altKüme: "issubset",
        üstKüme: "issuperset",
        ayrık: "isdisjoint",
        // Dosya işlemleri
        açDosya: "open", // Dosya için aç
        oku: "read",
        yazDosya: "write", // Dosya için yaz
        ekleDosya: "append", // Dosya için ekle
        kapat: "close",
        satırlar: "readlines",
        satırYaz: "writelines",
        // Matematik modülü
        karekök: "sqrt",
        taban: "floor",
        tavan: "ceil",
        logaritma: "log",
        doğalLog: "log",
        sinüs: "sin",
        kosinüs: "cos",
        tanjant: "tan",
        pi: "pi",
        e: "e",
        // Random modülü
        rastgele: "random",
        rastgeleInt: "randint",
        seç: "choice",
        karıştır: "shuffle",
        örnek: "sample",
        // Datetime modülü
        şimdi: "now",
        bugün: "today",
        tarih: "date",
        saat: "time",
        zamanDamgası: "timestamp",
        formatTarih: "strftime",
        ayrıştırTarih: "strptime",
        // OS modülü
        yol: "path",
        dizinListesi: "listdir", // listdir için
        değiştirDizin: "chdir",
        mevcutDizin: "getcwd",
        oluşturDizin: "mkdir",
        silDosya: "remove", // Dosya silmek için
        silDizin: "rmdir",
        yenidenAdlandır: "rename",
        varMı: "exists",
        dosyaMı: "isfile",
        dizinMi: "isdir",
        // JSON modülü
        yükleJson: "load", // JSON için yükle
        yükleStr: "loads",
        dökümle: "dump",
        dökümleStr: "dumps",
        // Regex modülü
        araRegex: "search", // Regex için ara
        bulRegex: "find", // Regex için bul
        eşleş: "match",
        değiştirRegex: "sub",
        bölRegex: "split", // Regex için böl
        bulHepsi: "findall",
        // HTTP/Requests modülü
        alHttp: "get", // HTTP için al
        gönder: "post",
        koy: "put",
        silHttp: "delete", // HTTP için sil
        durum: "status_code",
        metin: "text",
        jsonResponse: "json", // Response için json
        başlıklar: "headers",
        // Threading modülü
        işParçacığı: "Thread",
        başlatThread: "start", // Thread için başlat
        birleştirThread: "join", // Thread için birleştir
        kilit: "Lock",
        olay: "Event",
        semafor: "Semaphore",
        // Pandas modülü (yaygın kullanım)
        veriÇerçevesi: "DataFrame",
        seri: "Series",
        okuCsv: "read_csv",
        okuExcel: "read_excel",
        okuJsonPd: "read_json", // Pandas için read_json
        yazCsv: "to_csv",
        yazExcel: "to_excel",
        yazJsonPd: "to_json", // Pandas için to_json
        grup: "groupby",
        birleştirPd: "merge",
        bağla: "concat",
        doldur: "fillna",
        düşür: "drop",
        düşürNa: "dropna",
        tanımla: "describe",
        // NumPy modülü (yaygın kullanım)
        dizi: "array",
        sıfırlar: "zeros",
        birler: "ones",
        boşDizi: "empty", // NumPy için empty
        arangeNp: "arange", // NumPy için arange
        linspace: "linspace",
        yenidenŞekillendir: "reshape",
        düzleştir: "flatten",
        transpoze: "transpose",
        nokta: "dot",
        matris: "matrix",
        // Matplotlib modülü (yaygın kullanım)
        çiz: "plot",
        göster: "show",
        kaydetFig: "savefig", // Figure kaydetmek için
        başlıkPlt: "title", // Matplotlib için title
        xlabel: "xlabel",
        ylabel: "ylabel",
        legend: "legend",
        ızgara: "grid",
        // Kontrol yapıları ve anahtar kelimeler
        eğer: "if",
        değilse: "else",
        eğerDeğilse: "elif",
        için: "for",
        içinde: "in",
        iken: "while",
        dene: "try",
        yakala: "except",
        sonunda: "finally",
        fırlat: "raise",
        geç: "pass",
        devam: "continue",
        kır: "break",
        döndür: "return",
        ver: "yield",
        fonksiyon: "def",
        sınıf: "class",
        içeAktar: "import",
        itibaren: "from",
        olarak: "as",
        küresel: "global",
        yerel: "nonlocal",
        lambda: "lambda",
        doğru: "True",
        yanlış: "False",
        boşDeğer: "None", // None için
        ve: "and",
        veya: "or",
        değil: "not",
        içerir: "in",
        içermez: "not in",
        eşittir: "is",
        eşitDeğil: "is not",
        // Veri tipleri
        tamsayı: "int",
        ondalık: "float",
        karakter: "str",
        boolean: "bool",
        liste: "list",
        demet: "tuple",
        sözlük: "dict",
        küme: "set",
        dondurulmuşKüme: "frozenset",
        // Exception tipleri
        hata: "Exception",
        değerHatası: "ValueError",
        tipHatası: "TypeError",
        indeksHatası: "IndexError",
        anahtarHatası: "KeyError",
        dosyaHatası: "FileNotFoundError",
        izinHatası: "PermissionError",
        // Property ve descriptor metodları
        özellik: "property",
        ayarlayıcı: "setter",
        alıcı: "getter",
        silici: "deleter",
        // Magic methods
        ilkle: "__init__",
        strMagic: "__str__", // Magic method için str
        temsil: "__repr__",
        uzunlukMagic: "__len__",
        alMagic: "__getitem__",
        ayarlaMagic: "__setitem__",
        silMagic: "__delitem__",
        çağrı: "__call__",
        toplamMagic: "__add__",
        çıkarmMagic: "__sub__",
        çarpmMagic: "__mul__",
        bölmMagic: "__truediv__",
        // Async/await
        async: "async",
        bekle: "await",
        // Context managers
        gir: "__enter__",
        çık: "__exit__",
        ile: "with"
    };
    let disposable = vscode.commands.registerCommand("code-translator.translate", async () => {
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
        vscode.window.showInformationMessage(`'${text}' metni '${translated}' olarak çevrildi`);
    });
    context.subscriptions.push(disposable);
    let translateAllDisposable = vscode.commands.registerCommand("code-translator.translateAll", async () => {
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
        const fullRange = new vscode.Range(document.positionAt(0), document.positionAt(fullText.length));
        await editor.edit((editBuilder) => {
            editBuilder.replace(fullRange, translatedText);
        });
        vscode.window.showInformationMessage("Dosyanın tamamı sözlük kullanılarak çevrildi.");
    });
    context.subscriptions.push(translateAllDisposable);
    let createHelperDisposable = vscode.commands.registerCommand("code-translator.createHelperFunctions", async () => {
        const workspaceFolders = vscode.workspace.workspaceFolders;
        if (!workspaceFolders || workspaceFolders.length === 0) {
            vscode.window.showInformationMessage("Workspace klasörü bulunamadı.");
            return;
        }
        const rootPath = workspaceFolders[0].uri.fsPath;
        const helpersUri = vscode.Uri.file(`${rootPath}/turkce_python_helpers.py`);
        const helpersCode = `"""
Türkçe Python Helper Fonksiyonları - Genişletilmiş Versiyon
Bu dosya Türkçe kod yazmayı kolaylaştıran helper fonksiyonlar ve 230+ Türkçe-İngilizce çeviri içerir.
"""

import math
import random
import datetime
import os
import json
import re
import threading
import time
from pathlib import Path
import csv
import sys

# =============================================================================
# TÜRKÇE-İNGİLİZCE SÖZLÜK (230+ çeviri)
# =============================================================================

# Temel fonksiyonlar
def yaz(*args, **kwargs):
    """print fonksiyonunun Türkçe karşılığı"""
    return print(*args, **kwargs)

def yazdır(*args, **kwargs):
    """print fonksiyonunun Türkçe karşılığı"""
    return print(*args, **kwargs)

def girdi(prompt=""):
    """input fonksiyonunun Türkçe karşılığı"""
    return input(prompt)

def oku():
    """input fonksiyonunun Türkçe karşılığı"""
    return input()

def uzunluk(obj):
    """len fonksiyonunun Türkçe karşılığı"""
    return len(obj)

def aralık(*args):
    """range fonksiyonunun Türkçe karşılığı"""
    return range(*args)

def toplam(iterable):
    """sum fonksiyonunun Türkçe karşılığı"""
    return sum(iterable)

def maksimum(iterable):
    """max fonksiyonunun Türkçe karşılığı"""
    return max(iterable)

def minimum(iterable):
    """min fonksiyonunun Türkçe karşılığı"""
    return min(iterable)

def mutlak(x):
    """abs fonksiyonunun Türkçe karşılığı"""
    return abs(x)

def yuvarlak(number, ndigits=None):
    """round fonksiyonunun Türkçe karşılığı"""
    return round(number, ndigits)

def güç(base, exp):
    """pow fonksiyonunun Türkçe karşılığı"""
    return pow(base, exp)

def sırala(iterable, key=None, reverse=False):
    """sorted fonksiyonunun Türkçe karşılığı"""
    return sorted(iterable, key=key, reverse=reverse)

def ters(seq):
    """reversed fonksiyonunun Türkçe karşılığı"""
    return reversed(seq)

def tür(obj):
    """type fonksiyonunun Türkçe karşılığı"""
    return type(obj)

def boolean(obj):
    """bool fonksiyonunun Türkçe karşılığı"""
    return bool(obj)

def tamsayı(obj):
    """int fonksiyonunun Türkçe karşılığı"""
    return int(obj)

def ondalık(obj):
    """float fonksiyonunun Türkçe karşılığı"""
    return float(obj)

def karakter(obj):
    """str fonksiyonunun Türkçe karşılığı"""
    return str(obj)

def liste(obj=None):
    """list fonksiyonunun Türkçe karşılığı"""
    return list() if obj is None else list(obj)

def demet(obj=None):
    """tuple fonksiyonunun Türkçe karşılığı"""
    return tuple() if obj is None else tuple(obj)

def küme(obj=None):
    """set fonksiyonunun Türkçe karşılığı"""
    return set() if obj is None else set(obj)

def sözlük(obj=None):
    """dict fonksiyonunun Türkçe karşılığı"""
    return dict() if obj is None else dict(obj)

def enumerate(iterable, start=0):
    """enumerate fonksiyonunun Türkçe karşılığı"""
    return enumerate(iterable, start)

def zip(*iterables):
    """zip fonksiyonunun Türkçe karşılığı"""
    return zip(*iterables)

def filtre(function, iterable):
    """filter fonksiyonunun Türkçe karşılığı"""
    return filter(function, iterable)

def harita(function, *iterables):
    """map fonksiyonunun Türkçe karşılığı"""
    return map(function, *iterables)

def hepsi(iterable):
    """all fonksiyonunun Türkçe karşılığı"""
    return all(iterable)

def herhangi(iterable):
    """any fonksiyonunun Türkçe karşılığı"""
    return any(iterable)

def saydir(value, iterable):
    """count method için helper"""
    if hasattr(iterable, 'count'):
        return iterable.count(value)
    return sum(1 for x in iterable if x == value)

# Kontrol yapıları için sabitler
doğru = True
yanlış = False
boş = None

# String helper fonksiyonları
class StrHelper:
    @staticmethod
    def büyük(s):
        """str.upper() Türkçe karşılığı"""
        return s.upper()
    
    @staticmethod
    def küçük(s):
        """str.lower() Türkçe karşılığı"""
        return s.lower()
    
    @staticmethod
    def başlık(s):
        """str.title() Türkçe karşılığı"""
        return s.title()
    
    @staticmethod
    def büyükBaşharf(s):
        """str.capitalize() Türkçe karşılığı"""
        return s.capitalize()
    
    @staticmethod
    def değiştir(s, old, new):
        """str.replace() Türkçe karşılığı"""
        return s.replace(old, new)
    
    @staticmethod
    def böl(s, sep=None):
        """str.split() Türkçe karşılığı"""
        return s.split(sep)
    
    @staticmethod
    def birleştir(sep, iterable):
        """str.join() Türkçe karşılığı"""
        return sep.join(iterable)
    
    @staticmethod
    def başlar(s, prefix):
        """str.startswith() Türkçe karşılığı"""
        return s.startswith(prefix)
    
    @staticmethod
    def biter(s, suffix):
        """str.endswith() Türkçe karşılığı"""
        return s.endswith(suffix)
    
    @staticmethod
    def bul(s, sub):
        """str.find() Türkçe karşılığı"""
        return s.find(sub)
    
    @staticmethod
    def kırp(s):
        """str.strip() Türkçe karşılığı"""
        return s.strip()
    
    @staticmethod
    def solKırp(s):
        """str.lstrip() Türkçe karşılığı"""
        return s.lstrip()
    
    @staticmethod
    def sağKırp(s):
        """str.rstrip() Türkçe karşılığı"""
        return s.rstrip()

# Liste helper fonksiyonları
class ListHelper:
    @staticmethod
    def ekle(lst, item):
        """list.append() Türkçe karşılığı"""
        lst.append(item)
        return lst
    
    @staticmethod
    def ekleHep(lst, iterable):
        """list.extend() Türkçe karşılığı"""
        lst.extend(iterable)
        return lst
    
    @staticmethod
    def yerleştir(lst, index, item):
        """list.insert() Türkçe karşılığı"""
        lst.insert(index, item)
        return lst
    
    @staticmethod
    def kaldır(lst, item):
        """list.remove() Türkçe karşılığı"""
        lst.remove(item)
        return lst
    
    @staticmethod
    def çıkar(lst, index=-1):
        """list.pop() Türkçe karşılığı"""
        return lst.pop(index)
    
    @staticmethod
    def temizle(lst):
        """list.clear() Türkçe karşılığı"""
        lst.clear()
        return lst
    
    @staticmethod
    def kopyala(lst):
        """list.copy() Türkçe karşılığı"""
        return lst.copy()
    
    @staticmethod
    def tersÇevir(lst):
        """list.reverse() Türkçe karşılığı"""
        lst.reverse()
        return lst
    
    @staticmethod
    def sıralaYerinde(lst, key=None, reverse=False):
        """list.sort() Türkçe karşılığı"""
        lst.sort(key=key, reverse=reverse)
        return lst
    
    @staticmethod
    def dizin(lst, value):
        """list.index() Türkçe karşılığı"""
        return lst.index(value)

# Küme helper fonksiyonları
class SetHelper:
    @staticmethod
    def ekle(s, item):
        """set.add() Türkçe karşılığı"""
        s.add(item)
        return s
    
    @staticmethod
    def kaldır(s, item):
        """set.remove() Türkçe karşılığı"""
        s.remove(item)
        return s
    
    @staticmethod
    def sil(s, item):
        """set.discard() Türkçe karşılığı"""
        s.discard(item)
        return s
    
    @staticmethod
    def birleşim(s1, s2):
        """set.union() Türkçe karşılığı"""
        return s1.union(s2)
    
    @staticmethod
    def kesişim(s1, s2):
        """set.intersection() Türkçe karşılığı"""
        return s1.intersection(s2)
    
    @staticmethod
    def fark(s1, s2):
        """set.difference() Türkçe karşılığı"""
        return s1.difference(s2)
    
    @staticmethod
    def simetrikFark(s1, s2):
        """set.symmetric_difference() Türkçe karşılığı"""
        return s1.symmetric_difference(s2)
    
    @staticmethod
    def altKüme(s1, s2):
        """set.issubset() Türkçe karşılığı"""
        return s1.issubset(s2)
    
    @staticmethod
    def üstKüme(s1, s2):
        """set.issuperset() Türkçe karşılığı"""
        return s1.issuperset(s2)
    
    @staticmethod
    def ayrık(s1, s2):
        """set.isdisjoint() Türkçe karşılığı"""
        return s1.isdisjoint(s2)

# Sözlük helper fonksiyonları
class DictHelper:
    @staticmethod
    def anahtarlar(d):
        """dict.keys() Türkçe karşılığı"""
        return d.keys()
    
    @staticmethod
    def değerler(d):
        """dict.values() Türkçe karşılığı"""
        return d.values()
    
    @staticmethod
    def öğeler(d):
        """dict.items() Türkçe karşılığı"""
        return d.items()
    
    @staticmethod
    def al(d, key, default=None):
        """dict.get() Türkçe karşılığı"""
        return d.get(key, default)
    
    @staticmethod
    def çıkar(d, key, default=None):
        """dict.pop() Türkçe karşılığı"""
        return d.pop(key, default)
    
    @staticmethod
    def çıkarÖğe(d):
        """dict.popitem() Türkçe karşılığı"""
        return d.popitem()
    
    @staticmethod
    def güncelle(d, other):
        """dict.update() Türkçe karşılığı"""
        d.update(other)
        return d
    
    @staticmethod
    def temizle(d):
        """dict.clear() Türkçe karşılığı"""
        d.clear()
        return d
    
    @staticmethod
    def kopyala(d):
        """dict.copy() Türkçe karşılığı"""
        return d.copy()
    
    @staticmethod
    def varsayılan(d, key, default):
        """dict.setdefault() Türkçe karşılığı"""
        return d.setdefault(key, default)

# Matematik helper fonksiyonları
class MathHelper:
    @staticmethod
    def karekök(x):
        """math.sqrt() Türkçe karşılığı"""
        return math.sqrt(x)
    
    @staticmethod
    def taban(x):
        """math.floor() Türkçe karşılığı"""
        return math.floor(x)
    
    @staticmethod
    def tavan(x):
        """math.ceil() Türkçe karşılığı"""
        return math.ceil(x)
    
    @staticmethod
    def logaritma(x, base=math.e):
        """math.log() Türkçe karşılığı"""
        return math.log(x, base)
    
    @staticmethod
    def doğalLog(x):
        """math.log() Türkçe karşılığı (doğal logaritma)"""
        return math.log(x)
    
    @staticmethod
    def sinüs(x):
        """math.sin() Türkçe karşılığı"""
        return math.sin(x)
    
    @staticmethod
    def kosinüs(x):
        """math.cos() Türkçe karşılığı"""
        return math.cos(x)
    
    @staticmethod
    def tanjant(x):
        """math.tan() Türkçe karşılığı"""
        return math.tan(x)
    
    pi = math.pi
    e = math.e

# Random helper fonksiyonları
class RandomHelper:
    @staticmethod
    def rastgele():
        """random.random() Türkçe karşılığı"""
        return random.random()
    
    @staticmethod
    def rastgeleInt(a, b):
        """random.randint() Türkçe karşılığı"""
        return random.randint(a, b)
    
    @staticmethod
    def seç(sequence):
        """random.choice() Türkçe karşılığı"""
        return random.choice(sequence)
    
    @staticmethod
    def karıştır(lst):
        """random.shuffle() Türkçe karşılığı"""
        random.shuffle(lst)
        return lst
    
    @staticmethod
    def örnek(population, k):
        """random.sample() Türkçe karşılığı"""
        return random.sample(population, k)

# Datetime helper fonksiyonları
class DateTimeHelper:
    @staticmethod
    def şimdi():
        """datetime.datetime.now() Türkçe karşılığı"""
        return datetime.datetime.now()
    
    @staticmethod
    def bugün():
        """datetime.date.today() Türkçe karşılığı"""
        return datetime.date.today()
    
    @staticmethod
    def formatTarih(dt, format_str):
        """datetime.strftime() Türkçe karşılığı"""
        return dt.strftime(format_str)
    
    @staticmethod
    def ayrıştırTarih(date_string, format_str):
        """datetime.strptime() Türkçe karşılığı"""
        return datetime.datetime.strptime(date_string, format_str)
    
    @staticmethod
    def tarih(year, month, day):
        """datetime.date() Türkçe karşılığı"""
        return datetime.date(year, month, day)
    
    @staticmethod
    def saat(hour=0, minute=0, second=0):
        """datetime.time() Türkçe karşılığı"""
        return datetime.time(hour, minute, second)
    
    @staticmethod
    def zamanDamgası(dt=None):
        """timestamp Türkçe karşılığı"""
        if dt is None:
            dt = datetime.datetime.now()
        return dt.timestamp()

# Dosya helper fonksiyonları
class FileHelper:
    @staticmethod
    def aç(filename, mode='r', encoding='utf-8'):
        """open() Türkçe karşılığı"""
        return open(filename, mode, encoding=encoding)
    
    @staticmethod
    def varMı(path):
        """os.path.exists() Türkçe karşılığı"""
        return os.path.exists(path)
    
    @staticmethod
    def dosyaMı(path):
        """os.path.isfile() Türkçe karşılığı"""
        return os.path.isfile(path)
    
    @staticmethod
    def dizinMi(path):
        """os.path.isdir() Türkçe karşılığı"""
        return os.path.isdir(path)
    
    @staticmethod
    def silDosya(path):
        """os.remove() Türkçe karşılığı"""
        return os.remove(path)
    
    @staticmethod
    def silDizin(path):
        """os.rmdir() Türkçe karşılığı"""
        return os.rmdir(path)
    
    @staticmethod
    def oluşturDizin(path):
        """os.mkdir() Türkçe karşılığı"""
        return os.mkdir(path)
    
    @staticmethod
    def yeniden(old_path, new_path):
        """os.rename() Türkçe karşılığı"""
        return os.rename(old_path, new_path)
    
    @staticmethod
    def mevcutDizin():
        """os.getcwd() Türkçe karşılığı"""
        return os.getcwd()
    
    @staticmethod
    def değiştirDizin(path):
        """os.chdir() Türkçe karşılığı"""
        return os.chdir(path)
    
    @staticmethod
    def dizinListesi(path='.'):
        """os.listdir() Türkçe karşılığı"""
        return os.listdir(path)
    
    @staticmethod
    def yol(*args):
        """os.path.join() Türkçe karşılığı"""
        return os.path.join(*args)

# JSON helper fonksiyonları
class JsonHelper:
    @staticmethod
    def yükle(fp):
        """json.load() Türkçe karşılığı"""
        return json.load(fp)
    
    @staticmethod
    def yükleStr(s):
        """json.loads() Türkçe karşılığı"""
        return json.loads(s)
    
    @staticmethod
    def dökümle(obj, fp):
        """json.dump() Türkçe karşılığı"""
        return json.dump(obj, fp, ensure_ascii=False, indent=2)
    
    @staticmethod
    def dökümleStr(obj):
        """json.dumps() Türkçe karşılığı"""
        return json.dumps(obj, ensure_ascii=False, indent=2)

# Threading helper fonksiyonları
class ThreadHelper:
    @staticmethod
    def işParçacığı(target, args=()):
        """threading.Thread() Türkçe karşılığı"""
        return threading.Thread(target=target, args=args)
    
    @staticmethod
    def başlat(thread):
        """thread.start() Türkçe karşılığı"""
        thread.start()
        return thread
    
    @staticmethod
    def birleşim(thread):
        """thread.join() Türkçe karşılığı"""
        thread.join()
        return thread
    
    @staticmethod
    def kilit():
        """threading.Lock() Türkçe karşılığı"""
        return threading.Lock()
    
    @staticmethod
    def olay():
        """threading.Event() Türkçe karşılığı"""
        return threading.Event()
    
    @staticmethod
    def semafor(value=1):
        """threading.Semaphore() Türkçe karşılığı"""
        return threading.Semaphore(value)

# Time helper fonksiyonları
class TimeHelper:
    @staticmethod
    def bekle(seconds):
        """time.sleep() Türkçe karşılığı"""
        return time.sleep(seconds)
    
    @staticmethod
    def zaman():
        """time.time() Türkçe karşılığı"""
        return time.time()

# CSV helper fonksiyonları
class CsvHelper:
    @staticmethod
    def okuCsv(filename, delimiter=',', encoding='utf-8'):
        """CSV okuma Türkçe helper"""
        rows = []
        with open(filename, 'r', encoding=encoding, newline='') as file:
            reader = csv.reader(file, delimiter=delimiter)
            for row in reader:
                rows.append(row)
        return rows
    
    @staticmethod
    def yazCsv(filename, rows, delimiter=',', encoding='utf-8'):
        """CSV yazma Türkçe helper"""
        with open(filename, 'w', encoding=encoding, newline='') as file:
            writer = csv.writer(file, delimiter=delimiter)
            writer.writerows(rows)

# Error handling için Türkçe isimler
hata = Exception
değerHatası = ValueError
türHatası = TypeError
anahtarHatası = KeyError
indeksHatası = IndexError
dosyaHatası = FileNotFoundError
izinHatası = PermissionError

# Helper sınıflarının örneklerini oluştur
str_helper = StrHelper()
list_helper = ListHelper()
set_helper = SetHelper()
dict_helper = DictHelper()
math_helper = MathHelper()
random_helper = RandomHelper()
datetime_helper = DateTimeHelper()
file_helper = FileHelper()
json_helper = JsonHelper()
thread_helper = ThreadHelper()
time_helper = TimeHelper()
csv_helper = CsvHelper()

# Kısayollar için global fonksiyonlar
def bekle(seconds):
    """time.sleep() için kısayol"""
    return time.sleep(seconds)

def zaman():
    """time.time() için kısayol"""
    return time.time()

def kırp(s):
    """str.strip() için kısayol"""
    return s.strip()

def böl(s, sep=None):
    """str.split() için kısayol"""
    return s.split(sep)

def birleştir(sep, iterable):
    """str.join() için kısayol"""
    return sep.join(iterable)

def değiştir(s, old, new):
    """str.replace() için kısayol"""
    return s.replace(old, new)

def bul(s, sub):
    """str.find() için kısayol"""
    return s.find(sub)

def başlar(s, prefix):
    """str.startswith() için kısayol"""
    return s.startswith(prefix)

def biter(s, suffix):
    """str.endswith() için kısayol"""
    return s.endswith(suffix)

def büyük(s):
    """str.upper() için kısayol"""
    return s.upper()

def küçük(s):
    """str.lower() için kısayol"""
    return s.lower()

def başlık(s):
    """str.title() için kısayol"""
    return s.title()

def kopyala(obj):
    """copy için kısayol"""
    if hasattr(obj, 'copy'):
        return obj.copy()
    else:
        import copy
        return copy.copy(obj)

def temizle(obj):
    """clear için kısayol"""
    if hasattr(obj, 'clear'):
        obj.clear()
    return obj

# Regex helper fonksiyonları
class RegexHelper:
    @staticmethod
    def ara(pattern, string):
        """re.search() Türkçe karşılığı"""
        return re.search(pattern, string)
    
    @staticmethod
    def bulHepsi(pattern, string):
        """re.findall() Türkçe karşılığı"""
        return re.findall(pattern, string)
    
    @staticmethod
    def böl(pattern, string):
        """re.split() Türkçe karşılığı"""
        return re.split(pattern, string)
    
    @staticmethod
    def değiştir(pattern, repl, string):
        """re.sub() Türkçe karşılığı"""
        return re.sub(pattern, repl, string)
    
    @staticmethod
    def eşleş(pattern, string):
        """re.match() Türkçe karşılığı"""
        return re.match(pattern, string)

regex_helper = RegexHelper()

# Kolaylık için bazı yaygın kullanılan fonksiyonları global olarak tanımla
karekök = math.sqrt
taban = math.floor
tavan = math.ceil
logaritma = math.log
doğalLog = math.log
sinüs = math.sin
kosinüs = math.cos
tanjant = math.tan
pi = math.pi
e = math.e

rastgele = random.random
rastgeleInt = random.randint
seç = random.choice
karıştır = random.shuffle

# Türkçe kontrol yapıları için yardımcı fonksiyonlar

def eğer(condition, then_func, else_func=None):
    """Türkçe if yapısı"""
    if condition:
        return then_func()
    elif else_func:
        return else_func()

def değil(condition):
    """not koşulu için Türkçe yardımcı"""
    return not condition

def ve(*conditions):
    """and koşulu için Türkçe yardımcı"""
    return all(conditions)

def veya(*conditions):
    """or koşulu için Türkçe yardımcı"""
    return any(conditions)

def içinde(item, container):
    """in koşulu için Türkçe yardımcı"""
    return item in container

def içermez(item, container):
    """not in koşulu için Türkçe yardımcı"""
    return item not in container

def eşit(a, b):
    """== koşulu için Türkçe yardımcı"""
    return a == b

def eşitDeğil(a, b):
    """!= koşulu için Türkçe yardımcı"""
    return a != b

# Çıktı mesajı
print("Türkçe Python Helper fonksiyonları yüklendi!")
print("230+ Türkçe-İngilizce çeviri ile birlikte!")
print("Kullanım örneği: yaz('Merhaba Dünya!'), uzunluk([1,2,3]), karekök(16)")
print("Helper sınıfları: str_helper, list_helper, dict_helper, math_helper, vs.")
`;
        try {
            await vscode.workspace.fs.writeFile(helpersUri, Buffer.from(helpersCode, "utf8"));
            vscode.window.showInformationMessage("turkce_python_helpers.py oluşturuldu.");
            const editor = vscode.window.activeTextEditor;
            if (!editor)
                return;
            const importLine = "from turkce_python_helpers import *\n";
            const document = editor.document;
            const firstLine = document.lineAt(0);
            if (!document.getText().includes("from turkce_python_helpers import")) {
                await editor.edit((editBuilder) => {
                    editBuilder.insert(firstLine.range.start, importLine);
                });
                vscode.window.showInformationMessage("Import satırı mevcut dosyaya eklendi.");
            }
            else {
                vscode.window.showInformationMessage("Import satırı zaten mevcut.");
            }
        }
        catch (err) {
            vscode.window.showErrorMessage("turkce_python_helpers.py oluşturulamadı: " + err);
        }
    });
    context.subscriptions.push(createHelperDisposable);
    // Yeni komut: Sözlük görüntüleme
    let showDictionaryDisposable = vscode.commands.registerCommand("code-translator.showDictionary", async () => {
        const panel = vscode.window.createWebviewPanel('pythonDictionary', 'Python Türkçe Sözlük', vscode.ViewColumn.One, {});
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
    });
    context.subscriptions.push(showDictionaryDisposable);
}
function deactivate() {
    console.log('Extension "code-translator" deactivated.');
}
//# sourceMappingURL=extension.js.map