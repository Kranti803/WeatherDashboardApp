import { Wind, Activity, Droplet, Eye } from "lucide-react";
import { useWeather } from "../context/weatherContext";
import React from "react";

const WeatherInfo = () => {
  const { currentData } = useWeather();
  const info = [
    {
      label: "Wind",
      value: `${currentData?.wind?.speed} m/s`,
      icon: <Wind size={28} />,
    },
    {
      label: "Pressure",
      value: `${currentData?.main?.pressure} hPa`,
      icon: <Activity size={28} />,
    },
    {
      label: "Humidity",
      value: `${currentData?.main?.humidity}%`,
      icon: <Droplet size={28} />,
    },
    {
      label: "Visibility",
      value: `${
        currentData?.visibility ? currentData?.visibility / 1000 : "0"
      } km`,
      icon: <Eye size={28} />,
    },
  ];

  return (
    <div className="flex-1 bg-white/30 backdrop-blur-sm rounded-lg p-4 text-white">
      <h4 className="font-bold pb-3 text-lg">Weather Conditions</h4>

      <aside className="grid grid-cols-1 sm:grid-cols-2  gap-3 sm:gap-4">
        {info?.map((item) => (
          <div
            key={item.label}
            className="flex items-center justify-center gap-6 backdrop-blur-sm bg-white/30 rounded-md p-2 border"
          >
            {item.icon}
            <div className="flex flex-col gap-y-1">
              <p className="text-sm font-bold">{item.label}</p>
              <p className="font-semibold">{item.value}</p>
            </div>
          </div>
        ))}
      </aside>
    </div>
  );
};

export default React.memo(WeatherInfo);
