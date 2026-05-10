const WorkExperience = ({ jobs }) => {
  return (
    <div className="mt-12">
      <h2 className="text-lg font-medium text-slate-200">Work Experience</h2>
      {jobs.map((job) => (
        <div key={job.id} className="mt-3">
          <h3 className="inline-block text-lg font-medium text-slate-200 hover:text-teal-400">
            {job.role} - {job.company}
          </h3>
          <p className="mt-1 text-sm">
            {job.startDate} - {job.endDate}
          </p>
          <div className="mt-3">
            {job.description.map((element, index) => (
              <p key={index}>• {element}</p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorkExperience;
