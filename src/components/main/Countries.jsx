import { useSelector, useDispatch } from "react-redux";
import { useEffect, useContext } from "react";
import {
  selectAllData,
  selectStatus,
  selectError,
  fetchCountries,
} from "../../redux/reducers/api";
import { nanoid } from "@reduxjs/toolkit";
import { toggling } from "../../redux/reducers/light_dark";
import DataContext from "../../context/DataContext";
import { Link } from "react-router-dom";

const Countries = () => {
  const { requireCountry, filterByRegion, setDetail } = useContext(DataContext);
  const dispatch = useDispatch();
  const allCountries = useSelector(selectAllData);
  const status = useSelector(selectStatus);
  const error = useSelector(selectError);
  const theme = useSelector(toggling);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchCountries());
    }
  }, [status]);

  let countryList = [];
  if (allCountries.length) {
    for (let i = 0; i < allCountries[0].length; i++) {
      countryList.push(allCountries[0][i]);
    }
  }

  const filteredResult = countryList.filter(
    (cur) =>
      cur.name.common.toLowerCase().includes(requireCountry) &&
      cur.region.toLowerCase().includes(filterByRegion)
  );

  let countries;
  switch (status) {
    case "loading":
      countries = <p>Countries are still fetching...</p>;
      break;
    case "succeeded":
      countries = filteredResult.map((cur) => (
        <li className="my-6 text-zinc-100" key={nanoid()}>
          <Link to={cur.name.common}>
            <article
              onClick={() => setDetail(cur)}
              className={`article h-[20rem] w-60 rounded-sm overflow-hidden cursor-pointer ${
                theme === "light"
                  ? "bg-zinc-600 text-white"
                  : "bg-zinc-100 text-black"
              }`}
            >
              <img className="h-32 w-full img" src={cur.flags.png} />
              <section className="p-6 flex flex-col justify-start gap-3">
                <h2 className="font-bold text-xl">{cur.name.common}</h2>
                <p>
                  <span>Population:</span> {cur.population}
                </p>
                <p>
                  <span>Region:</span> {cur.region}
                </p>
                <p>
                  <span>Capital:</span> {cur.capital}
                </p>
              </section>
            </article>
          </Link>
        </li>
      ));
      break;
    case "error":
      countries = <p>Errors: {error}</p>;
      break;
    default:
      console.log("In just idle...");
      break;
  }

  return (
    <div>
      <ul className={`flex flex-wrap justify-between text-white`}>
        {countries}
      </ul>
    </div>
  );
};

export default Countries;
