import React, { useState } from "react";
import { useRef } from "react";
import ResultModal from "./ResultModal";

function TimerChallenge({ title, targetTime }) {
  const timer = useRef();
  const dialog = useRef();

  //   const [timerStarted, setTimerStarted] = useState(false);
  //   const [timerExpired, setTimerExpired] = useState(false);

  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
  const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

  // Timer expired
  if (timeRemaining <= 0) {
    clearInterval(timer.current);
    dialog.current.open();
  }
  const handleStart = () => {
    // setTimerStarted(true);
    // timer.current = setTimeout(() => {
    //   setTimerExpired(true);
    //   dialog.current.open();
    // }, targetTime * 1000);

    timer.current = setInterval(() => {
      setTimeRemaining((prevTimeRemaining) => prevTimeRemaining - 10);
    }, 10);
  };

  const handleStop = () => {
    // setTimerStarted(false);
    // clearTimeout(timer.current);

    clearInterval(timer.current);
    dialog.current.open();
  };
  const handleReset = () => {
    setTimeRemaining(targetTime * 1000);
    // console.log("handleReset...");
  };
  return (
    <>
      {/* {timerExpired && ( */}
      <ResultModal
        ref={dialog}
        targetTime={targetTime}
        remainingTime={timeRemaining}
        onReset={handleReset}
      />
      {/* )} */}
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerIsActive ? handleStop : handleStart}>
            {timerIsActive ? "Stop" : "Start"} challenge
          </button>
        </p>
        <p className={timerIsActive ? "active" : undefined}>
          {timerIsActive ? "Time is running..." : "Timer inactive"}
        </p>
      </section>
    </>
  );
}

export default TimerChallenge;
