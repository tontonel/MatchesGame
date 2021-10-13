import React, { useContext } from "react";
import { Context } from "../App";
export default function Startpage(props) {
  const { setStart } = useContext(Context);

  function handleClick() {
    setStart(1);
  }

  return (
    <>
      <div className=' w-1/2 mx-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:w-full'>
        <div className='grid grid-cols-1 gap-0 gap-y-12 '>
          <div className=' flex justify-center'>
            <button
              onClick={handleClick}
              className='bg-red-400 p-4 w-1/2 rounded-lg  hover:bg-red-900 hover:border-black border-2 border-transparent text font-body text-xl font-bold md:text-sm'
            >
              Vs Computer
            </button>
          </div>
          
          <div className='flex justify-center'>
            <button
              onClick={handleClick}
              className='bg-visiniu p-4  w-1/2 rounded-lg  hover:bg-visiniu-dark hover:border-black border-2 border-transparent font-body text-xl font-bold md:text-sm'
            >
              Multiplayer
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
