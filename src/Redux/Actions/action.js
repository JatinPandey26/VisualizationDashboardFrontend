import { server } from "../store";
import axios from "axios";
export const getChartData = (formData) => async (dispatch) => {
  try {
    dispatch({ type: "getAllNewsRequest" });
    // making query
    let query = "";
    for (let key in formData) {
      query += `${key}=${formData[key]}&`;
    }

    query = query.substring(0, query.length - 1);

    const { data } = await axios.get(`${server}/data?${query}`);

    dispatch({ type: "getAllNewsSuccess", payload: data });
  } catch (error) {
    dispatch({ type: "getAllNewsFail", payload: error.response.data.message });
  }
};


