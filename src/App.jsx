import React from "react";
import Background from "./Components/Background";
import Forebackground from "./Components/Forebackground";

function App() {
  return (
    <div className="relative w-full h-screen bg-zinc-800">
      <Background />
      <Forebackground />
    </div>
  );
}

export default App;
