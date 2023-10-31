import React from 'react'

function LoginPage(){

function handleSubmit(){
    console.log ("Hello world!")
}
    return(
   
    <div className='landingPage'>
     
     <h1>Login Page</h1>
     <form className="formContainer">
      <label htmlFor="email" >Email</label>
      <input className="inputField" type="email" name="email" id="email" placeholder="Enter your email"></input> 
      <label htmlFor="password">Password</label>
      <input className="inputField" type="password" name="password" id="password" placeholder="Enter your password"></input>
     </form>
     <button type="submit" onClick={handleSubmit} >Submit</button>

    </div>
    )
}



export default LoginPage