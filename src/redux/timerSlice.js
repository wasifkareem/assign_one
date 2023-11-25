import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  timer: 6,
};

const timerSlice = createSlice({
  name: "timer",
  initialState,
  reducers: {
    startTimer: (state) => {
      state.timer -= 1;
    },
  },
});

export const { startTimer } = timerSlice.actions;
export default timerSlice.reducer;
