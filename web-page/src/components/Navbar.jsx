  // import { Link } from "react-router-dom";
  // import "./Navbar.css";
  // import NavLogo from "../assets/Nav-logo.png";

  // export default function Navbar() {
  //   return (
  //     <nav className="navbar">
      
  //       <div className="logo">
  //         <Link to="/">
  //           <img src={NavLogo} alt="Logo" className="nav-logo" />
  //         </Link>
  //       </div>

      
  //       <ul className="nav-links">
  //         <li><Link to="/">HOME</Link></li>
  //         <li><Link to="/participations">PARTICIPATION</Link></li>
  //         <li><Link to="/projects">PROJECTS</Link></li>
  //         <li><Link to="/achievements">ACHIEVEMENTS</Link></li>
  //         <li><Link to="/about">ABOUT US</Link></li>
  //       </ul>
  //     </nav>
  //   );
  // }



// -------------------------------------------------------------------- 
  // import React, { useState, useEffect, useRef } from "react";
  // import {Pivot as Hamburger} from 'hamburger-react'
  // import "./Navbar.css";
  // import { Link, useLocation } from "react-router-dom";

  // const Navbar = () => {
  //   const location = useLocation();
  //   const [isOpen, setOpen] = useState(false);
  //   const menuRef = useRef(null);

  //   const isActive = (path) => {
  //     if (path === "/") return location.pathname === "/";
  //     return location.pathname === path || location.pathname.startsWith(path + "/");
  //   };

  //   const handleToggle = (toggled) => {
  //     setOpen(toggled);
  //   };

  //   const handleLinkClick = () => {
  //     setOpen(false); // Close menu when a link is clicked
  //   };

  //   // Close menu when route changes
  //   useEffect(() => {
  //     setOpen(false);
  //   }, [location.pathname]);

  //   // Prevent body scroll when menu is open
  //   useEffect(() => {
  //     if (isOpen) {
  //       document.body.style.overflow = 'hidden';
  //     } else {
  //       document.body.style.overflow = '';
  //     }

  //     return () => {
  //       document.body.style.overflow = '';
  //     };
  //   }, [isOpen]);

  //   // Close menu when clicking outside
  //   useEffect(() => {
  //     const handleClickOutside = (event) => {
  //       if (menuRef.current && !menuRef.current.contains(event.target)) {
  //         setOpen(false);
  //       }
  //     };

  //     if (isOpen) {
  //       document.addEventListener('mousedown', handleClickOutside);
  //     }

  //     return () => {
  //       document.removeEventListener('mousedown', handleClickOutside);
  //     };
  //   }, [isOpen]);

  //   const navItems = [
  //     { path: "/", label: "Home" },
  //     { path: "/our-work", label: "Our Work" },
  //     { path: "/about-us", label: "About Us" },
  //     { path: "/careers", label: "Careers" },
  //     { path: "/contact-us", label: "Contact Us" },
  //   ];

  //   return (
  //     <div className="navbar">
  //       <div className="logo">
  //         <Link to="/">
  //         <img src="/logo.png" alt="BeeStack logo" />
  //         </Link>
  //       </div>
  //       <Link to="/">
  //       <div className="navname">BeeStack</div>
  //       </Link>

  //       {/* Desktop Navigation */}
  //       <div className="nav-items desktop-nav">
  //         {navItems.map((item) => (
  //           <div key={item.path} className={`nav-item ${isActive(item.path) ? "active" : ""}`}>
  //             <Link to={item.path}>{item.label}</Link>
  //             <div className={`underline ${isActive(item.path) ? "show" : ""}`}></div>
  //           </div>
  //         ))}
  //       </div>

  //       {/* Mobile Hamburger Menu */}
  //       <div className="mobile-menu" ref={menuRef}>
  //         <Hamburger
  //           toggled={isOpen}
  //           toggle={setOpen}
  //           size={28}
  //           direction="right"
  //           duration={0.4}
  //           distance="md"
  //           color="#0b1220"
  //           easing="ease-in"
  //           onToggle={handleToggle}
  //           rounded={false}
  //           label="Show menu"
  //           hideOutline={true}
  //         />
          
  //         {/* Mobile Navigation Menu */}
  //         <div className={`mobile-nav-items ${isOpen ? 'show' : ''}`}>
  //           {navItems.map((item) => (
  //             <div key={item.path} className={`mobile-nav-item ${isActive(item.path) ? "active" : ""}`}>
  //               <Link to={item.path} onClick={handleLinkClick}>
  //                 {item.label}
  //               </Link>
  //               {isActive(item.path) && <div className="mobile-underline"></div>}
  //             </div>
  //           ))}
  //         </div>
  //       </div>
  //     </div>
  //   );
  // };

  // export default Navbar;

  import React, { useState, useEffect, useRef } from "react";
import { Pivot as Hamburger } from "hamburger-react";
import { Link, useLocation } from "react-router-dom";
import NavLogo from "../assets/Nav-logo.png";
import "./Navbar.css";

export default function Navbar() {
  const location = useLocation();
  const [isOpen, setOpen] = useState(false);
  const menuRef = useRef(null);

  const navLinks = [
    { path: "/", label: "HOME" },
    { path: "/participations", label: "PARTICIPATION" },
    { path: "/projects", label: "PROJECTS" },
    { path: "/achievements", label: "ACHIEVEMENTS" },
    { path: "/about", label: "ABOUT US" },
  ];

  const isActive = (path) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  const closeMenu = () => setOpen(false);

  useEffect(() => closeMenu(), [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [isOpen]);

  useEffect(() => {
    const clickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    if (isOpen) document.addEventListener("mousedown", clickOutside);
    return () => document.removeEventListener("mousedown", clickOutside);
  }, [isOpen]);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <Link to="/">
          <img src={NavLogo} alt="Logo" className="nav-logo" />
        </Link>
      </div>

      {/* Desktop Links */}
      <ul className="nav-links desktop-only">
        {navLinks.map((item) => (
          <li key={item.path}>
            <Link className={isActive(item.path) ? "active" : ""} to={item.path}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Menu */}
      <div className="mobile-menu" ref={menuRef}>
        <Hamburger
          toggled={isOpen}
          toggle={setOpen}
          size={26}
          color="#fff"
          direction="right"
        />

        {/* Mobile Nav */}
        <div className={`mobile-nav ${isOpen ? "show" : ""}`}>
          {navLinks.map((item) => (
            <div key={item.path} className="mobile-nav-item">
              <Link
                className={isActive(item.path) ? "active" : ""}
                to={item.path}
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}
