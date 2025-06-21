import React from "react";

const Lists = () => {
  const numbers = [1, 2, 3, 4, 5];

  return (
    <div>
      {numbers.map((number) => (
        <ul key={number}>
          <li>{number}</li>
        </ul>
      ))}
    </div>
  );
};

export default Lists;
