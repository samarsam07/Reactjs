import React from "react";
import "./Recommended.css"; 

const Recommended = () => {
  return (
    <>
      <h2 className="recommended-title">Recommended</h2>
      <div className="recommended-flex">
        <button className="btns">All Products</button>
        <button className="btns">Nikes</button>
        <button className="btns">Addidas</button>
        <button className="btns">Puma</button>
        <button className="btns">Vans</button>
      </div>
    </>
  );
};


export default Recommended;
