import React from "react";
import "../../App.css";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { incremented, reset } from "../../features/score/scoreSlice";
import { newHighScore } from "../../features/highScore/highScoreSlice";

export default function Header() {
  const scoreValue = useAppSelector((state) => state.score.value);
  const highScoreValue = useAppSelector((state) => state.highScore.value);

  const dispatch = useAppDispatch();

  function handleClick() {
    dispatch(incremented());
  }
  function resetScore() {
    dispatch(newHighScore(scoreValue));
    dispatch(reset());
  }
  return (
    <div className="flex justify-between h-1/6 pt-3">
      <div className="text-white flex flex-row md:flex-col items-start ml-2 text-3xl md:text-3xl">
        <span className="pr-3 md:pr-0">{highScoreValue}</span>
        <span onClick={resetScore} className="">
          HighScore
        </span>
      </div>
      <h1 className="text-white hidden md:block text-5xl">Kanyaint</h1>
      <div className="text-white flex flex-row-reverse md:flex-col md:items-end  mr-2 text-3xl">
        <span className="">{scoreValue}</span>
        <span onClick={handleClick} className="pr-3 md:pr-0">
          Score
        </span>
      </div>
    </div>
  );
}
