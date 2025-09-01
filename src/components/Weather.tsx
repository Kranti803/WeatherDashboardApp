import { useWeather } from "../context/weatherContext";
import FiveDaysForecast from "./FiveDaysForecast";
import LocationAndTime from "./LocationAndTime";
import SunRiseAndSunSet from "./SunRiseAndSunSet";
import TemperatureGraph from "./TemperatureGraph";
import TodaysWeather from "./TodaysWeather";
import WeatherInfo from "./WeatherInfo";
import Loading from "./Loading";
import Error from "./Error";

const Weather = () => {
  const { loading, error } = useWeather();

  if (loading) return <Loading />;
  if (error) return <Error />;

  return (
    <div className=" mt-4 p-6 md:p-10 bg-white/20 backdrop-blur-md rounded-xl shadow-lg border border-white/30">
      <h2 className="text-2xl font-bold mb-4 text-white  flex items-center justify-between gap-x-1">
        <LocationAndTime />
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <TodaysWeather />
        <TemperatureGraph />
        <WeatherInfo />
        <SunRiseAndSunSet />
        <FiveDaysForecast />
      </div>
    </div>
  );
};

export default Weather;
