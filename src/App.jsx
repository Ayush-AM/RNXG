import { useState } from "react";
import React from 'react'
import "./App.css";
import Card from "./assets/components/Card";
import MainCard from "./assets/components/facultyCoordinator"


function App() {

  const cards = Array.from({ length: 9 }, (_, i) => `Card ${i + 1}`);

  return (
    <>
    <MainCard />
      <div className="card-grid">
        {cards.map((title, index) => (
          <Card key={index} title={title} />
        ))}
      </div>
    </>
  );
}

export default App;
