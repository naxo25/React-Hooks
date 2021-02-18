import React, { useEffect, useReducer } from "react";
import MyContext from "./myContext";
import UserReducer from "./reducer";

const UseContext = (props) => {
  const initialState = {
    number: 0
  };

  const [state, dispatch] = useReducer(UserReducer, initialState);

  const getNumber = async (numero) => {
    try {
      //const { data }= numero;
      dispatch({ type: "Get_Number", payload: numero });
    } catch (error) {}
  };

  return (
    <MyContext.Provider
      value={{
        number: state.number,
        getNumber
      }}
    >
      {props.children}
    </MyContext.Provider>
  );
};

export default UseContext;
