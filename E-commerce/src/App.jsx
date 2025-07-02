import React, { useState } from "react";
import "./index.css";
import Nav from "./Navigation/Nav";
import Products from "./products/Products";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/sidebar";
import Card from "./components/Card";
import product from "./db/data";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState("");

  // Corrected function name to match prop in Nav
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  // Corrected filter logic for search
  const filteredItems = product.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase())
  );

  // radio filter
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // button filter
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  // filtering products based on selected category and query
  function filteredData(products, selected, query) {
    let filteredProducts = products;
    if (query) {
      filteredProducts = filteredItems;
    }
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }
    return filteredProducts.map(
      ({ img, title, star, reviews, prevPrice, newPrice }) => (
        <Card
          key={title + newPrice}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
        />
      )
    );
  }

  const result = filteredData(product, selectedCategory, query);

  return (
    <>
      <Sidebar handleChange={handleChange} />
      <Nav query={query} handleInputChange={handleInputChange} />
      <Recommended handleClick={handleClick} />
      <Products result={result} />
    </>
  );
};

export default App;
