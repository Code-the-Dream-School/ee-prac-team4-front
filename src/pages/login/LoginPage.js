import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    const userData = {
      email: email.trim(),
      password: password.trim(),
    };
    try {
      const response = await fetch(`http://localhost:8000/api/v1/user/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();

      if (data.token) {
        navigate("/");
      }
      if (data.error || data.status !== 200) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
    } catch (error) {

      console.error("Error during login:", error);
      setError("Error during login. Please try again.");
    }
  }

  return (
    <div className="loginPage">
      <h1>Login Page</h1>
      <form className="formContainer" onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="email">Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="inputField"
          type="email"
          name="email"
          id="email"
        
          required
        ></input>
        <label htmlFor="password">Password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="inputField"
          type="password"
          name="password"
          id="password"
        required
        ></input>

        <button type="submit">Submit</button>
        {error && <div style={{ color: "red" }}>{error}</div>}
      </form>
    </div>
  );
}

export default LoginPage;
