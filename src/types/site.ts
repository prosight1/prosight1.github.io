export interface FeatureItem {
  title: string;
  description: string;
}

export interface SiteContent {
  eyebrow: string;
  title: string;
  description: string;
  primaryAction: string;
  secondaryAction: string;
  features: FeatureItem[];
}