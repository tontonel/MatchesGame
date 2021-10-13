import React, { useContext, useEffect } from "react";
import { Context } from "../../App";
import Match from "./match";
import Fire from "../fire/fire";
import useTimeout from "../../hooks/useTimeout";

export default function Matches() {
  const {
    matchesGroup1,
    matchesGroup2,
    matchesGroup3,
    selectedMatches,
    setMatchesGroup1,
    setMatchesGroup2,
    setMatchesGroup3,
    group,
    setGroup,
    matchesCounter,
    setSelectedMatches,
    setCurrentPlayer,
    totalMatches,
    setWinner,
    setSubmit,
  } = useContext(Context);

  useEffect (() => {
    console.log (totalMatches.current);
  }, [totalMatches.current]
  )

  function easyAI() {
    //get the random array of matches
    let a = [];
    if (matchesGroup1.find((element) => element === 1)) a.push(1);
    if (matchesGroup2.find((element) => element === 1)) a.push(2);
    if (matchesGroup3.find((element) => element === 1)) a.push(3);
    let randomGroup = a[Math.floor(Math.random() * a.length)];
    setGroup(randomGroup);
    let matchesCounter = 0;
    let randomSelectedMatches = [];
    if (randomGroup === 1) {
      matchesGroup1.forEach((element) => {
        if (element === 1) matchesCounter++;
      });
      let randomMatches = Math.floor(Math.random() * matchesCounter) + 1;
      matchesGroup1.forEach((element, index) => {
        if (element === 1 && randomMatches > 0) {
          randomSelectedMatches.push(index + 10);
          randomMatches--;
        }
      });
    }
    if (randomGroup === 2) {
      matchesGroup2.forEach((element) => {
        if (element === 1) matchesCounter++;
      });
      let randomMatches = Math.floor(Math.random() * matchesCounter) + 1;
      matchesGroup2.forEach((element, index) => {
        if (element === 1 && randomMatches > 0) {
          randomSelectedMatches.push(index + 10 * 2);
          randomMatches--;
        }
      });
    }
    if (randomGroup === 3) {
      matchesGroup3.forEach((element) => {
        if (element === 1) matchesCounter++;
      });
      let randomMatches = Math.floor(Math.random() * matchesCounter) + 1;
      matchesGroup3.forEach((element, index) => {
        if (element === 1 && randomMatches > 0) {
          randomSelectedMatches.push(index + 10 * 3);
          randomMatches--;
        }
      });
    }
    //updating the matches
    if (totalMatches.current === randomSelectedMatches.length)
      randomSelectedMatches.pop();
    setSelectedMatches(randomSelectedMatches);
    if (randomSelectedMatches.length === totalMatches.current) {
      return;
    }
    totalMatches.current -= randomSelectedMatches.length;
    setTimeout(() => {
      if (totalMatches.current === 1) {
        setWinner (2);
      } 
      if (randomGroup === 1) {
        setMatchesGroup1([-1]);
      }
      if (randomGroup === 2) {
        setMatchesGroup2((prev) => {
          randomSelectedMatches.forEach((element) => {
            prev[element - 10 * 2] = -1;
          });
          return prev;
        });
      }
      if (randomGroup === 3) {
        setMatchesGroup3((prev) => {
          randomSelectedMatches.forEach((element) => {
            prev[element - 10 * 3] = -1;
          });
          return prev;
        });
      }
      setGroup(undefined);
      setSubmit(false);
      setSelectedMatches([]);
    }, 2000);
  }

  function handleMatches(curValue, index, array) {
    let group;
    if (array.length === 1) group = 1;
    else if (array.length === 3) group = 2;
    else group = 3;
    if (curValue !== -1)
      return (
        <Match
          key={index + group * 10}
          groupSet={group}
          id={index + group * 10}
          matches={array}
        />
      );
    return <div className='w-4 h-44 md:h-28' />;
  }

  function handleClick() {
    setSubmit(true);
    setTimeout(() => {
      if (selectedMatches.length === totalMatches.current) {
        alert(
          "You can't choose all the matches \r\n it has to remain at least one"
        );
        return;
      }
      totalMatches.current -= selectedMatches.length;
      if (totalMatches.current === 1) {
        setWinner(1);
        return;
      }
      if (group === 1) {
        setMatchesGroup1([-1]);
      }
      if (group === 2) {
        setMatchesGroup2((prev) => {
          selectedMatches.forEach((element) => {
            prev[element - 10 * 2] = -1;
          });
          return prev;
        });
      }
      if (group === 3) {
        setMatchesGroup3((prev) => {
          selectedMatches.forEach((element) => {
            prev[element - 10 * 3] = -1;
          });
          return prev;
        });
      }
      setSelectedMatches([]);
      setGroup(undefined);
      matchesCounter.current = 0;
      easyAI();
    }, 2000);
  }

  return (
    <>
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:left-0 md:top-0 md:translate-x-0 md:translate-y-0 md:mt-4 md:container md:mx-auto'>
        <div className='grid gap-y-64 grid-cols-3 md:grid-cols-1 md:gap-y-5'>
          <div className='flex mx-20 md:justify-center'>
            {matchesGroup1.map(handleMatches)}
          </div>
          <div className='flex mx-20 md:justify-center'>
            {matchesGroup2.map(handleMatches)}
          </div>
          <div className='flex mx-20 md:justify-center'>
            {matchesGroup3.map(handleMatches)}
          </div>
        </div>
        <div className='mt-40 flex justify-center md:mt-32'>
          <button
            className='bg-green-400 hover:bg-green-500 p-2 rounded-md text-white font-body'
            onClick={handleClick}
          >
            submit
          </button>
        </div>
      </div>
    </>
  );
}
