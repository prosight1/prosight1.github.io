# AllConfig Web Showcase — AI Development Rules & Operational Standards

Bu kurallar; Antgravity, Codex, Cursor ve VS Code AI asistanları için zorunludur.

---

## 1. Token Tasarrufu ve Kapsam İzolasyonu (ZORUNLU)
1. **Asla Tüm Projeyi Taramak Yok:** Bir bileşen veya sayfa düzenlenirken sadece o dosya ve doğrudan bağımlılıkları incelenmelidir. İlgisiz dizinleri taramak, tüm projeyi baştan okumaya çalışmak kesinlikle yasaktır.
2. **Mock Veri İzolasyonu:** Statik veriler, logolar, sorular ve metinler bileşen dosyalarının içerisine gömülmeyecektir. Tüm veri setleri `src/constants/` altında modüler olarak tutulacaktır.
3. **Bileşen Atomikliği:** Her bileşen tek bir sorumluluğa sahip olacak (`Single Responsibility`). Bir dosya 150-200 satırı geçmeyecek; uzayan kısımlar alt bileşenlere ayrılacaktır.

---

## 2. Günlük Kayıt Disiplini (Dev-Journal)
Her tamamlanan görev/prompt sonrasında asistan otomatik olarak şu işlemi yapacaktır:
- `docs/dev-journal/YYYY-MM-DD.md` dosyasını kontrol et (yoksa oluştur).
- Günün tarihine ait başlık altına:
  - Yapılan teknik değişikliklerin maddeler halinde özeti,
  - Eklenen / düzenlenen dosyaların tam yolları,
  - Bir sonraki aşamada yapılacak işin notunu ekle.

---

## 3. Mimari ve Kodlama Standartları
- **Framework:** Next.js (App Router), TypeScript, Tailwind CSS, shadcn/ui.
- **Dizin Düzeni:**
  - `src/components/ui/` -> Temel UI ve shadcn bileşenleri
  - `src/components/landing/` -> Sayfa vitrin bölümleri (Hero, Features, Ecosystem, Testimonials)
  - `src/constants/` -> Statik veriler, metinler, sorular
  - `src/lib/` -> Yardımcı fonksiyonlar (`cn`, animasyon utils)
  - `src/types/` -> TypeScript arayüz ve tipleri (kesinlikle `any` tipi kullanılamaz)
- **Tema:** Dark mode varsayılan; kurumsal gece mavisi/koyu lacivert ve neon aksanlar. Light mode desteği `next-themes` ile sağlanmalıdır.
- **Performans:** Görseller Next.js `<Image />` ile optimize edilecek, harici kütüphaneler dinamik import (`next/dynamic`) ile çağrılacaktır (Lighthouse 90+ hedefi).