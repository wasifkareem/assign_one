import { configureStore } from "@reduxjs/toolkit";
import calReducer from "./calSlice";
import userReducer from "./userSlice";
import timerReducer from "./timerSlice";
export const store = configureStore({
  reducer: {
    cal: calReducer,
    user: userReducer,
    timer: timerReducer,
  },
});
