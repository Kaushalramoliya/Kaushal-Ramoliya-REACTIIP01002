import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/logo.svg'

export default function Welcome(){
  return (
    <div className="card p-4" style={{maxWidth:720, margin:'24px auto'}}>
      <div className="text-center mb-3">
        <img src={Logo} alt="logo" style={{width:120,height:120}} />
      </div>
      <h2 className="text-center mb-2">Welcome to Chaintech React Test</h2>
      <p className="text-center text-muted">This small React app demonstrates account creation, login, and profile management using Bootstrap and localStorage. Use the links below to get started.</p>

      <div className="d-flex justify-content-center gap-2 mt-3">
        <Link to="/register" className="btn btn-success">Create Account</Link>
        <Link to="/login" className="btn btn-primary">Login</Link>
        <Link to="/profile" className="btn btn-outline-secondary">My Profile</Link>
      </div>

      <hr className="my-4" />

      <h5>Guidance</h5>
      <ul>
        <li>Register a new account with a valid email and a strong password (min 8 chars, uppercase, lowercase, number, special).</li>
        <li>Login with your credentials.</li>
        <li>Visit Profile to edit name, email, password, upload avatar, or delete the account.</li>
      </ul>
      <p className="text-muted small mb-0">Submission: push your code to GitHub and submit the repository link via the Google Form sent to you.</p>
    </div>
  )
}
