import Multiple from "./Multiple";
import Single from "./Single";
import FOF from "./404";
import { useSelector } from "react-redux";
import { toggling } from "../../redux/reducers/light_dark";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Main = () => {
  const toggleColors = useSelector(toggling);
  const theme = toggleColors === "light" ? "bg-zinc-700" : "bg-zinc-200";

  return (
    <main
      className={`min-w-full min-h-screen flex flex-col items-center ${theme}`}
    >
      <div className="w-[85%] text-white">
        <Router>
          <Routes>
            <Route path="/" element={<Multiple />} />
            <Route path=":name" element={<Single />} />
            <Route path="*" element={<FOF />} />
          </Routes>
        </Router>
      </div>
    </main>
  );
};

export default Main;
