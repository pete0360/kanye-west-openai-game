import React from "react";
import "../../App.css";

export default function header() {
  return (
    <div className="flex justify-between h-1/6 pt-3">
      <div className="text-white flex flex-row md:flex-col items-start ml-2 text-xl md:text-xl">
        <span className="pr-3 md:pr-0">11</span>
        <span className="">HighScore</span>
      </div>
      <h1 className="text-white hidden md:block text-5xl">Kanyaint</h1>
      <div className="text-white flex flex-row-reverse md:flex-col md:items-end  mr-2 text-xl">
        <span className="">1</span>
        <span className="pr-3 md:pr-0">Score</span>
      </div>
    </div>
  );
}
