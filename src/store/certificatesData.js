import responsiveWebCertificate from "../assets/image/certificates/web-design-fcc.png";
import javascriptCertificate from "../assets/image/certificates/javascript-fcc.png";
import codecademyLogo from "../assets/image/logos/codecademy.jpeg";
import freecodecamp from "../assets/image/logos/freecodecamp.jpeg";

const certificatesData = [
  {
    title: "Front-End Engineer Career Path",
    issuedBy: { company: "Codecademy", url: "www.codecademy.com", companyLogo: codecademyLogo },
    date: new Date("2022-10-28"),
    description: "",
    image: responsiveWebCertificate,
    credential: "https://www.codecademy.com/profiles/rijalghodi/certificates/5f85dd867b67b60014ac9ea3",
  },
  {
    title: "Responsive Web Design",
    issuedBy: { company: "freecodecamp", url: "www.freecodecamp.org", companyLogo: freecodecamp },
    date: new Date("2022-08-22"),
    description: "Learn basics of HTML and CSS, including CSS variables, accessibility, and responsive layout.",
    image: responsiveWebCertificate,
    credential: "https://www.freecodecamp.org/certification/rijalghodi/javascript-algorithms-and-data-structures",
  },
  {
    title: "JavaScript Algorithms and Data Structures",
    issuedBy: { company: "freecodecamp", url: "www.freecodecamp.org", companyLogo: freecodecamp },
    date: new Date("2022-09-22"),
    description: "Learn basics of HTML and CSS, including CSS variables, accessibility, and responsive layout.",
    image: javascriptCertificate,
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
