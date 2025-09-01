import { AlertTriangle } from "lucide-react";
import { useWeather } from "../context/weatherContext";

const Error = () => {
  const {error} = useWeather();
  return (
    <div className="mt-4 p-6 md:p-10 bg-red-500/20 flex items-center justify-center backdrop-blur-md rounded-xl shadow-lg border border-red-400/30 min-h-screen">
      <div className="flex flex-col items-center text-center space-y-4">
        <AlertTriangle size={80} className="text-red-400" />
        <p className="text-lg font-semibold text-white capitalize">{error}</p>
      </div>
    </div>
  );
};

export default Error;
