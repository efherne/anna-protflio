import { PortfolioData } from '../types/portfolio';

export const INITIAL_PORTFOLIO_DATA: PortfolioData = {
  name: "Anna Ye",
  // Providing an extremely stable, high-resolution, professional academic headshot URL directly from Unsplash 
  // as the primary default so it never breaks on any web host. You can easily switch this to "/images/sample-profile.jpg.HEIC"
  photoUrl: "/images/Anna.jpg",
  bio: "Driven Electrical Engineering-oriented student following Maple Leaf World School curriculum, grounded in rigorous quantitative and technical coursework. Completed AP Physics Mechanics, AP Physics E&M, Grade 11–12 Physics, Grade 10–12 Pre-Calculus, AP Calculus BC, AP Computer Science A, AP Computer Science Principles, and Grade 11–12 Chemistry. Skilled at leveraging calculus, electromagnetism, mechanical dynamics and programming logic to resolve complex quantitative problems. Devoted to consolidating theoretical knowledge and laying solid foundations for further advanced engineering study.",
  gradeLevel: "Grade 11",
  school: "Maple leaf ShenZhen",
  gpa: "91/100",
  major: "Electrical Engineering(EE)&physics",
  heroButtons: {
    resumeText: "Download Resume",
    contactText: "Contact"
  },

  gpaDetails: "Consistently sustained an average score of 90 out of a full 100 scale throughout demanding technical coursework covering mathematics, physics, computer science and chemistry within the Maple Leaf World School program.",
  
  courses: [
    { id: "c1", name: "AP Computer Science A", category: "AP", grade: "Not yet released" },
    { id: "c2", name: "AP Calculus BC", category: "AP", grade: "Not yet released" },
    { id: "c3", name: "AP Physics C: Mechanics", category: "AP", grade: "Not yet released" },
    { id: "c4", name: "AP physics C E&M", category: "AP", grade: "Not yet released" },
    { id: "c5", name: "AP Computer Science principles", category: "AP", grade: "Not yet released" },
    { id: "c6", name: "Chemistry 12", category: "Maple Leaf World School curriculum", grade: "94/100" },
    { id: "c7", name: "Calculus 12", category: "Maple Leaf World School curriculum", grade: "97/100" }
  ],

  distinctions: [
    {
      id: "d1",
      title: "Physics Bowl National Honor",
      year: "2026",
      description: "Earned National Honor standing in the Physics Bowl competition, demonstrating strong proficiency in high school physics knowledge and competitive problem-solving."
  },"
    },
    {
      id: "d2",
      title: "Euclid Mathematics Contest Participant",
      year: "2026",
      description: "Completed the University of Waterloo Euclid advanced mathematics exam"
    },
    {
      id: "d3",
      title: "Waterloo Grade 11 Mathematics Contest Participant",
      year: "2026",
      description: " geometric and combinatorial reasoning skills"
    }
  ],

  recognitions: [
    { id: "r1", title: "Academic Excellence Award", date: "2025 - 2026" },
    { id: "r2", title: "Science fair gold award ", date: "2025-2026" }
  ],

  

  researchProjects: [
    {
      id: "res1",
      title: "Fundamental Principles of Nuclear Magnetic Resonance (NMR)",
      role: "Independent Student Researcher",
      advisor: "High School Physics Instructor",
      description: "Explored foundational NMR physical theory, analyzed spin precession and magnetic field interactions, and summarized core mechanisms behind NMR spectroscopy and imaging applications."
    },
    
  competitions: [
    {
      id: "phy",
      name: "Physics Bowl ",
      year: "2026",
      placement: "National Honor",
      description: "Earned National Honor standing in the Physics Bowl competition, demonstrating strong proficiency in high school physics knowledge and competitive problem-solving."
    },
    {
      id: "Math1",
      name: "Euclid Mathematics Contest ",
      year: "2026",
      placement: "Participant",
      description: "Completed the University of Waterloo Euclid advanced mathematics exam."
    },
    {
      id: "Math2",
      name: "Waterloo Grade 11 Mathematics Contest ",
      year: "2026",
      placement: "Participant",
      description: "geometric and combinatorial reasoning skills."
    }
  ],

  leadership: [
    {
      id: "lead1",
      organization: "School Science Fair",
      role: "Team Captain",
      period: "2023 - 2024",
      responsibilities: [
        "Led a team investigating the power generation principles of solar panels for the physics science fair track.",
        "Arranged experimental trials, gathered performance data, refined testing procedures, and compiled the project display and presentation slides"
      ],
      accomplishments: [
        "Completed full end-to-end physics research prototype and formal competition submission centered on solar panel energy conversion."
      ]
    },
    {
      id: "lead2",
      organization: "School Science Fair",
      role: "Captain",
      period: "2025 - 2026",
      responsibilities: [
        "Oversee group research into chemical plasticization and the function of plasticizers for the chemistry science fair project.",
        "Managed lab testing, sample contrast analysis, technical report drafting, and competition booth design for the chemistry entry"
      ],
      accomplishments: [
        "Earned Gold Prize in the chemistry division for the plasticization mechanism research project at the 2026 school Science Fair.",
      ]
    }
  ],

  volunteer: [
    {
      id: "vol1",
      organization: "Not implemented yet",
      role: "Not implemented yet",
      hours:0 ,
      impact: "Not implemented yet"
    },
    {
      id: "vol2",
      organization: "Not implemented yet",
      role: "Not implemented yet",
      hours: 0,
      impact: "Not implemented yet"
    }
  ],

  awards: [
    {
      id: "aw1",
      title: "National Merit Scholarship Finalist",
      category: "Scholarship",
      date: "Spring 2026",
      description: "Selected for the ultimate collegiate financial award based on exemplary standardized academic perfection, service depth, and personal essays.",
      amount: "Full Tuition Eligibility"
    },
    {
      id: "aw2",
      title: "Rensselaer Medal Award",
      category: "Academic",
      date: "Spring 2025",
      description: "Awarded to the single top-performing junior in the high school demonstrating absolute superlative excellence in advanced mathematics and science.",
      amount: "$160,000 potential"
    },
    {
      id: "aw3",
      title: "Official ACM Coding Excellence Badge",
      category: "Badge",
      date: "2025",
      description: "Accredited digital recognition token awarded for achieving high tier status in collegiate-level data structure design and speed optimization."
    }
  ],

  projects: [
    {
      id: "proj1",
      title: "DeepFlow: Distributed Machine Learning Visualizer",
      category: "Full-Stack Development",
      description: "An elegant, interactive single-page application built with React, TypeScript, and WebGL that provides live visual node-by-node feedback for deep learning backpropagation passes.",
      link: "https://github.com/terryyao-edu/deepflow",
      tags: ["React", "TypeScript", "Tailwind CSS", "WebGL"]
    },
    {
      id: "proj2",
      title: "Secure-Vault: Local CLI Password & Token Manager",
      category: "Systems Engineering",
      description: "A fast, highly secure local command-line client programmed natively in Go and C++ that utilizes strong AES-256 bit encryption and zero-knowledge storage protocols.",
      link: "https://github.com/terryyao-edu/secure-vault",
      tags: ["Go", "C++", "Cryptography", "CLI"]
    }
  ],

  languages: [
    { id: "lang1", name: "Mandarin", proficiency: "Native" },
    { id: "lang2", name: "English", proficiency: "Native / Bilingual" },
    { id: "lang3", name: "Spanish", proficiency: "Professional Working Proficiency" }
  ],

  skills: [
    { id: "sk1", name: "C++ & Advanced Algorithms", category: "Core Technical" },
    { id: "sk2", name: "Python / PyTorch", category: "Core Technical" },
    { id: "sk3", name: "React & TypeScript", category: "Core Technical" },
    { id: "sk4", name: "Go & Systems Programming", category: "Core Technical" },
    { id: "sk5", name: "Git, Docker & AWS", category: "Infrastructure" },
    { id: "sk6", name: "LaTeX & Mathematical Typesetting", category: "Academic" }
  ],

  creativeWork: [
    {
      id: "cw1",
      title: "Algorithmic Symphonies - Generative Audio",
      type: "Creative Audio Coding",
      description: "An experimental procedural soundscape generator built with custom Python audio scripts that map prime integer sequences to complex harmonic waveforms.",
      link: "https://github.com/terryyao-edu"
    }
  ],

  publications: [
    {
      id: "pub1",
      title: "Optimizing State-Space Explorations in Highly Constrained Search Trees",
      journal: "High School Journal of Computational Mathematics",
      date: "Fall 2025",
      link: "https://example.com/publication"
    }
  ],

  testScores: [
    { id: "ts1", testName: "SAT", score: "1590", date: "August 2024", details: "800 Math • 790 Evidence-Based Reading & Writing" },
    { id: "ts2", testName: "ACT", score: "36", date: "April 2025", details: "36 English • 36 Math • 36 Reading • 36 Science" }
  ],

  careerGoals: "Aiming to pioneer highly optimized, scalable algorithmic frameworks and scalable systems architectures that bridge the gap between heavy theoretical computer science and highly functional real-world artificial intelligence. Ultimately aspiring to lead forward-thinking software engineering initiatives or academic laboratories, producing mission-critical applications that elevate human potential.",

  navLinks: [
    { id: "nav-hero", label: "Home", href: "#hero", visible: true },
    { id: "nav-acad", label: "Academics", href: "#academics", visible: true },
    { id: "nav-comp", label: "Competitions", href: "#competitions", visible: true },
    { id: "nav-lead", label: "Leadership", href: "#leadership", visible: true },
    { id: "nav-vol", label: "Service", href: "#volunteer", visible: true },
    { id: "nav-awards", label: "Awards", href: "#awards", visible: true },
    { id: "nav-high", label: "Highlights", href: "#highlights", visible: true },
    { id: "nav-contact", label: "Contact", href: "#contact", visible: true }
  ],

  contact: {
    email: "terry.yao.2026@gmail.com",
    phone: "+1 (555) 482-9104",
    qq: "819203842",
    github: "https://github.com/terryyao-edu",
    wechat: "terryyao_cs",
    linkedin: "https://linkedin.com/in/terry-yao-scholar"
  },

  theme: {
    preset: "ivy-crimson",
    bgColor: "#ffffff",
    bgSecondary: "#f8fafc",
    textColor: "#0f172a",
    textSecondary: "#475569",
    accentColor: "#881337",
    accentLight: "#ffe4e6",
    fontFamily: "'Inter', sans-serif"
  }
};

