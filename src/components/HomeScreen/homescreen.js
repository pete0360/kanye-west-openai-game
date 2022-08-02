import React from "react";
import "../../App.css";

import QuoteTextComponent from "../QuoteTextComponent/quoteTextComponent";
import RealButton from "../RealButton/realButton";
import FakeButton from "../fakeButton/fakeButton";

export default function Homescreen() {
  return (
    <div className="container mx-auto h-3/5 flex flex-col justify-center ">
      <QuoteTextComponent />
      <div></div>
      <div className="flex flex-row justify-evenly">
        <FakeButton />
        <RealButton />
      </div>
    </div>
  );
}
