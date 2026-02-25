import { useState } from "react";
import "./App.css";
import Home from "./component/Home";
import Game from "./component/Game";

function App() {
  const [showGame, setShowGame] = useState("home");
  return (
    <>{showGame === "home" ? <Home setShowGame={setShowGame} /> : <Game />}</>
  );
}

export default App;
