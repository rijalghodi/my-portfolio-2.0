import { FaCode, FaReact, FaGitAlt } from "react-icons/fa";

const skillsData = [
  {
    icon: FaCode,
    category: "Web Dev",
    skills: [
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
      {
        app: "JavaScript",
        checklist: ["DOM Manipulation", "Asynchronoush JavaScript", "Fetch API"],
        projects: [],
      },
      {
        app: "Sass",
        checklist: ["Layouting", "Responsive", "Animation"],
        projects: [],
      },
      {
        app: "Bootstrap",
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
        app: "React",
        checklist: ["React", "Hooks", "Fetch"],
        projects: [
          { name: "Flashcards", url: "#" },
          { name: "Appointments", url: "#" },
        ],
      },
      {
        app: "Redux",
        checklist: ["Basic Redux", "React-Redux", "Redux Toolkit"],
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
        checklist: ["Initiate", "Git Branch", "Git Merge", "Git Remote", "Git Rebase", "Git Ignore"],
        projects: [],
      },
      {
        app: "Webpack",
        checklist: ["Basic Webpack", "Install", "Asar Adzan"],
        projects: [],
      },
    ],
  },
];

export default skillsData;
