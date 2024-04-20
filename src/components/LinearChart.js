import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import {
  LinearScale,
  LineElement,
  PointElement,
  Filler,
  CategoryScale,
} from "chart.js";
import { Line } from "react-chartjs-2";
import colors from "tailwindcss/colors";
import { useEffect, useRef, useState } from "react";

ChartJS.register(
  // gradient,
  LineElement,
  PointElement,
  Filler,
  CategoryScale,
  LinearScale,
  ArcElement,
  Tooltip,
  Legend,
);

const labels = ["14", "16", "18", "20"];

export const options = {
  responsive: true,
  elements: {
    point: {
      radius: 0,
    },
  },
  scales: {
    y: {
      min: 0,
      position: "right",
      ticks: {
        stepSize: 20,
        callback: function (value, index, values) {
          return value + " %";
        },
      },
    },
    x: {
      grid: {
        display: false,
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
};

export function LinearChart() {
  const canvasRef = useRef();
  // const [gradient, setGradient] = useState(null);

  const data = {
    labels,
    datasets: [
      {
        label: "APR",
        data: [33, 53, 85, 41, 44, 65],
        lineTension: 0.5,

        backgroundColor: ({ chart: { ctx } }) => {
          const gradient = ctx.createLinearGradient(0, 0, 0, 400);
          gradient.addColorStop(0, "rgba(92, 169, 252, 0.4)");
          gradient.addColorStop(1, "rgba(92, 169, 252, 0)");
          return gradient;
        },
        borderColor: "#254CF7",
      },
    ],
  };

  // useEffect(() => {
  //   console.log("canvasref", canvasRef.current?.canvas);
  //   const canvas = canvasRef.current?.canvas;
  //   if (!canvas) return;
  //
  //   const ctx = canvas.getContext("2d");
  //   const gradient = ctx.createLinearGradient(0, 0, 0, 400);
  //   // "linear-gradient(179.81deg, rgba(92, 169, 252, 0.4) 24.05%, rgba(92, 169, 252, 0) 98.81%)"
  //
  //   setGradient(gradient);
  // }, [canvasRef.current]);
  return <Line ref={canvasRef} options={options} data={data} />;
}
