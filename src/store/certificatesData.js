// import responsiveWebCertificate from "../assets/image/certificates/web-design-fcc.png";
// import javascriptCertificate from "../assets/image/certificates/javascript-fcc.png";
import codecademyLogo from "../assets/image/logos/codecademy.jpeg";
import freecodecampLogo from "../assets/image/logos/freecodecamp.jpeg";

const certificatesData = [
  {
    title: "Front-End Engineer Career Path",
    issuedBy: { company: "Codecademy", url: "www.codecademy.com", companyLogo: codecademyLogo },
    date: new Date("2022-10-28"),
    description: "",
    courseUrl: "https://www.codecademy.com/learn/paths/front-end-engineer-career-path",
    credential: "https://www.codecademy.com/profiles/rijalghodi/certificates/5f85dd867b67b60014ac9ea3",
  },
  {
    title: "Responsive Web Design",
    issuedBy: { company: "freecodecamp", url: "www.freecodecamp.org", companyLogo: freecodecampLogo },
    date: new Date("2022-08-22"),
    description: "Learn basics of HTML and CSS, including CSS variables, accessibility, and responsive layout.",
    courseUrl: "https://www.freecodecamp.org/learn/2022/responsive-web-design/",
    credential: "https://www.freecodecamp.org/certification/rijalghodi/javascript-algorithms-and-data-structures",
  },
  {
    title: "JavaScript Algorithms and Data Structures",
    issuedBy: { company: "freecodecamp", url: "www.freecodecamp.org", companyLogo: freecodecampLogo },
    date: new Date("2022-09-22"),
    description: "Learn basics of HTML and CSS, including CSS variables, accessibility, and responsive layout.",
    courseUrl: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/",
    credential: "https://www.freecodecamp.org/certification/rijalghodi/javascript-algorithms-and-data-structures",
  },
];

export default certificatesData;
/*
  {
    title: "",
    issuedBy: { company: "", url: "www.freecodecamp.org" },
    date: new Date("2022-08-22"),
    description: "",
    image: responsiveWebCertificate,
    credential: "",
  },
  */
