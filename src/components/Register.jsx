import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { registerUser } from '../utils/auth'
import { validateEmail, validatePassword, passwordStrength } from '../utils/validators'
import Logo from '../assets/logo.svg'

export default function Register(){
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(null)
  const [showPassword, setShowPassword] = useState(false)

  const emailCheck = validateEmail(email)
  const passwordCheck = validatePassword(password)
  const strength = passwordStrength(password)
  const passwordsMatch = !password || password === confirm

  const onSubmit = (e) => {
    e.preventDefault()
    setError(null)
    setSuccess(null)
    if (!emailCheck.valid) {
      setError(emailCheck.reason)
      return
    }
    if (!passwordCheck.valid) {
      setError(passwordCheck.reason)
      return
    }
    if (!passwordsMatch) {
      setError('Passwords do not match')
      return
    }
    try {
      registerUser({ name, email, password })
      setSuccess('Registration successful. Redirecting to login...')
      setTimeout(()=>navigate('/login'), 1200)
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <div className="form-card card p-4">
      <img src={Logo} alt="logo" className="brand-logo" />
      <h4 className="mb-3">Register</h4>
      {error && <div className="alert alert-danger">{error}</div>}
      {success && <div className="alert alert-success">{success}</div>}
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label className="form-label">Full Name</label>
          <input className="form-control" value={name} onChange={e=>setName(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" value={email} onChange={e=>setEmail(e.target.value)} required />
          {!emailCheck.valid && email && <div className="form-text text-danger">{emailCheck.reason}</div>}
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <div className="input-group">
            <input type={showPassword? 'text':'password'} className="form-control" value={password} onChange={e=>setPassword(e.target.value)} required />
            <button type="button" className="btn btn-outline-secondary" onClick={()=>setShowPassword(s=>!s)}>{showPassword? 'Hide':'Show'}</button>
          </div>
          {password && <div className="form-text">Strength: <span className="badge bg-secondary strength-badge">{strength.label}</span></div>}
          {!passwordCheck.valid && password && <div className="form-text text-danger">{passwordCheck.reason}</div>}
        </div>
        <div className="mb-3">
          <label className="form-label">Confirm Password</label>
          <input type="password" className="form-control" value={confirm} onChange={e=>setConfirm(e.target.value)} required />
          {!passwordsMatch && <div className="form-text text-danger">Passwords do not match</div>}
        </div>
        <button className="btn btn-success w-100" type="submit" disabled={!emailCheck.valid || !passwordCheck.valid || !passwordsMatch}>Register</button>
      </form>
    </div>
  )
}
