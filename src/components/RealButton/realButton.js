import React from "react";
import "../../App.css";

export default function realButton({ receiveClick }) {
  return (
    <button
      value={true}
      onClick={(e) => receiveClick(e.target.value)}
      className="bg-realButtonColor hover:bg-realButtonColorHover text-white font-bold py-2 md:py-4 px-16 md:px-32 text-xl md:text-3xl"
    >
      Real
    </button>
  );
}
