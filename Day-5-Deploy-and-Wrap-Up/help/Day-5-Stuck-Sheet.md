# Day 5 Stuck Sheet: "If you see this, do this"

Before you call your instructor, try the fix on this page. Most problems today have a small, known fix.

**First, try these every time:**

1. Save the file (**Ctrl + S**). Test on localhost first (`npm start`).
2. Read the **red message** or the **last lines of the log**. They usually name the file and the problem.
3. Compare your code with the lab sheet, one line at a time.

**A note about Render.** These fixes come from Render's documentation and from how our code works. Some Render screens and messages were **not verified** on a live dashboard. If the words on your screen are a little different, look for the nearest match.

---

## Part A: Code, Git and GitHub

### Problem 1: `npm start` says `Missing script: "start"`

**Why it happens:** `package.json` has no `start` script, or you are in the wrong folder.

**Fix:**

1. Type `dir`. Do you see `package.json`? If not, use `cd` to go to the `notes-board` folder.
2. Open `package.json`. Under `"scripts"` there must be `"start": "node server.js"`. Compare with Part 1c of the lab sheet. Check the commas.

---

### Problem 2: The terminal says `NOTES_PASSWORD is not set.` on my computer

**Why it happens:** There is no `.env` file, or it has no `NOTES_PASSWORD` line.

**Fix:**

1. Type `dir /a` and look for `.env`.
2. If it is missing, copy `.env.example` to a new file named `.env`.
3. Open `.env` and write a password after `NOTES_PASSWORD=`. Save.
4. Run `npm start` again.

---

### Problem 3: `Cannot find module 'express'` on my computer

**Why it happens:** The packages were not installed in this folder.

**Fix:** Make sure you are inside the `notes-board` folder, then run:

```
npm install
```

Run `npm start` again.

---

### Problem 4: `/health` shows `Cannot GET /health`

**Why it happens:** The route is not in `server.js`, or the server was not restarted.

**Fix:**

1. Check that the `/health` block is in `server.js`, above `// API 1`.
2. Save the file. Press **Ctrl + C** in the terminal, run `npm start`, and refresh the page.

---

### Problem 5: `git push` is rejected, with a message like `rejected` or `fetch first`

**Why it happens:** GitHub has a commit that your computer does not have. For example, you edited a file on the GitHub website.

**Fix:**

1. Run `git pull`.
2. Run `git push` again.
3. If Git opens a screen about a merge message, ask your instructor. Do not guess.

---

### Problem 6: `git push` says `fatal: The current branch ... has no upstream branch`

**Fix:** Git prints the exact command to use. Copy that command and run it. It looks like `git push --set-upstream origin main`. Use the exact line that Git shows you.

---

### Problem 7: `Author identity unknown` or `Please tell me who you are` when I commit

**Fix:** Tell Git your name and email, once. Use your own details:

```
git config --global user.name "Your Name"
```

```
git config --global user.email "you@example.com"
```

Then run `git commit` again.

---

### Problem 8: `nothing to commit, working tree clean`

**Why it happens:** Everything is already committed. Or you did not save your files.

**Fix:** Save your files (**Ctrl + S**) and run `git status` again. If it still says clean, your changes are already committed. Run `git push`.

---

### Problem 9: The push asks me to sign in, or says authentication failed

**Fix:**

1. If a sign-in window opens, sign in to GitHub with your account and allow it.
2. If it keeps failing, tell your instructor. A saved login on a shared lab computer may belong to another student. Do not use another person's account.

---

### Problem 10: I see `.env` in `git status`, or on GitHub

**This is serious. Stop and call your instructor.**

**Why it happens:** The `.gitignore` file is missing or wrong, or `.env` was added in an earlier commit.

**Fix:**

1. Open `.gitignore`. It must contain a line `.env`.
2. If `.env` is already on GitHub, the password inside is **no longer private**. **Change the password** (in your `.env` file and in the Render dashboard) to a new one. Then ask your instructor how to remove the file from the repository. Deleting it later does not make the old password safe.

