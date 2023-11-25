import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: null,
  age: null,
};

const userSlice = createSlice({
  name: "user",
  initialState: {},
  reducers: {
    name: (state, action) => {
      state.name = action.payload;
    },
    age: (state, action) => {
      state.age = action.payload;
    },
  },
});

export const { name, age } = userSlice.actions;
export default userSlice.reducer;
