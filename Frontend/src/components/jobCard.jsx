export default function JobCard({ job, onSave, isSaved }) {
  return (
    <div className="border rounded-lg p-4 shadow-sm bg-white">
      <h3 className="text-lg font-semibold">{job.role}</h3>
      <p className="text-gray-600">{job.company}</p>

      <div className="flex gap-4 text-sm text-gray-500 mt-2">
        <span>{job.location}</span>
        <span>₹{job.stipend}/month</span>
        <span>{job.type}</span>
      </div>

      <div className="flex flex-wrap gap-2 mt-3">
        {job.tags.map((tag, index) => (
          <span
            key={index}
            className="bg-gray-100 text-sm px-2 py-1 rounded"
          >
            {tag}
          </span>
        ))}
      </div>

      <button
        onClick={() => onSave(job)}
        className={`mt-4 px-4 py-2 rounded text-sm ${
          isSaved
            ? "bg-green-500 text-white"
            : "bg-blue-500 text-white"
        }`}
      >
        {isSaved ? "Saved" : "Save"}
      </button>
    </div>
  );
}
