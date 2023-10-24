import React from 'react'
import { useState } from 'react'
function LoginPage(){
    return(
   
    <div className='landingPage'>
     
     <h1>Login Page</h1>
     <form className="formContainer">
      <label>Email</label>
      <input className="inputField" type="text" name="email"  placeholder="Enter your email"></input> 
      <label>Password</label>
      <input className="inputField" type="text" name="password" label="password" placeholder="Enter your password"></input>
     </form>
     <button type="submit" >Submit</button>

    </div>
    )
}



export default LoginPage