import { NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

function AtomLogo() {
  return (
    <svg width="28" height="28" viewBox="-11.5 -10.23174 23 20.46348" xmlns="http://www.w3.org/2000/svg">
      <circle cx="0" cy="0" r="2.05" fill="var(--accent)" />
      <g stroke="var(--accent)" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  );
}

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <AtomLogo />
        <span>Basmachi</span>
      </div>
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
