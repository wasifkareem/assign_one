import React from "react";
import { useSelector } from "react-redux";

const Timer = () => {
  const countdown = useSelector((state) => state.timer.timer);
  return (
    <div className=" flex justify-end">
      <button className=" bg-red-500 text-white font-semibold rounded w-full p-3  ">
        {countdown}
      </button>
    </div>
  );
};

export default Timer;
