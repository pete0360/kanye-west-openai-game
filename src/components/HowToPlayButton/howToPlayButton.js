import React from "react";
import "../../App.css";

import { useAppDispatch } from "../../app/hooks";
import { toggleDropDown } from "../../features/isDropDown/isDropDownSlice";

export default function HowToPlayButton() {
  const dispatch = useAppDispatch();

  return (
    <div className="h-1/6 m:h-1/5 flex flex-col justify-end content-center">
      <button
        onClick={() => dispatch(toggleDropDown())}
        className="text-3xl text-howToPlayButtonColor"
      >
        How to Play
      </button>
    </div>
  );
}
