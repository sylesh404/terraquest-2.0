export interface Domain {
  id: string;
  houseId: string;
  name: string;
  title: string;
  tagline: string;
  description: string;
  glyph: string;
  challengeThemes: {
    title: string;
    description: string;
    skills: string[];
  }[];
  bounty: string;
  level: string;
}

export const DOMAINS: Domain[] = [
  {
    id: 'agentic-swarms',
    houseId: 'gryffindor',
    name: 'Autonomous Agentic Swarms & Impact',
    title: 'The Crucible of Bold Courage',
    tagline: 'Empower autonomous agent ecosystems that plan, reason, and self-correct in physical & digital realms.',
    description: 'Banish brittle scripts to the void. Construct collaborative multi-agent architectures that orchestrate tools, deliberate through consensus protocols, and execute mission-critical tasks autonomously.',
    glyph: 'FlameSigil',
    bounty: '₹40,000 + Incubation Grant',
    level: 'Grand Sorcerer (Advanced)',
    challengeThemes: [
      {
        title: 'Multi-Agent DevOps & Self-Healing Citadels',
        description: 'Agents that monitor distributed cloud infrastructures, detect anomalies, synthesize fixes, and verify code deploys autonomously.',
        skills: ['LangGraph', 'AutoGPT / CrewAI', 'Docker', 'Distributed Systems']
      },
      {
        title: 'Autonomous Field Robotics & Drone Swarms',
        description: 'Decentralized drone swarms conducting collaborative exploration, disaster search-and-rescue, or precision farming.',
        skills: ['ROS 2', 'Reinforcement Learning', 'Edge AI', 'Pathfinding Algorithms']
      },
      {
        title: 'Personal Cognitive Familiars & OS Agents',
        description: 'Cross-application autonomous agents with computer vision GUI comprehension executing intricate human workflows.',
        skills: ['VLM UI Grounding', 'WebSockets', 'Local LLMs', 'Browser Automation']
      }
    ]
  },
  {
    id: 'genai-reasoning',
    houseId: 'ravenclaw',
    name: 'Generative Synthesis & Deep Cognition',
    title: 'The Astral Library of Infinite Context',
    tagline: 'Harness foundational generative magic to reshape education, law, code synthesis, and artistic manifestation.',
    description: 'Step into the astral library. Craft multimodal systems that transcend hallucination through hybrid neuro-symbolic reasoning, graph-retrieval, and cross-sensory synthesis.',
    glyph: 'EyeSigil',
    bounty: '₹40,000 + Cloud Credits',
    level: 'High Conjurer (All Ranks)',
    challengeThemes: [
      {
        title: 'GraphRAG & Epistemic Verification Engines',
        description: 'Fact-anchored knowledge graph retrieval eliminating hallucination in legal, scientific, or medical domains.',
        skills: ['Neo4j', 'LlamaIndex', 'Vector DBs', 'Embedding Calibration']
      },
      {
        title: 'Multimodal Audio-Visual Grimoires',
        description: 'Real-time bidirectional speech-to-video assistants with emotional inflection and contextual memory.',
        skills: ['Whisper', 'WebRTC', 'FastAPI', 'Diffusion Models']
      },
      {
        title: 'Synthetic Data Alchemy & Model Distillation',
        description: 'Generating provably clean synthetic datasets to train lightweight, hyper-efficient local small language models (SLMs).',
        skills: ['LoRA / QLoRA', 'Data Filtering', 'PyTorch', 'Distillation']
      }
    ]
  },
  {
    id: 'spatial-vision',
    houseId: 'hufflepuff',
    name: 'Earth Intelligence & Civic Sustainability',
    title: 'The Emerald Observatory of Terra',
    tagline: 'Perceive the world through hyper-spectral satellites, 3D neural reconstructions, and microscopic biology.',
    description: 'From planetary climate shifts to cellular oncology, train the mechanical eyes of TerraQuest to decode spatial geometry, infrared telemetry, and real-time video streams.',
    glyph: 'TreeSigil',
    bounty: '₹40,000 + Hardware Kits',
    level: 'Arch-Cartographer (Intermediate to Advanced)',
    challengeThemes: [
      {
        title: 'Satellite Wildfire & Flood Divination',
        description: 'Near-real-time satellite telemetry processing for disaster forecasting and damage perimeter estimation.',
        skills: ['Sentinel-2', 'YOLOv10', 'GDAL / GeoPandas', 'Segmentation']
      },
      {
        title: '3D Neural Radiance & Gaussian Cities',
        description: 'Convert ordinary street footage into navigable 3D Gaussian Splats for smart-city digital twins.',
        skills: ['Gaussian Splatting', 'NeRF', 'Three.js / WebGL', 'Point Clouds']
      },
      {
        title: 'Cellular Micro-Vision for Pathology',
        description: 'Zero-shot cell morphology segmentation assisting pathologists in early-stage oncology detection.',
        skills: ['SAM 2', 'Medical Imaging (DICOM)', 'PyTorch', 'Contrastive Learning']
      }
    ]
  },
  {
    id: 'chrono-security',
    houseId: 'slytherin',
    name: 'Temporal Analytics & Strategic Defense',
    title: 'The Vault of Strategy & Cryptic Wards',
    tagline: 'Guard digital borders against adversarial attacks, forecast market dynamics, and navigate quantum realms.',
    description: 'Venture into the shifting currents of time. Build predictive models that peer into economic futures, neutralize adversarial prompt injection, and withstand quantum cryptanalysis.',
    glyph: 'HourglassSigil',
    bounty: '₹40,000 + Security Fellowship',
    level: 'Master of Wards (Advanced)',
    challengeThemes: [
      {
        title: 'Adversarial Jailbreak Shields & Red-Teaming',
        description: 'Automated red-teaming agents that stress-test LLM security filters and real-time firewall warding.',
        skills: ['Adversarial ML', 'Prompt Defense', 'FastAPI', 'Cyber Telemetry']
      },
      {
        title: 'Quantum-Resistant Predictive Market Forecasting',
        description: 'Temporal transformers predicting supply-chain bottlenecks and volatile commodity shifts with uncertainty bounds.',
        skills: ['Temporal Fusion Transformers', 'Mamba State-Space', 'Pandas', 'Backtesting']
      },
      {
        title: 'Deepfake & Biometric Provenance Wards',
        description: 'Cryptographic watermarking and neural artifact detection verifying the provenance of synthetic media.',
        skills: ['Fourier Transform Analysis', 'Audio Forensics', 'Zero-Knowledge Proofs']
      }
    ]
  },
  {
    id: 'open-sorcery',
    houseId: 'all',
    name: 'The Wild Sorcery (Open Innovation)',
    title: 'The Chamber of Unbound Transmutation',
    tagline: 'Have an audacious AI breakthrough that defies categorization? Bring your visionary grimoire to life.',
    description: 'No boundary can constrain true curiosity. If your AI/ML creation merges multiple disciplines — from music generation to synthetic biology to neural brain-computer interfaces — forge it here.',
    glyph: 'StarSigil',
    bounty: '₹30,000 + Special Wildcard Award',
    level: 'Wild Mage (Open to All)',
    challengeThemes: [
      {
        title: 'Neurotech & BCI Signal Translation',
        description: 'Decoding EEG sensor signals into intent, speech synthesis, or robotic limb articulation.',
        skills: ['Signal Processing', 'Wavelet Transforms', 'PyTorch', 'Hardware Interfacing']
      },
      {
        title: 'AI for Heritage Preservation & Ancient Scripts',
        description: 'Deciphering eroded stone inscriptions, lost dialects, and restoring antique architectural artifacts.',
        skills: ['OCR / LayoutLM', 'Style Transfer', 'Diffusion Inpainting', 'NLP']
      }
    ]
  }
];
