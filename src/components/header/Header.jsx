import { useSelector, useDispatch } from "react-redux";
import { toggleLightDark } from "../../redux/reducers/light_dark";
import { toggling } from "../../redux/reducers/light_dark";

const Header = () => {
  const dispatch = useDispatch();
  const toggleColors = useSelector(toggling);

  const toggle = () => {
    toggleColors === "light"
      ? dispatch(toggleLightDark("dark"))
      : dispatch(toggleLightDark("light"));
  };

  const light = (
    <>
      <i className="fa-solid fa-sun mr-2"></i> Light Mode
    </>
  );

  const dark = (
    <>
      <i className="fa-solid fa-moon mr-2"></i> Dark Mode
    </>
  );

  return (
    <header
      className={`flex justify-between min-w-full md:px-12 px-4 py-6 ${
        toggleColors === "light"
          ? "bg-zinc-600 text-white"
          : "bg-zinc-100 text-black"
      }`}
    >
      <h1 className="text-lg font-bold cursor-default">Where in the world?</h1>
      <div className="cursor-pointer" onClick={toggle}>
        {toggleColors === "light" ? light : dark}
      </div>
    </header>
  );
};

export default Header;
