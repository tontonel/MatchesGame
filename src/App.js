import React, { createContext, useEffect, useRef, useState } from "react";
import Startpage from "./components/startpage";
import Matches from "./components/matches/matches";
import Players from "./components/players";
import Winner from "./components/winner";

export const Context = createContext();

export default function App() {
  const [matchesGroup1, setMatchesGroup1] = useState([1]);
  const [matchesGroup2, setMatchesGroup2] = useState([1, 1, 1]);
  const [matchesGroup3, setMatchesGroup3] = useState([1, 1, 1, 1, 1]);
  const [selectedMatches, setSelectedMatches] = useState([]);
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [playerName, setPlayerName] = useState ("Player");
  const [winner, setWinner] = useState(0);
  const [start, setStart] = useState(0);
  const [group, setGroup] = useState(undefined);
  const [submit, setSubmit] = useState(false);

  const totalMatches = useRef(9);
  const matchesCounter = useRef(0);

  const context = {
    matchesGroup1,
    matchesGroup2,
    matchesGroup3,
    group,
    matchesCounter,
    selectedMatches,
    currentPlayer,
    totalMatches,
    start,
    winner,
    submit,
    playerName,
    setPlayerName,
    setWinner,
    setStart,
    setMatchesGroup1,
    setMatchesGroup2,
    setMatchesGroup3,
    setSelectedMatches,
    setGroup,
    setCurrentPlayer,
    setSubmit,
    restart
  };

  function restart() {
    setMatchesGroup1([1]);
    setMatchesGroup2([1, 1, 1]);
    setMatchesGroup3([1, 1, 1, 1, 1]);
    setSelectedMatches([]);
    setCurrentPlayer(false);
    setWinner(0);
    setStart(0);
    setGroup(undefined);
    setSubmit(false);
    totalMatches.current = 9;
    matchesCounter.current = 0;
  }

  return (
    <Context.Provider value={context}>
      {!winner && (
        <div>
          {start === 0 && <Startpage />}
          {start === 1 && <Players />}
          {start === 2 && <Matches />}
        </div>
      )}
      {winner !== 0  && <Winner />}
    </Context.Provider>
  );
}
