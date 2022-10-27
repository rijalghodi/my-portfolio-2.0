import responsiveWebCertificate from "../assets/image/certificates/web-design-fcc.png";
import javascriptCertificate from "../assets/image/certificates/javascript-fcc.png";

const certificatesData = [
  {
    title: "Responsive Web Design",
    issuedBy: { company: "freecodecamp", url: "www.freecodecamp.org" },
    date: new Date("2022-08-22"),
    description: "Learn basics of HTML and CSS, including CSS variables, accessibility, and responsive layout.",
    image: responsiveWebCertificate,
    credential: "https://www.freecodecamp.org/certification/rijalghodi/javascript-algorithms-and-data-structures",
  },
  {
    title: "JavaScript Algorithms and Data Structures",
    issuedBy: { company: "freecodecamp", url: "www.freecodecamp.org" },
    date: new Date("2022-09-22"),
    description: "Learn basics of HTML and CSS, including CSS variables, accessibility, and responsive layout.",
    image: javascriptCertificate,
    credential: "https://www.freecodecamp.org/certification/rijalghodi/javascript-algorithms-and-data-structures",
  },
];

export default certificatesData;
