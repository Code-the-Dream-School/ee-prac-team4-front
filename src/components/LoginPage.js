import React from 'react'

function LoginPage(){
    return(
   
    <div className='landingPage'>
     
     <h1>Login Page</h1>
     <form className="formContainer">
      <label for="email" >Email</label>
      <input className="inputField" type="email" name="email" id="email" placeholder="Enter your email"></input> 
      <label for="password">Password</label>
      <input className="inputField" type="password" name="password" id="password" placeholder="Enter your password"></input>
     </form>
     <button type="submit" >Submit</button>

    </div>
    )
}



export default LoginPage