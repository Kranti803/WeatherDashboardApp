import { createContext, useContext, useState, type ReactNode } from "react";
import useGetWeatherByCity from "../hooks/useGetWeatherByCity";
import type { IForecastEntry, IWeatherData } from "../interfaces/weatherData";

interface WeatherContextType {
  city: string;
  loading: boolean;
  error: any;
  tempUnit: string;
  weatherCondition: string | null;
  currentData: IWeatherData | null;
  forecastData: IForecastEntry[] | null;
  setCity: (city: string) => void;
  toggleTempUnit: () => void;
}

//context
const WeatherContext = createContext<WeatherContextType | undefined>(undefined);

//context provider
export const WeatherContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [city, setCity] = useState("Kathmandu");
  const [tempUnit, setTempUnit] = useState("metric");

  //fetching the weather data
  const { currentData, forecastData, loading, error, weatherCondition } =
    useGetWeatherByCity({
      city: city === "" ? "Kathmandu" : city,
      unit: tempUnit,
    });

  const toggleTempUnit = () => {
    if (tempUnit === "metric") setTempUnit("imperial");
    else setTempUnit("metric");
  };

  return (
    <WeatherContext.Provider
      value={{
        city,
        setCity,
        tempUnit,
        toggleTempUnit,
        loading,
        error,
        weatherCondition,
        currentData,
        forecastData,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

//hook
export function useWeather() {
  const context = useContext(WeatherContext);
  if (!context)
    throw new Error("useWeather must be used within a WeatherContextProvider");
  return context;
}
