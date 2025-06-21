import React from "react";
const ValidPassword = () => <h1>Valid Password</h1>;
const InValidPassword = () => <h1>Invalid Password</h1>;
const Password = ({ isVaild }) => {
  // if (isVaild) {
  //   return <ValidPassword />;
  // }
  // return <InValidPassword />;
  return (isVaild ? <ValidPassword /> : <InValidPassword />);
};

export default Password;
