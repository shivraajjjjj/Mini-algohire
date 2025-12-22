export default function Filters({ filters, setFilters }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow mb-4 flex flex-wrap gap-4">

      <input
        type="text"
        placeholder="Search role or company"
        value={filters.search}
        onChange={(e) =>
          setFilters({ ...filters, search: e.target.value })
        }
        className="border px-3 py-2 rounded w-64"
      />

      <select
        value={filters.location}
        onChange={(e) =>
          setFilters({ ...filters, location: e.target.value })
        }
        className="border px-3 py-2 rounded"
      >
        <option value="">All Locations</option>
        <option value="Remote">Remote</option>
        <option value="Bangalore">Bangalore</option>
        <option value="Delhi">Delhi</option>
        <option value="Hyderabad">Hyderabad</option>
        <option value="Pune">Pune</option>
        <option value="Mumbai">Mumbai</option>
        <option value="Jaipur">Jaipur</option>
      </select>

      <select
        value={filters.type}
        onChange={(e) =>
          setFilters({ ...filters, type: e.target.value })
        }
        className="border px-3 py-2 rounded"
      >
        <option value="">All Types</option>
        <option value="Internship">Internship</option>
        <option value="Full-time">Full-time</option>
      </select>

      <input
        type="number"
        placeholder="Min stipend"
        value={filters.minStipend}
        onChange={(e) =>
          setFilters({ ...filters, minStipend: e.target.value })
        }
        className="border px-3 py-2 rounded w-32"
      />
    </div>
  );
}
