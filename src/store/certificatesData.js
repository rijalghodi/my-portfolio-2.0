// import responsiveWebCertificate from "../assets/image/certificates/web-design-fcc.png";
// import javascriptCertificate from "../assets/image/certificates/javascript-fcc.png";
import codecademyLogo from "../assets/image/logos/codecademy.jpeg";
import freecodecampLogo from "../assets/image/logos/freecodecamp.jpeg";

/*
Template:
  {
    title: "",
    issuedBy: { company: "Codecademy", url: "www.codecademy.com", companyLogo: codecademyLogo },
    date: new Date("2022-10-01"),
    description: "",
    courseUrl: "",
    credential: "",
  },
*/

const certificatesData = [
  {
    title: "Front-End Engineer Career Path",
    issuedBy: { company: "Codecademy", url: "www.codecademy.com", companyLogo: codecademyLogo },
    date: new Date("2022-10-28"),
    description: "Learn to build beautiful, functional, and fast website with the front-end framework",
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
    description: "Learn Basic of Javascript and data structures",
    courseUrl: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/",
    credential: "https://www.freecodecamp.org/certification/rijalghodi/javascript-algorithms-and-data-structures",
  },
  {
    title: "Learn Bootstrap Course",
    issuedBy: { company: "Codecademy", url: "www.codecademy.com", companyLogo: codecademyLogo },
    date: new Date("2022-10-30"),
    description: "Learn how to use one of the most popular front-end frameworks, Bootstrap 4",
    courseUrl: "https://www.codecademy.com/learn/learn-bootstrap",
    credential: "https://www.codecademy.com/profiles/rijalghodi/certificates/0595479d03627a8cb816b069000e4d06",
  },
  {
    title: "Learn React Native Course",
    issuedBy: { company: "Codecademy", url: "www.codecademy.com", companyLogo: codecademyLogo },
    date: new Date("2022-10-15"),
    description: "Build mobile apps with JavaScript and React, using Expo and React Native",
    courseUrl: "https://www.codecademy.com/learn/learn-react-native",
    credential: "https://www.codecademy.com/profiles/rijalghodi/certificates/458aef4eef5f5130685423fc15e6493d",
  },
];

export default certificatesData;
