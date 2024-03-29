import React from "react";
import { useSelector } from "react-redux";
import { toggling } from "../../redux/reducers/light_dark";
import { useNavigate } from "react-router-dom";

const FOF = () => {
  const navigate = useNavigate();
  const theme = useSelector(toggling);

  return (
    <div className="max-w-full text-black flex flex-col items-center my-10">
      <section
        className={`flex flex-col items-center justify-evenly w-[50%] h-96 rounded-md ${
          theme === "light"
            ? " bg-[#202C39] text-white"
            : "bg-zinc-300 text-black"
        }`}
      >
        <div className="flex flex-col items-start gap-24">
          <span className="text-4xl text-red-500">404: Page not found</span>
          <button
            onClick={() => navigate("/")}
            className={`px-4 py-1.5 rounded-sm ${
              theme === "light"
                ? " bg-zinc-700 text-white"
                : "bg-zinc-400 text-black"
            }`}
          >
            <i className="fa-sharp fa-solid fa-left-long"></i> Back
          </button>
        </div>
      </section>
    </div>
  );
};

export default FOF;
