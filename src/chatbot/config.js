import { createChatBotMessage } from "react-chatbot-kit";
import ConfWidget from "./widgets/ConfWidget";
import Calendar from "./widgets/Calendar";
import Timer from "./widgets/Timer";

const config = {
  initialMessages: [
    createChatBotMessage(`Hello, Welcome to student info system! `, {
      widget: "todos",
    }),
  ],

  state: {},
  widgets: [
    {
      widgetName: "todos",
      widgetFunc: (props) => <ConfWidget {...props} />,
      mapStateToProps: ["todos"],
    },
    {
      widgetName: "cal",
      widgetFunc: (props) => <Calendar {...props} />,
      mapStateToProps: ["cal"],
    },
    {
      widgetName: "timer",
      widgetFunc: (props) => <Timer {...props} />,
      mapStateToProps: ["timer"],
    },
  ],
};

export default config;
