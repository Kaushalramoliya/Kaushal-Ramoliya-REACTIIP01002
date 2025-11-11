# REACTIIP01002 — React Practical


Repository: https://github.com/Kaushalramoliya/Kaushal-Ramoliya-REACTIIP01002

---

## Summary

This project is a small React application (Vite + React 18) that implements a simple account manager. It demonstrates a login page, a registration page, and a profile page where users can view and edit their account information. Bootstrap 5 is used for layout and basic styling.

The app is intentionally simple and uses browser localStorage to persist accounts so reviewers can run and verify functionality without a backend.

## Features

- Welcome / Landing page with links to Register, Login, and Profile
- Register new accounts (name, email, password) with client-side validation
- Login with email and password
- Profile page to view and edit account info:
	- Edit full name
	- Edit email (unique across accounts)
	- Change password (validated)
	- Upload avatar (stored as base64 in localStorage for demo)
	- Delete account
- Client-side validation and UX helpers:
	- Email format validation
	- Password rules (min length, upper+lowercase, number, special char)
	- Password strength label
	- Inline validation messages and disabled submit until valid where appropriate

## Tech stack

- React 18 (Vite)
- Vite (development server and build)
- React Router DOM for routing
- Bootstrap 5 for styling
- LocalStorage for demo persistence

## Project structure

Top-level files and folders you will find in the repo:

- `index.html` — Vite entry
- `package.json` — project metadata and scripts
- `vite.config.js` — Vite config
- `src/` — source code
	- `src/main.jsx` — React entry
	- `src/App.jsx` — routes and navigation
	- `src/components/` — `Welcome.jsx`, `Login.jsx`, `Register.jsx`, `Profile.jsx`
	- `src/utils/` — `auth.js` (localStorage helpers) and `validators.js`
	- `src/assets/` — logo and other assets
	- `src/index.css` — small app styles
- `README.md` — this file
- `.gitignore` — ignored files (node_modules, dist, etc)

---

## Validation rules (important)

These rules are implemented in `src/utils/validators.js` and are enforced on registration and password change:

- Email: must match a common email format `someone@example.com`.
- Password: must satisfy all of:
	- At least 8 characters
	- At least one lowercase letter
	- At least one uppercase letter
	- At least one digit
	- At least one special character (!@#$%^&*(),.?":{}|<>)
- Password strength is calculated with a small heuristic and shown to the user as a label (Very weak → Very strong).
- On update, email uniqueness is enforced: you cannot change your email to an email that another account already uses.

---

## How data is stored

For this coding exercise we use `localStorage` to persist users and the currently logged-in account. The keys used are:

- `rtp_users` — JSON array of user objects, each with `id`, `name`, `email`, `password`, and optional `avatar` (base64 string).
- `rtp_current` — JSON object of the currently logged-in user.

Note: Storing passwords in plaintext and storing avatars as base64 in localStorage is acceptable here for the challenge demo, but NOT recommended for production. Do not store secrets or real passwords this way in real apps.

---

## Setup (Windows PowerShell)

Prerequisites: Node.js 18+ and npm installed.

1. Open PowerShell and install dependencies:

```powershell
cd "d:/CHAINTECH/REACTIIP01002"
npm install
```

2. Run the dev server:

```powershell
npm run dev
```

3. Open the URL printed by Vite in the terminal (e.g. `http://localhost:5173` or `http://localhost:5174` if 5173 is in use).

4. Use the app: register, login, visit profile.

Build for production:

```powershell
npm run build
npm run preview
```

---

## 🙋 About Me

> 👨‍💻 **Kaushal Ramoliya**  
> 🎓 B.Tech in Computer Science & Engineering  
> 📧 Email: [kaushalramoliya17@gmail.com](mailto:kaushalramoliya17@gmail.com)  
> 🌐 LinkedIn: [linkedin.com/in/kaushalramoliya](https://www.linkedin.com/in/kaushalramoliya)  
> 💻 GitHub: [github.com/Kaushalramoliya](https://github.com/Kaushalramoliya)





