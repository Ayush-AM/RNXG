import React, { useState, useEffect, useMemo } from 'react';
import './Hero.css';

const Hero = () => {
  const words = useMemo(() => ['INNOVATORS', 'DEVELOPERS', 'CREATORS', 'RNXGIANS'], []);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  
  useEffect(() => {
    const wordInterval = setInterval(() => {
      setIsVisible(false);
      
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
        setIsVisible(true);
      }, 500); // Wait for fade out before changing word
    }, 2000); // Change word every 2 seconds
    
    return () => clearInterval(wordInterval);
  }, [words]);

  const handleExploreClick = () => {
    try {
      const aboutSection = document.getElementById('why-rnxg');
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
      }
    } catch (error) {
      console.warn('Scroll navigation failed:', error);
    }
  };

  return (
    <section className="hero">
      <div className="hero-glow"></div>
      <div className="hero-content">
        <div className="hero-text">
          <h1>
            Where we Build
            <div className="dynamic-word-container">
              <span className={`dynamic-word ${isVisible ? 'visible' : ''}`}>
                {words[currentIndex]}
              </span>
            </div>
          </h1>
          <button className="explore-btn" onClick={handleExploreClick}>
            Explore
          </button>
        </div>
        <div className="hero-image">
          <img src="/rover.png" alt="RNXG Rover" />
        </div>
      </div>
    </section>
  );
};

export default Hero;