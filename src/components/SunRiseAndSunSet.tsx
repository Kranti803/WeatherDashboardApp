import { Sunrise, Sunset } from "lucide-react";
import { useWeather } from "../context/weatherContext";
import React from "react";

const SunRiseAndSunSet = () => {
  const { currentData } = useWeather();

  const sunRiseTime = currentData?.sys?.sunrise
    ? new Date(currentData.sys.sunrise * 1000).toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "numeric",
      })
    : "00:00";

  const sunSetTime = currentData?.sys?.sunset
    ? new Date(currentData.sys.sunset * 1000).toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "numeric",
      })
    : "00:00";

  return (
    <div className="backdrop-blur-md rounded-md bg-white/30 p-4 text-white ">
      <h4 className="font-bold pb-3 text-lg">Sunrise and Sunset</h4>

      <div className="grid grid-cols-2 items-center gap-2">
        <div className="bg-white/30 border rounded-md h-32 flex items-center justify-between flex-col gap-y-4 p-3">
          <Sunrise size={60} color="#FFA500" />
          <span className="font-bold text-xl">{sunRiseTime}</span>
        </div>
        <div className="bg-white/30 border rounded-md h-32 flex items-center justify-betweens flex-col gap-y-4 p-3">
          <Sunset size={60} color="#FF6347" />
          <span className="font-bold text-xl">{sunSetTime}</span>
        </div>
      </div>
    </div>
  );
};

export default React.memo(SunRiseAndSunSet);
