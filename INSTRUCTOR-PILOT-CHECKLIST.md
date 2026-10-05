# Instructor Pilot Checklist: Test Before Students Do

Almost every risk in this workshop is a "will it work on the lab computers?" question that cannot be answered from outside the lab. This checklist turns each one into a short test. Write the result next to each item.

**Tested so far:** only the things marked "Observed" below. Everything else is **not yet tested** on a Windows 11 Home computer.

---

## Pilot A: Before Day 2 (installers and the terminal)

Use a Windows 11 Home PC that does **not** already have Node.js or Git. A lab PC is best.

- [ ] **A1. Node.js installs.** Run the Node.js 22 LTS `.msi` from the share. Does it need an administrator prompt? Does it install without extra steps? Time taken: ______
- [ ] **A2. Git installs.** Run the Git for Windows `.exe`. Which screens appear? Is the default editor Vim? Time taken: ______
- [ ] **A3. New terminal sees the tools.** Close VS Code, open it again, open a **Command Prompt** terminal. Run `node -v`, `npm -v`, `git --version`. Results: ______
- [ ] **A4. Setup check.** Copy `setup-check.js` into a folder and run `node setup-check.js`. Do you see four PASS lines? ______
- [ ] **A5. PowerShell behaviour.** Open a **PowerShell** terminal and run `npm -v`. Do you get a "running scripts is disabled" message? ______ (If yes, the advice to use Command Prompt is confirmed. If no, it is still the safer default.)
- [ ] **A6. Windows prompts.** Does Windows show "Windows protected your PC" for the installers? ______
- [ ] **A7. VS Code terminal profile.** Can you pick **Command Prompt** from the terminal dropdown? ______
- [ ] **A8. LAN share speed.** Copy the kit from the share to 5 computers at the same time. How long does it take? ______
- [ ] **A9. Lab policy.** Do files and installed programs stay on the computers from day to day? ______ Where can students save backups? ______

## Pilot B: Before Day 3 (Express and npm)

- [ ] **B1. npm install.** In an empty folder run `npm init -y` then `npm install express`. Does it work on the lab network? Time taken: ______
- [ ] **B2. Many computers at once.** Ask 5 to 10 computers to run `npm install express` at the same time. Does it slow down or fail? ______
- [ ] **B3. Offline plan.** If B1 or B2 is slow, prepare a zipped `node_modules` folder (Express is plain JavaScript, so the same folder works on any computer) and put it on the share. Test that unzipping it into a project works: ______

## Pilot C: Before Day 4 (SQLite)

- [ ] **C1. Built-in SQLite.** On Node.js 22 LTS, run: `node -e "require('node:sqlite')"`. Does it work without any flag? ______ Does it print an "ExperimentalWarning"? ______
  - **Observed so far:** on Node.js 22.22.0 on Linux, it worked without a flag and printed an ExperimentalWarning. The Node.js documentation says it is "no longer behind a flag but still experimental" from version 22.13. **Not yet tested on Windows.**
- [ ] **C2. Alternative driver.** If C1 fails, test the `better-sqlite3` package: run `npm install better-sqlite3` on a lab PC and check that it installs without needing a compiler. ______ (Not tested.)
- [ ] **C3. Decide.** Write the driver chosen for the workshop: ______
- [ ] **C4. PostgreSQL (optional track).** Install the PostgreSQL installer on a lab PC. Does it install without problems? How long? ______ Does `npm install pg` work? ______ (Not tested.)

## Pilot D: Before Day 5 (GitHub and Render)

- [ ] **D1. GitHub.** Create a throwaway repository. In VS Code, run `git init`, `git add .`, `git commit`, and `git push`. Does it work from the lab network? ______
- [ ] **D2. Render sign-up.** Sign up for Render with a new account. Does Render ask for a **credit card** or a **phone number** before it lets you create a Free web service? ______ (The documentation pages I read do not say.)
- [ ] **D3. Free web service from GitHub.** Create a web service from your throwaway repository using the **Free** instance type. Write down the exact build command and start command you used, and how long the first deploy took: ______
- [ ] **D4. Node version on Render.** Is the app built with Node.js 22? How did you set it? ______
- [ ] **D5. Environment variable.** Add the `NOTES_PASSWORD` variable in the dashboard. Does the app read it? ______
- [ ] **D6. Cold start and data reset.** Leave the service idle for more than 15 minutes, then open it. How long does the first load take? ______ Does a SQLite file created by the app disappear after a restart? ______ (Render's documentation says the filesystem is not kept.)
- [ ] **D7. Render PostgreSQL (optional track).** Create a free PostgreSQL database. Note when it expires ______ (the documentation says 30 days after creation). Can the app connect with the connection string? ______ Is SSL needed? ______
- [ ] **D8. Many sign-ups.** Ask 3 colleagues or students to sign up from the same network. Any extra checks or limits? ______

## Pilot E: Before the first quiz (Google Forms and Classroom)

- [ ] **E1. Build the quiz.** Follow `tools/quiz-builder/README.md` to build the Day 1 quiz from `00-Instructor-Kit/quiz/Day-1-Quiz.csv`. Does the script finish? ______ Is quiz mode on in the form? ______ Do answers and points show? ______
- [ ] **E2. Classroom.** Create a quiz assignment in Google Classroom and attach the form. Write the exact menu path that worked: ______
- [ ] **E3. Take it.** Take the quiz as a student account. Is the score shown? ______

---

## If a test fails

| If this fails | Fall back to |
|---------------|--------------|
| Installers cannot run on lab PCs | Pair students on computers where they can run |
| Node.js in the terminal is not found | Close VS Code, reopen it, open a new terminal; restart the computer |
| `npm install` is slow or fails | Use the zipped `node_modules` from the share |
| `node:sqlite` fails on Windows | Use `better-sqlite3` (Pilot C2) |
| Render asks for a card or phone number | Deploy only your own copy on the projector, and keep student apps running locally (Tier 1 and Tier 2 of the success tiers) |
| GitHub sign-up is slow from campus | Ask students to create accounts at home on Day 1 and Day 2 |
| Google Forms script fails | Create the form by hand from the printable answer key |
