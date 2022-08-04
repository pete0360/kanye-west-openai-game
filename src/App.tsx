import React from "react";
import "./App.css";
import Header from "./components/Header/header";
import Homescreen from "./components/HomeScreen/homescreen";
import HowToPlayButton from "./components/HowToPlayButton/howToPlayButton";
// import { useAppDispatch, useAppSelector } from "./app/hooks";
// import { getData } from "./features/quoteData/quoteDataSlice";

function App() {
  // const dispatch = useAppDispatch();

  // function loadData() {
  //   dispatch(getData());
  // }

  // loadData();

  return (
    <div className="App">
      <Header />
      <Homescreen />
      <HowToPlayButton />
    </div>
  );
}

export default App;
