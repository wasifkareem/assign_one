import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";

import MessageParser from "../chatbot/Messageparser.jsx";
import ActionProvider from "../chatbot/ActionProvider.jsx";
import config from "../chatbot/config.js";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Chat = () => {
  const navigate = useNavigate();
  const timer = useSelector((state) => state.timer.timer);

  if (timer == 0) {
    navigate("/feedback");
  }

  return (
    <>
      <div className=" w-full flex justify-center items-center">
        <div className=" flex flex-col shadow-md shadow-gray-500 w-fit">
          <Navbar />
          <div className=" bg-gray-800">
            <Chatbot
              config={config}
              messageParser={MessageParser}
              actionProvider={ActionProvider}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Chat;
