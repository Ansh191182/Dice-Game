import React, { useReducer, useState } from "react";
import dice1 from "/dice1.png";
import dice2 from "/dice 2.png";

import dice3 from "/dice 3.png";

import dice4 from "/dice 4.jpg";

import dice5 from "/dice 5.png";

import dice6 from "/dice 6.png";

const showRuleFunction = (state, action) => {
  if (action.type === "show") {
    return !state;
  }
};
const Game = () => {
  const [selected, setSelected] = useState(null);
  const [count, setCount] = useState(0);
  // const [showRule, setShowRule] = useState(false);

  const [showRule, dispatchShowRule] = useReducer(showRuleFunction, false);

  const diceimages = {
    1: dice1,
    2: dice2,
    3: dice3,
    4: dice4,
    5: dice5,
    6: dice6,
  };

  const [diceNumber, setDiceNumber] = useState(1);
  const handleSelected = (value) => {
    console.log(value);
    setSelected(value);
  };

  const handleRollDice = () => {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    console.log(randomNumber);
    setDiceNumber(randomNumber);

    if (selected === diceNumber) {
      setCount((prev) => prev + 1);
      alert("You Won ");
    }
  };

  return (
    <>
      <div>
        <div className="navbar">
          {/* Navbar */}

          <div className="score">
            {/* score */}
            <h1>{count}</h1>
            <h3>Total Score</h3>
          </div>
          <div className="numbers">
            {/* number */}

            {[1, 2, 3, 4, 5, 6].map((num) => (
              <span key={num} onClick={() => handleSelected(num)}>
                {num}
              </span>
            ))}
          </div>
        </div>
        <div>
          {/* dice */}
          <div className="dice">
            <img onClick={handleRollDice} src={diceimages[diceNumber]} alt="" />
            <button onClick={() => setCount(0)}>Reset Score</button>
            <button onClick={() => dispatchShowRule({ type: "show" })}>
              Show Rules
            </button>
          </div>
        </div>
      </div>
      {showRule && (
        <div
          style={{
            backgroundColor: "pink",
            padding: "10px",
            borderRadius: "10px",
            marginTop: "20px",
          }}
        >
          <p>1️⃣ Pehle koi ek number select karo (1 se 6).</p>
          <p>
            2️⃣ Dice roll karo. Agar dice number tumhare selected number se match
            kare to score milega.
          </p>
          <p>3️⃣ Agar match nahi hua to tumhara score kam hoga.</p>
        </div>
      )}
    </>
  );
};

export default Game;
