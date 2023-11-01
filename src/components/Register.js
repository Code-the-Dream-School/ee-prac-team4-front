import React, { useState } from 'react';

function Register() {
  const [newEmail, setNewEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [error, setError] = useState(null);

  async function registerForm(e) {
    e.preventDefault();
    try {
      const response = await fetch(`https://localhost:8000/api/v1/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: newEmail,
          password: newPassword,
          email: newEmail
        })
      });

      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(`Network response was not ok: ${errorMessage}`);
      }

      const data = await response.json();
      window.alert(`Welcome, ${data.username}`);
      setError(null);
      /*TODO:
       * 1. logic for successful/failed attempts
       * 2. data.hasUsername - prompt "username aready exists"
       * 3. data.hasEmail - prompts  "email already exists"
       */

      return data;
    } catch (error) {
      console.error('Error during registration:', error);
      setError('Error during registration. Please try again.');
      throw error;
    }
  }

  return (
    <div className='registerPage'>
      <h1>Register</h1>

      <form onSubmit={(e) => registerForm(e)} className='registerContainer'>
        <input
          type='email'
          placeholder='janedoe@gmail.com'
          value={newEmail}
          onChange={(e) => setNewEmail(e.target.value)}
          className='inputField'
          autoComplete='off'
          required
        />

        <input
          type='password'
          placeholder='enter a password'
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          className='inputField'
          autoComplete='off'
          required
        />

        <button type='submit' className='submitButton'>
          submit
        </button>

        {/*initial prompting for error message, will change  with css*/}
        {error && <div style={{ color: 'red' }}>{error}</div>}
      </form>
    </div>
  );
}

export default Register;
