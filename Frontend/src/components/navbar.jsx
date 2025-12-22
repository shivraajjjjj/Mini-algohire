import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="p-4 border-b flex gap-4">

      <NavLink to="/">Jobs</NavLink>
      <NavLink to="/saved">Saved Jobs</NavLink>
    </nav>
  );
}
