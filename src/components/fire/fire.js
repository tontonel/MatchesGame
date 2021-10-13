import React from "react";
import "../../css/fire.css";
import { useSpring, animated } from "react-spring";

export default function Fire() {

  const props = useSpring ({
    from: {top: "5%"},
    to: {top: "90%"},
    config: {duration: 1500}
  })

  return (
    <animated.div style={props} class='fire'>
      <div class='flames'>
        <div class='flame'></div>
        <div class='flame'></div>
        <div class='flame'></div>
        <div class='flame'></div>
      </div>
    </animated.div>
  );
}
