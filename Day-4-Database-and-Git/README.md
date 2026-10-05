# Day 4: A Database and Git

**Goal:** Students replace the in-memory notes with a real database (SQLite), so that the notes stay after the server restarts. Then they save their project with Git and put it on GitHub, without the private `.env` file. Fast finishers can try an optional PostgreSQL track.

| Folder | Files |
|--------|-------|
| `notes/` | `Day-4-Theory` (read before class) |
| `lab/` | `Day-4-Lab-Sheet` (Parts 0 to 9, with the optional Track B as Part 8) |
| `help/` | `Day-4-Stuck-Sheet` |
| `starter/` | Everything finished up to Day 3 (`notes-board` with an in-memory `data.js` and the Express `server.js`), plus `hello-server` and `setup-check.js` |
| `done/` | `notes-board` with SQLite in `data.js`, `server.js` with `init()`, `optional-postgres/data.js`, `.env.example` and `.gitignore` |

## Risks of the day

1. **Built-in SQLite (`node:sqlite`) on Windows.** It ran on Node.js 24.21.0 on Linux without a flag and without a warning. It is **not tested** on Windows. Do Pilot C in `../INSTRUCTOR-PILOT-CHECKLIST.md` before this class.
2. **Signing in to GitHub from Git.** This is **not tested** on the lab PCs. Do Pilot D1 before this class. Students need a working GitHub account.
3. **Committing `.env` by mistake.** The lab has a check for this (Part 7). Do not skip it.

## Track B (optional)

PostgreSQL is only for fast finishers. Day 5 works without it.

## Homework for Day 5

1. Make sure your GitHub account works. Sign in at github.com and write down your username. **You need your GitHub login on Day 5.**
2. Read the hosting reading list at the end of the Day 4 Theory.
3. Run your Notes Board once at home or in the lab, and check that your notes stay after a restart.
4. Write down at least two questions for Day 5.
