import { useState } from "react";
import "./App.css";
import Card from "./assets/components/Card";

function App() {
  const cards = Array.from({ length: 39 }, (_, i) => `Card ${i + 1}`);

  return (
    <>
      <div className="card-grid">
        {cards.map((title, index) => (
          <Card key={index} title={title} />
        ))}
      </div>
    </>
  );
}

export default App;
