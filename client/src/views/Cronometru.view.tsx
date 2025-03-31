import React, { useState, useEffect } from 'react';
import logoapv from '../assets/logoapv.png';
const Timer: React.FC = () => {
  const [time, setTime] = useState<number>(0);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [intervalId, setIntervalId] = useState<number | null>(null);

  const toggleTimer = (): void => {
    setIsActive(!isActive);
  };

  // Start the timer
  useEffect(() => {
    if (isActive) {
      const id = window.setInterval(() => {
        setTime(time => time + 1);
      }, 1000);  // Update time every second
      setIntervalId(id);
    } else {
      if (intervalId !== null) {
        clearInterval(intervalId);
      }
      setIntervalId(null);
    }
    return () => {
      if (intervalId !== null) {
        clearInterval(intervalId);
      }
    };
  }, [isActive]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent): void => {
      if (event.code === 'Space') {
        toggleTimer();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isActive]);

  useEffect(() => {
    const resetTime = () => setTime(0);
    window.addEventListener('load', resetTime);
    return () => window.removeEventListener('load', resetTime);
  }, []);

  useEffect(() => {
    document.body.style.backgroundColor = "#081043";
  }, []);

  return (
    <div className="flex flex-col items-center justify-center mt-[-5rem] text-white h-screen">
      <img src={logoapv} alt="Logo Aleargă pentru Viață" className="max-w-70 scale-[40%] h-auto" />
      <div className="text-9xl font-bold mt-[6rem]">
        {new Date(time * 1000).toISOString().substr(11, 8)}
      </div>
    </div>
  );
};

export default Timer;
