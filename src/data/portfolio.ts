import type { EducationEntry, ExperienceEntry, Project, SkillCategory } from "@/types";

export const skills: SkillCategory[] = [
  {
    title: "Frontend Development",
    description: "Interfaces I build with every week.",
    items: [
      { name: "HTML", description: "Semantic, accessible markup" },
      { name: "CSS", description: "Responsive layouts, modern CSS" },
      { name: "JavaScript", description: "ES6+ fundamentals & DOM" },
      { name: "TypeScript", description: "Currently learning — typed apps" },
      { name: "React", description: "Components, hooks, state" },
      { name: "Next.js", description: "App Router, RSC, routing" },
    ],
  },
  {
    title: "Styling & UI",
    description: "How I make interfaces feel considered.",
    items: [
      { name: "Tailwind CSS", description: "Utility-first styling" },
      { name: "Responsive Design", description: "Mobile-first layouts" },
      { name: "Accessibility", description: "Keyboard, contrast, semantics" },
      { name: "Component-Driven UI", description: "Reusable, typed components" },
    ],
  },
  {
    title: "Backend & Data",
    description: "Growing server-side skills.",
    items: [
      { name: "Node.js", description: "Runtime & scripting basics" },
      { name: "Express.js", description: "REST APIs (learning)" },
      { name: "MongoDB", description: "Documents & CRUD (learning)" },
      { name: "REST APIs", description: "Fetching, shaping data" },
      { name: "Authentication", description: "Better Auth (exploring)" },
    ],
  },
  {
    title: "Tools & Workflow",
    description: "How I ship and collaborate.",
    items: [
      { name: "Git", description: "Branching, commits, PRs" },
      { name: "GitHub", description: "Repos, issues, actions" },
      { name: "VS Code", description: "Daily editor" },
      { name: "npm", description: "Packages & scripts" },
      { name: "Vercel", description: "Deployments" },
      { name: "Figma", description: "Reading & handing off designs" },
      { name: "Jira", description: "8+ yrs delivery & planning" },
      { name: "n8n", description: "Automation experiments" },
      { name: "Notion", description: "Docs & planning" },
    ],
  },
];

export const education: EducationEntry[] = [
  {
    institution: "Programming Hero",
    qualification: "Full-Stack Web Development (in progress)",
    subject: "TypeScript · React · Next.js · Node.js · MongoDB",
    period: "2025 — Present",
    status: "Currently learning",
    achievements: [
      "Shipping weekly assignments: Dev Stack, FitLog, BazarDor",
      "Practicing AI-assisted coding workflows",
    ],
  },
  {
    // TODO: replace with your real academic background
    institution: "Your university / college",
    qualification: "Your degree or examination",
    subject: "Your subject or group",
    period: "Year — Year",
    status: "Details to be added",
  },
];

export const experience: ExperienceEntry[] = [
  {
    organization: "Various tech teams",
    title: "Project Manager",
    employmentType: "Full-time · 8+ years",
    period: "Past — Present",
    location: "Bangladesh",
    summary:
      "Spent 8+ years managing software delivery — planning with Jira/Notion, working alongside developers, and shipping products. Now turning that delivery experience into hands-on engineering skill.",
    contributions: [
      "Planned and tracked software delivery across teams",
      "Worked daily with developers, designers, and stakeholders",
      "Built automation experiments with n8n and AI workflows",
    ],
    technologies: ["Jira", "Notion", "Figma", "n8n", "Agile delivery"],
  },
];

