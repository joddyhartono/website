import kanban from "../assets/images/kanban.png";
import noir from "../assets/images/noir.png";

const projects = [
  {
    id: 1,
    title: "Kanban",
    description: "A full-stack kanban board application for task management",
    languages: ["React.js", "Tailwind CSS", "ASP.NET"],
    image: kanban,
    links: {
      frontend: "https://github.com/joddyhartono/kanban-frontend",
      backend: "https://github.com/joddyhartono/kanban-backend",
    },
  },
  {
    id: 2,
    title: "Noir",
    description: "A full-stack ecommerce website for online shopping",
    languages: ["React.js", "Tailwind CSS", "ASP.NET"],
    image: noir,
    links: {
      frontend: "https://github.com/joddyhartono/ecommerce-frontend",
      backend: "https://github.com/joddyhartono/ecommerce-backend",
    },
  },
];

export default projects;
