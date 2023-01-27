import { Container, Grid, Stack } from "@chakra-ui/react";
import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";

import {
  Country_Chart,
  IntensityChart,
  Likelihood_chart,
  Region_Chart,
  Relevance_Chart,
  Topics_Chart,
  Year_Chart,
} from "./chart/chart";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Sidebar from "./components/sideBar";
import { getChartData } from "./Redux/Actions/action";

function App() {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.chartData);
  useEffect(() => {
    async function fetchData() {
      await dispatch(getChartData());
    }
    fetchData();
  }, [dispatch]);

  window.addEventListener("resize", function () {
    "use strict";
    window.location.reload();
  });

  return (
    <div className="App">
      <Header />

      <Stack direction={["column", "row"]} spacing="24px">
        {loading ? (
          <h2>Loading ...</h2>
        ) : (
          <Fragment>
            <Grid w={"100vw"} templateColumns={["1fr", "1fr", "1fr 25fr"]}>
              <Sidebar />
              <Container flex="row" justifyContent={"center"}>
                <Routes>
                  <Route path="/intensity" element={<IntensityChart />} />
                  <Route path="/likelihood" element={<Likelihood_chart />} />
                  <Route path="/relevance" element={<Relevance_Chart />} />
                  <Route path="/year" element={<Year_Chart />} />
                  <Route path="/topics" element={<Topics_Chart />} />
                  <Route path="/country" element={<Country_Chart />} />
                  <Route path="/region" element={<Region_Chart />} />
                  <Route path="*" element={<Navigate to={"/intensity"} />} />
                </Routes>
              </Container>
            </Grid>
          </Fragment>
        )}
      </Stack>
      <Footer />
    </div>
  );
}

export default App;
