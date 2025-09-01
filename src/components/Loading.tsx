import { LoaderCircle } from "lucide-react";
const Loading = () => {
  return (
    <div className=" mt-4 p-6 md:p-10 bg-white/20 flex items-center justify-center backdrop-blur-md rounded-xl shadow-lg border border-white/30 min-h-screen">
      <LoaderCircle size={120} color="#FFFFFF" className="animate-spin" />
    </div>
  );
};

export default Loading;
