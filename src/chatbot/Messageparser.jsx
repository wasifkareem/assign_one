// in MessageParser.jsx
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { age, name } from "../redux/userSlice";

const MessageParser = ({ children, actions }) => {
  const dispatch = useDispatch();
  const parse = (message) => {
    const containsAlphabet = /[a-zA-Z]/.test(message);
    if (containsAlphabet) {
      dispatch(name(message));
      actions.handleAge();
    } else {
      dispatch(age(message));
      actions.handleTimer();
    }
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,

          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;
