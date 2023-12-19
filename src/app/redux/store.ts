'use client';

import { createLogger } from "redux-logger";
import { configureStore } from "@reduxjs/toolkit";
import cakeReducer from "./Features/cake/cakeSlice";
import iceCreamReducer from "./Features/iceCream/iceCreamSlice";
import userReducer from "./Features/user/userSlice";

const logger = createLogger();

export const store = configureStore({
    reducer: {
       cake: cakeReducer, 
       iceCream: iceCreamReducer, 
       user: userReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

