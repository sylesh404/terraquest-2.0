import React, { useState } from 'react';
import { BookOpen, Search, Filter } from 'lucide-react';
import { ScrollDocument, ArchiveRecord } from './ScrollDocument';
import { sounds } from '../../utils/soundEffects';

export const ARCHIVE_RECORDS: ArchiveRecord[] = [
  {
    id: 'rec-1',
    category: 'Spellbook (Problem Statements)',
    title: 'The Epistemic Oracle: Zero-Hallucination Agentic RAG',
    archivalCode: 'LIB-081',
    summary: 'Build a multi-agent fact-checking and knowledge-graph grounding engine that verifies citations before generating responses for high-stakes healthcare or legal decisions.',
    fullDecree: 'Modern Large Language Models suffer from stochastic fabrications. The Department of Artificial Intelligence & Machine Learning summons enchanters to construct a dual-agent verification system: an Inquirer Agent that retrieves evidence from structured knowledge graphs and an Inquisitor Agent that enforces semantic truth bounds.',
    keyDirectives: [
      'Must connect with a hybrid Vector + Graph database (e.g. Neo4j or NetworkX)',
      'Sub-2-second latency for question verification',
      'Provide visual trace of reasoning steps and citation provenance',
      'Dockerized deployment script with mock datasets provided'
    ],
    relicLinkText: 'Clone Starter Template on GitHub',
    relicLinkUrl: 'https://github.com'
  },
  {
    id: 'rec-2',
    category: 'Spellbook (Problem Statements)',
    title: 'Swarm Sentinels: Autonomous Field Exploration & Mesh AI',
    archivalCode: 'PYR-404',
    summary: 'Develop a decentralized swarm coordination algorithm for edge devices or drones conducting cooperative search-and-rescue in disaster zones lacking cellular network.',
    fullDecree: 'When catastrophic quakes disrupt physical communication towers, autonomous units must self-organize without centralized servers. Fellowships must create a lightweight reinforcement learning or consensus-based swarm protocol operating on edge micro-processors.',
    keyDirectives: [
      'Decentralized peer-to-peer communication simulator',
      'Adaptive obstacle avoidance and collaborative search grid distribution',
      'Minimal power consumption benchmarked on edge compute'
    ],
    relicLinkText: 'Inspect Swarm Simulation Environment',
    relicLinkUrl: 'https://github.com'
  },
  {
    id: 'rec-3',
    category: 'Spellbook (Problem Statements)',
    title: 'Oculus Terrae: Near-Real-Time Satellite Wildfire Forecasting',
    archivalCode: 'GEO-919',
    summary: 'Harness multispectral satellite imagery (Sentinel-2 / Landsat) to detect early wildfire thermal anomalies and predict burn trajectories over 24 hours.',
    fullDecree: 'Planetary health demands watchful eyes from the heavens. Utilizing short-wave infrared and thermal spectral bands, construct an automated computer vision pipeline that flags emerging hotspots and simulates wind-driven fire spread.',
    keyDirectives: [
      'Computer vision segmentation model with F1 score >= 0.88',
      'Temporal fire spread simulation using wind and humidity covariates',
      'Interactive web dashboard rendering wildfire perimeters on 3D globe'
    ],
    relicLinkText: 'Access Satellite Telemetry Portal',
    relicLinkUrl: 'https://github.com'
  },
  {
    id: 'rec-4',
    category: 'Decree (Evaluation Rubric)',
    title: 'The Imperial Decree of Evaluation & Judging Rubric',
    archivalCode: 'DEC-001',
    summary: 'The universal law by which all prototypes, manuscripts, and fellowships shall be measured during the Grand Conclave.',
    fullDecree: 'Every project must balance mathematical rigor, real-world consequence, and flawless execution. Submissions missing live interactive demos or functional code will be severely penalized by the Council.',
    keyDirectives: [
      'Innovation & Algorithmic Originality: 25%',
      'Technical Architecture & ML Rigor: 30%',
      'Practical Utility & Real-World Impact: 25%',
      'Design, Aesthetics & Pitch Presentation: 20%'
    ],
    relicLinkText: 'Download Full Rubric PDF',
    relicLinkUrl: '#'
  },
  {
    id: 'rec-5',
    category: 'Grimoire (Starter Kits)',
    title: 'TerraQuest Official PyTorch & FastAPI Boilerplate',
    archivalCode: 'GRI-101',
    summary: 'Pre-configured repository with GPU acceleration containers, HuggingFace transformers integration, WebSocket streaming, and a Next.js / Vite UI scaffold.',
    fullDecree: 'Skip the boilerplate incantations. Start hacking immediately with hot-reloading frontend, pre-built vector DB connections, and standardized API routes.',
    keyDirectives: [
      'One-command setup via Docker Compose',
      'Built-in API authentication & CORS handling',
      'Pre-loaded with sample synthetic datasets'
    ],
    relicLinkText: 'Fork Starter Repository',
    relicLinkUrl: 'https://github.com'
  },
  {
    id: 'rec-6',
    category: 'Enchanted Datasets',
    title: 'The Great Multimodal AI/ML Corpus',
    archivalCode: 'DAT-777',
    summary: 'A 50GB curated collection of annotated satellite imagery, biomedical audio, legal statutes, and time-series sensor feeds hosted on high-speed CDN.',
    fullDecree: 'Provisioned exclusively for participants of TerraQuest 2.0. High-throughput S3 mirrors available throughout the 36-hour hackathon.',
    keyDirectives: [
      'Pre-split training and validation partitions',
      'Parquet and GeoTIFF formats for rapid memory mapping'
    ],
    relicLinkText: 'Request Dataset Access Token',
    relicLinkUrl: '#'
  }
];

