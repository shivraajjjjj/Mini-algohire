import { BrowserRouter, Routes, Route } from "react-router-dom";
import JobList from "./pages/jobList";
import SavedJobs from "./pages/savedJobs";
import Navbar from "./components/navbar";

export default function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<JobList />} />
        <Route path="/saved" element={<SavedJobs />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}
