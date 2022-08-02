import React from "react";
import "./App.css";
import Header from "./components/Header/header";
import Homescreen from "./components/HomeScreen/homescreen";
import HowToPlayButton from "./components/HowToPlayButton/howToPlayButton";

function App() {
  return (
    <div className="App">
      <Header />
      <Homescreen />
      <HowToPlayButton />
    </div>
  );
}

export default App;
