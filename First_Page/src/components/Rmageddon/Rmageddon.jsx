import React from 'react';
import './Rmageddon.css';

const Rmageddon = () => {
  return (
    <div className="rmageddon-container">
      <div className="rmageddon-content-left">
        <h3 className="rmageddon-subtitle">What we organize</h3>
        <h2 className="rmageddon-title">Rmageddon</h2>
        <p className="rmageddon-description">
          RNXG not only participate in competitions, but also hosts its own events. 
          Let's have a look at some of the events that we have arranged.
        </p>

        <a
          href="https://rmageddon2025.tech"
          className="rmageddon-explore-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          Explore
        </a>

      </div>
      <div className="rmageddon-content-right">
        <img src="/rmageddon.png" alt="Rmageddon Logo" className="rmageddon-logo" />
        <div className="rmageddon-glow"></div>
      </div>
    </div>
  );
};

export default Rmageddon;