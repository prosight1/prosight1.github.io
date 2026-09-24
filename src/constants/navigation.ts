export interface NavItem {
  id: string;
  title: string;
  href: string;
  iconName: string;
}

export const DOCK_NAVIGATION_ITEMS: NavItem[] = [
  { id: "hero", title: "Genel Bakış", href: "#hero", iconName: "Home" },
  { id: "features", title: "Ağ İkizi & NSPM", href: "#features", iconName: "Cpu" },
  { id: "comparison", title: "Öncesi / Sonrası", href: "#comparison", iconName: "GitCompare" },
  { id: "ecosystem", title: "Ekosistem", href: "#ecosystem", iconName: "Network" },
  { id: "testimonials", title: "Referanslar", href: "#testimonials", iconName: "MessageSquare" },
  { id: "demo", title: "Demo Al", href: "#demo-cta", iconName: "Sparkles" },
];

export const HEADER_CONTENT = {
  brand: "ALLCONFIG",
  badge: "NSPM Platform",
  demoAction: "Demo Talep Et",
  languages: ["EN", "TR"],
} as const;