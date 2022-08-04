import React from "react";
import "./App.css";
import Header from "./components/Header/header";
import HomeScreen from "./components/HomeScreen/homescreen";
import HowToPlayButton from "./components/HowToPlayButton/howToPlayButton";
import GameOverScreen from "./components/gameOverScreen/GameOverScreen";

import { useAppSelector } from "./app/hooks";

function App() {
  const isGameOver = useAppSelector((state) => state.gameOver.isGameOver);

  return (
    <div className="App">
      {isGameOver ? (
        <GameOverScreen />
      ) : (
        <>
          <Header />
          <HomeScreen />
        </>
      )}
      <HowToPlayButton />
    </div>
  );
}

export default App;
