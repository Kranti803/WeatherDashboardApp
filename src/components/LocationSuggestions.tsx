import type { ILocation } from "../interfaces/locationsData";
import { useWeather } from "../context/weatherContext";
import React from "react";

interface ILocationSuggestionsProps {
  locations: ILocation[];
  setLocations: React.Dispatch<React.SetStateAction<ILocation[]>>;
}

const LocationSuggestions = ({
  locations,
  setLocations,
}: ILocationSuggestionsProps) => {
  const { setCity } = useWeather();

  const handleClick = (
    e: React.MouseEvent<HTMLParagraphElement, MouseEvent>
  ) => {
    setCity(e.currentTarget.textContent || "");
    setLocations([]);
  };

  if (locations.length == 0) return null;
  return (
    <div className=" mt-1 rounded-md bg-white/30 flex flex-col gap-y-2">
      {locations &&
        locations.length > 0 &&
        locations.map((location) => (
          <p
            key={location?.lat}
            onClick={handleClick}
            className="p-2 text-white cursor-pointer"
          >
            {location?.name}
          </p>
        ))}
    </div>
  );
};

export default React.memo(LocationSuggestions);
