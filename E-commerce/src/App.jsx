import React from "react";
import "./index.css"
import Nav from "./Navigation/Nav";
import Products from "./products/Products";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/sidebar";

const App = () => {
  return (
    <>
      <Sidebar />
      <Nav />
      <Recommended />
      <Products />
    </>
  );
};

export default App;
