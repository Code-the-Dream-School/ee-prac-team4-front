import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../App";
import Button from "../../components/button/Button.js";
import "./Register.css";

function Register() {
  const [newFirstName, setNewFirstName] = useState("");
  const [newLastName, setNewLastName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newUsername, setNewUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const { handleLogin } = useContext(AuthContext);

  async function handleRegistration(e) {
    e.preventDefault();
    try {
      const response = await fetch(
        `http://localhost:8000/api/v1/user/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include", // added this line
          body: JSON.stringify({
            firstName: newFirstName,
            lastName: newLastName,
            username: newUsername,
            password: newPassword,
            email: newEmail,
            role: "Student",
          }),
        },
      );

      const data = await response.json();
      console.log("Response from server:", data);

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
    <div className="registerPage">
      <h1>Register</h1>

      <form
        onSubmit={(e) => handleRegistration(e)}
        className="registerContainer"
      >
        <label>
          First Name
          <input
            type="text"
            value={newFirstName}
            onChange={(e) => setNewFirstName(e.target.value)}
            className="inputField"
            autoComplete="off"
            required
          />
        </label>

        <label>
          Last Name
          <input
            type="text"
            value={newLastName}
            onChange={(e) => setNewLastName(e.target.value)}
            className="inputField"
            autoComplete="off"
            required
          />
        </label>

        <label>
          Email
          <input
            type="email"
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
            className={`inputField inputFieldEmail`}
            autoComplete="off"
            required
          />
        </label>

        <label>
          Username
          <input
            type="text"
            value={newUsername}
            onChange={(e) => setNewUsername(e.target.value)}
            className="inputField"
            autoComplete="off"
            required
          />
        </label>

        <label>
          Password
          <input
            type="password"
            placeholder="*************"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className={`inputField inputFieldPassword`}
            autoComplete="off"
            required
          />
        </label>

        <Button type="submit" className="submit-button-register" buttonText="register" />

        {error && <div style={{ color: "red" }}>{error}</div>}

        <p className="link-to-register">
          Already have an account?{' '}
          <Link to="/login" className="link-to-register-page"> Sign In</Link><br/><br/>
        </p>
      </form>
    </div>
  );
}

export default Register;
