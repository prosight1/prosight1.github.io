export interface FeatureCard {
  id: string;
  title: string;
  category: string;
  description: string;
  iconName: string;
  technicalBadge: string;
  highlights: string[];
}

export const FEATURES_SECTION_DATA: {
  badge: string;
  title: string;
  description: string;
  ctaLabel: string;
  demoEventName: string;
  features: FeatureCard[];
} = {
  badge: "MİMARİ VE ÇEKİRDEK YETENEKLER",
  title: "9 Adımlı Bütünleşik Ağ Güvenliği Mimarisi",
  description: "Çok satıcılı ağınızın fiziksel kablolarından güvenlik duvarı politikalarına kadar her katmanı canlı bellek içi graf üzerinde birleştirin.",
  ctaLabel: "Tüm Mimariyi Canlı Görün",
  demoEventName: "allconfig:open-demo",
  features: [
    {
      id: "network-twin",
      title: "Bellek İçi Ağ İkizi (In-Memory Twin)",
      category: "Graf Çekirdeği",
      description: "Canlı ağa yük bindirmeden tüm L2/L3 topolojisini, ARP, MAC ve yönlendirme tablolarını NetworkX tabanlı yönlendirilmiş graf (DiGraph) modelinde simüle edin.",
      iconName: "Network",
      technicalBadge: "NetworkX / Graph Engine",
      highlights: ["Sıfır canli ağ yükü", "Milisaniyeler içinde yol sorgusu", "L2 & L3 Birleşik Harita"],
    },
    {
      id: "path-finder",
      title: "Akıllı Yol Analizi (LPM & NAT Aware)",
      category: "Trafik Simülasyonu",
      description: "Kaynak ve hedef IP girildiğinde Longest Prefix Match (LPM) ve NAT/PAT dönüşümlerini hesaba katarak paketin geçtiği tüm switch, router ve firewall zincirini anında görselleştirin.",
      iconName: "Route",
      technicalBadge: "LPM & NAT Engine",
      highlights: ["Kural bazlı PERMIT/DENY tespiti", "Dinamik harita yolu parlatma", "Kör nokta eliminasyonu"],
    },
    {
      id: "universal-transpiler",
      title: "Evrensel Kural Derleyici (Transpiler)",
      category: "Otomasyon & Dağıtım",
      description: "Satıcıdan bağımsız tanımlanan tek bir güvenlik politikasını Cisco CLI, Fortinet API, Palo Alto XML veya Huawei VRP formatına hatasız dönüştürün.",
      iconName: "Code2",
      technicalBadge: "Multi-Vendor AST",
      highlights: ["Format bağımsız kural tanımı", "Otomatik sözdizimi doğrulama", "Cisco, Fortinet, PAN-OS desteği"],
    },
    {
      id: "four-eyes-rollback",
      title: "Dört Göz (Four-Eyes) & Atomik Rollback",
      category: "Operasyonel Güvenlik",
      description: "Kuralı oluşturan ile onaylayanı ayıran kurumsal onay akışı. Kural basılmadan önce otomatik alınan konfigürasyon yedeği ile olası bir sorunda saniyeler içinde eski kararlı duruma dönüş.",
      iconName: "ShieldCheck",
      technicalBadge: "Zero-Downtime Guard",
      highlights: ["Çift onay mekanizması", "Otomatik pre-change backup", "Tek tıkla anında geri alma"],
    },
    {
      id: "drift-rca",
      title: "Topoloji Sapma Tespiti & Kök Neden (RCA)",
      category: "Sürekli İzleme",
      description: "Ağdaki hat kopmalarını (L1/L2), rota kayıplarını (L3) veya güvenlik duvarı drop kurallarını katman katman analiz ederek arıza kaynağını anında izole edin.",
      iconName: "Activity",
      technicalBadge: "Automated Root-Cause",
      highlights: ["Canlı sapma olay akışı", "Otomatik katman izolasyonu", "Kritik/Uyarı seviyelendirme"],
    },
    {
      id: "compliance-engine",
      title: "Ağırlıklı Uyumluluk Motoru (CIS & ISO)",
      category: "Denetim & Raporlama",
      description: "Cihaz konfigürasyonlarını CIS Benchmark ve üretici bazlı 100'er kurala karşı tarayın. İlgisiz cihazları eleyen filtreleme ve ihlal satırını kanıt (evidence) olarak sunan raporlama.",
      iconName: "FileCheck",
      technicalBadge: "Weighted Posture Score",
      highlights: ["Yanlış alarm (False Positive) önleme", "Doğrudan konfigürasyon kanıtı", "CIS, NIST, ISO 27001"],
    },
  ],
};