import React from 'react';
import { Line } from 'react-chartjs-2';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGraph } from '../redux/reducer/graphReducer';
import { useEffect } from 'react';
import Spinner from '../components/Spinner'

const LineChart = (props) => {
  const { coin } = props;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGraph(coin.symbol));
  }, [coin.symbol,dispatch]);
  const stats = useSelector((state) => state.graphReducer.stats);
  const loading = useSelector((state) => state.graphReducer.loading);
  const data = {
    labels: ["100m", "95m", "90m", "85m", "80m", "75m", "70m", "65m", "60m", "55m", "50m", "45m", "40m", "35m", "30m", "25m", "20m", "15m", "10m", "5m"],
    datasets: [
      {
        label: "Price",
        data: stats,
        fill: false,
        backgroundColor: "yellow",
        borderColor: "rgba(200, 200, 12, 0.5)",
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        labels: {
          color: "#fff",
          font: {
            size: 14
          }
        }
      }
    },
    scales: {
      y: { 
        ticks: {
          color: "#fff",
          font: {
            size: 14,
          },
          stepSize: 1,
          beginAtZero: true
        }
      },
      x: {
        ticks: {
          color: "#fff", 
          font: {
            size: 14
          },
          stepSize: 1,
          beginAtZero: true
        }
      }
    }
  }
  return (
    <>
    {loading ? <Spinner /> : null}
      <Line data={data} options={options} />
    </>
  );
};

export default LineChart;
