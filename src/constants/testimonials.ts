export interface TestimonialItem {
  tempId: number;
  testimonial: string;
  by: string;
  role: string;
  company: string;
  imgSrc: string;
  metricBadge?: string;
}

export const TESTIMONIALS_DATA: {
  badge: string;
  title: string;
  description: string;
  ctaTitle: string;
  ctaLabel: string;
  demoEventName: string;
  items: TestimonialItem[];
} = {
  badge: "GÜVEN VE REFERANSLAR",
  title: "Kurumsal Ağ Liderlerinin AllConfig Deneyimi",
  description: "Fortune 500 kuruluşları, bankalar ve telekom operatörleri çok satıcılı ağlarını AllConfig ile güvenceye alıyor.",
  ctaTitle: "Siz de kurumunuzdaki ağ operasyonlarını otonomlaştırın",
  ctaLabel: "Vaka Analizi & Demo Talep Et",
  demoEventName: "allconfig:open-demo",
  items: [
    {
      tempId: 0,
      testimonial: "4.000'den fazla switch ve firewall üzerinde CIS denetimlerini tamamlamamız 3 hafta sürüyordu. AllConfig ile tek bir taramada kanıtlarıyla birlikte 12 dakikada denetime hazır hale geldik.",
      by: "Emre Yılmaz",
      role: "CISO",
      company: "Global Finans Grubu",
      imgSrc: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
      metricBadge: "%95 Zaman Tasarrufu",
    },
    {
      tempId: 1,
      testimonial: "Cisco ve Fortinet arasındaki politika uyuşmazlıkları ve insan hataları yüzünden yılda en az iki büyük kesinti yaşardık. Transpiler ve Dört Göz onayına geçtiğimizden beri kesinti sayımız sıfır.",
      by: "Marcus Vance",
      role: "VP of Network Engineering",
      company: "CloudScale Telecom",
      imgSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
      metricBadge: "Sıfır Kesinti",
    },
    {
      tempId: 2,
      testimonial: "Bellek içi Ağ İkizi (Network Twin) ve Yol Analizi sayesinde 'bu paket neden drop oluyor' sorusunu çözmek için saatlerce log kazıma devri bitti. Canlı graf üzerinde kök neden saniyeler içinde karşımızda.",
      by: "Selin Kaya",
      role: "Altyapı & Güvenlik Direktörü",
      company: "Mega Retail Altyapı",
      imgSrc: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
      metricBadge: "Anında Kök Neden Tespiti",
    },
    {
      tempId: 3,
      testimonial: "Tek bir platformdan hem L2/L3 topolojisini görmek hem de CVE açıklarının konfigürasyonda gerçekten aktif olup olmadığını filtrelemek güvenlik ekibimizin false-positive yükünü %80 azalttı.",
      by: "David Chen",
      role: "Head of SecOps",
      company: "Fintech Core Ltd.",
      imgSrc: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
      metricBadge: "%80 Daha Az Yanlış Alarm",
    },
  ],
};