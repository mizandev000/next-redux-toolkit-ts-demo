'use client';

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { cakeActions } from "../cake/cakeSlice";

type InitialState = {
  numOfIceCreams: number;
};

const initialState: InitialState = {
  numOfIceCreams: 20,
};

const iceCreamSlice = createSlice({
  name: "iceCream",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfIceCreams--;
    },
    restocked: (state, action: PayloadAction<number>) => {
      state.numOfIceCreams += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(cakeActions.ordered, (state) => {
      state.numOfIceCreams--;
    });
  },
});

export default iceCreamSlice.reducer;
export const iceCreamActions = iceCreamSlice.actions;