export const projects: Project[] = [
  {
    slug: "bazardor",
    title: "Bazardor — বাজার দর",
    tagline: "Bangla grocery price tracker with auth, categories, and market tables.",
    summary:
      "A responsive Bangla grocery price tracker built with Next.js App Router, TypeScript, and Better Auth — live ticker, top movers, category pages, and protected product details.",
    description: [
      "Bazardor (বাজার দর) puts the day's market prices — rice, lentils, oil, vegetables, fish, meat, eggs, and spices — in one glanceable place, with per-market prices, averages, min/max, and daily change.",
      "The app features an infinite live price ticker, top risers/fallers of the day, category pages with skeleton loading and a Bengali-digit-safe numeric sort, and protected product detail pages with a market-by-market table.",
      "Authentication is handled with Better Auth (MongoDB adapter) supporting email/password plus Google and GitHub sign-in.",
    ],
    problem:
      "Daily grocery prices in Bangladesh vary market to market, and there is no single calm place to compare rice, lentils, oil, vegetables, fish, meat, eggs, and spices at a glance.",
    role: "Sole developer — design, Next.js App Router implementation, auth integration, Bengali UI, and Vercel deployment.",
    technologies: ["Next.js 16", "TypeScript", "Tailwind CSS v4", "Better Auth", "MongoDB", "lucide-react", "react-hot-toast", "Vercel"],
    features: [
      "Live price ticker — infinite marquee with price and change",
      "Top movers — 6 biggest risers and 6 biggest fallers",
      "Category pages with active-link nav and skeleton loading",
      "Bengali-digit-safe numeric sort dropdown",
      "Protected product details: min / max / average + market table",
      "Email/password, Google, and GitHub authentication",
    ],
    challenges: [
      "Rendering Bengali numerals correctly in sorted numeric UI",
      "Protecting detail routes while keeping the marketing pages fast and static",
    ],
    solutions: [
      "Built a Bengali-digit-aware numeric parser for the sort dropdown",
      "Used Server Components for public pages and guarded detail routes with the auth session",
    ],
    futureImprovements: [
      "Real market-data API instead of curated prices",
      "Price history charts per product",
      "PWA install + offline price snapshot",
    ],
    image: "/images/projects/bazardor.png",
    imageAlt: "Bazardor project preview placeholder — Bangla grocery price tracker",
    liveUrl: "https://assignment-7-bazardor.vercel.app/",
    repositoryUrl: "https://github.com/LutfunNaharNisha/assignment-7-bazardor",
    featured: true,
  },
  {
    slug: "fitlog",
    title: "FitLog",
    tagline: "Dark-themed workout tracker with a focused cap-of-5 daily planner.",
    summary:
      "A high-performance dark-themed workout tracking app — search and filter exercises, plan up to 5 daily lifts, and watch calories and duration update in real time.",
    description: [
      "FitLog helps users search exercises, structure focused daily lift targets, and save workouts — with real-time calorie and duration metrics as the plan changes.",
      "The daily planner caps at 5 target exercises to keep routines focused and achievable, and a Saved Lifts collection makes it fast to re-queue favorites.",
    ],
    problem:
      "Workout apps overwhelm users with endless plans; FitLog constrains the day to 5 lifts so training stays focused and completable.",
    role: "Sole developer — Next.js App Router, filtering/search, planner state, and deployment.",
    technologies: ["Next.js 16", "TypeScript", "Tailwind CSS", "lucide-react", "react-toastify", "Vercel"],
    features: [
      "Exercise library with search + muscle / equipment / difficulty filters",
      "Cap-of-5 daily planner for focused routines",
      "Real-time calorie and duration metrics",
      "Saved Lifts collection with quick re-queue",
    ],
    challenges: ["Keeping filter + planner state snappy with zero backend"],
    solutions: ["Client-side derived state with memoized filtering — no fetches, no spinners for core flows"],
    futureImprovements: ["Persistent accounts and history", "Progress charts", "Rest timers"],
    image: "/images/projects/fitlog.png",
    imageAlt: "FitLog project preview placeholder — workout tracking app",
    liveUrl: "https://assignment-6-fit-log-nine.vercel.app/",
    repositoryUrl: "https://github.com/LutfunNaharNisha/assignment-6-fit-log",
    featured: true,
  },
  {
    slug: "dev-stack",
    title: "Dev Stack",
    tagline: "Browse technologies, compare at a glance, and build your ideal stack.",
    summary:
      "Browse popular technologies from local JSON, compare them at a glance, and add picks to a live 'Your Stack' panel — with toasts, loading states, and theming.",
    description: [
      "Dev Stack lets visitors browse popular technologies in a responsive 1/2/3-column card grid loaded from a local JSON file, then build their own stack with add/remove, duplicate protection, 'Remove All', and toast feedback for every action.",
      "The UI is themeable with a sticky navbar and a mobile layout; all brand gradients are defined once in CSS.",
    ],
    problem:
      "Choosing a development stack means juggling dozens of tools; Dev Stack makes browsing and shortlisting them playful and visual.",
    role: "Sole developer — React + Vite + Tailwind implementation, JSON data model, toast/loading UX.",
    technologies: ["React 19", "TypeScript", "Vite", "Tailwind CSS v4", "DaisyUI", "React-Toastify", "React-Spinners"],
    features: [
      "Technology grid from local JSON with loading spinner",
      "Your Stack panel — add/remove, no duplicates, Remove All",
      "Toast feedback for every action",
      "Themeable UI with sticky navbar + mobile layout",
    ],
    challenges: ["Loading JSON data gracefully on slow connections"],
    solutions: ["Explicit loading spinner + empty states instead of a blank grid"],
    futureImprovements: ["Persist stack to localStorage", "Share stack via URL", "More stack presets"],
    image: "/images/projects/dev-stack.png",
    imageAlt: "Dev Stack project preview placeholder — technology picker app",
    liveUrl: "https://dev-stack-theta-bice.vercel.app/",
    repositoryUrl: "https://github.com/LutfunNaharNisha/assignment-5-dev-stack",
    featured: true,
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
