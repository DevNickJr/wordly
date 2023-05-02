import React, { useCallback, useEffect } from "react";
import clsx from "clsx";
import { keys } from "./../constants/index";

const GameKeyboard = ({
  handleInput = (key) => {},
  handleDelete = () => {},
  handleSubmit = () => {},
  correctLetters = "",
  wrongLetters = "",
  almostCorrectLetters = "",
}: {
  handleInput: (key: string) => void;
  handleDelete: () => void;
  handleSubmit: () => void;
  correctLetters: string;
  wrongLetters: string;
  almostCorrectLetters: string;
}) => {
  const keyColor = (key: string) => {
    if (wrongLetters.toUpperCase().includes(key)) {
      return "bg-[#3a3a3c]";
    } else if (correctLetters.toUpperCase().includes(key)) {
      return "bg-[#538d4e]";
    } else if (almostCorrectLetters.toUpperCase().includes(key)) {
      return "bg-[#b59f3b]";
    } else {
      return "bg-[#4f5051]";
    }
  };

  return (
    <div className="mx-auto flex w-full max-w-[500px] flex-col gap-1">
      <div className="keyboard_row">
        {React.Children.toArray(
          keys.slice(0, 10).map((key) => (
            <button
              onClick={() => handleInput(key.toUpperCase())}
              className={clsx("keyboard_button", keyColor(key))}
            >
              {key}
            </button>
          )),
        )}
      </div>
      <div className="keyboard_row px-4">
        {React.Children.toArray(
          keys.slice(10, 19).map((key) => (
            <button
              onClick={() => handleInput(key)}
              className={clsx("keyboard_button", keyColor(key))}
            >
              {key}
            </button>
          )),
        )}
      </div>
      <div className="keyboard_row">
        <button
          onClick={handleSubmit}
          className="btn h-full px-2 text-sm sm:px-4 "
        >
          ENTER
        </button>
        {React.Children.toArray(
          keys.slice(19, 26).map((key) => (
            <button
              onClick={() => handleInput(key)}
              className={clsx("keyboard_button", keyColor(key))}
            >
              {key}
            </button>
          )),
        )}
        <button
          onClick={handleDelete}
          className={clsx("btn  h-full px-2 text-base sm:px-4")}
        >
          DEL
        </button>
      </div>
    </div>
  );
};

export default GameKeyboard;
