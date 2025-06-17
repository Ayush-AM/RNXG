import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="logo"></div>
        <div className="nav-items">
          <div>
            <a href="">HOME</a>
          </div>
          <div>
            <a href="">PARTICIPANTS</a>
          </div>
          <div>
            <a href="">PROJECTS</a>
          </div>
          <div>
            <a href="">ACHIEVEMENTS</a>
          </div>
          <div className="aboutus">
            <a href="">ABOUT US</a>
            <div className="underline border-3 border-white"></div>
          </div>
        </div>
      </div>
  );
};

export default Navbar;
