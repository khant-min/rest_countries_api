import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { toggling } from "../../redux/reducers/light_dark";
import { useContext } from "react";
import DataContext from "../../context/DataContext";

const Country = ({ detail }) => {
  const navigate = useNavigate();
  const theme = useSelector(toggling);
  const { changeDetail, setChangeDetail } = useContext(DataContext);

  const chaingingCountry = (e) => {
    setChangeDetail(e.target.innerHTML);
  };

  return (
    <div className="max-w-full text-white flex flex-col items-start gap-10 my-10 ">
      <button
        onClick={() => navigate("/")}
        className={`px-4 py-1.5 rounded-sm ${
          theme === "light"
            ? "bg-zinc-600 text-white"
            : "bg-zinc-400 text-black"
        }`}
      >
        <i className="fa-sharp fa-solid fa-left-long"></i> Back
      </button>
      <section className="sec  sm:flex gap-10">
        <div className="sm:w-[550px] h-full">
          <img src={detail.flags.png} className="w-full" />
        </div>
        <div>
          <h2 className="font-bold text-2xl mt-10 sm:mt-0">
            {detail.name.common}
          </h2>
          <ul className="flex items-start flex-wrap sm:gap-10">
            <div>
              <li>
                <span>Native Name:</span>
                <p>{detail.name.common}</p>
              </li>
              <li>
                <span>Population:</span>
                <p>{detail.population}</p>
              </li>
              <li>
                <span>Region:</span>
                <p>{detail.region}</p>
              </li>
              <li>
                <span>Sub Region:</span>
                <p>{detail.subregion}</p>
              </li>
            </div>
            <div>
              <li>
                <span>Languages:</span>
                <p>{detail.languages.fra} 'not finish'</p>
              </li>
              <li>
                <span>Capital:</span>
                <p>{detail.capital}</p>
              </li>
              <li>
                <span>Currencies:</span>
                <p>'not finish'</p>
              </li>
              <li>
                <span>Top Level Domain:</span>
                <p>'not finish'</p>
              </li>
            </div>
          </ul>
          <ul>
            <li className="flex flex-col items-start sm:flex-row sm:items-center">
              <span>Border Countries:</span>
              <p>
                {detail.borders?.map((cur) => (
                  <button
                    onClick={chaingingCountry}
                    className="bg-zinc-600 px-3 py-1 m-2 rounded-sm"
                    key={cur}
                  >
                    {cur}
                  </button>
                ))}
              </p>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Country;
