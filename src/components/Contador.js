import { useEffect, useContext, useState } from "react";
import MyContext from "../context/myContext";

const Contador = () => {
  const context = useContext(MyContext);
  const [time, setTime] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      context.getNumber(context.number + time);
    }, 1000);
    return () => clearInterval(interval);
  });

  return (
    <div>
      <h1> {context.number} </h1>
      <button onClick={() => setTime(time + 1)}>Sumar 1 al contador</button>
      <button onClick={() => context.getNumber(0)}>Resetear</button>
      <button onClick={() => setTime(time - 1)}>Restar 1 al contador</button>
      <h3> Numero a sumar: {time} </h3>
    </div>
  );
};

export default Contador;