import { useState, useEffect } from "react";

export const Countdown= () => {
  const [countdownDate] = useState<number>(
    new Date("05/12/2024 10:00:00 AM").getTime()
  );

  const [state, setState] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }>({
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
    if (countdownDate) {
      const currentTime = new Date().getTime();

      const distanceToDate = countdownDate - currentTime;

      const days = Math.floor(distanceToDate / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (distanceToDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor(
        (distanceToDate % (1000 * 60 * 60)) / (1000 * 60)
      );
      let seconds = Math.floor((distanceToDate % (1000 * 60)) / 1000);

      const numbersToAddZeroTo = [1, 2, 3, 4, 5, 6, 7, 8, 9];

      if (!numbersToAddZeroTo.includes(hours)) {
        hours = parseInt(`0${hours}`, 10);
      }
      if (!numbersToAddZeroTo.includes(minutes)) {
        minutes = parseInt(`0${minutes}`, 10);
      }
      if (!numbersToAddZeroTo.includes(seconds)) {
        seconds = parseInt(`0${seconds}`, 10);
      }

      setState({ days, hours, minutes, seconds });
    }
  };

  return (
    <>
       <div className="md:w-1/3 flex justify-center items-center absolute mt-16 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white md:scale-[100%] scale-[80%] mb-24 z-12 space-x-6 bg-custom-blue rounded-xl">
        <div className="time-section">
          <div className="time text-6xl md:text-4xl font font-barlow-condensed font-bold">
            {state.days || "0"}
          </div>
          <small className="time-text text-white uppercase">Zile</small>
        </div>
        <div className="time-section">
          <div className="time text-6xl md:text-4xl font font-barlow-condensed font-bold">
            {state.hours || "00"}
          </div>
          <small className="time-text text-white uppercase">Ore</small>
        </div>
        <div className="time-section">
          <div className="time text-6xl md:text-4xl font font-barlow-condensed font-bold">
            {state.minutes || "00"}
          </div>
          <small className="time-text text-white uppercase">Minute</small>
        </div>
      </div>
    </>
  );
};