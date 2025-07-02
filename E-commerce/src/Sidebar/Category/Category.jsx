import React from "react";
import "./Category.css";
import Input from "../../components/Input";

const Category = ({ handleChange }) => {
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>
      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" name="" value="" />
          <span className="checkmark"></span>all
        </label>

        <Input
          handleChange={handleChange}
          value="sneakers"
          title="Sneakers"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="flats"
          title="flats"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="sandels"
          title="Sandels"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="heels"
          title="Heels"
          color="#f0f0f0"
          name="test"
        />
      </div>
    </div>
  );
};

export default Category;
