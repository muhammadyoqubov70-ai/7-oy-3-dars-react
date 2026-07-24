import { NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-links">
        <NavLink to="/" end className={({ isActive }) => isActive ? "active" : ""}>
          Home
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>
          About
        </NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>
          Contact
        </NavLink>
      </div>
      <ThemeToggle />
    </nav>
  );
}
