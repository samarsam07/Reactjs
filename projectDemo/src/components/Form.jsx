import React from "react";
import "../style.css";
import { useState } from "react";

const Form = () => {
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");

  const [errorUsername, setErrorUsername] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorConfirmPassword, setErrorConfirmPassword] = useState("");

  const [userColor, setUserColor] = useState("");
  const [emailColor, setEmailColor] = useState("");
  const [passwordColor, setPasswordColor] = useState("");
  const [confirmPasswordColor, setConfirmPasswordColor] = useState("");

  const validate = (e) => {
    e.preventDefault();
    if (username.length > 8) {
      setErrorUsername("");
      setUserColor("green");
    } else {
      setErrorUsername("Username must be more than 8 characters");
      setUserColor("red");
    }
    if (email.includes("@gmail")) {
      setErrorEmail("");
      setEmailColor("green");
    } else {
      setErrorEmail("Email must contain @gmail");
      setEmailColor("red");
    }
    if (password.length > 8) {
      setErrorPassword("");
      setPasswordColor("green");
    } else {
      setErrorPassword("Password must be more than 8 characters");
      setPasswordColor("red");
    }
    if (password!=="" &&confirmPassword === password) {
      setErrorConfirmPassword("");
      setConfirmPasswordColor("green");
    } else {
      setErrorConfirmPassword("Passwords do not match");
      setConfirmPasswordColor("red");
    }
  };

  return (
    <>
      <div className="card">
        <div className="card-image"></div>
        <form>
          <input
            type="text"
            placeholder="name"
            style={{ borderColor: userColor }}
            value={username}
            onChange={(e) => setusername(e.target.value)}
          />
          <p className="error">{errorUsername}</p>
          <input
            type="text"
            placeholder="email"
            value={email}
            style={{ borderColor: emailColor }}
            onChange={(e) => setemail(e.target.value)}
          />
          <p className="error">{errorEmail}</p>
          <input
            type="password"
            placeholder="password"
            value={password}
            style={{ borderColor: passwordColor }}
            onChange={(e) => setpassword(e.target.value)}
          />
          <p className="error">{errorPassword}</p>
          <input
            type="password"
            placeholder="confirm password"
            value={confirmPassword}
            style={{ borderColor: confirmPasswordColor }}
            onChange={(e) => setconfirmPassword(e.target.value)}
          />
          <p className="error">{errorConfirmPassword}</p>
          <button className="submit-btn" onClick={validate}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Form;
