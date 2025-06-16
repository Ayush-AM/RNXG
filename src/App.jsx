import { useState } from "react";
import React from "react";
import "./App.css";
import Card from "./components/Card";
import FacultyCoordinator from "./components/FacultyCoordinator";
import Navbar from "./components/Navbar";
import members from "./data/clubMembers.json";

function App() {
  return (
    <>
      <div className="opacityContainer">
        <Navbar />
        <FacultyCoordinator />
        <div className="card-grid">
          {members.map((member, index) => (
            <Card
              key={index}
              name={member.name}
              department={member.department}
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
