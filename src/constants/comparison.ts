export interface ComparisonItem {
  id: string;
  category: string;
  before: {
    title: string;
    description: string;
    metric: string;
  };
  after: {
    title: string;
    description: string;
    metric: string;
  };
}

export const COMPARISON_SECTION_DATA: {
  badge: string;
  title: string;
  description: string;
  beforeLabel: string;
  afterLabel: string;
  ctaTitle: string;
  ctaLabel: string;
  demoEventName: string;
  items: ComparisonItem[];
} = {
  badge: "ÖNCESİ VE SONRASI",
  title: "Manuel Kör Noktalardan Otonom Ağ Zekasına",
  description:
    "Geleneksel çok satıcılı ağ operasyonlarının getirdiği güvenlik açıklarını ve insan kaynaklı kesintileri AllConfig ile geride bırakın.",
  beforeLabel: "Geleneksel / Eski Yöntem",
  afterLabel: "AllConfig ile Gelecek",
  ctaTitle: "Ağınızdaki Kör Noktaları Ücretsiz Analiz Edin",
  ctaLabel: "Ücretsiz Analiz Başlat",
  demoEventName: "allconfig:open-demo",
  items: [
    {
      id: "rule-changes",
      category: "Kural Değişiklikleri & Dağıtım",
      before: {
        title: "Manuel CLI & Yüksek Hata Riski",
        description: "Her satıcı için ayrı CLI sözdizimi. Test edilmemiş kurallar nedeniyle beklenmeyen ağ kesintileri ve saatler süren manuel rollback çabası.",
        metric: "Ortalama 3-5 Gün Dağıtım Süresi",
      },
      after: {
        title: "Evrensel Transpiler & Dört Göz Onayı",
        description: "Tek formattan Fortinet, Cisco, Palo Alto formatına otomatik derleme. Dört Göz (Four-Eyes) onay mekanizması ve saniyeler içinde atomik rollback.",
        metric: "Dakikalar İçinde Sıfır Hata Dağıtım",
      },
    },
    {
      id: "topology-visibility",
      category: "Topoloji Görünürlüğü & Yol Analizi",
      before: {
        title: "Güncel Olmayan Statik Çizimler (Visio)",
        description: "İlk değişiklikte eskiyen haritalar. A noktasından B noktasına giden trafiğin hangi firewall veya drop kuralına takıldığını bulmak için saatler süren körleme arayış.",
        metric: "Kör Noktalar & Saatler Süren Teşhis",
      },
      after: {
        title: "Canlı Bellek İçi Dijital İkiz (Network Twin)",
        description: "NetworkX tabanlı canlı ikiz. LPM ve NAT farkındalıklı Yol Analizi (Path Finder) ile paket akışını ve engelleyen kuralı anında harita üzerinde görselleştirme.",
        metric: "Saniyeler İçinde Kesin Kök Neden Tespiti",
      },
    },
    {
      id: "compliance-audit",
      category: "Güvenlik Uyumluluğu & Denetim",
      before: {
        title: "Manuel Excel Taramaları & Denetim Kabusu",
        description: "CIS Benchmark ve ISO 27001 denetimleri için cihaz cihaz gezilerek çıkarılan ve aylar süren rapor hazırlıkları.",
        metric: "Haftalar Süren Ağır Denetim Eforu",
      },
      after: {
        title: "Otomatik Ağırlıklı Skorlama & Kanıt Çıkarıcı",
        description: "Yüzlerce kurala karşı anlık tarama. Yanlış alarmları (False Positive) engelleyen cihaz filtreleme ve ihlal satırını doğrudan gösteren kanıt (evidence) dökümü.",
        metric: "Tek Tıkla Denetime Hazır Rapor",
      },
    },
    {
      id: "vulnerability-management",
      category: "Zafiyet Takibi (CVE / PSIRT)",
      before: {
        title: "Statik Listeler & Geciken Güvenlik Yamaları",
        description: "Yeni yayımlanan CVE açıklarının ağdaki hangi cihaz ve versiyonları etkilediğini manuel tablolardan takip etmeye çalışmak.",
        metric: "Aylarca Fark Edilmeyen Kritik Açıklar",
      },
      after: {
        title: "CPE Normalizasyonu & Konfigürasyon Filtresi",
        description: "NVD ve CISA KEV akışlarıyla sürekli güncellenen veritabanı. Konfigürasyonda ilgili servis kapalıysa yanlış alarm üretmeyen akıllı risk değerlendirmesi.",
        metric: "Sıfır Gün Zafiyetlerine Anında Görünürlük",
      },
    },
  ],
};