export interface FunnelQuestion {
  id: string;
  question: string;
  type: "select" | "radio";
  options: string[];
}

export const FUNNEL_DATA = {
  eventName: "allconfig:open-demo",
  step1: {
    badge: "ÜCRETSİZ CANLI DEMO & ANALİZ",
    title: "Ağınızdaki Kör Noktaları Birlikte İnceleyelim",
    description: "Kurumsal bilgilerinizi iletin; uzman ekibimiz altyapınıza özel hazırlanmış canlı AllConfig oturumunu başlatsın.",
    submitButton: "Analiz Sorularına Geç →",
  },
  step2: {
    badge: "B2B ALTYAPI NİTELİK ANALİZİ",
    title: "Kurumunuza En Uygun Mimarisi Belirleyelim",
    description: "Bilgileriniz alındı. 1 dakikanızı ayırarak aşağıdaki 5 kısa soruyu yanıtlayın, demoyu tam hedefinize göre özelleştirelim.",
    submitButton: "Talebi Tamamla & Demoyu Onayla",
  },
  success: {
    title: "Talebiniz Alındı!",
    description: "Güvenlik uzmanımız 2 saat içinde sizinle iletişime geçecektir.",
    closeButton: "Pencereyi Kapat",
  },
  validation: {
    kvkkRequired: "KVKK onayı olmadan devam edilemez.",
    allQuestionsRequired: "Lütfen beş sorunun tamamını yanıtlayın.",
    unexpectedError: "Beklenmeyen bir hata oluştu.",
    selectPlaceholder: "Seçiniz",
    submitError: "Form gönderilemedi.",
    qualificationError: "Yanıtlar gönderilemedi.",
  },
  fields: {
    fullName: "Ad Soyad",
    company: "Şirket Adı",
    email: "Kurumsal E-posta",
    phone: "Telefon Numarası",
    kvkk: "Kişisel verilerimin KVKK Aydınlatma Metni kapsamında işlenmesini onaylıyorum.",
    marketing: "AllConfig ürün güncellemeleri ve teknik bültenler için ticari elektronik ileti almayı kabul ediyorum.",
  },
  questions: [
    { id: "device_count", question: "1. Ağınızda yönetilen toplam aktif cihaz (Switch, Router, Firewall) sayısı nedir?", type: "select", options: ["50'den az", "50 - 250", "250 - 1.000", "1.000 - 5.000", "5.000+ (Enterprise)"] },
    { id: "primary_vendor", question: "2. Altyapınızda ağırlıklı olarak hangi üreticiler bulunmaktadır?", type: "select", options: ["Cisco Ağırlıklı", "Fortinet Ağırlıklı", "Palo Alto Ağırlıklı", "Huawei / Diğer", "Karma / Çok Satıcılı (Multi-Vendor)"] },
    { id: "core_pain_point", question: "3. Yaşadığınız en büyük operasyonel darboğaz nedir?", type: "select", options: ["Manuel kural değişiklikleri ve insan hatası kesintileri", "Haftalar süren güvenlik/denetim (CIS, ISO 27001) raporlaması", "Topoloji körlüğü ve arıza anında kök neden (RCA) bulamama", "Yeni yayımlanan CVE ve zafiyetlerin takipsizliği"] },
    { id: "automation_status", question: "4. Mevcut ağ konfigürasyon yedekleme ve otomasyon durumunuz nedir?", type: "select", options: ["Tamamen manuel (Excel / Not Defteri / Manuel CLI)", "Klasik NCCM araçları kullanılıyor (Yetersiz kalıyor)", "İç bünye Python/Ansible script'leri ile yönetiliyor"] },
    { id: "timeline", question: "5. AllConfig çözümünü devreye alma planınız ne kadarlık bir takvimi kapsıyor?", type: "select", options: ["Hemen (1 ay içinde)", "1 - 3 ay içinde", "Önümüzdeki çeyrek / Bütçe döneminde", "Sadece bilgi ve fizibilite amaçlı"] },
  ] as FunnelQuestion[],
} as const;