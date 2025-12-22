import { useEffect, useState } from "react";
import JobCard from "../components/jobCard";

export default function SavedJobs() {
  const [savedJobs, setSavedJobs] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem("savedJobs");
    setSavedJobs(stored ? JSON.parse(stored) : []);
  }, []);

  const handleUnsave = (job) => {
    const updated = savedJobs.filter((j) => j.id !== job.id);
    setSavedJobs(updated);
    localStorage.setItem("savedJobs", JSON.stringify(updated));
  };

  return (
    <div className="max-w-5xl mx-auto p-4">
      <h2 className="text-xl font-semibold mb-4">Saved Jobs</h2>

      {savedJobs.length === 0 ? (
        <p className="text-gray-500">No saved jobs yet.</p>
      ) : (
        <div className="grid gap-4 md:grid-cols-2">
          {savedJobs.map((job) => (
            <JobCard
              key={job.id}
              job={job}
              onSave={handleUnsave}
              isSaved={true}
            />
          ))}
        </div>
      )}
    </div>
  );
}
