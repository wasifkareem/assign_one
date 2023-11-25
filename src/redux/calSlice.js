import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  date: null,
  time: null,
};

const calSlice = createSlice({
  name: "cal",
  initialState: {},
  reducers: {
    selectedDate: (state, action) => {
      state.date = action.payload;
    },
    time: (state, action) => {
      state.time = action.payload;
    },
  },
});

export const { selectedDate, time } = calSlice.actions;
export default calSlice.reducer;
