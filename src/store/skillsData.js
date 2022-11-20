import { FaCode, FaReact, FaGitAlt } from "react-icons/fa";

const skillsData = [
  {
    icon: FaCode,
    category: "Web Dev",
    skills: [
      {
        app: "Tailwind",
        checklist: ["Basic HTML", "Semantic HTML", "SEO"],
        projects: [{ name: "BookFace", url: "#" }],
      },
      {
        app: "Bootstrap",
        checklist: ["Layouting", "Responsive", "Animation"],
        projects: [],
      },
      {
        app: "Sass",
        checklist: ["Layouting", "Responsive", "Animation"],
        projects: [],
      },
      {
        app: "Mocha",
        checklist: ["Doing Test"],
        projects: [],
      },
      {
        app: "JavaScript",
        checklist: [
          "DOM Manipulation",
          "Asynchronoush JavaScript",
          "Fetch API",
        ],
        projects: [],
      },
      {
        app: "HTML",
        checklist: ["Basic HTML", "Semantic HTML", "SEO"],
        projects: [{ name: "BookFace", url: "#" }],
      },
      {
        app: "CSS",
        checklist: ["Layouting", "Responsive", "Animation"],
        projects: [],
      },
    ],
  },

  // ========================================================= //

  {
    icon: FaReact,
    category: "Front-end Framework",
    skills: [
      {
        app: "Next.js",
        checklist: ["React", "Hooks", "Fetch API"],
        projects: [
          { name: "Flashcards", url: "#" },
          { name: "Appointments", url: "#" },
        ],
      },
      {
        app: "React.js",
        checklist: ["React", "Hooks", "Fetch API"],
        projects: [
          { name: "Flashcards", url: "#" },
          { name: "Appointments", url: "#" },
        ],
      },
      {
        app: "Vue.js",
        checklist: ["Doing Test"],
        projects: [],
      },
      {
        app: "Node.js",
        checklist: ["Doing Test"],
        projects: [],
      },
      {
        app: "Redux",
        checklist: ["Basic Redux", "React-Redux", "Redux Toolkit"],
        projects: [],
      },
      {
        app: "REST API",
        checklist: ["Doing Test"],
        projects: [],
      },
    ],
  },
  {
    icon: FaGitAlt,
    category: "Supporting Tools",
    skills: [
      {
        app: "Git & Github",
        checklist: [
          "Initiate",
          "Git Branch",
          "Git Merge",
          "Git Remote",
          "Git Rebase",
          "Git Ignore",
        ],
        projects: [],
      },
      {
        app: "Webpack",
        checklist: ["Basic Webpack", "Install", "Asar Adzan"],
        projects: [],
      },
      {
        app: "npm",
        checklist: ["Manage package", "Create package"],
        projects: [],
      },
    ],
  },
];

export default skillsData;
