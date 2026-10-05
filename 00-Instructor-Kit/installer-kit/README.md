# Installer Kit: Files for Day 1 Collection and Day 2 Installation

For the instructor and the lab attendant.

On Day 1, students are told to collect a folder named `Workshop-Installers`. On Day 2, they install from it. This page lists what must be in that folder, and how to prepare it.

## What goes into the kit

| Item | Needed? | Rule for the version | File type | Where to get it |
|------|---------|----------------------|-----------|-----------------|
| Node.js, Windows 64-bit installer | **Required** | The **24 LTS** line. Use one single file for everyone | `.msi` | The official Node.js download page (nodejs.org). Choose version 24, LTS, Windows, x64 |
| Git for Windows, 64-bit setup | **Required** | The latest stable release. One single file for everyone | `.exe` | The official Git download page (git-scm.com), Windows, 64-bit setup |
| `setup-check.js` | **Required** | The file in this folder | `.js` | This folder |
| PostgreSQL for Windows, 64-bit installer | Optional (the PostgreSQL track on Days 4 and 5) | To be decided after your pilot test | `.exe` | The official PostgreSQL download page (postgresql.org) |
| Visual Studio Code | Not needed | Already installed on every lab computer | | |

### Fill in after you download

The Node.js and Git rows below are the files found in the instructor's `Workshop-Installers` folder on 6 October 2026. The checksums were computed on that computer with `certutil`. They were **not compared** with the checksums on the publishers' download pages, so do that check before you copy the files to the share. The PostgreSQL row is still empty. Keep a copy of this table on the board.

| Item | Exact file name | Version | Checksum (SHA-256) |
|------|-----------------|---------|--------------------|
| Node.js 24 LTS | `node-v24.21.0-x64.msi` | 24.21.0 | `bb0eaee134f9357f22aea915ee793343e627aefc1e66488164bac6915bce2cac` |
| Git for Windows | `Git-2.56.0-64-bit.exe` | 2.56.0 | `bfe94e7b419b16eee9fecbd1253a98e3d4f49ba8f029630549052278ffe286a6` |
| PostgreSQL (optional) | | | |

To check that a file is not damaged, open Command Prompt in the folder and type:

```
certutil -hashfile "file-name-here" SHA256
```

Compare the result with the checksum that the publisher shows on its download page.

## Suggested folder layout

```
Workshop-Installers/
  node-24-lts/
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
