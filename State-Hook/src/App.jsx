import React from "react";
import { useState } from "react";

function App() {
  // const [count, setCount] = useState(0);
  // const increment = () => setCount(count + 1);
  // const decrement=()=> setCount(count - 1);
  const [Friends,setFriends] = useState(["John", "Jane", ]);
  const addFriend = () => {
    setFriends([...Friends, "smith"]);
  };
  const removeFriend = () => {
    setFriends(Friends.filter((friend) => friend !== "smith"));
  };
  return (
    <div>
      {Friends.map((f)=>(
        <li key={Math.random()}>
          {f}
        </li>
      ))}
      <button onClick={addFriend}>add Friend</button>
      <button onClick={removeFriend}>remove Friend</button>
    </div>
  );
}

export default App;
