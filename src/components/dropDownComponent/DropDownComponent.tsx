import React from "react";
import { useAppDispatch } from "../../app/hooks";
import { toggleDropDown } from "../../features/isDropDown/isDropDownSlice";

export default function DropDownComponent() {
  const dispatch = useAppDispatch();

  return (
    <>
      <div
        onClick={() => dispatch(toggleDropDown())}
        className="w-screen h-screen absolute inset-0 bg-black z-40 opacity-[.7]"
      ></div>
      <div className="bg-dropDownCard absolute z-50 w-4/5 h-3/5 md:w-3/5 md:h-3/5  left-1/2 -translate-x-1/2 translate-y-1/2 -top-24 rounded-lg text-center flex flex-col justify-start p-2">
        <div className=" font-sans text-4xl font-semibold my-12">
          How to play
        </div>
        <div className=" font-sans text-xl font-light">
          You'll be given a quote. It is either made by Kanye West himself, or a
          bot that has been modeled to be like Kanye West.
        </div>
        <div className=" font-sans text-xl font-light mt-4">
          By guessing correctly, you get points. If you guess wrong, however,
          then it's game over.
        </div>
      </div>
    </>
  );
}
