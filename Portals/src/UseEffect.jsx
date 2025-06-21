import React, { useState, useEffect } from "react";

const App = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getData() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json(); // Await the JSON parsing
      if (data && data.length) setData(data);
    }
    getData();
  }, []);

  return (
    <div>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.title}</li> // Use item.id as key
        ))}
      </ul>
    </div>
  );
};

export default App;
