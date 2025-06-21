import React, { createContext } from "react";
import ComponentA from "./components/ComponentA";
export const Data = createContext();
export const Data1 = createContext();

const App = () => {
  const name = "John Doe";
  const age = 30;
  return (
    <div>
      <Data.Provider value={name}>
        <Data1.Provider value={age}>
          <ComponentA />
        </Data1.Provider>
      </Data.Provider>
    </div>
  );
};

export default App;
