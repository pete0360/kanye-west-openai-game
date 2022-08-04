import React from "react";
import "../../App.css";

export default function FakeButton({ receiveClick }) {
  return (
    <button
      value={false}
      onClick={(e) => receiveClick(e.target.value)}
      className="bg-fakeButtonColor hover:bg-fakeButtonColorHover text-white font-bold py-2 px-28 text-xl"
    >
      Fake
    </button>
  );
}
