import React from "react";
import "../../App.css";

import QuoteTextComponent from "../QuoteTextComponent/quoteTextComponent";
import RealButton from "../RealButton/realButton";
import FakeButton from "../fakeButton/fakeButton";

import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { incremented, reset } from "../../features/score/scoreSlice";
import { getNewQuote } from "../../features/currentData/currentDataSlice";
import { calculateIndexArray } from "../../features/calculateIndexes/calculateIndexes";
import { newHighScore } from "../../features/highScore/highScoreSlice";

export default function Homescreen() {
  const dispatch = useAppDispatch();
  const currentBool = useAppSelector((state) => state.currentData.real);
  const quoteData = useAppSelector((state) => state.quoteData);
  const currentScore = useAppSelector((state) => state.score.value);

  function receiveClick(val: string) {
    if (currentBool === JSON.parse(val)) {
      dispatch(incremented());
    } else {
      dispatch(newHighScore(currentScore));
      dispatch(reset());
    }
    dispatch(getNewQuote(calculateIndexArray(quoteData.value)));
  }

  return (
    <div className="container mx-auto h-3/5 flex flex-col justify-center ">
      <QuoteTextComponent />
      <div></div>
      <div className="flex flex-row justify-evenly">
        <FakeButton receiveClick={receiveClick} />
        <RealButton receiveClick={receiveClick} />
      </div>
    </div>
  );
}
