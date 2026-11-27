export interface SkillItem {
  name: string;
  category: "Programming" | "Web Development" | "Creative Skills";
  focus: string;
  iconKey: "terminal" | "cpu" | "code" | "palette" | "sparkles" | "film";
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  summary: string;
  description: string;
  highlights: string[];
  techStack: string[];
  thumbnail: string;
  /** Replace null with your GitHub repository URL once published */
  githubUrl: string | null;
  /** Replace null with your live deployment URL once hosted */
  liveUrl: string | null;
  status: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  deliverables: string[];
  iconKey: "building" | "user" | "rocket" | "sliders";
}

export interface AchievementCategory {
  id: string;
  title: string;
  badge: string;
  verified: boolean;
  summary: string;
  entries: {
    heading: string;
    meta: string;
    detail: string;
    isPlaceholder?: boolean;
  }[];
}

export interface SocialLinkConfig {
  id: "email" | "github" | "linkedin" | "instagram";
  label: string;
  /** Replace placeholder display text with your actual handle or address */
  displayValue: string;
  /** Replace null with your real URL or mailto: address */
  href: string | null;
  isPlaceholder: boolean;
}

export const portfolioConfig = {
  identity: {
    fullName: "Yashas Gaikwad",
    heroDisplayFirst: "YASHAS",
    heroDisplayLast: "GAIKWAD",
    title: "Computer Engineering Student",
    rolesLine: "Computer Engineering Student | Aspiring Developer | Creative Freelancer",
    tagline: "Turning ideas into innovative digital experiences.",
    education: "Diploma in Computer Engineering",
    college: "Vidyalankar Polytechnic",
    experienceLevel: "Fresher",
    interests: [
      "Artificial Intelligence",
      "Programming",
      "Web Development",
      "Technology",
    ],
    aboutParagraph:
      "I'm Yashas Gaikwad, a Computer Engineering student passionate about programming, artificial intelligence and web development. I enjoy exploring new technologies, building creative projects and turning ideas into practical digital solutions. I'm always eager to learn, experiment and improve my technical skills.",
    /** Profile photograph stored in /public */
    profileImage: "/profile.jpg",
    profileAlt: "Yashas Gaikwad — Computer Engineering Student",
  },

  resume: {
    /** Replace public/Yashas_Gaikwad_Resume.pdf with your own uploaded PDF file */
    fileUrl: "/Yashas_Gaikwad_Resume.pdf",
    downloadName: "Yashas_Gaikwad_Resume.pdf",
    lastUpdatedLabel: "Editable Resume Template Ready — Drop your PDF in public/",
  },

  /**
   * Set VITE_CONTACT_ENDPOINT in .env (e.g. https://formspree.io/f/your_id or /api/contact)
   * to enable direct backend/email delivery from the contact form.
   */
  contactEndpoint: (import.meta.env.VITE_CONTACT_ENDPOINT as string | undefined) || "",

  socialLinks: [
    {
      id: "email",
      label: "Email",
      displayValue: "yashasgaikwad17@gmail.com",
      href: "mailto:yashasgaikwad17@gmail.com",
      isPlaceholder: false,
    },
    {
      id: "github",
      label: "GitHub",
      displayValue: "github.com/yashasgaikwad",
      href: "https://github.com/yashasgaikwad",
      isPlaceholder: false,
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      displayValue: "linkedin.com/in/yashas-gaikwad-508b6b382",
      href: "https://www.linkedin.com/in/yashas-gaikwad-508b6b382",
      isPlaceholder: false,
    },
  ] as SocialLinkConfig[],

  skills: [
    {
      name: "C Programming",
      category: "Programming",
      focus: "Structured logic, pointers, memory fundamentals & problem solving",
      iconKey: "terminal",
    },
    {
      name: "C++",
      category: "Programming",
      focus: "Object-oriented design, data structures & algorithmic efficiency",
      iconKey: "cpu",
    },
    {
      name: "HTML",
      category: "Web Development",
      focus: "Semantic structure, accessible markup & SEO-ready documents",
      iconKey: "code",
    },
    {
      name: "CSS",
      category: "Web Development",
      focus: "Responsive layouts, modern Flexbox/Grid & futuristic UI styling",
      iconKey: "palette",
    },
    {
      name: "JavaScript",
      category: "Web Development",
      focus: "Interactive DOM experiences, client logic & dynamic web interfaces",
      iconKey: "sparkles",
    },
    {
      name: "Video Editing",
      category: "Creative Skills",
      focus: "Visual storytelling, pacing, cuts & polished digital media edits",
      iconKey: "film",
    },
  ] as SkillItem[],

  projects: [
    {
      id: "student-attendance",
      title: "Student Attendance System",
      category: "Academic Management System",
      summary:
        "Digital student attendance tracking system designed to organize roll records, attendance marking, and academic monitoring.",
      description:
        "Built to streamline classroom attendance management by replacing manual registers with structured digital record keeping and fast student status tracking.",
      highlights: [
        "Structured student roll and attendance tracking",
        "Clean workflow for recording and reviewing daily attendance",
        "Hosted source repository on GitHub",
      ],
      techStack: ["Web & Systems", "Attendance Logic", "GitHub"],
      thumbnail: "/projects/student-attendance.svg",
      githubUrl: "https://github.com/yashasgaikwad/student-attendencessss",
      liveUrl: null,
      status: "GitHub Project",
    },
    {
      id: "library-management",
      title: "Library Management System",
      category: "Catalog & Inventory System",
      summary:
        "Library management application focused on organizing book catalogs, issue/return tracking, and member records.",
      description:
        "Designed to simplify day-to-day library operations by tracking available titles, issued books, and return workflows in a structured system.",
      highlights: [
        "Book catalog and availability management",
        "Issue and return record tracking",
        "Hosted source repository on GitHub",
      ],
      techStack: ["Library Workflows", "Database & Logic", "GitHub"],
      thumbnail: "/projects/library-management.svg",
      githubUrl: "https://github.com/yashasgaikwad/library-management-",
      liveUrl: null,
      status: "GitHub Project",
    },
    {
      id: "birthday-website",
      title: "Birthday Website",
      category: "Creative Web Project",
      summary:
        "Custom interactive birthday web experience built with HTML, CSS, and JavaScript and deployed on GitHub Pages.",
      description:
        "A dedicated celebratory website crafted with custom HTML markup, CSS styling, and interactive JavaScript scripts, hosted on GitHub.",
      highlights: [
        "Custom front-end layout using index.html, style.css, and script.js",
        "Interactive client-side presentation and visual styling",
        "Deployed via GitHub Pages from the public repository",
      ],
      techStack: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
      thumbnail: "/projects/birthday-website.svg",
      githubUrl: "https://github.com/yashasgaikwad/harnishabirthdaay",
      liveUrl: null,
      status: "GitHub Project",
    },
    {
      id: "the-grilled-affairs",
      title: "The Grilled Affairs (TGA)",
      category: "Brand & Cloud Kitchen Website",
      summary:
        "Interactive cloud-kitchen brand website for The Grilled Affairs (Jogeshwari) featuring a filterable 26-item menu, Small/Big size toggles, smart cart, and WhatsApp checkout.",
      description:
        "Designed and built a complete artisanal food-brand storefront for The Grilled Affairs (Sandwich • Pasta • Coffee) with dynamic weekday/weekend delivery mode previews, veg-only & search filtering, a slide-over cart drawer with ₹199 free-delivery progress tracking, and one-click WhatsApp order summary generation.",
      highlights: [
        "Interactive 26-item menu with Small / BIG size toggle, search & veg-only filter",
        "Slide-over smart cart with Add-Ons upsell and ₹199 free-delivery progress bar",
        "One-click WhatsApp order builder & weekday/weekend delivery mode preview",
      ],
      techStack: ["HTML", "Tailwind CSS", "JavaScript", "WhatsApp Order Flow"],
      thumbnail: "/projects/the-grilled-affairs.svg",
      githubUrl: null,
      liveUrl: "/demos/the-grilled-affairs.html",
      status: "Brand Website • Live Demo",
    },
    {
      id: "personal-websites",
      title: "Personal & Business Website Projects",
      category: "Freelance Web Design",
      summary:
        "Custom websites designed and developed for businesses and personal brands with clean visual hierarchy and responsive layouts.",
      description:
        "Bespoke web experiences focused on brand clarity, fast page loads, mobile responsiveness, and conversion-ready user journeys.",
      highlights: [
        "Custom websites designed and developed for businesses or brands",
        "Mobile-first responsive layouts across screen sizes",
        "Modern typography, clean CTAs, and tailored visual branding",
      ],
      techStack: ["HTML", "CSS", "JavaScript", "Responsive UI"],
      thumbnail: "/projects/personal-websites.svg",
      githubUrl: null,
      liveUrl: null,
      status: "Freelance Showcase",
    },
  ] as ProjectItem[],

  services: [
    {
      id: "business-web",
      title: "Business Website Development",
      description:
        "Professional, responsive websites built to present your business clearly, strengthen brand trust, and convert visitors into inquiries.",
      deliverables: [
        "Responsive multi-section architecture",
        "Fast-loading, SEO-friendly structure",
        "Clear service & contact workflows",
      ],
      iconKey: "building",
    },
    {
      id: "portfolio-web",
      title: "Personal Portfolio Websites",
      description:
        "Distinctive personal portfolios tailored for students, creators, and professionals who want their projects and story to stand out.",
      deliverables: [
        "Project showcase & case-study layout",
        "Resume integration & social links",
        "Modern interactive visual polish",
      ],
      iconKey: "user",
    },
    {
      id: "landing-pages",
      title: "Landing Page Development",
      description:
        "High-impact single-page sites focused on a specific launch, product, event, or campaign with strong visual hierarchy.",
      deliverables: [
        "Compelling hero & value proposition",
        "Clean call-to-action sections",
        "Mobile-optimized layout & speed",
      ],
      iconKey: "rocket",
    },
    {
      id: "design-customization",
      title: "Website Design and Customization",
      description:
        "Refreshing existing layouts, fixing responsiveness issues, and customizing components to match your brand aesthetic.",
      deliverables: [
        "UI/UX visual polish & spacing cleanup",
        "Cross-device responsiveness tuning",
        "Custom section & styling updates",
      ],
      iconKey: "sliders",
    },
  ] as ServiceItem[],

  achievements: [
    {
      id: "college-projects",
      title: "College Projects",
      badge: "Verified Academic Work",
      verified: true,
      summary:
        "Hands-on engineering systems built during my Diploma in Computer Engineering at Vidyalankar Polytechnic.",
      entries: [
        {
          heading: "Student Attendance System",
          meta: "Academic Project • GitHub Repository",
          detail:
            "Built a student attendance management project (github.com/yashasgaikwad/student-attendencessss).",
        },
        {
          heading: "Library Management System",
          meta: "Academic Project • GitHub Repository",
          detail:
            "Built a library catalog and book management project (github.com/yashasgaikwad/library-management-).",
        },
      ],
    },
    {
      id: "freelance",
      title: "Freelance Website Development",
      badge: "Verified Creative Work",
      verified: true,
      summary:
        "Designing and developing responsive web experiences tailored for businesses and personal brands.",
      entries: [
        {
          heading: "The Grilled Affairs (TGA) — Brand Website",
          meta: "Brand Project • HTML / Tailwind CSS / JavaScript",
          detail:
            "Built an interactive cloud-kitchen storefront with a 26-item filterable menu, Small/BIG size selector, smart cart drawer, and WhatsApp order generator.",
        },
        {
          heading: "Business & Brand Websites",
          meta: "Freelance • HTML / CSS / JavaScript",
          detail:
            "Delivered custom website designs and landing pages tailored to client goals and brand presentation.",
        },
      ],
    },
    {
      id: "hackathons",
      title: "Hackathon Participation",
      badge: "Editable Slot",
      verified: false,
      summary:
        "Space reserved for verified hackathon events, team builds, and dates — update in src/data/portfolio.ts.",
      entries: [
        {
          heading: "Add Verified Hackathon Participation",
          meta: "Event Name • Year • Role",
          detail:
            "Placeholder kept honest: add your official hackathon name, project built, and participation details here.",
          isPlaceholder: true,
        },
      ],
    },
    {
      id: "certificates",
      title: "Technical Certificates",
      badge: "Editable Slot",
      verified: false,
      summary:
        "Space reserved for verified technical certifications and course completions — update in src/data/portfolio.ts.",
      entries: [
        {
          heading: "Add Verified Technical Certificate",
          meta: "Issuer • Credential / Year",
          detail:
            "Placeholder kept honest: list verified certificates (e.g., C/C++, Web Development, AI) with credential links here.",
          isPlaceholder: true,
        },
      ],
    },
  ] as AchievementCategory[],
};

