import React, { useEffect, useRef } from 'react';
import './Footer.css';

const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && footerRef.current) {
          footerRef.current.classList.add("visible");
        }
      });
    }, {
      threshold: 0.1
    });

    const currentRef = footerRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <footer className="footer" ref={footerRef}>
      <div className="footer-content">

        {/* LEFT FOOTER */}
        <div className="footer-left">
          <div className="footer-header-row">
            <h2>RNXG</h2>
            <p>Robotics for Next Generation provides the best platform to work on different problem statements and to create the best solutions for them.</p>
          </div>
          <div className="footer-copyright desktop-only">
            <p>© {new Date().getFullYear()} RNXG. All Rights Reserved.</p>
          </div>
        </div>

        {/* RIGHT FOOTER */}
        <div className="footer-right">
          <div className="footer-logo-circle">
            <img src="https://avatars.githubusercontent.com/u/79443355?s=200&v=4" alt="RNXG Logo" className="center-logo" />
            <div className="circle-icons">
              <a href="https://www.linkedin.com/company/rnxg/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" />
              </a>
              <a href="https://twitter.com/RNXG_Tech" target="_blank" rel="noopener noreferrer" title="Twitter">
                <img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="Twitter" />
              </a>
              <a href="https://www.youtube.com/@rnxg" target="_blank" rel="noopener noreferrer" title="YouTube">
                <img src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png" alt="YouTube" />
              </a>
              <a href="https://github.com/RNXG" target="_blank" rel="noopener noreferrer" title="GitHub">
                <img src="https://cdn-icons-png.flaticon.com/512/733/733553.png" alt="GitHub" />
              </a>
              <a href="https://www.instagram.com/rnxg.in/" target="_blank" rel="noopener noreferrer" title="Instagram">
                <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" />
              </a>
            </div>
          </div>
          <p className="developed-by">Designed & Developed by Team RNXG</p>
        </div>
        
        {/* MOBILE COPYRIGHT - Separate from footer-right to ensure it appears at the bottom */}
        <div className="footer-copyright mobile-only">
          <p>© {new Date().getFullYear()} RNXG. All Rights Reserved.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;