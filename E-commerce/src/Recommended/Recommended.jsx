import React from "react";
import "./Recommended.css";
import Button from "../components/Button";

const Recommended = ({ handleClick }) => {
  return (
    <>
      <h2 className="recommended-title">Recommended</h2>
      <div className="recommended-flex">
        <Button onClickHandler={handleClick} value="" title="All Products" />
        <Button onClickHandler={handleClick} value="Nike" title="Nikes" />
        <Button onClickHandler={handleClick} value="Adidas" title="Adidas" />
        <Button onClickHandler={handleClick} value="Puma" title="Pumas" />
        <Button onClickHandler={handleClick} value="Vans" title="Vans" />
      </div>
    </>
  );
};

export default Recommended;
