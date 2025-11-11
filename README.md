# REACTIIP01002 — React Intern Practical

This is a simple React application (Vite + React) for the React internship practical.

Features
- Registration page to create an account (stored in localStorage)
- Login page to authenticate (localStorage)
- Profile page to view and edit account information (name, email, password, avatar) and delete account
- Uses Bootstrap for styling

Quick start (Windows PowerShell):

1. Install dependencies

```powershell
cd "d:/B_Tech_CSE_Sem-7/CHAINTECH/REACTIIP01002"
npm install
```

2. Run dev server

```powershell
npm run dev
```

3. Open the URL printed by Vite (usually http://localhost:5173)

Notes

- This project uses localStorage to simulate account persistence. For real production, replace with proper backend / API.
- Editing email is supported and the app prevents duplicate emails across accounts. Avatar images are stored as base64 data URLs in localStorage for demo purposes.

How to upload this project to GitHub (PowerShell)

1. Create a new repository on GitHub (go to https://github.com/new). Do NOT initialize with a README or .gitignore (we already have them).

2. In PowerShell (from the project folder), run the following commands, replacing <your-repo-url> with the HTTPS URL shown on GitHub (e.g. https://github.com/yourname/REACTIIP01002.git):

```powershell
cd "d:/B_Tech_CSE_Sem-7/CHAINTECH/REACTIIP01002"
git init
git add .
git commit -m "Initial commit: React intern practical"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main
```

3. Create a branch for further work (optional but recommended):

```powershell
git checkout -b feat/complete-react-test
# Make changes, then
git add .
git commit -m "Improvements: validations and UI polish"
git push -u origin feat/complete-react-test
```

4. Open your GitHub repository in the browser and create a Pull Request from your branch to `main` if you used a branch. Merge when ready.

5. Submit the repository link to the Google Form provided by the company.

Common tips

- If push fails due to authentication, set up Git credentials or use the GitHub CLI and `gh auth login`.
- To include a descriptive README and screenshots, add them to the repository before pushing or push them as part of commits.

Submission deadline: 12 November, 2025

Good luck!
