import React from "react";
import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import "./Nav.css"; // Assuming you have a CSS file for styling

function Nav() {
  return (
    <nav>
      <div className="nav-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search for products..."
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
}

export default Nav;
