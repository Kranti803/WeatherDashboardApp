import React, { useMemo } from "react";
import {
  CartesianGrid,
  Line,
  XAxis,
  YAxis,
  LineChart,
  ResponsiveContainer,
} from "recharts";
import type { IForecastEntry } from "../interfaces/weatherData";
import { useWeather } from "../context/weatherContext";

const TemperatureGraph = () => {
  const { forecastData } = useWeather();

  //getting the today's day
  const todayData = useMemo(
    () =>
      forecastData?.filter((item: IForecastEntry) => {
        return (
          new Date(item?.dt * 1000).toISOString().split("T")[0] ===
          new Date().toISOString().split("T")[0]
        );
      }),
    [forecastData]
  );
  //mapping the today's filtered data into {time:00:00, temp:00} format for the graph
  const hourlyData = todayData?.map((item: IForecastEntry) => {
    return {
      time: new Date(item?.dt * 1000).toLocaleTimeString("en-Us", {
        hour: "numeric",
        minute: "numeric",
      }),
      temp: Math.round(item?.main?.temp),
    };
  });
  const { tempUnit } = useWeather();

  return (
    <div className="flex-1 bg-white/30 backdrop-blur-sm rounded-lg p-4 text-white">
      <h4 className="font-bold pb-3 text-lg">Temperature vs Time</h4>

      <ResponsiveContainer height={192} width={"100%"} className="px-3">
        <LineChart
          data={hourlyData}
          margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" stroke="#FFFFFF" tick={{ fontSize: 14 }} />
          <YAxis
            stroke="#FFFFFF"
            label={{
              value: `${tempUnit === "metric" ? "°C" : "°F"}`,
              angle: 0,
              position: "insideLeft",
              style: { fill: "#FFFFFF", fontSize: 14, fontWeight: "bold" },
            }}
            tick={{ fontSize: 14 }}
          />
          <Line
            type="monotone"
            dataKey="temp"
            stroke="#FFFFFF"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
export default React.memo(TemperatureGraph);
