import React, { useState } from "react";
import Navbar from "../navbar/Navbar.js";

function LoginPage() {
  const [userLogin, setUserLogin] = useState(false);

  function handleSubmit() {
    setUserLogin(true);
    console.log("User logged in!");
  }

  return (
    <div className="dashboard">
      <Navbar isLoggedIn={userLogin} handleLogin={handleSubmit} />
      <h1>Login Page</h1>
      <form className="formContainer">
        <label htmlFor="email">Email</label>
        <input
          className="inputField"
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email"
        ></input>
        <label htmlFor="password">Password</label>
        <input
          className="inputField"
          type="password"
          name="password"
          id="password"
          placeholder="Enter your password"
        ></input>
      </form>
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}

export default LoginPage;
