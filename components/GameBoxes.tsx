import React from "react";
import {answer} from "./../constants";

interface GameBoxesProps {
  words: string[];
  word: number,
  triedletters: {
    wrongLetters: string[];
    semiCorrectLetters: string[];
    correctLetters: string[];
}
}

const GameBoxes: React.FC<GameBoxesProps> = ({ words, word, triedletters }) => {
  console.log(triedletters);

  return (
    <div className="flex flex-col gap-1">
      {(words.slice(0,6) ?? words)?.map((wordStr, index) => {
        const wordArr = wordStr?.split("");
        return (
          <div key={wordStr} className={`flex gap-1`}>
            {[0, 1, 2, 3, 4].map((num) => (
              <div
                key={num}
                className={`flex h-14 w-14 items-center justify-center border-2 border-black/20 text-3xl font-bold ${
                  wordArr[num] && "border-black/40"
                } ${
                    (triedletters?.correctLetters[num]===wordArr[num]) ? "bg-[#538d4e] text-white" : triedletters?.semiCorrectLetters?.includes(wordArr[num]) ? "bg-[#c9b458] text-white" : triedletters?.wrongLetters?.includes(wordArr[num]) ? "bg-[#787c7e] text-white border-none" : ""
                } capitalize`}
              >
                {wordArr[num] ?? ""}
              </div>
            ))}
          </div>
        );
      })}
      {[...Array(6 - (words?.length > 6 ? 6 : words?.length))]?.map((val) => (
        <div key={val} className={`flex gap-1`}>
          {[0, 1, 2, 3, 4].map((num) => (
            <div
              key={`${val} ${num}`}
              className={`flex h-14 w-14 items-center justify-center border-2 border-black/20 text-3xl font-bold ${
                false && "border-black/40"
              } ${false && "bg-[#787c7e] text-white"} ${
                false && "bg-[#c9b458] text-white"
              }`}
            ></div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default GameBoxes;