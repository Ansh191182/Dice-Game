import React from "react";

const Home = ({ setShowGame }) => {
  return (
    <>
      <div className="container">
        <div>
          {" "}
          <img src="dices 1.png" alt="" />
        </div>
        <div className="text">
          <h1>DICE GAME</h1>

          <button onClick={() => setShowGame("game")}>Play Now</button>
        </div>
      </div>
    </>
  );
};

export default Home;
