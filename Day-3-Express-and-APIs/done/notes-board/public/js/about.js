// about.js
// Reads the details from student-details.js and shows them on the About page.

// A link is only allowed if it starts with https://
// This stops unsafe links such as "javascript:..." from being used.
function isSafeLink(value) {
  return typeof value === "string" && value.startsWith("https://");
}

// Add one "label: value" pair to a list. Empty values are skipped.
function addDetail(listElement, label, value) {
  if (!value) {
    return;
  }

  const term = document.createElement("dt");
  term.textContent = label;

  const description = document.createElement("dd");

  if (label === "GitHub" && isSafeLink(value)) {
    const link = document.createElement("a");
    link.href = value;
    link.textContent = value;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    description.appendChild(link);
  } else {
    description.textContent = value;
  }

  listElement.appendChild(term);
  listElement.appendChild(description);
}

// 1. The student details
const detailsList = document.getElementById("student-details");
addDetail(detailsList, "Name", studentDetails.name);
addDetail(detailsList, "Roll number", studentDetails.rollNumber);
addDetail(detailsList, "Class", studentDetails.className);
addDetail(detailsList, "Batch", studentDetails.batch);
addDetail(detailsList, "College", studentDetails.college);
addDetail(detailsList, "GitHub", studentDetails.githubProfile);

// 2. The tagline
document.getElementById("student-tagline").textContent = studentDetails.tagline || "";

// 3. The instructor line (hidden if the name is empty)
const instructorSection = document.getElementById("instructor-section");
const instructorLine = document.getElementById("instructor-line");

if (instructorDetails.name) {
  const role = instructorDetails.role ? instructorDetails.role + ": " : "";
  instructorLine.textContent = role;

  if (isSafeLink(instructorDetails.link)) {
    // The instructor's name is the link.
    const link = document.createElement("a");
    link.href = instructorDetails.link;
    link.textContent = instructorDetails.name;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    instructorLine.appendChild(link);
  } else {
    instructorLine.textContent = role + instructorDetails.name;
  }
} else {
  instructorSection.hidden = true;
}
