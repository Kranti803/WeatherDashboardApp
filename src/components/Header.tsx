import { Search } from "lucide-react";
import { useWeather } from "../context/weatherContext";
import useLocationSuggestion from "../hooks/useLocationSuggestion";
import LocationSuggestions from "./LocationSuggestions";

const Header = () => {
  const { tempUnit, toggleTempUnit, setCity } = useWeather();
  const { setQuery, locations, setLocations } = useLocationSuggestion(); //state lifting here..(cannot use setQuery here and both locations and setLocations directly inside the LocationSuggestions component )

  return (
    <header className="min-h-18 p-4 rounded-xl backdrop-blur-md bg-white/10 border border-white/30 shadow-md">
      <div className="flex flex-col sm:flex-row flex-1 gap-2 w-full">
        <div className="flex flex-1 items-center rounded-md bg-white/20 backdrop-blur-sm px-2 py-1">
          <input
            type="text"
            placeholder="Enter city..."
            className="w-full px-4 py-2 rounded-md text-white placeholder-white outline-none bg-transparent"
            onChange={(e) => {
              setCity(e.target.value);
              setQuery(e.target.value);
            }}
          />
          <button
            type="submit"
            className="bg-white/20 px-2 md:px-4 py-2 rounded-md text-white hover:bg-white/30 transition"
          >
            <Search size={20} />
          </button>
        </div>

        <button
          onClick={toggleTempUnit}
          className="px-4 py-2 rounded-md font-semibold text-white border border-white/30 bg-white/10 backdrop-blur-sm hover:bg-white/20 transition"
        >
          {tempUnit === "metric" ? "°C → °F" : "°F → °C"}
        </button>
      </div>

      <div className="mt-2 w-full">
        <LocationSuggestions
          locations={locations}
          setLocations={setLocations}
        />
      </div>
    </header>
  );
};

export default Header;
