import React from "react";
import "../../App.css";
import { useAppSelector } from "../../app/hooks";

function QuoteTextComponent() {
  const quote = useAppSelector((state) => state.currentData.value);
  return (
    <div className="text-center h-3/5 md:h-1/4 px-10 text-3xl py-6 text-white mb-10">
      {quote}
    </div>
  );
}

export default QuoteTextComponent;
