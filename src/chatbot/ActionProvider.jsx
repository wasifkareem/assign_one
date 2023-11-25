import React from "react";
import { createChatBotMessage, createClientMessage } from "react-chatbot-kit";
import { useDispatch, useSelector } from "react-redux";
import { startTimer, timer } from "../redux/timerSlice";

const ActionProvider = ({ setState, children }) => {
  const userDate = useSelector((state) => state.cal.date);
  const userTime = useSelector((state) => state.cal.time);
  const timer = useSelector((state) => state.timer.timer);
  const dispatch = useDispatch();
  const handleConf = () => {
    const userMessage = createClientMessage("Got it");
    const botMessage = createChatBotMessage("pick a slot!", {
      delay: 1000,
      widget: "cal",
    });

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, userMessage, botMessage],
    }));
  };
  const handleSlot = () => {
    const userMessage = createClientMessage(userDate + `,` + userTime);
    const botMessage = createChatBotMessage(`Enter your Name`, {
      delay: 1000,
    });
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, userMessage, botMessage],
    }));
  };
  const handleAge = () => {
    const botMessage = createChatBotMessage(`Enter your Age`, {
      delay: 1000,
    });
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleTimer = () => {
    const intervalId = setInterval(() => {
      dispatch(startTimer());
    }, 1000);
    const botMessage = createChatBotMessage(`thank you, Bot will exit in `, {
      widget: "timer",
    });
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleConf,
            handleSlot,
            handleAge,
            handleTimer,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
