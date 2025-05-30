# Code Translator - Türkçe Python Çevirici

Türkçe kod yazan geliştiricilerin Python kodlarını profesyonel İngilizce standardına çevirmelerine yardımcı olan kapsamlı VS Code uzantısı.

## ✨ Özellikler

### 🔄 Akıllı Kod Çevirisi
- **Seçili Metin Çevirisi**: Seçtiğiniz Türkçe kod parçalarını anında Python standartlarına uygun şekilde çevirir
- **Tam Dosya Çevirisi**: Tüm dosyayı tek seferde çevirebilir
- **Bağlam Duyarlı Çeviri**: Kod yapısını koruyarak anlamlı çeviriler yapar

### 📚 Kapsamlı Sözlük Sistemi
- 200+ Türkçe-İngilizce programlama terimi
- Webview tabanlı interaktif sözlük görüntüleyici
- Kişisel sözlük ekleme özelliği

### 🛠️ Helper Dosya Oluşturma
- Türkçe fonksiyon isimlerini İngilizce karşılıklarına yönlendiren helper dosyası
- Eğitim amaçlı geçiş kolaylığı sağlar

### ⚙️ Özelleştirilebilir Ayarlar
- Otomatik çeviri modu
- Yorum koruma seçeneği
- Büyük/küçük harf duyarlılığı
- Bildirim ayarları

![Feature Demo](images/feature-demo.gif)

## 🚀 Kullanım

### Hızlı Başlangıç
1. Türkçe değişken/fonksiyon isimlerini seçin
2. `Ctrl+Shift+T` (Windows/Linux) veya `Cmd+Shift+T` (Mac) tuşlarına basın
3. Çevirilen kod otomatik olarak yerini alır

### Komutlar
- **Seçili Metni Çevir**: `Ctrl+Shift+T`
- **Tüm Dosyayı Çevir**: `Ctrl+Shift+Alt+T`
- **Sözlüğü Göster**: `Ctrl+Shift+D`

### Sağ Tık Menüsü
Editörde sağ tıklayarak çeviri komutlarına hızlıca erişebilirsiniz.

## 📋 Gereksinimler

- VS Code 1.100.0 veya üzeri
- Python dosyaları (.py) ile çalışır

## ⚙️ Uzantı Ayarları

Bu uzantı aşağıdaki ayarları ekler:

- `codeTranslator.autoTranslate`: Otomatik çeviri özelliğini etkinleştir (varsayılan: false)
- `codeTranslator.preserveComments`: Çeviri sırasında yorumları koru (varsayılan: true)
- `codeTranslator.caseSensitive`: Büyük/küçük harf duyarlı çeviri (varsayılan: false)
- `codeTranslator.customDictionary`: Kişisel çeviri sözlüğü eklemeleri (varsayılan: {})
- `codeTranslator.showNotifications`: Çeviri bildirimlerini göster (varsayılan: true)

## 📝 Çeviri Örnekleri

### Önce:
```python
 print("hello world!")
```

### Sonra:
```python
yaz("hello world!")
```

## 🐛 Bilinen Sorunlar

- Çok karmaşık nested yapılarda çeviri hassasiyeti azalabilir
- Özel domain terimleri manual olarak eklenmeli

## 📈 Sürüm Notları

### 1.0.0
- İlk sürüm yayınlandı
- Temel çeviri fonksiyonları
- Sözlük sistemi
- Helper dosya oluşturma

## 🎯 Hedef Kitle

- Türkçe kod yazan Python geliştiricileri
- Programlamaya yeni başlayan öğrenciler
- Eğitim kurumları ve öğretmenler
- Kod standartlarını iyileştirmek isteyen geliştiriciler

## 🤝 Katkı Sağlama

Projeye katkı sağlamak için:
1. Repository'yi fork edin
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Değişikliklerinizi commit edin (`git commit -m 'Add amazing feature'`)
4. Branch'inizi push edin (`git push origin feature/amazing-feature`)
5. Pull Request oluşturun

## 📞 Destek

- **Email**: gorkemyagci705@gmail.com
- **GitHub Issues**: [Proje Sayfası](https://github.com/gorkemyagci/code-translator/issues)

## 📜 Lisans

Bu proje MIT lisansı altında yayınlanmıştır. Detaylar için [LICENSE](LICENSE) dosyasına bakın.

## 🌟 Teşekkürler

Bu uzantıyı kullandığınız için teşekkürler! Türkçe programlama topluluğuna katkı sağladığınız için minnettarız.

---

**Keyifli kodlamalar!** 🐍✨