# AllConfig | Yeni Nesil Ağ Güvenlik Politikası Yönetimi (NSPM) & Dijital İkiz

![Next.js](https://img.shields.io/badge/Next.js-16.3.6-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19.2.8-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=for-the-badge&logo=tailwindcss)
![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-Compatible-22c55e?style=for-the-badge&logo=github)

**AllConfig (ProSight)**, karmaşık ve çok satıcılı (Multi-Vendor) ağ altyapılarını tek bir canlı kontrol katmanında birleştiren, bellek içi ağ ikizi (Network Twin) ve otomatik güvenlik politikası yönetim platformudur.

---

## 🌟 Öne Çıkan Özellikler

- 🛡️ **Çok Satıcılı Ekosistem Desteği:** Cisco (IOS/NX-OS), Fortinet (FortiOS), Palo Alto (PAN-OS) ve Huawei (VRP) altyapılarını tek merkezden yönetin.
- 🌐 **Canlı Ağ İkizi (Network Twin):** Canlı paket simülasyonu, L2/L3 topoloji haritalama ve anlık yol bulucu (Path Finder).
- 🔄 **Otomatik Kural Derleyici (Rule Transpiler):** Üreticiler arası kural ve politika dönüştürme işlemleri.
- 📊 **Otomatik Uyumlu Denetim:** PCI-DSS, ISO 27001 ve CIS standartlarına tam uyumluluk ve otomatik güvenlik riski analizi.
- 🎨 **Modern & Dinamik Arayüz:** Dark mode desteği, cam efektleri (Glassmorphism), akıcı animasyonlar (Framer Motion) ve etkileşimli bileşenler.

---

## 🛠️ Teknoloji Yığını

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router, Static Export)
- **Kütüphane:** [React 19](https://react.dev/)
- **Dil:** [TypeScript](https://www.typescriptlang.org/)
- **Stil & Animasyon:** [Tailwind CSS v4](https://tailwindcss.com/), [Framer Motion](https://www.framer.com/motion/)
- **Bileşen Yapısı:** Shadcn UI, Base UI, Lucide Icons

---

## 🚀 Kurulum ve Yerel Geliştirme

Projeyi yerel ortamınızda çalıştırmak için aşağıdaki adımları takip edebilirsiniz:

1. **Repoyu klonlayın veya indirin:**
   ```bash
   git clone https://github.com/prosight1/prosight1.github.io.git
   cd prosight1.github.io
   ```

2. **Bağımlılıkları yükleyin:**
   ```bash
   npm install
   ```

3. **Geliştirme sunucusunu başlatın:**
   ```bash
   npm run dev
   ```
   Tarayıcınızda [http://localhost:3001](http://localhost:3001) adresini açarak projeyi görüntüleyebilirsiniz.

---

## 📦 Statik Derleme ve GitHub Pages Dağıtımı

Bu proje GitHub Pages üzerinde sorunsuz yayınlanabilmesi için `output: "export"` moduna uygun olarak yapılandırılmıştır.

1. **Statik Çıktı Oluşturma:**
   ```bash
   npm run build
   ```
   Bu komut projenizi derleyerek statik HTML/CSS/JS dosyalarını `out/` klasörüne aktarır.

2. **GitHub'a Gönderme:**
   ```bash
   git add .
   git commit -m "feat: deploy to GitHub Pages"
   git push -u origin main
   ```

3. **GitHub Pages Ayarları:**
   - GitHub deposunun **Settings > Pages** sekmesine gidin.
   - **Source** seçeneğini `GitHub Actions` veya `Deploy from a branch` (veya `gh-pages` dalı) olarak ayarlayın.

---

## 📁 Proje Klasör Yapısı

```text
prosight1.github.io/
├── public/                 # Statik görseller, favicon ve vektörel varlıklar
├── src/
│   ├── app/                # Next.js App Router sayfaları, layout ve sitemap
│   ├── components/         # Arayüz ve Landing bileşenleri
│   │   ├── landing/        # Hero, Features, Comparison, Ecosystem vb. bölümler
│   │   ├── layout/         # Header, Footer, Navigation dock
│   │   └── ui/             # Animasyon ve UI atomik bileşenleri
│   ├── constants/          # Ekosistem verileri ve sabitler
│   └── lib/                # Yardımcı fonksiyonlar (utils, cn)
├── next.config.ts          # Next.js statik export ve optimizasyon konfigürasyonu
└── package.json            # Proje bağımlılıkları ve scriptler
```

---

## 📄 Lisans

Bu proje **ProSight / AllConfig** ekibi tarafından geliştirilmiştir. Tüm hakları saklıdır.