---

### Problem 11: I pushed to the wrong branch, or Render uses a different branch

**Fix:**

1. Run `git branch`. The branch with a star is the one you are on.
2. On Render, open your service, and open **Settings**. Find the **Branch** field and write the same branch name. **(check against your dashboard, not verified)**
3. Save. Start a **Manual Deploy**.

---

## Part B: Render account and creating the service

### Problem 12: Render asks for a card or a phone number

**What to do:** Stop and tell your instructor. Do **not** enter a card. Whether Render asks for these on the Free plan is **not verified**. If you cannot continue, you stay at **Tier 2**, which is a good result. Your instructor deploys one shared demo on the projector.

---

### Problem 13: Sign-up fails, or says there were too many sign-ups

**What to do:** Wait a minute and try once more. Do not try many times. If it still fails, tell your instructor. Sign-up limits per network are **not verified**. You stay at **Tier 2**, and you can try at home later.

---

### Problem 14: Render cannot see my repository

**Why it happens:** Render was not given permission to read this repository on GitHub.

**Fix:**

1. In the Render form, look for a link such as **Configure** or **Connect GitHub**. Click it.
2. On GitHub, allow Render to access your `notes-board` repository.
3. Come back to Render. Refresh the page. Your repository should appear.
4. Check that you chose **Git Provider**, and not Public Git Repository.

If you used **Public Git Repository**, Render's documentation says auto-deploys do not work with it. Create the service again with **Git Provider**.

---

### Problem 15: I cannot find where to add the environment variable

**Fix:** Look under **Advanced** on the creation form. If the service is already created, open the service and look for **Environment**, then **Add Environment Variable**. **(check against your dashboard, not verified)** The key is `NOTES_PASSWORD`. Save, and start a new deploy.

---

## Part C: The deploy log

### Problem 16: The deploy failed

**What to do:**

1. Open the **Deploys** page and click the failed deploy to see its log.
2. Scroll to the **last lines**. Find the first line with the word `error` or `ERR!`, or a message that names a file.
3. Match it with a problem below.
4. Fix the problem on your computer, test with `npm start`, then commit and push. Or, if the problem is a setting, change the setting and use **Manual Deploy**.

---

### Problem 17: The build log shows `npm ERR!`

**Possible reasons:**

- `package.json` is broken (a missing comma or quote). Open it and look for a red mark in VS Code. Fix it.
- The **Build Command** is wrong. It must be exactly `npm install`.
- `package.json` is not at the top of your repository. In the GitHub page of your repository, you must see `package.json` in the file list at the first level, not inside another folder. If it is inside a folder, ask your instructor.

---

### Problem 18: The log says `Cannot find module 'express'` (or another module)

**Why it happens:** The build did not install the packages, or `express` is missing from `package.json`.

**Fix:**

1. Open `package.json`. Under `"dependencies"` there must be `"express"`.
2. If it is missing, run `npm install express` on your computer, then commit and push (both `package.json` and `package-lock.json` change).
3. Check that the **Build Command** is `npm install`.
4. Do **not** add `node_modules` to GitHub. Our `.gitignore` blocks it on purpose.

---

### Problem 19: The log says `Cannot find module` and names `server.js` or another file of yours

**Why it happens:** The **Start Command** points to a file that is not there, or the file name has a different case, for example `Server.js`.

**Fix:**

1. Set the **Start Command** to `npm start`.
2. In `package.json`, `scripts.start` must be `node server.js`.
3. On GitHub, check that the file is named `server.js`, in small letters, at the top level.

---

### Problem 20: The log shows a port problem, such as "no open ports detected" or "port scan timeout"

The exact wording on Render is **not verified**. It means that Render waited for your app to listen on a port, and did not find it.

**Why it happens:**

- The app stopped before it started listening (look **above** this message in the log for an error, for example `NOTES_PASSWORD is not set.`).
- The app listens on a fixed port, or only on `localhost`, and not on `0.0.0.0` and the `PORT` setting.

**Fix:**

