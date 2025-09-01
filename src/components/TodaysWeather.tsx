import React from "react";
import { useWeather } from "../context/weatherContext";

const TodaysWeather = () => {
  const { currentData } = useWeather();
  const { tempUnit } = useWeather();

  const date = currentData?.dt ? new Date(currentData.dt * 1000) : new Date(); // convert UNIX timestamp to JS Date
  const day = date.toLocaleDateString("en-US", { weekday: "long" });
  const fullDate = date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="flex-1 bg-white/30 backdrop-blur-sm rounded-lg p-4 text-white ">
      <h4 className="font-bold pb-1 text-lg">Today</h4>

      <div className="grid grid-cols-2 grid-rows-2 gap-4">
        <div className="flex flex-col items-center justify-center">
          <span className="text-2xl font-semibold">{day}</span>
          <span>{fullDate}</span>
        </div>

        <div className="flex flex-col items-center justify-center row-span-2">
          <img
            src={`https://openweathermap.org/img/wn/${currentData?.weather[0]?.icon}@2x.png`}
            alt="Weather icon"
          />
          <span className="text-xl font-bold">
            {currentData?.weather[0]?.main}
          </span>
          <p className="capitalize">{currentData?.weather[0]?.description}</p>
        </div>

        <div className="flex flex-col gap-y-1 items-center justify-between row-span-2 ">
          <div className="text-5xl sm:text-6xl font-bold">
            {Math.round(currentData?.main?.temp!)}
            {tempUnit === "metric" ? "°C" : "°F"}
          </div>
          <div className="text-sm font-semibold">
            <span className="mr-2">
              Max: {Math.ceil(currentData?.main?.temp_max!)}
              {tempUnit === "metric" ? "°C" : "°F"}
            </span>
            <span>
              Min: {Math.floor(currentData?.main?.temp_min!)}
              {tempUnit === "metric" ? "°C" : "°F"}
            </span>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <span>
            Feels like {Math.round(currentData?.main?.feels_like!)}
            {tempUnit === "metric" ? "°C" : "°F"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default React.memo(TodaysWeather);
