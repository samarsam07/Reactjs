import React from "react";

const Cart = () => {
  const items = ["apple", "banana", "orange"];
  const styles={backgroundColor:"teal" ,color:"White",padding:"2em"}
  return (
    <div>
      <h1 style={{backgroundColor:"teal" ,color:"White",padding:"2em"}}>Cart</h1>
      {items.length > 0 && <h2>You have {items.length} items in your cart</h2>}

      <ul>
        <h2 style={styles}>Items</h2>
        {items.map((item) => (
          <li key={Math.random()}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
