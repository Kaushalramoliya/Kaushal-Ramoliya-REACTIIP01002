import React from 'react'
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import Profile from './components/Profile'
import Welcome from './components/Welcome'
import { getCurrentUser, logout } from './utils/auth'

export default function App() {
  const user = getCurrentUser()

  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand" to="/">Chaintech React Test</Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ms-auto">
              {!user && (
                <>
                  <li className="nav-item"><Link className="nav-link" to="/login">Login</Link></li>
                  <li className="nav-item"><Link className="nav-link" to="/register">Register</Link></li>
                </>
              )}
              {user && (
                <>
                  <li className="nav-item"><Link className="nav-link" to="/profile">Profile</Link></li>
                  <li className="nav-item"><a className="nav-link" href="#" onClick={(e)=>{e.preventDefault(); logout(); window.location='/login'}}>Logout</a></li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>

      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={user ? <Profile /> : <Navigate to="/login" />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
