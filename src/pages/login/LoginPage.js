import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../App";
import Button from "../../components/button/Button.js";
import "./LoginPage.css";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const { handleLogin } = useContext(AuthContext);

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
        credentials: "include",  // added this line
        body: JSON.stringify(userData),
      });

      const data = await response.json();

      if (response.ok && !response.error) {
        handleLogin(data);
        navigate("/");
      } else {
        throw new Error(`Login failed: ${data.message}`);
      }
    } catch (error) {
      console.error("Error during login:", error);
      setError("Error during login. Please try again.");
    }
  }
  return (
    <div className="loginPage">
      <form className="formContainer" onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="email" className="inputLabel">Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`inputField inputFieldEmail`}
          type="email"
          name="email"
          id="email"
          required
        ></input>
        <label htmlFor="password">Password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={`inputField inputFieldPassword`}
          type="password"
          name="password"
          id="password"
          required
        ></input>

        <Button className="submit-button" type="submit" buttonText="Sign In" />
        {error && <div style={{ color: "red" }}>{error}</div>}

        <p className="link-to-sign-up">
          Don't have an account yet?{' '}
          Create one <Link to="/register" className="link-to-sign-up-page"> here</Link>.<br/><br/>
        </p>
      </form>
    </div>
  );
}

export default LoginPage;
