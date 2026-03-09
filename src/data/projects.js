import vhotel from "../assets/images/vhotel.png";
import viconify from "../assets/images/viconify.png";
import raiso from "../assets/images/raiso.png";

const projects = [
  {
    id: 1,
    title: "VhoTel",
    description:
      "A simple front-end website designed for a hotel, created as a final project for the Human and Computer Interaction course.",
    languages: ["HTML", "CSS"],
    image: vhotel,
    link: "https://github.com/joddy3/VhoTel",
  },
  {
    id: 2,
    title: "Viconify",
    description:
      "A full-stack video platform integrated with e-commerce, allowing users to upload videos and facilitate product sales within the same application. It also includes features such as posts and real-time chat for enhanced user interaction.",
    languages: ["Laravel", "Tailwind CSS", "JavaScript", "MySQL"],
    image: viconify,
    link: "https://github.com/joddy3/Viconify",
  },
  {
    id: 3,
    title: "RAiso",
    description:
      "A simple full-stack e-commerce website designed for selling stationery products, created as a final project for the Pattern Software Design course. The project follows a Domain-Driven Design approach to align the website's architecture with business logic.",
    languages: ["ASP.NET"],
    image: raiso,
    link: "https://github.com/joddy3/RAiso",
  },
];

export default projects;
