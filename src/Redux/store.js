import { configureStore } from "@reduxjs/toolkit";
import { chartDataReducer } from "./Reducers/reducer";

const store = configureStore({
  reducer: {
    chartData: chartDataReducer,
  },
});

export default store;

export const server = "https://visualization-dashboard-backend.vercel.app/news";
