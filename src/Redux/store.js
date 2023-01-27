import { configureStore } from "@reduxjs/toolkit";
import { chartDataReducer } from "./Reducers/reducer";

const store = configureStore({
  reducer: {
    chartData: chartDataReducer,
  },
});

export default store;

export const server = "http://localhost:4000/news";
