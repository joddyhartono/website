import Card from "./Card";

function Experience({ projects }) {
  return (
    <div className="mt-12">
      <h2 className="text-lg font-medium text-slate-200">Project Experience</h2>
      {projects.map((project) => (
        <Card
          key={project.id}
          title={project.title}
          description={project.description}
          languages={project.languages}
          image={project.image}
          link={project.link}
        />
      ))}
      <h3 className="mt-6 inline-block text-lg font-medium text-slate-200 hover:underline underline-offset-4 decoration-teal-400 group">
        <a href="https://github.com/joddyhartono">
          View Full Project Archive
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-arrow-right inline ml-2 group-hover:translate-x-1/2 duration-200"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
            />
          </svg>
        </a>
      </h3>
    </div>
  );
}

export default Experience;
