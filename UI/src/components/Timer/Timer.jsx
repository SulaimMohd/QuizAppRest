import { useState, useEffect } from "react";
const Timer = ({ minutes }) => {
  const [timeLeft, setTimeLeft] = useState(minutes * 60);
  useEffect(() => {
    const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => `${Math.floor(seconds / 60)}:${seconds % 60}`;
  return <div className="bg-yellow-400 p-2 rounded w-[60px]">{formatTime(timeLeft)}</div>;
};

export default Timer;