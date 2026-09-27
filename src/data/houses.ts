export interface HouseDomain {
  number: string;
  name: string;
  description?: string;
}

export interface House {
  id: string;
  name: string;
  subName: string;
  image: string;
  theme: string;
  domains: HouseDomain[];
  crest: string;
  element: string;
  primaryColor: string;
  glowColor: string;
  accentBg: string;
  borderColor: string;
  motto: string;
  description: string;
  patronBeast: string;
  deanTitle: string;
  specialties: string[];
  relic: string;
  stats: {
    intensity: number;
    complexity: number;
    synergy: number;
  };
}

export const HOUSES: House[] = [
  {
    id: 'gryffindor',
    name: 'Gryffindor',
    subName: 'Courage & Impact',
    image: '/assets/house/Screenshot 2026-09-24 204307.png',
    theme: 'COURAGE & IMPACT',
    domains: [
      { number: '01', name: 'Healthcare' },
      { number: '02', name: 'Education' },
      { number: '03', name: 'Disaster Management' },
      { number: '04', name: 'Public Safety' }
    ],
    crest: 'flame',
    element: 'Courage / Autonomous Fire',
    primaryColor: '#DC2626',
    glowColor: 'rgba(220, 38, 38, 0.45)',
    accentBg: 'linear-gradient(135deg, rgba(220, 38, 38, 0.18) 0%, rgba(120, 20, 20, 0.05) 100%)',
    borderColor: 'rgba(220, 38, 38, 0.4)',
    motto: 'Fortitudo in Machina — Bravery to Forge Transformative Impact',
    description: 'The path of courage and impact. Gryffindor fellowships champion fearless technological breakthroughs to protect, heal, and elevate human society.',
    patronBeast: 'The Golden Lion of Silicon',
    deanTitle: 'High Magister of Bold Systems',
    specialties: ['Healthcare AI', 'Adaptive Education', 'Disaster Relief Swarms', 'Public Safety Tech'],
    relic: 'The Sword of Golden Logic',
    stats: {
      intensity: 98,
      complexity: 92,
      synergy: 95,
    }
  },
  {
    id: 'slytherin',
    name: 'Slytherin',
    subName: 'Strategy & Ambition',
    image: '/assets/house/Screenshot 2026-09-24 204316.png',
    theme: 'STRATEGY & AMBITION',
    domains: [
      { number: '01', name: 'FinTech' },
      { number: '02', name: 'Business' },
      { number: '03', name: 'E-Commerce' },
      { number: '04', name: 'Supply Chain' }
    ],
    crest: 'serpent',
    element: 'Strategy / Cryptic Wards',
    primaryColor: '#10B981',
    glowColor: 'rgba(16, 185, 129, 0.45)',
    accentBg: 'linear-gradient(135deg, rgba(16, 185, 129, 0.18) 0%, rgba(6, 95, 70, 0.05) 100%)',
    borderColor: 'rgba(16, 185, 129, 0.4)',
    motto: 'Astutia et Gloria — Strategic Mastery and Sovereign Ambition',
    description: 'The path of strategy and ambition. Slytherin masters craft sovereign architectures, market-dominating intelligence, and resilient economic supply chains.',
    patronBeast: 'The Emerald Serpent of Tensors',
    deanTitle: 'Archon of Strategic Security',
    specialties: ['Algorithmic FinTech', 'Enterprise Intelligence', 'E-Commerce Engines', 'Supply Chain Optimization'],
    relic: 'The Medallion of Sovereign Foresight',
    stats: {
      intensity: 95,
      complexity: 99,
      synergy: 89,
    }
  },
  {
    id: 'ravenclaw',
    name: 'Ravenclaw',
    subName: 'Intelligence & Innovation',
    image: '/assets/house/Screenshot 2026-09-24 204332.png',
    theme: 'INTELLIGENCE & INNOVATION',
    domains: [
      { number: '01', name: 'Space Technology' },
      { number: '02', name: 'Cybersecurity' },
      { number: '03', name: 'Robotics' },
      { number: '04', name: 'Smart Infrastructure' }
    ],
    crest: 'owl',
    element: 'Wisdom / Cognitive Aether',
    primaryColor: '#38BDF8',
    glowColor: 'rgba(56, 189, 248, 0.45)',
    accentBg: 'linear-gradient(135deg, rgba(56, 189, 248, 0.18) 0%, rgba(14, 116, 144, 0.05) 100%)',
    borderColor: 'rgba(56, 189, 248, 0.4)',
    motto: 'Mens Sine Termino — Wit Beyond Measure is the Greatest Treasure',
    description: 'The path of intelligence and innovation. Ravenclaw scholars expand human frontiers across deep space telemetry, cybersecurity wards, autonomous robotics, and smart infrastructure.',
    patronBeast: 'The Bronze Eagle of Context',
    deanTitle: 'High Curator of Neural Grimoires',
    specialties: ['Space Intelligence', 'Zero-Trust Cyber Defense', 'Cognitive Robotics', 'Next-Gen Infrastructure'],
    relic: 'The Diadem of Infinite Memory',
    stats: {
      intensity: 90,
      complexity: 98,
      synergy: 94,
    }
  },
  {
    id: 'hufflepuff',
    name: 'Hufflepuff',
    subName: 'Community & Sustainability',
    image: '/assets/house/Screenshot 2026-09-24 204325.png',
    theme: 'COMMUNITY & SUSTAINABILITY',
    domains: [
      { number: '01', name: 'Agriculture' },
      { number: '02', name: 'Climate Tech' },
      { number: '03', name: 'Smart Cities' },
      { number: '04', name: 'Accessibility' }
    ],
    crest: 'dragon',
    element: 'Perception / Earth Stewardship',
    primaryColor: '#EAB308',
    glowColor: 'rgba(234, 179, 8, 0.45)',
    accentBg: 'linear-gradient(135deg, rgba(234, 179, 8, 0.18) 0%, rgba(161, 98, 7, 0.05) 100%)',
    borderColor: 'rgba(234, 179, 8, 0.4)',
    motto: 'Constantia et Terra — Steadfast in Loyalty, Devoted to Earth',
    description: 'The path of community and sustainability. Hufflepuff pioneers unite civic spirit, planetary stewardship, smart cities, and inclusive accessible technologies for all.',
    patronBeast: 'The Golden Badger of Terra',
    deanTitle: 'Warden of Environmental & Civic AI',
    specialties: ['Agritech AI', 'Climate Intelligence', 'Smart Resilient Cities', 'Universal Accessibility'],
    relic: 'The Chalice of Perpetual Abundance',
    stats: {
      intensity: 91,
      complexity: 93,
      synergy: 99,
    }
  }
];
