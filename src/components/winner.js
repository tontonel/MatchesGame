import React, { useContext } from "react";
import { Context } from "../App";
export default function Winner() {
  const { winner, restart, playerName} = useContext(Context);
  return (
    <div>
        {winner === 1 && <div> The winner is {playerName} </div>}
        {winner === 2 && <div> The winner is AI </div>}
      <button onClick={restart} className="bg-gray-700 p-3 w-auto text-lg">Retry</button>
    </div>
  );
}
