export interface FAQItem {
  id: string;
  category: 'General' | 'Eligibility' | 'Houses & Domains' | 'Logistics' | 'Submissions';
  question: string;
  answer: string;
  magicalTip?: string;
}

export const FAQ_DATA: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'General',
    question: 'What is TerraQuest 2.0 and who can participate?',
    answer: 'TerraQuest 2.0 is the premier national-level AI/ML hackathon organized by the Department of Artificial Intelligence & Machine Learning. Any student enrolled in an undergraduate, postgraduate, or research program across engineering, sciences, and technology is eligible to enter the quest.',
    magicalTip: 'Even novice sorcerers have special award categories reserved for them!'
  },
  {
    id: 'faq-2',
    category: 'Eligibility',
    question: 'What is the required team size to form a fellowship?',
    answer: 'Fellowships must consist of 2 to 4 members. Cross-departmental and inter-college squads are warmly encouraged, bringing together diverse talents in software engineering, mathematics, UI/UX design, and AI research.',
    magicalTip: 'A balanced squad often has an enchanter of algorithms, a craftsman of interfaces, and a master of deployments.'
  },
  {
    id: 'faq-3',
    category: 'Houses & Domains',
    question: 'How do the Four Houses work? Do I have to stay in one House?',
    answer: 'Each House represents a core frontier of AI/ML: Pyrosync (Autonomous Swarms), Aethermind (GenAI & LLMs), Terraspectra (Computer Vision & Geo-Spatial), and Chronoveil (Predictive ML & Security). You will pledge allegiance to a primary House during registration, but cross-disciplinary hybrid projects can also contend for the Wild Sorcery track.',
    magicalTip: 'Explore the House Sorting test on the website to discover which House matches your spirit.'
  },
  {
    id: 'faq-4',
    category: 'Logistics',
    question: 'Is there a registration fee to enter the gates?',
    answer: 'No. Entry to TerraQuest 2.0 is completely free of charge. Shortlisted squads receive complimentary meals, high-speed Wi-Fi access, cloud compute credits, hacking kits, midnight snacks, and dormitory rest zones.',
    magicalTip: 'The Academy believes knowledge and creative power should never be locked behind a paywall.'
  },
  {
    id: 'faq-5',
    category: 'Submissions',
    question: 'Can we build upon pre-existing projects or codebases?',
    answer: 'No. All lines of code, training pipelines, and applications must be authored during the official 36-hour hackathon timeframe. You are permitted and encouraged to use open-source foundation models, public APIs, libraries, and boilerplate templates, provided they are cited in your final manuscript.',
    magicalTip: 'The Council conducts strict git history audits to verify that the incantations were forged during the quest.'
  },
  {
    id: 'faq-6',
    category: 'Logistics',
    question: 'What should we pack in our adventurer satchel for the hackathon?',
    answer: 'Bring your laptop, chargers, power strips, valid college ID cards, any specialized hardware (e.g. Raspberry Pis, microcontrollers, drones if hacking on hardware), and comfortable attire for the 36-hour quest. Blankets and eye masks are recommended for rest breaks.',
    magicalTip: 'Extra long charging cords are legendary artifacts during intense hacking battles.'
  },
  {
    id: 'faq-7',
    category: 'Houses & Domains',
    question: 'Will mentors be available during the midnight hours?',
    answer: 'Yes! Roving Mentors and Grand Masters from prominent AI research labs and tech firms will circulate through the cloisters throughout day and night to provide feedback, debug stubborn issues, and refine your pitch.',
    magicalTip: 'Seek them out early before the midnight review to iron out your system architecture.'
  }
];
