import React, { useState, useEffect } from "react";

interface CountdownState {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const Countdown: React.FC = () => {
  const countdownDate = new Date("05/11/2025 10:00:00 AM").getTime();

  const [state, setState] = useState<CountdownState>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const intervalId = setInterval(() => setNewTime(), 1000);
    return () => clearInterval(intervalId);
  }, []);

  const setNewTime = () => {
    const currentTime = new Date().getTime();
    const distanceToDate = countdownDate - currentTime;

    if (distanceToDate < 0) {
      setState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      handleCompletion();
    } else {
      const days = Math.floor(distanceToDate / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (distanceToDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor(
        (distanceToDate % (1000 * 60 * 60)) / (1000 * 60)
      );
      let seconds = Math.floor((distanceToDate % (1000 * 60)) / 1000);

      hours = hours < 10 ? hours : hours;
      minutes = minutes < 10 ? minutes : minutes;
      seconds = seconds < 10 ? seconds : seconds;

      setState({ days, hours, minutes, seconds });
    }
  };

  const handleCompletion = () => {
    console.log("Countdown finished!");
  };

  return (
    <>
      {state.days === 0 &&
      state.hours === 0 &&
      state.minutes === 0 &&
      state.seconds === 0 ? (
        <div className="completion-message">The event has started!</div>
      ) : (
      <div className="flex justify-center items-center absolute md:-mt-36 mt-2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white md:scale-[100%] scale-[70%] mb-24 z-12 space-x-16 md:space-x-32 bg-custom-blue rounded-xl w-[30rem] h-28 md:w-[40rem] md:h-32">
          <div className="time-section">
            <div className="text-6xl font-bold time md:text-4xl font font-barlow-condensed">
              {state.days}
            </div>
            <small className="text-white uppercase time-text">Zile</small>
          </div>
          <div className="time-section">
            <div className="text-6xl font-bold time md:text-4xl font font-barlow-condensed">
              {state.hours}
            </div>
            <small className="text-white uppercase time-text">Ore</small>
          </div>
          <div className="time-section">
            <div className="text-6xl font-bold time md:text-4xl font font-barlow-condensed">
              {state.minutes}
            </div>
            <small className="text-white uppercase time-text">Minute</small>
          </div>
          <div className="time-section">
            <div className="text-6xl font-bold time md:text-4xl font font-barlow-condensed">
              {state.seconds}
            </div>
            <small className="text-white uppercase time-text">Secunde</small>
          </div>
        </div>
      )}
    </>
  );
};
