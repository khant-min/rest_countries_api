import { toggling } from "../../redux/reducers/light_dark";
import { useSelector } from "react-redux";
import { selectAllData } from "../../redux/reducers/api";
import { useContext } from "react";
import DataContext from "../../context/DataContext";

const SearchAndFilter = () => {
  const { requireCountry, setRequireCountry, setFilterByRegion } =
    useContext(DataContext);
  const theme = useSelector(toggling);
  const allCountries = useSelector(selectAllData);

  const colors =
    theme === "light" ? "bg-zinc-600 text-white" : "bg-zinc-100 text-black";

  const color = theme === "light" ? "bg-zinc-600" : "bg-zinc-100";

  let img = [];
  if (allCountries.length) {
    for (let i = 0; i < allCountries[0].length; i++) {
      img.push(allCountries[0][i]);
    }
  }

  return (
    <div className="min-w-full flex justify-between items-center flex-wrap">
      <form
        className={`m-4 ml-0  ${color} flex items-center rounded-md w-72`}
        onSubmit={(e) => e.preventDefault()}
      >
        <label htmlFor="search">
          <i className="fa-solid fa-magnifying-glass text-2xl px-4"></i>
        </label>
        <input
          className={`z-20 p-3  ${colors}`}
          type="text"
          id="search"
          placeholder="Search for a country"
          value={requireCountry}
          onChange={(e) => setRequireCountry(e.target.value)}
        />
      </form>
      <div>
        <select
          className={`p-2 ${colors}`}
          onChange={(e) => setFilterByRegion(e.target.value)}
        >
          <option value="">Filter by Region</option>
          <option value="africa">Africa</option>
          <option value="americas">Americas</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="oceania">Oceania</option>
        </select>
      </div>
    </div>
  );
};

export default SearchAndFilter;
