export const SITE = {
  name: "LUMINYX",
  tagline: "One Ecosystem. Endless Opportunities.",
  description:
    "Luminyx is the premier enterprise ecosystem bridging education, talent, and mobility with the vibrant potential of the African continent.",
  url: "https://luminyx.com",
  email: "hello@luminyx.com",
  phone: "+254 700 000 000",
  whatsapp: "+251 11 000 000",
} as const;

export type NavLink = {
  label: string;
  href: string;
  description?: string;
};

export type NavItem = {
  label: string;
  href: string;
  children?: NavLink[];
};

export const NAV_LINKS: NavItem[] = [
  {
    label: "Ecosystem",
    href: "/ecosystem",
    children: [
      {
        label: "Talent",
        href: "/ecosystem/talent",
        description: "Connecting opportunity",
      },
      {
        label: "Mobility",
        href: "/ecosystem/mobility",
        description: "Explore East Africa",
      },
      {
        label: "Education",
        href: "/ecosystem/education",
        description: "Empowering the future",
      },
    ],
  },
  { label: "Africa", href: "/africa" },
  { label: "Partners", href: "/partners" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const FOOTER_LINKS = {
  company: [
    { label: "About Us", href: "/about" },
    { label: "Africa Strategy", href: "/africa" },
    { label: "Partners", href: "/partners" },
    { label: "Contact", href: "/contact" },
  ],
  ecosystem: [
    { label: "Talent Network", href: "/ecosystem/talent" },
    { label: "Mobility", href: "/ecosystem/mobility" },
    { label: "Education", href: "/ecosystem/education" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" },
    { label: "Sustainability", href: "#" },
  ],
};

export const STATS = [
  { value: "$2.5B+", label: "Capital Managed" },
  { value: "12", label: "Strategic Hubs" },
  { value: "850K", label: "Talent Network" },
  { value: "AI+", label: "Growth Engine" },
];

// Premium curated image sources from Unsplash
export const IMAGES = {
  africaGlobe:
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&auto=format&fit=crop&q=80",
  teamCollab:
    "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&auto=format&fit=crop&q=80",
  techCity:
    "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&auto=format&fit=crop&q=80",
  dashboard:
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&auto=format&fit=crop&q=80",
  nairobi:
    "https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=1200&auto=format&fit=crop&q=80",
  neural:
    "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1200&auto=format&fit=crop&q=80",
  handshake:
    "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1200&auto=format&fit=crop&q=80",
  ai: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&auto=format&fit=crop&q=80",
  servers:
    "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&auto=format&fit=crop&q=80",
  data: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1200&auto=format&fit=crop&q=80",
  graduation:
    "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&auto=format&fit=crop&q=80",
  classroom:
    "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=1200&auto=format&fit=crop&q=80",
  safari:
    "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1200&auto=format&fit=crop&q=80",
  zanzibar:
    "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?w=1200&auto=format&fit=crop&q=80",
  kilimanjaro:
    "https://images.unsplash.com/photo-1612278675615-7b093b07772d?w=1200&auto=format&fit=crop&q=80",
  masaiMara:
    "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1200&auto=format&fit=crop&q=80",
  jeep: "https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20?w=1200&auto=format&fit=crop&q=80",
  balloon:
    "https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?w=1200&auto=format&fit=crop&q=80",
  founder1:
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=80",
  founder2:
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80",
  founder3:
    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80",
  founder4:
    "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&auto=format&fit=crop&q=80",
  africaMap:
    "https://images.unsplash.com/photo-1589262804704-c5aa9e6def89?w=1200&auto=format&fit=crop&q=80",
  port: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=1200&auto=format&fit=crop&q=80",
  fintech:
    "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&auto=format&fit=crop&q=80",
  drone:
    "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=1200&auto=format&fit=crop&q=80",
  meeting:
    "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&auto=format&fit=crop&q=80",
  solar:
    "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&auto=format&fit=crop&q=80",
  serverRoom:
    "https://images.unsplash.com/photo-1597733336794-12d05021d510?w=1200&auto=format&fit=crop&q=80",
};
