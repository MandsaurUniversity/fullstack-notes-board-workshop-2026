# Day 5 Instructor Run Sheet (120 minutes)

For the instructor only. Teach in Hindi. All written material stays in English. Day 5 has two risks that nobody can check from outside the lab: whether every student can sign up for Render and create a Free web service, and how long a deploy takes. Both are **not verified**. Plan for them.

## Before the class (do these first)

- [ ] **Do a full deploy yourself, with a throwaway account, before class.** Use a throwaway GitHub account and a throwaway Render account if you can. Follow the lab sheet exactly (`INSTRUCTOR-PILOT-CHECKLIST.md`, Pilot D). Write down:
  - Did Render ask for a **card** or a **phone number**? ______
  - The real names of the buttons and menus, and where **Environment** and **Advanced** are: ______
  - How long the first deploy took: ______ (This is not known in advance. Use your own number for the timeline below.)
  - Which Node version the log shows: ______
  - Did a push start an automatic deploy? ______ How long did it take? ______
  - Which menu restarts the service (Restart, Manual Deploy)? ______
- [ ] Fix the lab sheet where your screens differ. Mark each difference on the printed copy, or write it on the board.
- [ ] Try 3 sign-ups from the lab network, if you can (Pilot D8). Sign-up limits per network are **not verified**.
- [ ] Decide your **demo repository**: a copy of the `done` folder, pushed to your own GitHub repository, with your own throwaway password. This is for the projector, and it is the fallback for everyone.
- [ ] Ask the lab attendant that GitHub and Render open from the lab network.
- [ ] Prepare the **Tier list** on the board: Tier 1 works on localhost (pass), Tier 2 pushed to GitHub, Tier 3 live on Render.
- [ ] Put the Day 5 `starter` and `done` folders on the share.
- [ ] Zoom the browser and VS Code so that the back row can read.
- [ ] Prepare the feedback method (Google Form, a Classroom question, or paper) and the Day 5 quiz.

## Timeline

The timings below are a plan for the class. They are **not** Render times. Adjust them with the numbers from your own test deploy.

| Minutes | What | Notes |
|---------|------|-------|
| 0 to 5 | Welcome and check | Everyone has the `notes-board` folder open, and it runs on localhost. Students who are behind copy the Day 5 `starter` |
| 5 to 15 | Talk: hosting, localhost vs a public URL, how a deploy works (GitHub, Render, build, start) | Draw the picture: your computer, GitHub, Render. Say: "localhost means this computer. Your friend's localhost is their own computer" |
| 15 to 30 | Lab Parts 0 and 1: check the starter, three code changes | Type `/health` and the `listen` change live, one at a time. Explain `0.0.0.0` and `PORT` in simple words |
| 30 to 40 | Lab Part 2: commit and push | The same steps as Day 4. **Gate:** most students must see their README on GitHub, with no `.env` in the file list. Check some screens |
| 40 to 50 | Lab Part 3: Render account | **Fallback decision at minute 50.** Count the hands of students who cannot sign up. See "Fallbacks" below |
| 50 to 65 | Lab Parts 4 and 5: create the web service, set `NOTES_PASSWORD` | You do it on the projector at the same time, one field at a time. Remind: Git Provider, Free plan, password goes in Environment, never in code |
| 65 to 80 | Lab Part 6: first deploy, read the log | While students wait, teach the Free plan lesson (Theory section 7). Show a real log on the projector. Teach "read the last lines" |
| 80 to 90 | Lab Part 7: test the live site | Check `https://` and the padlock, add and delete, wrong password, `/health` |
| 90 to 97 | Lab Part 8: break it on purpose, see the data reset | **Demo first on the projector, then students follow.** Be ready with: "This is not a bug. This is how the free plan works" |
| 97 to 100 | Lab Part 9: update and redeploy | Demo only if time is short. Say clearly that auto-deploy behaviour was not tested |
| 100 to 112 | Showcase in pods (Lab Part 10) | Pods of six. Each student shows a live link or a localhost screen. Walk around with the checklist. Pick 2 or 3 students to show on the projector |
| 112 to 120 | Close: security recap, what next, quiz, feedback | See "Closing remarks" below |

## Cut lines (if the deploy steps take long)

Tier 1 and Tier 2 come first. If you are behind at minute 65:

