import React, { useEffect } from "react";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "./components/footer/Footer.jsx";
import Cards from "./components/Cards/Cards.jsx";
import SplineViewer from "./components/SplineViewer/SplineViewer.jsx";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const handleExploreClick = () => {
    document.getElementById("cards-section").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="Project">
      {/* page1 */}
      <div className="Page1">
        {/* title */}
        <div className="Title" data-aos="fade-right">
          <h1>RNXG PROJECTS</h1>
        </div>
        {/* subtitle */}
        <div className="Subtitle" data-aos="fade-right" data-aos-delay="300">
          <h3>The project that actually helps you to grow!</h3>
        </div>
        {/* paragraph */}
        <div data-aos="fade-right" data-aos-delay="500">
          <p>
            We seek to keep up with current innovations at all times. At RNXG,
            we combine scientific and technological ideas to provide technical
            solutions to real-world challenges.
          </p>
        </div>
        {/* button */}
        <button className="Button" data-aos="zoom-in" data-aos-delay="600" onClick={handleExploreClick}>
          Explore
        </button>
        {/* Spline 3D Viewer */}
        <div className="spline-wrapper">
          <SplineViewer />
        </div>
      </div>
      {/* page2 */}
      <div id="cards-section" className="Page2">
        <Cards />
      </div>
      <Footer/>
    </div>
  );
};

export default App;
