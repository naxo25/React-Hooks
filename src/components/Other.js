import { useContext } from "react";
import MyContext from "../context/myContext";

const Other = () => {
  const context = useContext(MyContext);
  return <h3> Context desde otro modulo {context.number} </h3>;
};

export default Other;
