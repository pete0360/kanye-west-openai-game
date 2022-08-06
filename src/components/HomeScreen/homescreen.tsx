import React from "react";
import "../../App.css";

import QuoteTextComponent from "../QuoteTextComponent/quoteTextComponent";
import RealButton from "../RealButton/realButton";
import FakeButton from "../fakeButton/fakeButton";

import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { incremented } from "../../features/score/scoreSlice";
import { getNewQuote } from "../../features/currentData/currentDataSlice";
import { calculateIndexArray } from "../../features/calculateIndexes/calculateIndexes";
import { toggleGameOver } from "../../features/isGameOver/isGameOverSlice";
import {
  toggleCheckIcon,
  toggleXIcon,
} from "../../features/showIcon/showIconSlice";

import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/solid";

export default function HomeScreen() {
  const dispatch = useAppDispatch();
  const currentBool = useAppSelector((state) => state.currentData.real);
  const quoteData = useAppSelector((state) => state.quoteData);
  const checkIcon = useAppSelector((state) => state.icons.checkIcon);
  const xIcon = useAppSelector((state) => state.icons.xIcon);

  function receiveClick(val: string) {
    if (currentBool === JSON.parse(val)) {
      dispatch(toggleCheckIcon());
      setTimeout(() => {
        dispatch(incremented());
        dispatch(toggleCheckIcon());
        dispatch(getNewQuote(calculateIndexArray(quoteData.value)));
      }, 1000);
    } else {
      dispatch(toggleXIcon());
      setTimeout(() => {
        dispatch(toggleXIcon());
        dispatch(toggleGameOver());
        dispatch(getNewQuote(calculateIndexArray(quoteData.value)));
      }, 1000);
    }
  }

  return (
    <div className="container mx-auto h-3/5 flex flex-col justify-center ">
      <QuoteTextComponent />
      <div className="relative">
        {checkIcon && (
          <CheckCircleIcon className=" w-36 absolute z-10 -top-12 md:top-16 left-1/2 text-green-500 -translate-y-3/4 -translate-x-2/4" />
        )}
        {xIcon && (
          <XCircleIcon className=" w-36 absolute z-10 -top-12 md:top-16 left-1/2 text-red-500 -translate-y-3/4 -translate-x-2/4" />
        )}
      </div>
      <div className="flex flex-row justify-evenly">
        <FakeButton receiveClick={receiveClick} />
        <RealButton receiveClick={receiveClick} />
      </div>
    </div>
  );
}
