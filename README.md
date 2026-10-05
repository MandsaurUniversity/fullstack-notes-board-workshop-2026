# BCA 5-Day Web Technology Workshop: Build a Full-Stack Notes Board

A hands-on workshop for BCA second-year students at **Mandsaur University**. In five days of two hours each (10 hours in total), students build one small full-stack app, the **Notes Board**, and learn how the frontend, the backend, a database and hosting work together.

**Instructor:** Rahul Dhangar ([GitHub](https://github.com/rahuldhangar))
**Dates:** Tuesday 6 October 2026 to Saturday 10 October 2026
**Language:** The instructor teaches in Hindi. All written material is in simple English.
**Node.js version:** 24 LTS. On 6 October 2026 the Node.js release pages listed 24.21.0 as the latest LTS version, and Node.js 26 was not yet LTS. Node.js 24's active support ends on 20 October 2026 and its security support ends on 30 April 2028, according to endoflife.date. Check nodejs.org again before you collect the installers.

---

## The plan at a glance

| Day | Topic | Notes Board at the end of the day | Status in this folder |
|-----|-------|-----------------------------------|-----------------------|
| 1 | How the web works, HTML and CSS | A styled home page with sample notes, and an About page | **Ready** |
| 2 | Installing tools, the terminal, JavaScript | Adds and deletes notes in the browser, About page driven by one details file, first Node.js server | **Ready** |
| 3 | A server with Node.js and Express | Notes live on a server. Adding a note needs a password. Read access is public | **Ready** |
| 4 | A database (SQLite) and Git | Notes are saved in a database. The code is on GitHub. Optional PostgreSQL track | **Ready** |
| 5 | Hosting on Render | The app runs on the internet with a public link | **Ready** |

**Success tiers (the pass condition is Tier 1):**

1. **Tier 1:** the Notes Board works on the student's own computer (localhost).
2. **Tier 2:** the code is pushed to GitHub.
3. **Tier 3:** the app is live on Render with a public link.

---

## What is in each day folder

Each `Day-N-...` folder has the same layout. Every document is given in **Markdown (`.md`)** and **PDF (`.pdf`)**.

| Folder | For | What it holds |
|--------|-----|---------------|
| `notes/` | Students | The theory for the day, with a glossary and homework |
| `lab/` | Students | The step-by-step practical sheet |
| `help/` | Students | The "If you see this, do this" stuck sheet |
| `starter/` | Students | The code to start the day with. It contains **everything finished up to the previous day** |
| `done/` | Students and instructor | The finished code at the end of the day (a checkpoint to copy if a student is lost) |

Day 3's `starter` folder is a copy of Day 2's `done` folder, and so on.

**Quizzes are never committed to Git.** They contain the answers. The `quiz/` folder inside `00-Instructor-Kit/` stays on the instructor's computer only, and `.gitignore` blocks every quiz file (also for days that are added later). A copy cloned from GitHub will not have the quizzes.

Other folders:

| Folder | What it holds |
|--------|---------------|
| `00-Instructor-Kit/` | Instructor only. `installer-kit/` (what to put on the LAN share for Day 2, and `setup-check.js`), `instructor-sheets/` (the minute-by-minute run sheet for each day, with cut lines and prompts), and `quiz/` (the 5-question quiz CSV and printable answer key for each day) |
| `tools/` | The PDF builder and the quiz builder |

Other files:

- `INSTRUCTOR-PILOT-CHECKLIST.md`: tests to run on a clean lab computer before each risky day.

---

## Decisions made

| Topic | Decision |
|-------|----------|
| Frontend | HTML, CSS and JavaScript, no frameworks |
| Backend | Node.js **24 LTS** with Express |
| Database | SQLite for everyone. PostgreSQL is an optional extra track for students who finish early |
| Project | A Notes Board |
| Editor | Visual Studio Code, already installed on the lab computers |
| Operating system | Windows 11 Home |
| Terminal | Command Prompt inside VS Code (PowerShell can block scripts) |
| Installation | Students collect installers on Day 1 and install on Day 2 |
| Login | Reading notes is public. Adding a note needs one shared password, kept in an `.env` file and never committed to Git |
| About page | Students choose what to show. The instructor line is encouraged |
| Hosting | Render, Free web service, from GitHub |
| Quizzes | 5 questions a day in Google Classroom, built from the CSV files in `00-Instructor-Kit/quiz/` |

## Things not verified yet

I prepared this folder without access to your lab. These items are **not tested** on a Windows 11 Home computer, and some are not confirmed at all. Use `INSTRUCTOR-PILOT-CHECKLIST.md`.

- The exact Node.js 24 LTS and Git for Windows file names and versions (the download listings could not be read).
- How the Node.js and Git installers look on Windows 11 Home. The lab sheet says "keep the default choices", plus a few screens that I know of. Check them.
- Whether Node.js 24's built-in SQLite module (`node:sqlite`) works on Windows. On Linux, with Node.js 24.21.0, it ran without a flag and printed no warning. I could not read the Node.js documentation page that states its stability, so whether it is still marked experimental in 24 is not confirmed.
- Render: whether a card or phone number is required for a Free web service, how many sign-ups from one network are allowed, and how long a deploy takes. Render's documentation says the filesystem of a Free web service is not kept on restart, redeploy or spin-down, and that a free PostgreSQL database expires 30 days after creation.
- The Google Forms script (`tools/quiz-builder`), and the Google Classroom menu steps.
- Days 3 to 5 were tested on Linux with Node.js 24.21.0 (the API, the SQLite version, and a browser test of adding and deleting notes). Nothing in them was run on Windows. The optional PostgreSQL code was tested on PostgreSQL 16 on Linux only.
- Git for Windows sign-in to GitHub, and the Render dashboard screens and button names.

## Rebuilding the PDFs

If you edit a Markdown file, rebuild its PDF. This needs Python, pandoc and the `playwright` package with its Chromium browser:

```
python tools/build_pdfs.py
```

## Version control

This folder is a Git repository. Every file is committed, and the `.gitignore` file keeps `node_modules`, `.env` files and database files out of Git.
