import React, { useContext } from "react";
import { Context } from "../App";

export default function Players() {
  const { playerName, setPlayerName } = useContext(Context);
  const { setStart } = useContext(Context);

  return (
    <div className='bg-visiniu p-10 rounded-md absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:p-5'>
      <form>
        <div className='flex flex-col'>
          <label className='p-2 pl-0 text-sm font-bold'>Player's name</label>
          <input
            className='p-2 border-2 text-xl font-body rounded-md outline-none bg-crem'
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value)}
          />
        </div>
        <div className='flex justify-center mt-10'>
          <button
            className='bg-green-500 p-2 px-4 rounded-xl hover:bg-green-700'
            type='submit'
            onClick={() => setStart(2)}
          >
            Start Game
          </button>
        </div>
      </form>
    </div>
  );
}
