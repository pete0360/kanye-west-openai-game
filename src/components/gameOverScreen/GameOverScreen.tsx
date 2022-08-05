import React from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { toggleGameOver } from "../../features/isGameOver/isGameOverSlice";
import { reset } from "../../features/score/scoreSlice";
import { newHighScore } from "../../features/highScore/highScoreSlice";

export default function GameOverScreen() {
  const dispatch = useAppDispatch();
  const score = useAppSelector((state) => state.score.value);

  const scoreRankingString = () => {
    if (score <= 5) return "Kanye Who?";
    else if (score <= 10) return "Casual Fan";
    else if (score > 10) return "Real Life Blade Runner";
  };

  const rank = scoreRankingString();

  function onClickHandle() {
    dispatch(newHighScore(score));
    dispatch(reset());
    dispatch(toggleGameOver());
  }

  return (
    <div className="h-4/6 flex flex-col justify-center content-center text-center max-w-5xl mx-auto">
      <span className=" text-8xl text-white font-bold mt-6">{score}</span>
      <div className="text-white text-5xl font-semibold my-5">{rank}</div>
      <button
        onClick={onClickHandle}
        className="bg-fakeButtonColor hover:bg-fakeButtonColorHover text-white mt-14 my-12 mx-auto font-bold py-4 text-3xl w-3/5"
      >
        Play Again
      </button>
      <div className="flex mt-6 flex-col">
        <a
          className="w-3/5 mx-auto"
          href="https://www.linkedin.com/in/benpeterkins/"
        >
          <button className="bg-linkedInButton hover:bg-linkedInButtonHover text-white my-3 mx-auto font-bold py-4 text-3xl w-full">
            LinkedIn
          </button>
        </a>
        <a
          className="w-3/5 mx-auto"
          href="https://github.com/pete0360/pete0360"
        >
          <button className="bg-gitHubButton hover:bg-gitHubButtonHover text-white my-1 mx-auto font-bold py-4 text-3xl w-full">
            GitHub
          </button>
        </a>
      </div>
    </div>
  );
}
