import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="p-4 border-b flex gap-4">
      <Link to="/">Jobs</Link>
      <Link to="/saved">Saved Jobs</Link>
    </nav>
  );
}
