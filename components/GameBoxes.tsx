import React from "react";

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
  // console.log(triedletters);

  return (
    <div className="flex border w-full max-w-[450px] sm:max-w-[330px] mx-auto flex-col gap-1">
      {(words.slice(0,6))?.map((wordStr, index) => {
        const wordArr = wordStr?.split("");
        return (
          <div key={`${wordStr + index}`} className={`flex flex-1 gap-1`}>
            {[0, 1, 2, 3, 4].map((num) => (
              <div
                key={num}
                className={`flex aspect-[1/1] flex-1 items-center justify-center border-2 border-black/20 md:text-3xl font-bold ${
                  wordArr[num] && "border-black/40"
                } ${(word > index) && (
                    (triedletters?.correctLetters?.length && triedletters?.correctLetters[num]===wordArr[num]) ? "bg-[#538d4e] text-white" : triedletters?.semiCorrectLetters?.includes(wordArr[num]) ? "bg-[#c9b458] text-white" : triedletters?.wrongLetters?.includes(wordArr[num]) ? "bg-[#787c7e] text-white border-none" : ""
                  )} capitalize`}
              >
                {wordArr[num] ?? ""}
              </div>
            ))}
          </div>
        );
      })}
      {Array.from(Array(6 - Number(words?.length > 6 ? 6 : words?.length)).keys())?.map((val) => (
        <div key={val} className={`flex flex-1 gap-1`}>
          {[0, 1, 2, 3, 4].map((num) => (
            <div
              key={`${val} ${num}`}
              className={`flex aspect-[1/1] flex-1 items-center justify-center border-2 border-black/20 text-3xl font-bold ${
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
