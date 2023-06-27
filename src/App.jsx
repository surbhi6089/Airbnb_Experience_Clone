import React from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Card from "./Components/Card";
import Data from "./Components/Data";
import "./App.css";


const App = () => {
  const card = Data.map(item=>{
    return (
      <Card
      key = {item.id}
      item = {item}
      />
    )
  })
  return (
    <div>
      <Header />
      <div className="body"> 
        <Hero />
        <div className="card-section">
          {card}
        </div>
      </div>
    </div>
  );
};

export default App;
