import { useState, useEffect } from "react";
import axios from "axios";
import {
  type IWeatherData,
  type IForecastEntry,
} from "../interfaces/weatherData";
import useDebounce from "./useDebounce";

interface IuseGetWeatherByCityProps {
  city: string;
  unit: string;
}

const useGetWeatherByCity = ({ city, unit }: IuseGetWeatherByCityProps) => {
  const [currentData, setCurrentData] = useState<IWeatherData | null>(null);
  const [forecastData, setForecastData] = useState<IForecastEntry[] | null>(
    null
  );
  const [weatherCondition, setWeatherCondition] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const debouncedCityTerm = useDebounce(city, 500);

  useEffect(() => {
    if (!debouncedCityTerm) return;
    const getWeather = async () => {
      setLoading(true);
      setError(null);

      try {
        const [currentWeatherRes, forecastWeatherRes] = await Promise.all([
          axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${debouncedCityTerm}&appid=${
              import.meta.env.VITE_API_KEY
            }&units=${unit}`
          ),
          axios.get(
            `https://api.openweathermap.org/data/2.5/forecast?q=${debouncedCityTerm}&appid=${
              import.meta.env.VITE_API_KEY
            }&units=${unit}`
          ),
        ]);

        setCurrentData(currentWeatherRes?.data);
        setWeatherCondition(currentWeatherRes?.data?.weather[0]?.main);
        setForecastData(forecastWeatherRes?.data?.list);
      } catch (err: any) {
        setError(err?.response?.data?.message);
      } finally {
        setLoading(false);
      }
    };
    getWeather();
  }, [debouncedCityTerm, unit]);

  return { currentData, forecastData, loading, error, weatherCondition };
};
export default useGetWeatherByCity;
