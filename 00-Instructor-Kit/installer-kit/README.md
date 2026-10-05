# Installer Kit: Files for Day 1 Collection and Day 2 Installation

For the instructor and the lab attendant.

On Day 1, students are told to collect a folder named `Workshop-Installers`. On Day 2, they install from it. This page lists what must be in that folder, and how to prepare it.

## What goes into the kit

| Item | Needed? | Rule for the version | File type | Where to get it |
|------|---------|----------------------|-----------|-----------------|
| Node.js, Windows 64-bit installer | **Required** | The **22 LTS** line. Use one single file for everyone | `.msi` | The official Node.js download page (nodejs.org). Choose version 22, LTS, Windows, x64 |
| Git for Windows, 64-bit setup | **Required** | The latest stable release. One single file for everyone | `.exe` | The official Git download page (git-scm.com), Windows, 64-bit setup |
| `setup-check.js` | **Required** | The file in this folder | `.js` | This folder |
| PostgreSQL for Windows, 64-bit installer | Optional (the PostgreSQL track on Days 4 and 5) | To be decided after your pilot test | `.exe` | The official PostgreSQL download page (postgresql.org) |
| Visual Studio Code | Not needed | Already installed on every lab computer | | |

### Fill in after you download

I could not read the Node.js download listing from where I prepared this folder, so the exact file names and versions are **not stated here**. Please fill in this table once you have the files, and keep a copy on the board.

| Item | Exact file name | Version | Checksum (SHA-256) |
|------|-----------------|---------|--------------------|
| Node.js 22 LTS | | | |
| Git for Windows | | | |
| PostgreSQL (optional) | | | |

To check that a file is not damaged, open Command Prompt in the folder and type:

```
certutil -hashfile "file-name-here" SHA256
```

Compare the result with the checksum that the publisher shows on its download page.

## Suggested folder layout

```
Workshop-Installers/
  node-22-lts/
    (the Node.js .msi file)
  git/
    (the Git for Windows .exe file)
  optional-postgresql/
    (the PostgreSQL installer, only if you decide to use it)
  setup-check.js
  READ-ME.txt   (one line: "Install Node.js first, then Git. Ask your instructor if you are stuck.")
```

## For the lab attendant

1. Copy the `Workshop-Installers` folder to the LAN share. Make it **read only** for students.
2. From one student computer, open the share and copy the folder. Make sure it works.
3. Write the share path on the board on Day 1.
4. Keep **two spare USB sticks** with the same folder, in case the network fails on Day 2.
5. Ask: do the lab computers keep student files between days? Where can students keep a backup?
6. Confirm that students have **administrator rights** to run installers.
7. Ask that Windows Update does not restart the computers during class.

## Notes

- Use **one** Node.js file for everyone. Different versions can behave differently.
- Do not use a "Current" release or a 32-bit file.
- Students install **Node.js first, then Git**. After installing, they close and reopen VS Code, then open a new terminal.
