import React from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { toggleGameOver } from "../../features/isGameOver/isGameOverSlice";
import { reset } from "../../features/score/scoreSlice";
import { newHighScore } from "../../features/highScore/highScoreSlice";

export default function GameOverScreen() {
  const dispatch = useAppDispatch();
  const score = useAppSelector((state) => state.score.value);

  function onClickHandle() {
    dispatch(newHighScore(score));
    dispatch(reset());
    dispatch(toggleGameOver());
  }

  return (
    <div className="h-4/5 flex flex-col justify-center content-center text-center max-w-5xl mx-auto">
      <span className=" text-8xl text-white font-bold">{score}</span>
      <div className="text-white text-5xl font-semibold my-5">Casual Fan</div>
      <button
        onClick={onClickHandle}
        className="bg-fakeButtonColor hover:bg-fakeButtonColorHover text-white mt-14 my-12 mx-auto font-bold py-4 text-3xl w-3/5"
      >
        Play Again
      </button>
      <div className="flex mt-6 flex-col">
        <button className="bg-linkedInButton hover:bg-linkedInButtonHover text-white my-3 mx-auto font-bold py-4 text-3xl w-3/5">
          LinkedIn
        </button>
        <button className="bg-gitHubButton hover:bg-gitHubButtonHover text-white my-1 mx-auto font-bold py-4 text-3xl w-3/5">
          GitHub
        </button>
      </div>
    </div>
  );
}
