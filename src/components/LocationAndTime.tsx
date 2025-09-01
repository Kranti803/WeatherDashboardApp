import { MapPin } from "lucide-react";
import { useWeather } from "../context/weatherContext";
import React from "react";

const LocationAndTime = () => {
  const { currentData } = useWeather();

  const date = currentData?.dt ? new Date(currentData?.dt * 1000) : new Date();
  const time = date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  return (
    <>
      <span className="w-fit border p-2 rounded-4xl bg-white/20 border-white/30 flex items-center gap-x-1">
        <MapPin />
        {currentData?.name},{currentData?.sys?.country}
      </span>
      <span className="w-fit border p-2 rounded-4xl bg-white/20 border-white/30">
        {time}
      </span>
    </>
  );
};

export default React.memo(LocationAndTime);
