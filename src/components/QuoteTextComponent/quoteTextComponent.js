import React from "react";
import "../../App.css";
import { useAppSelector } from "../../app/hooks";

function QuoteTextComponent() {
  const quote = useAppSelector((state) => state.currentData.value);
  return (
    <div className="text-center h-fit px-10 text-3xl text-white mb-28">
      {quote}
    </div>
  );
}

export default QuoteTextComponent;
