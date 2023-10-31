import React, { useState } from 'react';
function Register() {
  const [newEmail, setNewEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // add logic connectin gto backend repo for user auth
  };

  return (
    <div className='registerPage'>
      <h1> Register</h1>

      <form onSubmit={handleSubmit} className='registerContainer'>
        <input
          type='text'
          placeholder='janedoe@gmail.com'
          value={newEmail}
          onChange={(e) => setNewEmail(e.target.value)}
          className='inputField'
          autoComplete='off'
        />

        <input
          type='text'
          placeholder='enter a password'
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          className='inputField'
          autoComplete='off'
        />

        <button type='submit' className='submitButton'>
          submit
        </button>
      </form>
    </div>
  );
}

export default Register;
