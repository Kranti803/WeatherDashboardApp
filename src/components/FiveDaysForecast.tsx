import React, { useMemo } from "react";
import { useWeather } from "../context/weatherContext";
import type { IForecastEntry } from "../interfaces/weatherData";

const FiveDaysForecast = () => {
  const { forecastData } = useWeather();

  const fiveDaysWeatherData = useMemo(
    () =>
      forecastData?.filter(
        (item: IForecastEntry) => item?.dt_txt.split(" ")[1] === "12:00:00"
      ),
    [forecastData]
  );

  return (
    <div className="backdrop-blur-md rounded-md bg-white/30 p-4 text-white col-span-1 md:col-span-2">
      <h4 className="font-bold pb-3 text-lg">5 Days Weather Forerecast</h4>
      <div className="flex gap-x-2 overflow-x-scroll md:overflow-x-hidden whitespace-nowrap hide-scrollbar">
        {fiveDaysWeatherData && fiveDaysWeatherData.length > 0
          ? fiveDaysWeatherData.map((item) => (
              <div
                key={item?.dt}
                className="border bg-white/30 rounded-md p-1 flex flex-col justify-center items-center w-48 md:w-auto md:flex-1 shrink-0 "
              >
                <span className="text-lg font-semibold">
                  {new Date(item?.dt * 1000).toLocaleDateString("en-US", {
                    weekday: "long",
                  })}
                </span>
                <img
                  src={`https://openweathermap.org/img/wn/${item?.weather[0]?.icon}@2x.png`}
                  alt="Weather icon"
                />
                <aside className="flex flex-col items-center justify-center">
                  <span className="text-md font-semibold">
                    {item?.weather[0]?.main}
                  </span>
                  <span className="text-sm font-semibold pt-2">
                    {Math.ceil(item?.main?.temp_max)}° /{" "}
                    {Math.floor(item?.main?.temp_min)}°
                  </span>
                </aside>
              </div>
            ))
          : "No Data Found"}
      </div>
    </div>
  );
};

export default React.memo(FiveDaysForecast);
