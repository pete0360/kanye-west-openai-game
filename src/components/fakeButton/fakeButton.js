import React from "react";
import "../../App.css";

export default function FakeButton({ receiveClick }) {
  return (
    <button
      value={false}
      onClick={(e) => receiveClick(e.target.value)}
      className="bg-fakeButtonColor hover:bg-fakeButtonColorHover text-white font-bold py-2 px-16 md:px-32 text-xl md:text-3xl"
    >
      Fake
    </button>
  );
}
