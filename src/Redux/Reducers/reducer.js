import { createReducer } from "@reduxjs/toolkit";

export const chartDataReducer = createReducer(
  {},
  {
    getAllNewsRequest: (state) => {
      state.loading = true;
    },
    getAllNewsSuccess: (state, action) => {
      state.loading = false;
      state.intensity = action.payload.intensity;
      state.likelihood = action.payload.likelihood;
      state.relevance = action.payload.relevance;
      state.year = action.payload.year;
      state.country = action.payload.country;
      state.topics = action.payload.topics;
      state.region = action.payload.region;
      state.city = action.payload.city;
    },
    getAllNewsFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  }
);
