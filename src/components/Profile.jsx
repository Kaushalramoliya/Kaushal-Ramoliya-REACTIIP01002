import React, { useState } from 'react'
import { getCurrentUser, updateUser, logout, deleteUser } from '../utils/auth'
import { validateEmail } from '../utils/validators'
import { validatePassword } from '../utils/validators'
import { useNavigate } from 'react-router-dom'
import Logo from '../assets/logo.svg'

export default function Profile(){
  const navigate = useNavigate()
  const user = getCurrentUser()
  const [name, setName] = useState(user?.name || '')
  const [email, setEmail] = useState(user?.email || '')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState(null)
  const [avatar, setAvatar] = useState(user?.avatar || Logo)

  if (!user) {
    return <div className="alert alert-warning">No user logged in</div>
  }

  const onSave = async (e) =>{
    e.preventDefault()
    try{
      // validate email if changed
      const echeck = validateEmail(email)
      if (!echeck.valid) {
        setMessage(echeck.reason)
        return
      }
      if (password) {
        const pcheck = validatePassword(password)
        if (!pcheck.valid) {
          setMessage(pcheck.reason)
          return
        }
      }
      const updated = { ...user }
      updated.name = name
      updated.email = email
      if (password) updated.password = password
      updated.avatar = avatar
      updateUser(updated)
      setPassword('')
      setMessage('Profile updated successfully')
      setTimeout(()=>setMessage(null), 2000)
    } catch (err) {
      setMessage(err.message)
    }
  }

  const onAvatarChange = (e) => {
    const file = e.target.files && e.target.files[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = (ev) => {
      setAvatar(ev.target.result)
    }
    reader.readAsDataURL(file)
  }

  const doLogout = ()=>{
    logout()
    navigate('/login')
  }

  const onDelete = () => {
    if (!confirm('Are you sure you want to DELETE your account? This cannot be undone.')) return
    try {
      deleteUser(user.id)
      navigate('/register')
    } catch (err) {
      setMessage(err.message)
    }
  }

  return (
    <div className="profile-card card p-4 text-center">
      <img src={avatar || Logo} alt="avatar" style={{width:96,height:96,objectFit:'cover',borderRadius:12,margin:'0 auto 12px'}} />
      <h4 className="mb-3">Your Profile</h4>
      {message && <div className="alert alert-info">{message}</div>}
      <form onSubmit={onSave}>
        <div className="mb-3 text-start">
          <label className="form-label">Email</label>
          <input className="form-control" value={email} onChange={e=>setEmail(e.target.value)} required />
        </div>
        <div className="mb-3 text-start">
          <label className="form-label">Full Name</label>
          <input className="form-control" value={name} onChange={e=>setName(e.target.value)} required />
        </div>
        <div className="mb-3 text-start">
          <label className="form-label">New Password (leave blank to keep current)</label>
          <input type="password" className="form-control" value={password} onChange={e=>setPassword(e.target.value)} />
        </div>
        <div className="mb-3 text-start">
          <label className="form-label">Avatar</label>
          <input type="file" accept="image/*" className="form-control" onChange={onAvatarChange} />
        </div>
        <div className="d-flex gap-2 justify-content-center">
          <button className="btn btn-primary" type="submit">Save</button>
          <button type="button" className="btn btn-outline-secondary" onClick={doLogout}>Logout</button>
          <button type="button" className="btn btn-danger" onClick={onDelete}>Delete Account</button>
        </div>
      </form>
    </div>
  )
}
