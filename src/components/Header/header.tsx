import React from "react";
import "../../App.css";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { incremented, reset } from "../../features/score/scoreSlice";

export default function Header() {
  const scoreValue = useAppSelector((state) => state.score.value);
  const dispatch = useAppDispatch();

  function handleClick() {
    dispatch(incremented());
  }
  function resetScore() {
    dispatch(reset());
  }
  return (
    <div className="flex justify-between h-1/6 pt-3">
      <div className="text-white flex flex-row md:flex-col items-start ml-2 text-xl md:text-xl">
        <span className="pr-3 md:pr-0">11</span>
        <span onClick={resetScore} className="">
          HighScore
        </span>
      </div>
      <h1 className="text-white hidden md:block text-5xl">Kanyaint</h1>
      <div className="text-white flex flex-row-reverse md:flex-col md:items-end  mr-2 text-xl">
        <span className="">{scoreValue}</span>
        <span onClick={handleClick} className="pr-3 md:pr-0">
          Score
        </span>
      </div>
    </div>
  );
}
