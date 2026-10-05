// setup-check.js
// Checks that your computer is ready for the workshop.
//
// Run it from the terminal:   node setup-check.js
//
// Each line shows PASS or FAIL. If a line shows FAIL, read the hint under it.

const { execSync } = require("node:child_process");
const net = require("node:net");

const REQUIRED_NODE_MAJOR = 22;
let failures = 0;

function show(passed, title, hint) {
  console.log((passed ? "PASS  " : "FAIL  ") + title);
  if (!passed) {
    failures = failures + 1;
    console.log("      Hint: " + hint);
  }
}

function commandOutput(command) {
  try {
    return execSync(command, { stdio: ["ignore", "pipe", "ignore"] }).toString().trim();
  } catch (error) {
    return null;
  }
}

function checkPort(port, done) {
  const tester = net.createServer();
  tester.once("error", function () {
    done(false);
  });
  tester.once("listening", function () {
    tester.close(function () {
      done(true);
    });
  });
  tester.listen(port, "127.0.0.1");
}

console.log("");
console.log("Workshop setup check");
console.log("--------------------");

// 1. Node.js version
const nodeMajor = Number(process.versions.node.split(".")[0]);
show(
  nodeMajor === REQUIRED_NODE_MAJOR,
  "Node.js version is " + process.versions.node + " (we need version " + REQUIRED_NODE_MAJOR + ")",
  "Install the Node.js " + REQUIRED_NODE_MAJOR + " LTS installer from the workshop kit, then open a NEW terminal."
);

// 2. npm
const npmVersion = commandOutput("npm --version");
show(
  npmVersion !== null,
  "npm is available" + (npmVersion ? " (version " + npmVersion + ")" : ""),
  "npm comes with Node.js. Close this terminal, open a new one and try again."
);

// 3. Git
const gitVersion = commandOutput("git --version");
show(
  gitVersion !== null,
  "Git is available" + (gitVersion ? " (" + gitVersion + ")" : ""),
  "Install Git for Windows from the workshop kit, then open a NEW terminal."
);

// 4. Port 3000 must be free for our servers
checkPort(3000, function (isFree) {
  show(
    isFree,
    "Port 3000 is free",
    "Another program is using port 3000. Close any old server window (Ctrl + C) and try again."
  );

  console.log("");
  if (failures === 0) {
    console.log("All checks passed. You are ready.");
  } else {
    console.log(failures + " check(s) failed. Fix them, then run this command again.");
  }
  console.log("");
});
