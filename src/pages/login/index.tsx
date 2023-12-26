import React from 'react'
import "./login.scss";

const Login = () => {
  return (
    <div className="login-container">
      <form className="login-form">
        <h2 className="sign-in-heading">Sign in</h2>
        <div className="form-group">
          <input type="text" placeholder="Username" name="username" required />
        </div>
        <div className="form-group">
          <input type="password" placeholder="Password" name="password" required />
        </div>
        <div className="form-group checkbox-container">
        <input type="checkbox" id="rememberMe" name="rememberMe" />
          <label htmlFor="rememberMe">Remember Me</label>
          

        </div>
        <button type="submit">Sign In</button>
      </form>
    </div>
  )
}

export default Login