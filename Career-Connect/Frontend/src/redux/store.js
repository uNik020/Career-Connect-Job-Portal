import { configureStore } from "@reduxjs/toolkit";
import { authSliceReducer } from "./authSlice";
import jobslice from "./jobSlice";

const store = configureStore({
  reducer: {
    auth: authSliceReducer,
    job: jobslice,
  },
});

export default store;
