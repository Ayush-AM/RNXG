import { Link } from "react-router-dom";
import "./Navbar.css";
import NavLogo from "../assets/Nav-logo.png";

export default function Navbar() {
  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <Link to="/">
          <img src={NavLogo} alt="Logo" className="nav-logo" />
        </Link>
      </div>

      {/* Navigation Links */}
      <ul className="nav-links">
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/participations">PARTICIPATION</Link></li>
        <li><Link to="/projects">PROJECTS</Link></li>
        <li><Link to="/achievements">ACHIEVEMENTS</Link></li>
        <li><Link to="/about">ABOUT US</Link></li>
      </ul>
    </nav>
  );
}
