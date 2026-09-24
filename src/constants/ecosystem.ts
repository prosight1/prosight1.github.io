export interface EcosystemIcon {
  name: string;
  src: string;
  angle: number;
}

export interface EcosystemOrbit {
  size: string;
  duration: number;
  icons: EcosystemIcon[];
}

export interface VendorMatrixItem {
  vendor: string;
  models: string;
  l2l3Topology: boolean;
  configBackup: boolean;
  pathFinder: boolean;
  ruleTranspiler: boolean;
  complianceAudit: boolean;
}

export const ECOSYSTEM_DATA: {
  badge: string;
  title: string;
  description: string;
  ctaLabel: string;
  demoEventName: string;
  orbits: EcosystemOrbit[];
  matrix: VendorMatrixItem[];
} = {
  badge: "ÇOK SATICILI EKOSİSTEM",
  title: "Tüm Ağ ve Güvenlik Altyapınız Tek Merkezde",
  description: "Marka bağımlılığını (Vendor Lock-in) ortadan kaldırın. AllConfig, lider ağ ve güvenlik duvarı üreticilerini standart bir kontrol katmanında birleştirir.",
  ctaLabel: "Altyapınızdaki Cihazları Analiz Edin",
  demoEventName: "allconfig:open-demo",
  orbits: [
    {
      size: "size-52 md:size-72",
      duration: 20,
      icons: [
        { name: "Cisco", src: "https://cdn.simpleicons.org/cisco/049fd9", angle: -60 },
        { name: "Fortinet", src: "https://cdn.simpleicons.org/fortinet/ee3124", angle: 0 },
        { name: "Palo Alto Networks", src: "https://cdn.simpleicons.org/paloaltonetworks/fa5821", angle: 60 },
      ],
    },
    {
      size: "size-72 md:size-[22rem]",
      duration: 26,
      icons: [
        { name: "Huawei", src: "https://cdn.simpleicons.org/huawei/cf0a2c", angle: -90 },
        { name: "Juniper Networks", src: "https://cdn.simpleicons.org/junipernetworks/5b6770", angle: 45 },
      ],
    },
    {
      size: "size-[22rem] md:size-[26.5rem]",
      duration: 32,
      icons: [
        { name: "Docker", src: "https://cdn.simpleicons.org/docker/2496ed", angle: -60 },
        { name: "Slack", src: "https://cdn.simpleicons.org/slack/4a154b", angle: 0 },
        { name: "PostgreSQL", src: "https://cdn.simpleicons.org/postgresql/4169e1", angle: 60 },
      ],
    },
  ],
  matrix: [
    { vendor: "Cisco IOS / IOS-XE / NX-OS", models: "Catalyst 2960/3850/9300, Nexus 9K", l2l3Topology: true, configBackup: true, pathFinder: true, ruleTranspiler: true, complianceAudit: true },
    { vendor: "Fortinet FortiOS", models: "FortiGate 60F - 600E Serisi", l2l3Topology: true, configBackup: true, pathFinder: true, ruleTranspiler: true, complianceAudit: true },
    { vendor: "Palo Alto PAN-OS", models: "PA-220, PA-800, PA-3200, VM-Series", l2l3Topology: true, configBackup: true, pathFinder: true, ruleTranspiler: true, complianceAudit: true },
    { vendor: "Huawei VRP", models: "CloudEngine 6800, S5700 Serisi", l2l3Topology: true, configBackup: true, pathFinder: true, ruleTranspiler: false, complianceAudit: true },
  ],
};