import React from 'react';
import './Sections.css';
import WhyRNXG from '../WhyRNXG/WhyRNXG';
import Rmageddon from '../Rmageddon/Rmageddon';
import RmagGlimpse from '../RmagGlimpse/RmagGlimpse';
import MemberLove from '../MemberLove/MemberLove';

const Sections = () => {
  return (
    <main className="sections-container">
      <WhyRNXG />

      <section id="rmageddon" className="section rmageddon-section">
        <Rmageddon />
      </section>

      <section id="projects" className="section projects-section">
        <RmagGlimpse />
      </section>

      <section id="join" className="section join-section">
        <MemberLove />
      </section>
    </main>
  );
};

export default Sections;