import { jobsData } from "../data/jobsData";
import JobCard from "../components/jobCard";
import Filters from "../components/filters";
import Navbar from "../components/navbar";
import { useEffect, useState } from "react";

export default function JobList() {

  const [savedJobs, setSavedJobs] = useState(() => {
  const stored = localStorage.getItem("savedJobs");
  return stored ? JSON.parse(stored) : [];
});

useEffect(() => {
  localStorage.setItem("savedJobs", JSON.stringify(savedJobs));
}, [savedJobs]);


  const [filters, setFilters] = useState({
    search: "",
    location: "",
    type: "",
    minStipend: ""
  });

  const filteredJobs = jobsData.filter((job) => {
    const matchSearch =
      job.role.toLowerCase().includes(filters.search.toLowerCase()) ||
      job.company.toLowerCase().includes(filters.search.toLowerCase());

    const matchLocation =
      !filters.location || job.location === filters.location;

    const matchType =
      !filters.type || job.type === filters.type;

    const matchStipend =
      !filters.minStipend || job.stipend >= Number(filters.minStipend);

    return matchSearch && matchLocation && matchType && matchStipend;
  });

  const handleSave = (job) => {
    const exists = savedJobs.some((j) => j.id === job.id);

    if (exists) {
        setSavedJobs(savedJobs.filter((j) => j.id !== job.id));
    } else {
        setSavedJobs([...savedJobs, job]);
    }
};


  return (
    <div className="max-w-5xl mx-auto p-4">
      <Filters filters={filters} setFilters={setFilters} />

      <div className="grid gap-4 md:grid-cols-2">
        {filteredJobs.map((job) => (
          <JobCard
            key={job.id}
            job={job}
            onSave={handleSave}
            isSaved={savedJobs.some((j) => j.id === job.id)}
          />
        ))}
      </div>

      {filteredJobs.length === 0 && (
        <p className="text-center text-gray-500 mt-6">
          No jobs found.
        </p>
      )}
    </div>
  );
}
