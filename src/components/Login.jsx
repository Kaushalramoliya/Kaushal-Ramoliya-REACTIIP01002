import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { loginUser, getCurrentUser } from '../utils/auth'
import { validateEmail, validatePassword } from '../utils/validators'
import Logo from '../assets/logo.svg'

export default function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const [showPassword, setShowPassword] = useState(false)

  React.useEffect(()=>{
    const u = getCurrentUser()
    if (u) navigate('/profile')
  }, [])

  const emailCheck = validateEmail(email)
  const passwordCheck = password ? validatePassword(password) : { valid: false }

  const onSubmit = (e) => {
    e.preventDefault()
    setError(null)
    if (!emailCheck.valid) {
      setError(emailCheck.reason)
      return
    }
    if (!password) {
      setError('Password is required')
      return
    }
    try {
      loginUser({ email, password })
      navigate('/profile')
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <div className="form-card card p-4">
      <img src={Logo} alt="logo" className="brand-logo" />
      <h4 className="mb-3">Login</h4>
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={onSubmit}>
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
          {password && !passwordCheck.valid && <div className="form-text text-danger">{passwordCheck.reason}</div>}
        </div>
        <button className="btn btn-primary w-100" type="submit" disabled={!emailCheck.valid || !password}>Login</button>
      </form>
    </div>
  )
}