1. **Part 9 (update and redeploy):** move to homework or demo only. This is the first thing to cut.
2. **Part 8 (data reset):** do it as a **demo on your projector only**. Everyone sees it, nobody waits.
3. **Showcase:** shorten to 8 minutes. Students show a screen to one neighbour, not the whole pod.
4. **Quiz:** move to a Classroom assignment that students do after class.

Do not cut: Parts 0 to 2 (code changes and push), the Free plan lesson (Part 8 as a demo at least), the security recap, and the feedback.

## Fallbacks if Render sign-up fails

Render's documentation pages that were read do not say whether a card or a phone number is needed for the Free plan, or whether many sign-ups from one network are limited. **Both are NOT VERIFIED either way.**

If students are blocked:

- Say calmly: "This is a result of the rules of the website. It is not your mistake."
- Those students **stay at Tier 2** (pushed to GitHub). That is a good result. Tier 1 is the pass.
- **You deploy one shared demo, live on the projector.** Use your demo repository and your own account, and follow the lab sheet Parts 4 to 8 on the screen. Ask students to follow on paper.
- Students who are blocked do the **Day 5 extras** (end of the lab sheet) on localhost, and push to GitHub.
- A student can try Render again at home, from a different network.
- If **nobody** can sign up, spend the time on the shared demo, on reading the log together, and on the extras.
- Never let a student enter a card that is not theirs. Never ask students to share accounts.

## If a deploy fails for some students

- Use the Stuck Sheet. Ask the student to read the **last lines** of the log to you.
- The most common causes (our guess from how the code works, not tested): a missing `NOTES_PASSWORD`, a wrong Start Command, `package.json` not at the top of the repository, a wrong branch name.
- Pair the student with a neighbour whose deploy worked. They can see the correct settings.
- Make a list of those students. They can finish at home.

## What to say about the Free plan (be honest, do not oversell)

- "Free hosting is for learning and for demos. It is not for a real product."
- "The filesystem is ephemeral: when the service restarts, redeploys or spins down, the SQLite file is gone. Render's documentation says this."
- "The service spins down after 15 minutes without visitors, and takes about a minute to start."
- "There are 750 free instance hours a month per workspace. Render might restart a free service at any time."
- "The real fixes: a hosted database that is separate from the app, or a paid persistent disk. Persistent disks are not available on the Free plan. A free Render PostgreSQL database expires 30 days after creation, so it is not for real use."
- Do not say what any paid plan costs. Do not promise that a deploy will always work.

## Closing remarks (last 8 minutes)

1. **Security recap (2 minutes).** Password in an environment variable. Never commit `.env`. Check `https://` and the padlock. `textContent`, not `innerHTML`. If a password leaks, change it. Deleting it later does not help.
2. **What next (2 minutes).** More JavaScript, a frontend framework, SQL, authentication with real accounts, testing, deploying. Say: "Keep your repository, and add one small feature a week." Do **not** promise jobs, salaries or results.
3. **Thank the students (1 minute).** Name one real thing the class did well.
4. **Quiz (2 minutes).** Five questions.
5. **Feedback (1 minute).** Ask three questions, in Hindi or English: What was the best part? What was the hardest part? What should we change?

## Feedback prompt (you can read it out or put it on the board)

1. What was the best part of the five days?
2. What was the hardest part?
3. What should we change for the next group?
4. Which tier did you reach? (1, 2 or 3)

## Showcase checklist (tick per pod or per student)

- [ ] Works on localhost (Tier 1)
- [ ] Pushed to GitHub, no `.env` in the repository (Tier 2)
- [ ] Live on Render with an `https://` link (Tier 3)
- [ ] Can explain why the notes were reset
- [ ] Can explain where the password is kept

## Before ending the class

- [ ] Count how many students reached each tier. Write the numbers down: Tier 1 ____ Tier 2 ____ Tier 3 ____
- [ ] Students who were blocked on Render are on your list.
- [ ] Tell students: **do not leave a password on a screen or on a shared computer.** Sign out of GitHub and Render on the lab computers.
- [ ] Remind students that the service they made may be reset or stopped by Render's own rules.
- [ ] Collect the feedback.
- [ ] Back up the shared demo repository, and the list of things that differed from the lab sheet.

## Notes for your own review after the workshop

- Write down every place where the Render screens differed from the lab sheet. Fix the lab sheet for the next group.
- Fill in the results in `INSTRUCTOR-PILOT-CHECKLIST.md` (Pilot D) with what really happened: card or phone number, sign-up limits, deploy time, auto-deploy.
- Delete your throwaway services when you no longer need them.
