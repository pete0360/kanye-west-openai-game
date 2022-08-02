import React from "react";
import "../../App.css";

export default function howToPlayButton() {
  return (
    <div className="h-1/5 flex flex-col justify-end content-center">
      <button className="text-3xl text-howToPlayButtonColor">
        How to Play
      </button>
    </div>
  );
}
