# REACTIIP01002 — React Intern Practical

Complete README for the Chaintech React intern practical. This file explains the project, features, how to run it locally, the validation rules, how data is stored, and step-by-step instructions to upload to GitHub and submit your work.

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
cd "d:/B_Tech_CSE_Sem-7/CHAINTECH/REACTIIP01002"
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

## How to upload this repository to GitHub (step-by-step)

If you already created a repository on GitHub (looks like you did: `Kaushal-Ramoliya-REACTIIP01002`), these are the commands to push your local project to GitHub. Use HTTPS or SSH depending on your preference.

Replace `<your-github-url>` with your repository URL (for example https://github.com/Kaushalramoliya/Kaushal-Ramoliya-REACTIIP01002.git).

PowerShell commands:

```powershell
cd "d:/B_Tech_CSE_Sem-7/CHAINTECH/REACTIIP01002"
# If you haven't already initialized git locally:
git init
git add .
git commit -m "Initial commit: React intern practical"
git branch -M main
git remote add origin <your-github-url>
git push -u origin main
```

Authentication notes:
- If prompted for a password when pushing via HTTPS, use a GitHub Personal Access Token (PAT) instead of your account password. Create one at https://github.com/settings/tokens with `repo` scope and paste it when asked.
- If you prefer SSH, add your SSH public key to GitHub and use the SSH remote URL `git@github.com:<user>/<repo>.git`.

Optional: create a feature branch and push it instead of committing directly to `main`:

```powershell
git checkout -b feat/ui-improvements
git add .
git commit -m "feat: ui and validation improvements"
git push -u origin feat/ui-improvements
```

---

## What reviewers will check (so be explicit in README)

- Functionality: register/login/profile/edit/delete flows are complete and work with localStorage.
- Validation: email & password validation are enforced and error messages are clear.
- Code quality: components are split sensibly, small helper utils abstract logic, comments where helpful.
- Documentation: README explains how to run and submit.

Make sure your repository contains `package.json`, `src/`, `index.html`, `vite.config.js`, and this `README.md` so reviewers can run the project quickly.

---

## Troubleshooting

- If `npm install` fails: update Node.js to latest LTS (18 or 20) and try again.
- If port 5173 is already in use, Vite will try another port (e.g. 5174). Open the URL shown in the terminal.
- If `git push` fails with authentication errors, create a PAT or configure SSH keys.

---

## Screenshots (recommended)

Add screenshots to `docs/screenshots/` and reference them here. Example markdown to add to README:

```markdown
![Login page](docs/screenshots/login.png)
![Profile page](docs/screenshots/profile.png)
```

If you want, add a short GIF showing registration → login → profile update.

---

## Submission

After pushing your code to GitHub, copy the repository URL (for example `https://github.com/Kaushalramoliya/Kaushal-Ramoliya-REACTIIP01002`) and paste it into the Google Form provided by Chaintech for the assignment.

Submission deadline: 12 November, 2025

---

## Notes and security

- This project stores passwords in plaintext in localStorage for demo purposes only. Do not use this approach in production. For production, use secure password hashing and a backend API over HTTPS.
- Remove any secrets from the repo before sharing publicly.

---

## Contact / Questions

If anything is unclear, reply here or contact your hiring manager as instructed in the assignment.

Good luck with your submission!


Submission deadline: 12 November, 2025

Good luck!
