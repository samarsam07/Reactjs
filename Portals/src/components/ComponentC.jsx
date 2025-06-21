import React, { useContext } from "react";
import { Data, Data1 } from "../App";

const ComponentC = () => {
  const name = useContext(Data);
  const age = useContext(Data1);
  return (
    <div>
      <h1>{name}</h1>
      <h1>{age}</h1>
    </div>
  );
};

export default ComponentC;
