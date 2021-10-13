import React, { useContext, useState } from "react";
import { Context } from "../../App";
import Fire from "../fire/fire";
import { useSpring, animated } from "react-spring";

export default function Match({ groupSet, id }) {
  const [mouseOn, setMouseOn] = useState(false);
  const [clicked, setClicked] = useState(false);

  const {
    group,
    setGroup,
    matchesCounter,
    setSelectedMatches,
    submit,
    setSubmit,
    selectedMatches
  } = useContext(Context);

  const props = useSpring({

    opacity: (submit && selectedMatches.find (element => element === id)) ? 0 : 1,
    config: { duration: 2000},
  });

  const style = "flex justify-center mx-2 shadow-2xl";

  function handleClick() {
    if (group === undefined) {
      setGroup(groupSet);
      matchesCounter.current++;
      setClicked(true);
      setSelectedMatches((prev) => [...prev, id]);
    }
    if (group === groupSet) {
      if (clicked) {
        matchesCounter.current--;
        setSelectedMatches((prev) => prev.filter((el) => el !== id));
      } else {
        matchesCounter.current++;
        setSelectedMatches((prev) => [...prev, id]);
      }
      if (matchesCounter.current === 0) setGroup(undefined);
      setMouseOn(false);
      setClicked((prev) => !prev);
    }
  }

  return (
    <animated.div
      style={props}
      className={
        clicked
          ? style + " transform scale-125"
          : mouseOn
          ? style + " transform scale-125"
          : style
      }
      onMouseMove={() => setMouseOn(true)}
      onMouseLeave={() => setMouseOn(false)}
      onClick={handleClick}
    >
      <div className='flex flex-col  justify-center items-center relative'>
        {submit && selectedMatches.find (element => element === id) && <Fire /> }
        <div className='h-4 w-4 bg-lava rounded-t-lg'></div>
        <div className='flex'>
          <div className='h-40 w-2 bg-yellow-300 md:h-24'></div>
          <div className='h-40 w-2 bg-yellow-400 md:h-24'></div>
        </div>
      </div>
    </animated.div>
  );
}
