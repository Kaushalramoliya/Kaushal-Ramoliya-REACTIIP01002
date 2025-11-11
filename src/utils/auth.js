const USERS_KEY = 'rtp_users'
const CURRENT_KEY = 'rtp_current'

function _readUsers() {
  try {
    const raw = localStorage.getItem(USERS_KEY)
    return raw ? JSON.parse(raw) : []
  } catch (e) {
    console.error('Failed to read users', e)
    return []
  }
}

function _writeUsers(users) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users))
}

export function registerUser({ name, email, password }) {
  const users = _readUsers()
  if (users.find(u => u.email.toLowerCase() === email.toLowerCase())) {
    throw new Error('Email already registered')
  }
  const user = { id: Date.now(), name, email, password }
  users.push(user)
  _writeUsers(users)
  return user
}

export function loginUser({ email, password }) {
  const users = _readUsers()
  const user = users.find(u => u.email.toLowerCase() === email.toLowerCase() && u.password === password)
  if (!user) throw new Error('Invalid email or password')
  localStorage.setItem(CURRENT_KEY, JSON.stringify(user))
  return user
}

export function getCurrentUser() {
  try {
    const raw = localStorage.getItem(CURRENT_KEY)
    return raw ? JSON.parse(raw) : null
  } catch (e) {
    console.error('Failed to read current user', e)
    return null
  }
}

export function logout() {
  localStorage.removeItem(CURRENT_KEY)
}

export function updateUser(updated) {
  const users = _readUsers()
  const idx = users.findIndex(u => u.id === updated.id)
  if (idx === -1) throw new Error('User not found')
  // Prevent email collision with other users
  if (updated.email) {
    const other = users.find(u => u.email.toLowerCase() === updated.email.toLowerCase() && u.id !== updated.id)
    if (other) throw new Error('Email already in use by another account')
  }
  users[idx] = { ...users[idx], ...updated }
  _writeUsers(users)
  localStorage.setItem(CURRENT_KEY, JSON.stringify(users[idx]))
  return users[idx]
}

export function deleteUser(userId) {
  const users = _readUsers()
  const idx = users.findIndex(u => u.id === userId)
  if (idx === -1) throw new Error('User not found')
  users.splice(idx, 1)
  _writeUsers(users)
  // If the deleted user was the current one, clear session
  const current = getCurrentUser()
  if (current && current.id === userId) {
    logout()
  }
  return true
}
