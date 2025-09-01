import axios from "axios";
import { useEffect, useState } from "react";
import type { ILocation } from "../interfaces/locationsData";
import useDebounce from "./useDebounce";

const useLocationSuggestion = () => {
  const [locations, setLocations] = useState<ILocation[]>([]);
  const [query, setQuery] = useState<string | null>(null);
  const debouncedQuery = useDebounce(query, 300);

  useEffect(() => {
    if (!debouncedQuery) return;
    const getLocationSuggestions = async () => {
      try {
        const res = await axios.get(
          `https://api.openweathermap.org/geo/1.0/direct?q=${debouncedQuery}&limit=8&appid=${
            import.meta.env.VITE_API_KEY
          }`
        );
        setLocations(res?.data);
      } catch (err: any) {
        console.log(err);
      }
    }; //this is prevent the api to be called when the query is null on initail render
    getLocationSuggestions();
  }, [debouncedQuery]);

  return { setQuery, locations, setLocations };
};
export default useLocationSuggestion;