export const THEME_PRESETS = [
  {
    id: "ivy-crimson",
    name: "Classic Ivy Crimson",
    bgColor: "#ffffff",
    bgSecondary: "#f8fafc",
    textColor: "#0f172a",
    textSecondary: "#475569",
    accentColor: "#881337",
    accentLight: "#ffe4e6",
  },
  {
    id: "stanford-cardinal",
    name: "Stanford Cardinal",
    bgColor: "#ffffff",
    bgSecondary: "#fefefe",
    textColor: "#1c1917",
    textSecondary: "#57534e",
    accentColor: "#8c1515",
    accentLight: "#fee2e2",
  },
  {
    id: "berkeley-blue",
    name: "Berkeley Blue & Gold",
    bgColor: "#ffffff",
    bgSecondary: "#f1f5f9",
    textColor: "#0f172a",
    textSecondary: "#334155",
    accentColor: "#003262",
    accentLight: "#e0f2fe",
  },
  {
    id: "mit-silver",
    name: "MIT Tech Slate",
    bgColor: "#0b0f19",
    bgSecondary: "#111827",
    textColor: "#f3f4f6",
    textSecondary: "#9ca3af",
    accentColor: "#3b82f6",
    accentLight: "#1e3a8a",
  },
  {
    id: "oxford-emerald",
    name: "Oxford Prestige Emerald",
    bgColor: "#ffffff",
    bgSecondary: "#f4fbf7",
    textColor: "#064e3b",
    textSecondary: "#047857",
    accentColor: "#065f46",
    accentLight: "#d1fae5",
  },
  {
    id: "elegant-minimalist",
    name: "Pure Minimalist Slate",
    bgColor: "#fafafa",
    bgSecondary: "#ffffff",
    textColor: "#18181b",
    textSecondary: "#52525b",
    accentColor: "#27272a",
    accentLight: "#f4f4f5",
  }
];
