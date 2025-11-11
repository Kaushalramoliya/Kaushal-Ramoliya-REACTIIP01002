export function validateEmail(email) {
  if (!email) return { valid: false, reason: 'Email is required' }
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(email) ? { valid: true } : { valid: false, reason: 'Invalid email format' }
}

export function validatePassword(password) {
  if (!password) return { valid: false, reason: 'Password is required' }
  const minLen = 8
  if (password.length < minLen) return { valid: false, reason: `Password must be at least ${minLen} characters` }
  if (!/[a-z]/.test(password)) return { valid: false, reason: 'Include at least one lowercase letter' }
  if (!/[A-Z]/.test(password)) return { valid: false, reason: 'Include at least one uppercase letter' }
  if (!/[0-9]/.test(password)) return { valid: false, reason: 'Include at least one digit' }
  if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) return { valid: false, reason: 'Include at least one special character' }
  return { valid: true }
}

export function passwordStrength(password) {
  if (!password) return { score: 0, label: 'Empty' }
  let score = 0
  if (password.length >= 8) score++
  if (password.length >= 12) score++
  if (/[a-z]/.test(password) && /[A-Z]/.test(password)) score++
  if (/[0-9]/.test(password)) score++
  if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) score++
  const labels = ['Very weak', 'Weak', 'Fair', 'Good', 'Strong', 'Very strong']
  return { score, label: labels[Math.min(score, labels.length-1)] }
}
