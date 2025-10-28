import React, { useEffect, useRef } from 'react';
import './WhyRNXG.css';

const WhyRNXG = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          if (!sectionRef.current) {
            ticking = false;
            return;
          }
          
          const sectionTop = sectionRef.current.getBoundingClientRect().top;
          const windowHeight = window.innerHeight;
          
          if (sectionTop < windowHeight * 0.75) {
            sectionRef.current.classList.add('visible');
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="why-rnxg" className="why-rnxg-section" ref={sectionRef}>
      <div className="background-elements">
        <img src="/cube.png" alt="" className="cubes-image" />
        <img src="/cline.png" alt="" className="cline-image" />
        <img src="/diamond.png" alt="" className="diamond-image" />
      </div>
      
      <div className="content-container">
        <div className="info-box">
          <h2>Why RNXG ?</h2>
          <p>
            Members of the RNXG, regardless of their fields, collaborate as a team to generate
            multidisciplinary technical expertise. Robotics for Next Generation, or RNXG, is the greatest
            platform for working on various issue statements and developing the best solutions
            for them. Artificial Intelligence, Machine Learning, Deep Learning, Embedded Systems,
            IoT, VLSI, Robotics, and other emerging technologies are explored in RNXG
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyRNXG;