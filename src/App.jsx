import { useState } from "react";
import React from "react";
import "./App.css";
import Card from "./components/Card";
import FacultyCoordinator from "./components/FacultyCoordinator";
import members from "./data/clubMembers.json";

function App() {
  return (
    <>
      <div className="opacityContainer">
        <div className="mediaContainer flex p-0 m-0">
          <div data-aos="fade-down-right" className="polygon">
          <div className="content">
            <p>
              THE <span className="highlight1">TEAM</span> THAT
              <br />
              MAKES IT <span className="highlight2">POSSIBLE</span>
            </p>
          </div>
          </div>
        </div>
        <FacultyCoordinator />
        <div className="card-grid">
          {members.map((member, index) => (
            <Card
              key={index}
              name={member.name}
              position={member.position}
              linkedin={member.linkedin}
              photo={member.photo}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
