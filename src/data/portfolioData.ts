import type { ProjectItem, SkillCategory, ServiceItem, ProcessStep } from '../types';

export const PERSONAL_INFO = {
  name: "RAJIV VERMA",
  role: "Aspiring Web Developer",
  location: "Delhi, India",
  timezone: "IST (UTC+5:30)",
  tagline: "Building Digital Experiences.",
  subheadline: "I create modern, responsive websites and digital experiences for businesses and individuals.",
  about: {
    degree: "Diploma in Computer Engineering",
    semester: "5th Semester",
    graduation: "Expected Graduation: 2027",
    location: "Delhi, India",
    bioParagraph1: "I am a Diploma Computer Engineering student and aspiring web developer based in Delhi. Currently developing my skills in JavaScript, React, responsive web design, and modern web development workflows.",
    bioParagraph2: "I focus on core web fundamentals: semantic HTML, responsive CSS, JavaScript basics, and building modular interfaces with React. I also explore AI-assisted workflows using tools like Google AI Studio to learn and build more effectively.",
    coreValues: [
      { title: "Web Fundamentals", desc: "Building a solid foundation in HTML, CSS, JavaScript, and React component structure." },
      { title: "Responsive Layouts", desc: "Practicing mobile-first design so pages adjust naturally across different screen sizes." },
      { title: "Modern Workflow", desc: "Using Git, GitHub, and AI-assisted tooling like Google AI Studio in daily learning." }
    ]
  },
  contact: {
    emailPlaceholder: "[YOUR EMAIL]",
    whatsappPlaceholder: "[YOUR WHATSAPP NUMBER]",
    location: "Delhi, India",
    availability: "Open for web development projects & freelance opportunities",
    github: "https://github.com/rajivverma7iv-web",
    linkedinPlaceholder: "https://linkedin.com/in/[YOUR-PROFILE]",
  }
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Core Web Technologies",
    description: "Building responsive, semantic, and interactive user interfaces.",
    skills: [
      { name: "HTML", level: "Semantic Markup", focus: "Clean structure, standard HTML5 elements, and accessible layout basics" },
      { name: "CSS", level: "Layouts & Styling", focus: "Flexbox, Grid, Tailwind CSS, and responsive styling" },
      { name: "JavaScript", level: "ES6+ Fundamentals", focus: "DOM manipulation, functions, event handling, and modern syntax" },
      { name: "React", level: "Components & State", focus: "Functional components, basic hooks (useState, useEffect), and Vite" }
    ]
  },
  {
    title: "Engineering & Workflow",
    description: "Version control, mobile-first design, and organized project structure.",
    skills: [
      { name: "Responsive Web Design", level: "Mobile-First Design", focus: "Media queries, flexible containers, and multi-device testing" },
      { name: "Git", level: "Version Control", focus: "Tracking project changes, commits, and branching basics" },
      { name: "GitHub", level: "Project Hosting", focus: "Repository management and deploying live sites on GitHub Pages" }
    ]
  },
  {
    title: "AI-Augmented Development",
    description: "Using AI tools to assist learning, prototyping, and coding.",
    skills: [
      { name: "AI-Assisted Development", level: "Workflow Support", focus: "Exploring AI tools to accelerate coding, learn concepts, and debug" },
      { name: "Google AI Studio", level: "Exploration & Practice", focus: "Experimenting with prompts and web prototyping in Google AI Studio" }
    ]
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: "business-websites",
    number: "01",
    title: "Business Websites",
    subtitle: "Clean, responsive websites for small businesses or showrooms",
    description: "Custom-tailored websites designed with clear navigation, responsive layouts, and clean visual presentation suited for businesses.",
    deliverables: [
      "Responsive multi-page layout",
      "Mobile-friendly design adaptation",
      "Clean typography and structured content",
      "Contact details and links integration",
      "Lightweight and fast-loading structure"
    ],
    idealFor: "Local businesses, small shops, showrooms, or personal brands"
  },
  {
    id: "landing-pages",
    number: "02",
    title: "Landing Pages",
    subtitle: "Clean, focused single-page websites to showcase an idea or product",
    description: "Focused single-page layouts designed to highlight a specific project, service, or event with clear sections and call-to-actions.",
    deliverables: [
      "Structured single-page layout",
      "Responsive across mobile and desktop",
      "Clear call-to-action sections",
      "Custom styling with Tailwind CSS",
      "Fast loading and clean markup"
    ],
    idealFor: "Product showcases, promotional announcements, or portfolio teasers"
  },
  {
    id: "portfolio-websites",
    number: "03",
    title: "Portfolio Websites",
    subtitle: "Personal portfolio websites for students, developers, and creatives",
    description: "Personal websites designed to present projects, skills, and contact details with clean typography and responsive layouts.",
    deliverables: [
      "Curated project showcase section",
      "Skills, about, and background presentation",
      "Responsive mobile and desktop layout",
      "Contact placeholders and social links",
      "Clean, readable typography and modern styling"
    ],
    idealFor: "Students, developers, and creatives looking for an online portfolio"
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "seth-furniture-gallery",
    title: "Seth Furniture Gallery",
    category: "Furniture Showroom Website",
    tagline: "A responsive catalog and showroom website showcasing handcrafted furniture.",
    description: "A multi-category furniture showcase website built with HTML, CSS, and JavaScript, hosted live on GitHub Pages with responsive mobile navigation.",
    isLive: true,
    liveUrl: "https://rajivverma7iv-web.github.io/seth-furniture-gallery/",
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "GitHub Pages"],
    highlights: [
      "Live website hosted on GitHub Pages",
      "Product showcase gallery with category navigation",
      "Responsive mobile-friendly layout",
      "Warm, clean visual style suited for home furniture"
    ],
    metricsOrScope: "Live Project",
    imagePromptFallback: "furniture-gallery"
  },
  {
    id: "physio-world",
    title: "PHYSIO WORLD",
    category: "Healthcare Website Concept",
    tagline: "Healthcare website design concept focusing on clinic information and treatment services.",
    description: "A healthcare website design concept exploring clean layout structures for clinics, therapy descriptions, and patient contact sections.",
    isLive: false,
    technologies: ["React", "CSS Architecture", "UI/UX Prototyping", "Component Design"],
    highlights: [
      "Concept project exploring healthcare layout and information design",
      "Clean sections for therapy specializations and clinic details",
      "Calm, accessible color palette and readable typography",
      "Contact and consultation inquiry layout mockup"
    ],
    metricsOrScope: "Concept Project",
    imagePromptFallback: "physio-world"
  },
  {
    id: "student-productivity-dashboard",
    title: "Student Productivity Dashboard",
    category: "Web Application Concept",
    tagline: "Dashboard concept exploring layout ideas for student schedule and task tracking.",
    description: "A frontend concept exploring modular layout grids for organizing course schedules, task priorities, and study timers.",
    isLive: false,
    technologies: ["JavaScript", "React", "State Management", "Tailwind CSS"],
    highlights: [
      "Dashboard layout concept for semester timetable and tasks",
      "Modular cards for priorities and study routines",
      "Clean, distraction-free interface structure",
      "Built with React components and Tailwind CSS"
    ],
    metricsOrScope: "Prototype Concept",
    imagePromptFallback: "productivity-dashboard"
  },
  {
    id: "more-projects-coming-soon",
    title: "More Projects In Progress",
    category: "Active Explorations",
    tagline: "Ongoing practice and new projects in web development.",
    description: "Currently building new web projects and practicing with React, JavaScript, and responsive layouts. New projects will be added here as they are completed.",
    isLive: false,
    technologies: ["React", "TypeScript", "Three.js", "AI Integration"],
    highlights: [
      "Practicing frontend development with React and modern CSS",
      "Learning 3D web fundamentals with Three.js",
      "Open to web development projects and collaborative learning"
    ],
    metricsOrScope: "Upcoming Releases",
    imagePromptFallback: "coming-soon",
    comingSoon: true
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    title: "Discovery & Planning",
    subtitle: "Understanding goals and project structure",
    description: "Understanding the project requirements, page layout needs, and technical approach before writing code.",
    outcomes: ["Project scope & objectives", "Page content & structure", "Tech stack selection"]
  },
  {
    step: "02",
    title: "Design & Layout",
    subtitle: "Planning responsive layout and visual structure",
    description: "Structuring content hierarchy, clear typography, and mobile-friendly layouts.",
    outcomes: ["Color palette & typography", "Responsive mobile/desktop wireframes", "Visual structure"]
  },
  {
    step: "03",
    title: "Development",
    subtitle: "Building with HTML, CSS, JavaScript, and React",
    description: "Writing clean, readable code with semantic HTML, modern styling, and modular React components.",
    outcomes: ["Modular component codebase", "Mobile-friendly responsiveness", "Semantic HTML"]
  },
  {
    step: "04",
    title: "Review & Deployment",
    subtitle: "Testing on devices and publishing online",
    description: "Checking responsive layout on mobile and desktop, verifying links and navigation, and deploying to hosting like GitHub Pages.",
    outcomes: ["Cross-device verification", "Fast page loading", "Live deployment"]
  }
];
