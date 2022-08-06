import React from "react";
import "./App.css";
import Header from "./components/Header/header";
import HomeScreen from "./components/HomeScreen/homescreen";
import HowToPlayButton from "./components/HowToPlayButton/howToPlayButton";
import GameOverScreen from "./components/gameOverScreen/GameOverScreen";
import DropDownComponent from "./components/dropDownComponent/DropDownComponent";

import { useAppSelector } from "./app/hooks";

function App() {
  const isGameOver = useAppSelector((state) => state.gameOver.isGameOver);
  const isDropDown = useAppSelector((state) => state.dropDown.isDropDown);

  return (
    <div className="App md:p-3">
      {isDropDown && <DropDownComponent />}
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
