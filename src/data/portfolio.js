// ─── Personal Info ────────────────────────────────────────────────────────────
export const personal = {
  name: 'Imad ET-TABBAA',
  firstName: 'Imad',
  lastName: 'ET-TABBAA',
  title: 'Full-Stack Developer | AI & ML Engineer',
  email: 'ettabbaaimad@gmail.com',
  phone: '+212 678353398',
  location: 'Casablanca, Maroc',
  website: 'https://imadet.site',
  linkedin: 'https://linkedin.com/in/IMAD-ET-Tabbaa',
  github: 'https://github.com/imadetabaa63',
  cv: '/cv-imad.pdf',
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
export const hero = {
  roles: ['Full-Stack Developer', 'AI & ML Engineer', 'Automation Specialist'],
  terminalLines: [
    { prompt: '$', command: 'whoami', output: 'Imad ET-TABBAA  //  Full-Stack & AI Engineer' },
    { prompt: '$', command: 'ls skills/', output: 'React  FastAPI  Python  YOLOv8  n8n  Docker' },
    { prompt: '$', command: 'git status', output: 'Open to opportunities  ✓' },
    { prompt: '$', command: 'npm run deploy', output: 'Portfolio deployed successfully  🚀' },
  ],
}

// ─── About ────────────────────────────────────────────────────────────────────
export const about = {
  paragraphs: [
    "Développeur Full-Stack et ingénieur IA/ML passionné par la création d'applications intelligentes qui résolvent des problèmes concrets. Je combine expertise technique et approche orientée produit pour livrer des solutions performantes.",
    "Spécialisé dans les pipelines de vision par ordinateur (YOLOv8, DeepFace), les workflows d'automatisation n8n, les APIs FastAPI haute performance et les architectures LangChain/RAG. J'aime construire des systèmes qui fonctionnent vraiment.",
    "Actuellement en formation qualifiante IA (mode dual) à Casablanca, je développe des projets concrets qui combinent ML, automation et développement web moderne.",
  ],
  stats: [
    { value: '100%', label: 'Précision', sub: 'Face Access biométrie' },
    { value: '3+', label: 'Projets AI', sub: 'En production' },
    { value: '2+', label: 'Ans Dev', sub: 'Full-Stack & IA' },
    { value: '10+', label: 'Technologies', sub: 'Maîtrisées' },
  ],
}

// ─── Skills ───────────────────────────────────────────────────────────────────
export const skillCategories = [
  {
    id: 1,
    title: 'Frontend',
    accentColor: '#00d4aa',
    skills: [
      { name: 'React.js',     icon: 'react',       type: 'devicon' },
      { name: 'JavaScript',   icon: 'javascript',  type: 'devicon' },
      { name: 'Tailwind CSS', icon: 'tailwindcss', type: 'devicon' },
      { name: 'HTML5',        icon: 'html5',       type: 'devicon' },
      { name: 'CSS3',         icon: 'css3',        type: 'devicon' },
      { name: 'Sass',         icon: 'sass',        type: 'devicon' },
    ],
  },
  {
    id: 2,
    title: 'Backend',
    accentColor: '#7c3aed',
    skills: [
      { name: 'Python',  icon: 'python',  type: 'devicon' },
      { name: 'FastAPI', icon: 'fastapi', type: 'devicon' },
      { name: 'Node.js', icon: 'nodejs',  type: 'devicon' },
      { name: 'Express', icon: 'express', type: 'devicon', white: true },
      { name: 'Flask',   icon: 'flask',   type: 'devicon', white: true },
      { name: 'JWT',     icon: '🔐',      type: 'emoji' },
    ],
  },
  {
    id: 3,
    title: 'Data & IA',
    accentColor: '#f59e0b',
    skills: [
      { name: 'NumPy',        icon: 'numpy',  type: 'devicon' },
      { name: 'Pandas',       icon: 'pandas', type: 'devicon' },
      { name: 'OpenCV',       icon: 'opencv', type: 'devicon' },
      { name: 'Scikit-learn', icon: '🧠',     type: 'emoji' },
      { name: 'YOLOv8',       icon: '👁️',     type: 'emoji' },
      { name: 'LangChain',    icon: '🔗',     type: 'emoji' },
      { name: 'Hugging Face', icon: '🤗',     type: 'emoji' },
      { name: 'n8n',          icon: '⚡',     type: 'emoji' },
    ],
  },
  {
    id: 4,
    title: 'Databases & DevOps',
    accentColor: '#f87171',
    skills: [
      { name: 'PostgreSQL', icon: 'postgresql', type: 'devicon' },
      { name: 'MySQL',      icon: 'mysql',      type: 'devicon' },
      { name: 'Supabase',   icon: 'supabase',   type: 'devicon' },
      { name: 'Docker',     icon: 'docker',     type: 'devicon' },
      { name: 'Git',        icon: 'git',        type: 'devicon' },
      { name: 'GitHub',     icon: 'github',     type: 'devicon', white: true },
    ],
  },
]

// ─── Projects ─────────────────────────────────────────────────────────────────
export const projects = [
  {
    id: 1,
    title: 'Face Access',
    subtitle: 'Système de présence biométrique',
    description:
      'Système de présence par reconnaissance faciale en temps réel. Pipeline YOLOv8 → FaceNet 128D via DeepFace → distance euclidienne (seuil 0.85). Backend FastAPI avec 12 endpoints, PostgreSQL, containerisé Docker.',
    highlights: ['Précision 100%', '12 endpoints API', 'Temps réel', 'Docker deployé'],
    stack: ['Python', 'FastAPI', 'YOLOv8', 'DeepFace', 'FaceNet', 'PostgreSQL', 'Docker', 'React 19'],
    accent: '#00d4aa',
    github: 'https://github.com/imadetabaa63',
    live: null,
    category: 'AI / Computer Vision',
  },
  {
    id: 2,
    title: 'API Classification Crédit',
    subtitle: 'Prédiction accord/refus de crédit',
    description:
      'API REST prédisant accord ou refus de crédit bancaire avec score de confiance. Pipeline ML : preprocessing → encodage → RandomForest → ~90% accuracy. Interface claire et documentée.',
    highlights: ['~90% accuracy', 'Score de confiance', 'API REST', 'Scikit-learn'],
    stack: ['Python', 'Scikit-learn', 'Flask', 'Pandas', 'RandomForest'],
    accent: '#7c3aed',
    github: 'https://github.com/imadetabaa63',
    live: null,
    category: 'Machine Learning',
  },
  {
    id: 3,
    title: 'Ebook Store',
    subtitle: 'E-commerce livres numériques',
    description:
      'Plateforme e-commerce complète dédiée à la vente de livres numériques. Authentification, panier, gestion commandes, tableau de bord admin, paiement intégré.',
    highlights: ['Auth complète', 'Panier & commandes', 'Admin dashboard', 'REST API'],
    stack: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL', 'REST API'],
    accent: '#f59e0b',
    github: 'https://github.com/imadetabaa63',
    live: null,
    category: 'Full-Stack Web',
  },
  {
    id: 4,
    title: 'AI Sales Agent',
    subtitle: 'Agent IA de prospection (Share\'In)',
    description:
      'Agent IA de prospection automatisée qui recherche, filtre et génère des leads qualifiés depuis Google Maps et le web. Intégration Apify pour le scraping, stockage PostgreSQL.',
    highlights: ['Leads automatisés', 'Google Maps API', 'Filtrage IA', 'PostgreSQL'],
    stack: ['n8n', 'JavaScript', 'PostgreSQL', 'Apify', 'Google APIs'],
    accent: '#00d4aa',
    github: null,
    live: null,
    category: 'Automatisation',
  },
  {
    id: 5,
    title: 'Automatisation Fiches de Paie',
    subtitle: 'Envoi automatique WhatsApp',
    description:
      'Système automatisé d\'envoi de fiches de paie PDF aux employés via WhatsApp. Intégration Google Drive pour les PDFs, Gmail API pour les emails, Evolution API pour WhatsApp.',
    highlights: ['WhatsApp PDF', 'Google Drive', 'Zero intervention', 'Multi-canal'],
    stack: ['n8n', 'Evolution API', 'Google Drive', 'Gmail API'],
    accent: '#7c3aed',
    github: null,
    live: null,
    category: 'Automatisation',
  },
]

// ─── Experience ───────────────────────────────────────────────────────────────
export const experiences = [
  {
    id: 1,
    role: 'Web Developer & Automation Specialist',
    company: 'Share\'In Startup Studio',
    location: 'Casablanca, Maroc',
    period: 'Oct. 2025 — Présent',
    type: 'CDI',
    current: true,
    accent: '#00d4aa',
    bullets: [
      'Développement d\'un AI Sales Agent de prospection automatisée (Google Maps, Apify, n8n)',
      'Automatisation de l\'envoi de fiches de paie PDF via WhatsApp (Evolution API + Google Drive)',
      'Mise en place d\'un système CRM avec emailing automatisé et suivi leads',
      'Architecture et déploiement de workflows n8n complexes multi-services',
    ],
    stack: ['n8n', 'JavaScript', 'PostgreSQL', 'Google APIs', 'Gmail API', 'Evolution API', 'Apify'],
  },
  {
    id: 2,
    role: 'Stage Technicien Informatique',
    company: 'Société de Transport',
    location: 'Kénitra, Maroc',
    period: 'Juin 2022',
    type: 'Stage (1 mois)',
    current: false,
    accent: '#7c3aed',
    bullets: [
      'Traitement et analyse de données Excel pour la gestion logistique',
      'Création de présentations PowerPoint pour la direction',
      'Support technique et maintenance du parc informatique',
    ],
    stack: ['Excel', 'PowerPoint', 'Support IT'],
  },
]

// ─── Education ────────────────────────────────────────────────────────────────
export const education = [
  {
    id: 1,
    degree: 'Formation Qualifiante IA (mode Dual)',
    institution: 'Centre des TPE Solidaires',
    location: 'Casablanca',
    period: 'Août 2025 → Présent',
    description: 'IA & Data Science : Python, NumPy, Pandas, ML/DL, Prompt Engineering, n8n. Formation intensive en mode dual entreprise/école.',
    accent: '#00d4aa',
    icon: '🤖',
  },
  {
    id: 2,
    degree: 'Bootcamp Développement Web Full Stack',
    institution: 'Geeks Institute',
    location: 'Casablanca',
    period: 'Mai — Juil. 2025',
    description: 'Formation intensive full-stack : React, Node.js, bases de données, déploiement et bonnes pratiques de développement moderne.',
    accent: '#7c3aed',
    icon: '💻',
  },
  {
    id: 3,
    degree: 'Licence — Ingénierie Logicielle & SI',
    institution: 'Université Ibn Tofail / ENSA',
    location: 'Kénitra',
    period: '2022 — 2023',
    description: 'Ingénierie logicielle, systèmes d\'information, algorithmique avancée et architecture des systèmes.',
    accent: '#f59e0b',
    icon: '🎓',
  },
  {
    id: 4,
    degree: 'Technicien Spécialisé Développement Informatique',
    institution: 'Institut Allal Ben Abdellah / IPIAB',
    location: 'Kénitra',
    period: '2020 — 2022',
    description: 'Développement d\'applications, bases de données, programmation orientée objet, réseaux informatiques.',
    accent: '#f59e0b',
    icon: '📚',
  },
]
