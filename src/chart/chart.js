import { useEffect, useState } from "react";
import { Doughnut, Bar, Line } from "react-chartjs-2";
import { Chart as Chartjs } from "chart.js/auto";
import { Container } from "@chakra-ui/react";
import { useSelector } from "react-redux";

export const IntensityChart = () => {
  const { intensity } = useSelector((state) => state.chartData);

  const [data, setData] = useState();
  const config = {
    resposive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: true,
        text: "Intensity",
        font: {
          size: 24,
          family: "Helvetica Neue",
        },
      },
    },
  };
  useEffect(() => {
    const fetchData = async () => {
      setData({
        labels: Object.keys(intensity),
        datasets: [{ label: "data", data: Object.values(intensity) }],
      });
    };
    fetchData();
  }, []);

  return data ? (
    <Container>
      <Doughnut
        data={data}
        height={"100%"}
        width={"100%"}
        options={config}
      ></Doughnut>
    </Container>
  ) : (
    <h3>Loading ... </h3>
  );
};

export const Likelihood_chart = () => {
  const { likelihood } = useSelector((state) => state.chartData);
  const [data, setData] = useState();
  const config = {
    resposive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: true,
        text: "Likelihood",
        font: {
          size: 24,
          family: "Helvetica Neue",
        },
      },
    },
  };
  useEffect(() => {
    const fetchData = async () => {
      setData({
        labels: Object.keys(likelihood),
        datasets: [{ label: "data", data: Object.values(likelihood) }],
      });
    };

    fetchData();
  }, []);

  return data ? (
    <Container>
      <Line height={"100%"} width={"100%"} data={data} options={config}></Line>
    </Container>
  ) : (
    <h3>Loading ... </h3>
  );
};

export const Relevance_Chart = () => {
  const { relevance } = useSelector((state) => state.chartData);
  const [data, setData] = useState();
  const config = {
    resposive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: true,
        text: "Relevance",
        font: {
          size: 24,
          family: "Helvetica Neue",
        },
      },
    },
  };
  useEffect(() => {
    const fetchData = async () => {
      setData({
        labels: Object.keys(relevance),
        datasets: [{ label: "data", data: Object.values(relevance) }],
      });
    };

    fetchData();
  }, []);

  return data ? (
    <Container>
      <Bar data={data} height={"100%"} width={"100%"} options={config}></Bar>
    </Container>
  ) : (
    <h3>Loading ... </h3>
  );
};
export const Year_Chart = () => {
  const { year } = useSelector((state) => state.chartData);
  const [data, setData] = useState();
  const config = {
    resposive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: true,
        text: "Year",
        font: {
          size: 24,
          family: "Helvetica Neue",
        },
      },
    },
  };
  useEffect(() => {
    const fetchData = async () => {
      setData({
        labels: Object.keys(year),
        datasets: [{ label: "data", data: Object.values(year) }],
      });
    };

    fetchData();
  }, []);

  return data ? (
    <Container>
      <Bar data={data} height={"100%"} width={"100%"} options={config}></Bar>
    </Container>
  ) : (
    <h3>Loading ... </h3>
  );
};
export const Region_Chart = () => {
  const { region } = useSelector((state) => state.chartData);
  const [data, setData] = useState();
  const config = {
    resposive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: true,
        text: "Region",
        font: {
          size: 24,
          family: "Helvetica Neue",
        },
      },
    },
  };
  useEffect(() => {
    const fetchData = async () => {
      setData({
        labels: Object.keys(region),
        datasets: [{ label: "data", data: Object.values(region) }],
      });
    };

    fetchData();
  }, []);

  return data ? (
    <Container>
      <Doughnut
        data={data}
        height={"100%"}
        width={"100%"}
        options={config}
      ></Doughnut>
    </Container>
  ) : (
    <h3>Loading ... </h3>
  );
};

export const Country_Chart = () => {
  const { country } = useSelector((state) => state.chartData);
  const [data, setData] = useState();
  const config = {
    resposive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: true,
        text: "Country",
        font: {
          size: 24,
          family: "Helvetica Neue",
        },
      },
    },
  };
  useEffect(() => {
    const fetchData = async () => {
      setData({
        labels: Object.keys(country),
        datasets: [{ label: "data", data: Object.values(country) }],
      });
    };

    fetchData();
  }, []);

  return data ? (
    <Container>
      <Doughnut
        data={data}
        height={"100%"}
        width={"100%"}
        options={config}
      ></Doughnut>
    </Container>
  ) : (
    <h3>Loading ... </h3>
  );
};

export const Topics_Chart = () => {
  const { topics } = useSelector((state) => state.chartData);
  const [data, setData] = useState();
  const config = {
    resposive: true,
    plugins: {
      legend: {
        position: "right",
      },
      title: {
        display: true,
        text: "Topics",
        font: {
          size: 24,
          family: "Helvetica Neue",
        },
      },
    },
    scales: {
      y: {
        ticks: {
          stepSize: 10,
        },
      },
    },
  };
  useEffect(() => {
    const fetchData = async () => {
      setData({
        labels: Object.keys(topics),
        datasets: [{ label: "data", data: Object.values(topics) }],
      });
    };

    fetchData();
  }, []);

  return data ? (
    <Line data={data} height={"100%"} width={"100%"} options={config}></Line>
  ) : (
    <h3>Loading ... </h3>
  );
};
