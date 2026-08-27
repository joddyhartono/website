function Card({ title, description, languages, image, links }) {
  return (
    <div className="mt-6 p-3 md:flex md:flex-row-reverse md:items-center md:gap-3 lg:hover:bg-white/10 lg:hover:backdrop-blur-md lg:rounded-lg lg:hover:border lg:hover:border-white/20 lg:hover:transition-all lg:hover:duration-300">
      <div className="md:w-2/3">
        <div className="flex gap-3 items-center">
          <h3 className="inline-block text-lg font-medium text-slate-200 hover:text-teal-400 group">
            <a href={links.frontend}>
              {title} Frontend
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="8"
                height="8"
                fill="currentColor"
                className="bi bi-arrow-up-right inline ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:duration-200"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"
                />
              </svg>
            </a>
          </h3>
          <span className="text-slate-400">|</span>
          <h3 className="inline-block text-lg font-medium text-slate-200 hover:text-teal-400 group">
            <a href={links.backend}>
              {title} Backend
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="8"
                height="8"
                fill="currentColor"
                className="bi bi-arrow-up-right inline ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:duration-200"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"
                />
              </svg>
            </a>
          </h3>
        </div>
        <p className="mt-3">{description}</p>
        <div className="mt-3 flex gap-3 flex-wrap">
          {languages.map((language) => (
            <div
              key={language}
              className="bg-teal-900 w-fit px-4 py-2 rounded-full text-sm font-semibold text-teal-400"
            >
              {language}
            </div>
          ))}
        </div>
      </div>
      <div className="md:w-1/3">
        <img
          src={image}
          alt={title}
          className="mt-3 w-2/3 border-solid border-2 border-slate-200 rounded-md"
        />
      </div>
    </div>
  );
}

export default Card;
