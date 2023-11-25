import React from "react";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";

const Feedback = () => {
  const info = useSelector((state) => state.user);
  console.log(info.name);
  return (
    <div className=" flex justify-center">
      <div className=" w-[277px] h-[551.594px] shadow-md shadow-gray-500">
        <Navbar />
        <div className=" flex h-full items-center  ">
          <p className=" text-center border rounded-md border-cyan-500 bg-cyan-100 py-5 mx-1 text-gray-700">{`Your name ${info.name} aged ${info.age} has been added to student system. You may now exit.`}</p>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
