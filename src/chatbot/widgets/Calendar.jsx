import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectedDate, time } from "../../redux/calSlice";

const Calendar = (props) => {
  const userDate = useSelector((state) => state.cal.date);
  const userTime = useSelector((state) => state.cal.time);
  //current date&Day
  const date = new Date();
  const options = { day: "numeric", month: "short" };
  const todayDate = date.toLocaleDateString("en-US", options);

  const dayOptions = { weekday: "short" };
  const todayDay = date.toLocaleDateString("en-US", dayOptions);
  //yesterday date&day
  const yesterday = new Date(date);
  yesterday.setDate(date.getDate() - 1);
  const yesterdayDate = yesterday.toLocaleDateString("en-US", options);
  const yesterdayDay = yesterday.toLocaleDateString("en-US", dayOptions);

  //tommorow date&day
  const tommorow = new Date(date);
  tommorow.setDate(date.getDate() + 1);
  const tommorowDate = tommorow.toLocaleDateString("en-US", options);
  const tommorowDay = tommorow.toLocaleDateString("en-US", dayOptions);

  const dispatch = useDispatch();

  const handleYestDate = () => {
    dispatch(selectedDate(yesterdayDate));
  };

  const handleTodayDate = () => {
    dispatch(selectedDate(todayDate));
  };
  const handleTommDate = () => {
    dispatch(selectedDate(tommorowDate));
  };

  const hdlNineClock = () => {
    dispatch(time("9:00 AM"));
  };
  const hdlElevenClock = () => {
    dispatch(time("11:00 AM"));
  };
  const hdlFourClock = () => {
    dispatch(time("4:00 PM"));
  };
  const hdlSevenClock = () => {
    dispatch(time("7:00 PM"));
  };

  const handleSet = () => {
    props.actionProvider.handleSlot();
  };
  return (
    <div>
      <section className=" DateSection cursor-pointer">
        <div className=" flex gap-4">
          {userDate == yesterdayDate ? (
            <div className=" shadow shadow-gray-400 w-fit  text-white bg-yellow-500 rounded text-sm  p-1 justify-center flex flex-col items-center px-2">
              <div className=" font-semibold">{yesterdayDate}</div>
              <div className="  text-white">{yesterdayDay}</div>
            </div>
          ) : (
            <div className=" shadow shadow-gray-400 w-fit  text-cyan-600 rounded text-sm  p-1 justify-center flex flex-col items-center px-2">
              <div onClick={handleYestDate} className=" font-semibold">
                {yesterdayDate}
              </div>
              <div className="  text-gray-500">{yesterdayDay}</div>
            </div>
          )}
          {userDate == todayDate ? (
            <div className=" shadow shadow-gray-400 w-fit  text-white bg-yellow-500 rounded text-sm  p-1 justify-center flex flex-col items-center px-2">
              <div className=" font-semibold">{todayDate}</div>
              <div className=" text-white">{todayDay}</div>
            </div>
          ) : (
            <div className=" shadow shadow-gray-400 w-fit  text-cyan-600 rounded text-sm  p-1 justify-center flex flex-col items-center px-2">
              <div onClick={handleTodayDate} className=" font-semibold">
                {todayDate}
              </div>
              <div className=" text-gray-500">{todayDay}</div>
            </div>
          )}
          {userDate == tommorowDate ? (
            <div className="shadow shadow-gray-400 w-fit  text-white bg-yellow-500 rounded text-sm  p-1 justify-center flex flex-col items-center px-2">
              <div className=" font-semibold">{tommorowDate}</div>
              <div className=" text-white">{tommorowDay}</div>
            </div>
          ) : (
            <div className=" shadow shadow-gray-400 w-fit  text-cyan-600 rounded text-sm  p-1 justify-center flex flex-col items-center px-2">
              <div onClick={handleTommDate} className=" font-semibold">
                {tommorowDate}
              </div>
              <div className=" text-gray-500">{tommorowDay}</div>
            </div>
          )}
        </div>
      </section>
      <section className=" timeSEction cursor-pointer">
        <p className=" mx-1 my-2 mt-4 text-gray-500 font-semibold">Time</p>
        <div className=" flex gap-1">
          {userTime == "9:00 AM" ? (
            <div className=" text-[11.7px] p-1 shadow shadow-gray-500 rounded bg-green-600 text-white  text-white-600">
              9:00 AM
            </div>
          ) : (
            <div
              onClick={hdlNineClock}
              className=" text-[11.7px] p-1 shadow shadow-gray-500 rounded  text-gray-600"
            >
              9:00 AM
            </div>
          )}
          {userTime == "11:00 AM" ? (
            <div className=" text-[11.7px] p-1 shadow shadow-gray-500 rounded bg-green-600 text-white  text-white-600">
              11:00 AM
            </div>
          ) : (
            <div
              onClick={hdlElevenClock}
              className=" text-[11.7px] p-1 shadow shadow-gray-500 rounded  text-gray-600"
            >
              11:00 AM
            </div>
          )}
          {userTime == "4:00 PM" ? (
            <div className=" text-[11.7px] p-1 shadow shadow-gray-500 rounded bg-green-600 text-white  text-white-600">
              4:00 PM
            </div>
          ) : (
            <div
              onClick={hdlFourClock}
              className=" text-[11.7px] p-1 shadow shadow-gray-500 rounded  text-gray-600"
            >
              4:00 PM
            </div>
          )}
          {userTime == "7:00 PM" ? (
            <div
              onClick={hdlSevenClock}
              className=" text-[11.7px] p-1 shadow shadow-gray-500 rounded bg-green-600 text-white  text-white-600"
            >
              7:00 PM
            </div>
          ) : (
            <div
              onClick={hdlSevenClock}
              className=" text-[11.7px] p-1 shadow shadow-gray-500 rounded  text-gray-600"
            >
              7:00 PM
            </div>
          )}
        </div>
        <div
          className="  bg-cyan-100 border border-cyan-700 w-fit p-1 rounded-md text-gray-700 mt-5"
          onClick={handleSet}
        >
          Confirm
        </div>
      </section>
    </div>
  );
};

export default Calendar;
