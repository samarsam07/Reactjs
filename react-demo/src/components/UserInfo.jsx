import React from "react";

const UserInfo = () => {
  const userInfo = [
    {
      name: "John Doe",
      age: 30,
      location: "New York",
    },
    {
      name: "Jane Smith",
      age: 25,
      location: "Los Angeles",
    },
    {
      name: "Alice Johnson",
      age: 28,
      location: "Chicago",
    },
  ];
  return (
    <div>
      {userInfo.map((user) => (
        <ul key={Math.random()}>
          <li>{user.name}</li>
          <li>{user.age} </li>
          <li>{user.location} </li>
        </ul>
      ))}
    </div>
  );
};

export default UserInfo;
