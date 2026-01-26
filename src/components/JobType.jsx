
const JobType = ({ jobs, selectedJobType, setSelectedJobType }) => {
  const uniqueJobTypes = [...new Set(jobs.map(job => job.jobType))];

  return (
    <div>
      <div className="flex justify-between text-gray-500 mb-2">
        <h1>Job Type</h1>
        <button onClick={() => setSelectedJobType("")}>Clear</button>
      </div>

      {uniqueJobTypes.map(type => (
        <button
          key={type}
          onClick={() => setSelectedJobType(type)}
          className={`flex  w-full py-0.5 ${
            selectedJobType === type ? "text-[#84BD00]" : "text-black"
          }`}>
          <span>{type}</span>
          <span>
            ({jobs.filter(job => job.jobType === type).length})
          </span>
        </button>
      ))}
    </div>
  );
};

export default JobType;