export const AncientArchives: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    'All',
    'Spellbook (Problem Statements)',
    'Grimoire (Starter Kits)',
    'Decree (Evaluation Rubric)',
    'Enchanted Datasets'
  ];

  const filteredRecords = ARCHIVE_RECORDS.filter((rec) => {
    const matchesCategory =
      selectedCategory === 'All' || rec.category === selectedCategory;
    const matchesSearch =
      rec.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      rec.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      rec.archivalCode.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="archives" className="relative py-24 sm:py-32 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#F5DEB3] text-xs font-cinzel tracking-widest uppercase mb-4">
            <BookOpen className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>The Chamber of Forbidden Knowledge</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#FFF5D0] via-[#D4AF37] to-[#B8860B] mb-6">
            THE ANCIENT ARCHIVES
          </h2>
          <p className="font-cormorant text-xl text-neutral-300 italic mb-8">
            &ldquo;Unroll the scrolls of wisdom. Herein lie the official challenge tracks, evaluation laws, starter grimoires, and sacred datasets.&rdquo;
          </p>

          {/* Search and Category Filters */}
          <div className="flex flex-col sm:flex-row items-center gap-4 max-w-2xl mx-auto">
            {/* Search Input */}
            <div className="relative w-full">
              <Search className="w-4 h-4 text-[#D4AF37] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search codexes, problem statements, datasets..."
                className="w-full bg-[#0D121C] border border-[#D4AF37]/30 rounded-lg pl-10 pr-4 py-2.5 text-xs sm:text-sm text-neutral-200 placeholder:text-neutral-500 focus:outline-none focus:border-[#D4AF37] font-sans"
              />
            </div>
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  sounds.playWandSpark(800);
                  setSelectedCategory(cat);
                }}
                className={`text-[11px] font-cinzel uppercase tracking-wider px-3 py-1.5 rounded-full border transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#D4AF37] text-black border-[#D4AF37] font-bold shadow-[0_0_12px_rgba(212,175,55,0.4)]'
                    : 'bg-[#0E1320] text-neutral-400 border-white/10 hover:border-white/30'
                }`}
              >
                {cat.split('(')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Scrolls Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRecords.map((record) => (
            <ScrollDocument key={record.id} record={record} />
          ))}
        </div>
      </div>
    </section>
  );
};
