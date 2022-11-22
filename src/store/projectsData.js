import songify from "../assets/image/portfolio/songify.png";
import flashcards from "../assets/image/portfolio/flashcards.png";
import appointments from "../assets/image/portfolio/appointments-planner.png";
import filmFinder from "../assets/image/portfolio/film-finder.png";
import goPets from "../assets/image/portfolio/go-pets.jpg";
import randomQuotes from "../assets/image/portfolio/random-quote.png";
import bookface from "../assets/image/portfolio/book-face.png";
import coffeeWeb from "../assets/image/portfolio/coffee-website.png";
import miniReddit from "../assets/image/portfolio/mini-reddit.png";
import markdownViewer from "../assets/image/portfolio/markdown-viewer.png";
import passingThoughts from "../assets/image/portfolio/passing-thoughts.png";
import colorsCheck from "../assets/image/portfolio/colors-check.png";
import myPortfolio20 from "../assets/image/portfolio/my-portfolio-2-0.png";
import idealyst from "../assets/image/portfolio/idealyst.png";
import quizzz from "../assets/image/portfolio/quizzz-login.png";
/*
Template
{
   title: "",
   description: "",
   githubUrl: "",
   deploymentUrl: "",
   image: miniReddit,
   category: "app",
   date: new Date("2022-11-01"),
   isPinned: true,
 },
 */

const projectsData = [
  {
    title: "Quizzz",
    description:
      "Multiple-choice quiz in a personal and convenient environment",
    githubUrl: "https://github.com/rijalghodi/progressive-quizzz",
    deploymentUrl: "progressive-quizzz.vercel.app",
    image: quizzz,
    category: "app",
    date: new Date("2022-11-20"),
    isPinned: true,
  },
  {
    title: "Mini Reddit",
    description: "Simple & beutiful Reddit App Remake",
    githubUrl: "https://github.com/rijalghodi/mini-reddit",
    deploymentUrl: "https://mini-reddit-rijalghodi.vercel.app/",
    image: miniReddit,
    category: "app",
    date: new Date("2022-10-01"),
    isPinned: true,
  },
  {
    title: "Idealyst",
    description: "Capture your ideas efficiently",
    githubUrl: "https://github.com/rijalghodi/idealyst",
    deploymentUrl: "https://idealyst-rijalghodi.vercel.app/",
    image: idealyst,
    category: "app",
    date: new Date("2022-11-15"),
    isPinned: true,
  },
  {
    title: "Colors Check",
    description: "Test your web colors balance here!",
    githubUrl: "https://github.com/rijalghodi/colors-check",
    deploymentUrl: "https://colors-check.vercel.app/",
    image: colorsCheck,
    category: "app",
    date: new Date("2022-11-11"),
    isPinned: true,
  },
  {
    title: "Songify",
    description:
      "Search songs, maka playlist, and save it into the spotify account",
    githubUrl: "https://github.com/rijalghodi/songify-child-of-sportify",
    deploymentUrl: "https://rijalghodi-songify.netlify.app/",
    image: songify,
    category: "app",
    date: new Date("2022-09-21"),
    isPinned: true,
  },
  {
    title: "Portfolio 2.0",
    description: "My Latest-Portfolio Homepage",
    githubUrl: "https://github.com/rijalghodi/my-portfolio-2.0",
    deploymentUrl: "https://rijalghodi.vercel.app",
    image: myPortfolio20,
    category: "app",
    date: new Date("2022-10-29"),
    isPinned: true,
  },

  {
    title: "Appointments",
    description: "Organize appointments and contacts",
    githubUrl: "https://github.com/rijalghodi/appointments-planner",
    deploymentUrl: "https://rijalghodi-appointments-planner.netlify.app",
    image: appointments,
    category: "app",
    date: new Date("2022-09-21"),
    isPinned: true,
  },
  {
    title: "Film Finder",
    description: "Grab random superb movies from a specific genre",
    githubUrl: "https://github.com/rijalghodi/film-finder",
    deploymentUrl: "https://rijalghodi.github.io/film-finder",
    image: filmFinder,
    category: "app",
    date: new Date("2022-09-21"),
    isPinned: true,
  },
  {
    title: "Flashcards",
    description: "Simple App to create flashcards and quizzes",
    githubUrl: "https://github.com/rijalghodi/flashcards",
    deploymentUrl: "https://rijalghodi-flashcards.netlify.app/",
    image: flashcards,
    category: "app",
    date: new Date("2022-09-21"),
    isPinned: true,
  },
  {
    title: "Markdown Viewer",
    description: "Type and look markdown simultaneously ",
    githubUrl: "https://github.com/rijalghodi/markdown-viewer",
    deploymentUrl: "https://markdown-viewer-rijalghodi.vercel.app/",
    image: markdownViewer,
    category: "app",
    date: new Date("2022-10-01"),
    isPinned: true,
  },
  {
    title: "Quotes Machine",
    description: "Generates random great quotes from great people",
    githubUrl: "https://github.com/rijalghodi/random-quote",
    deploymentUrl: "https://rijalghodi.github.io/random-quote/",
    image: randomQuotes,
    category: "app",
    date: new Date("2022-09-21"),
    isPinned: true,
  },
  {
    title: "Passing Thoughts",
    description: "Remove your thoughts after 15 seconds",
    githubUrl: "https://github.com/rijalghodi/passing-thought",
    deploymentUrl: "https://passing-thought.vercel.app/",
    image: passingThoughts,
    category: "app",
    date: new Date("2022-10-01"),
    isPinned: false,
  },
  {
    title: "Go Pets",
    description: "Find cute pets and adopt them",
    githubUrl: "https://github.com/rijalghodi/go-pets",
    deploymentUrl: "https://rijalghodi-go-pets.netlify.app/",
    image: goPets,
    category: "app",
    date: new Date("2022-09-21"),
    isPinned: true,
  },
  {
    title: "BookFace",
    description: "Social media to share booknotes",
    githubUrl: "https://github.com/rijalghodi/book-face-company-homepage",
    deploymentUrl: "https://rijalghodi.github.io/book-face-company-homepage/",
    image: bookface,
    category: "web",
    date: new Date("2022-09-21"),
    isPinned: false,
  },

  {
    title: "Kopi Kuli",
    description: "Homepage of Great Coffee Company",
    githubUrl: "https://github.com/rijalghodi/coffee-website",
    deploymentUrl: "https://rijalghodi.github.io/coffee-website/",
    image: coffeeWeb,
    category: "web",
    date: new Date("2022-09-21"),
    isPinned: false,
  },
];

export default projectsData;
