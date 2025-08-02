import { useState } from "react";
import React from "react";
import "./App.css";
import Card from "./components/Card";
import FacultyCoordinator from "./components/FacultyCoordinator";
import members from "./data/clubMembers.json";
import Mission from "./components/mission";
import Whoarewe from "./components/whoarewe";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
    <Navbar />
    <Whoarewe />
    <Mission />
      <div className="opacityContainer">
        <div className="mediaContainer flex items-center justify-center p-0 m-0 w-full">
          <div className="content flex items-center justify-center w-full">
              <img className="teamthat block w-full m-0" src='teamthat.png'/>
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
    </>
  );
}
export default App;
