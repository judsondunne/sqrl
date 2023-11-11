import React from 'react'

function Signup() {
  return (
    <div>
        <div className="title">
        SQrL
    </div>
    <div className="subtitle">
        Sign Up
    </div>
    <div className="login-prompt">
        Already have an account? Log in.
    </div>
    <div className="email">
        <input type="text" id="email" name="email" placeholder="Email address"/>
    </div>
    <div className="password">
        <input type="text" id="password" name="password" placeholder="Password"/>
    </div>
    <div className="create-account">
        <button type="button">Create Account</button>
    </div>
    </div>
  )
}

export default Signup
