import React from "react";
import "../../App.css";

export default function realButton({ receiveClick }) {
  return (
    <button
      value={true}
      onClick={(e) => receiveClick(e.target.value)}
      className="bg-realButtonColor hover:bg-realButtonColorHover text-white font-bold py-2 px-28 text-xl"
    >
      Real
    </button>
  );
}
