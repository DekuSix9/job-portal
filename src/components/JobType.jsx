const JobType = ({ jobs, selectedJobType, setSelectedJobType }) => {
  const uniqueJobTypes = ["All", ...new Set(jobs.map(job => job.jobType))];

  return (
    <div>
      <div className="flex justify-between text-gray-500 mb-2">
        <h1>Job Type</h1>
        <button onClick={() => setSelectedJobType("All")}>Clear</button>
      </div>

      {uniqueJobTypes.map(type => {
        const count =
          type === "All"
            ? jobs.length
            : jobs.filter(job => job.jobType === type).length;

        return (
          <button
            key={type}
            onClick={() => setSelectedJobType(type)}
            className={`flex justify-between w-full py-0.5 ${
              selectedJobType === type ? "text-[#84BD00]" : "text-black"
            }`}
          >
            <span>{type}</span>
            <span>({count})</span>
          </button>
        );
      })}
    </div>
  );
};

export default JobType;
