import { useEffect, useState } from "react";
import rainyVdo from "../assets/rainy.mp4";
import clearSky from "../assets/clear.mp4";
import cloudyVdo from "../assets/clouds.mp4";
import drizzleVdo from "../assets/drizzle.mp4";
import thunderVdo from "../assets/thunderr.mp4";
import defaultBg from "../assets/wallheaven.png";
import { useWeather } from "../context/weatherContext";

const Background = () => {
  const [background, setBackground] = useState<string>(defaultBg);

  const { weatherCondition } = useWeather();

  useEffect(() => {
    switch (weatherCondition) {
      case "Clouds":
        setBackground(cloudyVdo);
        break;
      case "Rain":
        setBackground(rainyVdo);
        break;
      case "Clear":
        setBackground(clearSky);
        break;
      case "Drizzle":
        setBackground(drizzleVdo);
        break;
      case "Thunder":
        setBackground(thunderVdo);
        break;
      default:
        setBackground(defaultBg);
        return;
    }
  }, [weatherCondition]);

  return (
    <video
      src={background}
      autoPlay
      loop
      muted
      playsInline
      poster={defaultBg}
      className="fixed inset-0 w-full h-full object-cover -z-10"
    />
  );
};

export default Background;
