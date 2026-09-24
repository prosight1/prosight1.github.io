import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/layout/Header";
import { FunnelModal } from "@/components/landing/FunnelModal";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3003"),
  title: "AllConfig | Yeni Nesil Ağ Güvenlik Politikası Yönetimi (NSPM) & Dijital İkiz",
  description: "Cisco, Fortinet, Palo Alto ve Huawei altyapınızda çok satıcılı kural derleme, canlı bellek içi ağ ikizi (Network Twin), otomatik uyumluluk denetimi ve sıfır kesinti.",
  keywords: ["NSPM", "Network Twin", "ağ güvenliği", "çok satıcılı ağ", "firewall otomasyonu", "AllConfig"],
  openGraph: {
    title: "AllConfig | NSPM & Dijital İkiz",
    description: "Çok satıcılı ağ güvenliğini, canlı Network Twin ve otomatik politika yönetimiyle merkezileştirin.",
    type: "website",
    locale: "tr_TR",
    url: "/",
    siteName: "AllConfig",
    images: [{ url: "/og-image.svg", width: 1200, height: 630, alt: "AllConfig NSPM ve Network Twin" }],
  },
  twitter: { card: "summary_large_image", title: "AllConfig | NSPM & Dijital İkiz", description: "Çok satıcılı ağ güvenliği için canlı kontrol katmanı.", images: ["/og-image.svg"] },
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="tr" suppressHydrationWarning className={`${inter.variable} ${jetBrainsMono.variable}`}>
      <body className="min-h-screen antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Header />
          <FunnelModal />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
