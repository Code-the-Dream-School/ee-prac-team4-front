import React from "react";
import "./LoginPage.css";
function LoginPage() {
  function handleSubmit() {
    console.log("Hello world!");
  }
  return (
    <div className="loginPage">
      <h1>Login Page</h1>
      <form className="formContainer">
        <label htmlFor="email"></label>
        <input
          className="inputField"
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email"
        ></input>
        <label htmlFor="password"></label>
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
      <p>
        <a href="./register">Not registered? Click here.</a>
      </p>
    </div>
  );
}

export default LoginPage;

