import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  TimeScale,
  LinearScale,
  LineElement,
  PointElement,
  Filler,
  CategoryScale,
} from "chart.js";
import "chartjs-adapter-moment";
import { Line } from "react-chartjs-2";

ChartJS.register(
  TimeScale,
  LineElement,
  PointElement,
  Filler,
  CategoryScale,
  LinearScale,
  ArcElement,
  Tooltip,
  Legend,
);

export function LinearChart({ data, options, ...rest }) {
  return <Line options={options} data={data} {...rest} />;
}
