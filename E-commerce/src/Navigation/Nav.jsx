import { FiHeart } from "react-icons/fi";
import React from "react";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import "./Nav.css";

const Nav = ({ handleInputChange, query }) => {
  return (
    <nav>
      <div className="nav-container">
        <input
          className="search-input"
          type="text"
          onChange={handleInputChange}
          value={query}
          placeholder="Enter your search shoes."
        />
      </div>
      <div className="profile-container">
        <a href="#" aria-label="Wishlist">
          <FiHeart className="nav-icons" />
        </a>
        <a href="#" aria-label="Cart">
          <AiOutlineShoppingCart className="nav-icons" />
        </a>
        <a href="#" aria-label="User">
          <AiOutlineUserAdd className="nav-icons" />
        </a>
      </div>
    </nav>
  );
};

export default Nav;
