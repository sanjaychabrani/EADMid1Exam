import React, { useState, useEffect } from "react";

const Timer = () => {
  const [time, setTime] = useState(10);

  useEffect(() => {
    const number = setInterval(() => {
      if(time>0) {
        setTime(time-1);
      }
    },1000);
    return () => clearInterval(number);
  }, [time]);

  return (
    <div>
      {
      time===0 ?(
        <h1>Time's up!</h1>
      ):(
        <h1>{time}</h1>
      )}
    </div>
  );
};

export default Timer;
