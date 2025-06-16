import { useState } from "react";
import React from 'react'
import "./App.css";
import Card from "./components/Card";
import FacultyCoordinator from "./components/FacultyCoordinator";
import Navbar from "./components/Navbar";


function App() {

  const cards = Array.from({ length: 9 }, (_, i) => `Card ${i + 1}`);

  return (
    <>
    <div className="opacityContainer">
      <Navbar />
    <FacultyCoordinator/>
      <div className="card-grid">
        {cards.map((title, index) => (
          <Card key={index} title={title} />
        ))}
      </div>
      </div>
    </>
  );
}

export default App;
