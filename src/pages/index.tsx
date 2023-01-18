import { useState } from "react";
import { BasicDice } from "../components/BasicDice";
import { RollButton } from "../components/RollButton";

function App() {
  const [number, setNumber] = useState(1);
  return (
    <div className="container">
      <BasicDice number={number} />
      <RollButton setNumber={setNumber} />
    </div>
  );
}

export default App;
