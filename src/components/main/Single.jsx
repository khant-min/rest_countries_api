import Country from "./Country";
import FOF from "./404";
import { useContext } from "react";
import DataContext from "../../context/DataContext";

const Single = () => {
  const { detail } = useContext(DataContext);
  return <>{detail !== undefined ? <Country detail={detail} /> : <FOF />}</>;
};

export default Single;
