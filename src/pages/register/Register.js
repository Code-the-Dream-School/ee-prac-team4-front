import React, { useState } from "react";

function Register() {
  const [newFirstName, setNewFirstName] = useState("");
  const [newLastName, setNewLastName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newUsername, setNewUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [error, setError] = useState(null);

  async function handleRegistration(e) {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://localhost:8000/api/v1/auth/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName: newFirstName,
            lastName: newLastName,
            username: newUsername,
            password: newPassword,
            email: newEmail,
          }),
        },
      );

      const data = await response.json();

      if (data.error || (data.status !== 200)) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      //TODO: Logic for successful registration goes below here
      window.alert(`Welcome, ${data.username}`);
      setError(null);

      return data;
    } catch (error) {
      console.error("Error during registration:", error);
      setError("Error during registration. Please try again.");
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
            className="inputField"
            autoComplete="off"
            required
          />
        </label>

        <label>
          username
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
          password
          <input
            type="password"
            placeholder="enter a password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="inputField"
            autoComplete="off"
            required
          />
        </label>

        <button type="submit" className="submitButton">
          submit
        </button>

        {error && <div style={{ color: "red" }}>{error}</div>}
      </form>
    </div>
  );
}

export default Register;