1. Read the lines above the message. Fix the first error you find.
2. Open `server.js`. At the end, it must say `app.listen(PORT, "0.0.0.0", function () {`. And near the top, `const PORT = process.env.PORT || 3000;`.
3. Do **not** add a `PORT` variable on Render by yourself. Render gives it to the app.
4. Commit, push, and check the new deploy.

---

### Problem 21: The log says `NOTES_PASSWORD is not set.`

**Why it happens:** The environment variable is missing on Render, or the key is spelled differently. Our server stops on purpose without a password.

**Fix:**

1. Open your service, and open **Environment**. **(check against your dashboard, not verified)**
2. Check the key. It must be exactly `NOTES_PASSWORD` (capital letters, underscore, no spaces).
3. Check that it has a value. Save.
4. Start a new deploy if Render does not do it by itself (**Manual Deploy**).

---

### Problem 22: The log says `No .env file found. Using the settings of this computer.`

**This is normal.** It is not an error. There is no `.env` file on Render, because we never upload it. The password comes from the environment variable. Look for the line `Notes Board is running on port`.

---

### Problem 23: The log shows a Node.js version problem, or the wrong Node version

**Why it happens:** `engines` in `package.json` is missing or has a typing mistake. Render's documentation says the Node version can be set by the `NODE_VERSION` variable, a `.node-version` file, a `.nvmrc` file, or `engines` in `package.json`, in that order of priority.

**Fix:**

1. Check that `package.json` has `"engines": { "node": ">=24 <25" }`.
2. Read the version in the log. Tell your instructor if it is not 24.
3. Do not add the other files or variables unless your instructor tells you to.

---

## Part D: The live site

### Problem 24: The site is slow the first time, or shows a loading page

**Why it happens:** On the Free plan, the service **spins down** after 15 minutes without visitors. Render's documentation says it takes about one minute to start again.

**Fix:** Wait. Do not click many times. It will load. This is normal. A paid plan avoids it, but we do not use one.

---

### Problem 25: I see `401` or "Wrong password." when I add or delete a note

**Why it happens:** The password in the box is not the same as the `NOTES_PASSWORD` on Render.

**Fix:**

1. Type the password you wrote in Part 5. Remember that the password on your **live site** is the one set on Render, not the one in your local `.env` file.
2. Check for extra spaces and capital letters.
3. If you forgot it, change the value of `NOTES_PASSWORD` on Render, save, and wait for the new deploy. Then use the new password.

---

### Problem 26: My notes disappeared on the live site

**This is the lesson of Part 8, not a bug.** On the Free plan the filesystem is ephemeral. A restart, a redeploy or a spin down deletes `notes.sqlite`. The app then adds the 3 starter notes again.

**Fix:** There is no fix on the Free plan. A real app needs a hosted database, or a paid persistent disk (not available on Free). See section 7 of the Day 5 Theory.

---

### Problem 27: The site shows the old version after I pushed

**Fix:**

1. Open the **Deploys** page. Did a new deploy start? If it says in progress, wait.
2. If no deploy started, use **Manual Deploy**, then deploy the latest commit. **(check against your dashboard, not verified)** Whether auto-deploy starts by itself on your service is **not tested** by us.
3. Refresh the page with **Ctrl + F5**.

---

### Problem 28: The browser shows the address with `http://` and no padlock

**Fix:** Type the address with `https://` at the start. Do not type your password on a page without `https://`. If the `https://` page does not work, tell your instructor.

---

### Problem 29: My friend opens my link, and the add button gives an error

**This is expected.** Anyone can read the notes. Adding or deleting needs the password. Only share the password with people you trust. If you shared it with someone you do not trust, change it (see Problem 25, step 3).

---

## I am far behind

This is okay.

1. Copy the **done** folder for Day 5 from your instructor.
2. Make sure it runs on your computer (`npm install`, then `npm start`). That is **Tier 1** and it is a pass.
3. If you can, push it to GitHub. That is **Tier 2**.
4. Render can be tried at home. Keep your lab sheet.
