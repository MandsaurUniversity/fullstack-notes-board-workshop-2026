/**
 * Build-Quiz-Form.gs
 *
 * Builds a Google Form quiz from the rows of the ACTIVE sheet of a Google Sheet.
 *
 * Expected columns in row 1 (same as the workshop CSV files):
 *   question, option_a, option_b, option_c, option_d, correct, points, explanation
 *
 * How to use (short version, full steps are in README.md):
 *   1. Import the quiz CSV into a Google Sheet.
 *   2. In the sheet, open Extensions, then Apps Script. Paste this file.
 *   3. Choose the function "buildQuizForm" and click Run. Allow the permissions.
 *   4. Open the View, then Logs (or Execution log) to see the links to the new form.
 *
 * STATUS: written from the Apps Script reference, but NOT yet run by the author.
 * The methods FormApp.create, addMultipleChoiceItem, createChoice(value, isCorrect),
 * setPoints and setRequired are in the reference pages that were checked.
 * The methods setIsQuiz and setFeedbackForCorrect / setFeedbackForIncorrect were
 * NOT confirmed, so they are wrapped in try/catch. If one fails, the script goes on and
 * writes a note in the log telling you what to switch on by hand.
 */

function buildQuizForm() {
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = spreadsheet.getActiveSheet();
  var rows = sheet.getDataRange().getValues();

  if (rows.length < 2) {
    throw new Error("The sheet has no question rows. Import the CSV first.");
  }

  // Map the column names in row 1 to their positions.
  var header = rows[0].map(function (name) {
    return String(name).trim().toLowerCase();
  });

  var column = {};
  ["question", "option_a", "option_b", "option_c", "option_d", "correct", "points", "explanation"]
    .forEach(function (name) {
      var index = header.indexOf(name);
      if (index === -1) {
        throw new Error("Column not found in row 1: " + name);
      }
      column[name] = index;
    });

  var form = FormApp.create(spreadsheet.getName());
  form.setDescription("Choose one answer for each question. Each question is worth the points shown.");

  var notes = [];

  try {
    form.setIsQuiz(true);
  } catch (error) {
    notes.push("Could not switch on quiz mode automatically. Open the form, click Settings, and turn on 'Make this a quiz'.");
  }

  var letterToIndex = { A: 0, B: 1, C: 2, D: 3 };
  var questionCount = 0;

  for (var r = 1; r < rows.length; r++) {
    var row = rows[r];
    var questionText = String(row[column.question]).trim();
    if (questionText === "") {
      continue; // skip empty rows
    }

    var correctLetter = String(row[column.correct]).trim().toUpperCase();
    if (!(correctLetter in letterToIndex)) {
      throw new Error("Row " + (r + 1) + ": the 'correct' column must be A, B, C or D.");
    }
    var correctIndex = letterToIndex[correctLetter];

    var optionTexts = [
      row[column.option_a],
      row[column.option_b],
      row[column.option_c],
      row[column.option_d]
    ].map(function (value) {
      return String(value);
    });

    var points = Number(row[column.points]);
    if (!points || points < 0) {
      points = 1;
    }

    var item = form.addMultipleChoiceItem();
    var choices = optionTexts.map(function (text, i) {
      return item.createChoice(text, i === correctIndex);
    });

    item.setTitle(questionText);
    item.setChoices(choices);
    item.setPoints(points);
    item.setRequired(true);

    var explanation = String(row[column.explanation]).trim();
    if (explanation !== "") {
      try {
        item.setFeedbackForCorrect(FormApp.createFeedback().setText("Correct. " + explanation).build());
        item.setFeedbackForIncorrect(FormApp.createFeedback().setText("Not quite. " + explanation).build());
      } catch (error) {
        if (notes.indexOf("FEEDBACK") === -1) {
          notes.push("FEEDBACK");
        }
      }
    }

    questionCount++;
  }

  // Turn the marker into a readable note.
  notes = notes.map(function (note) {
    return note === "FEEDBACK"
      ? "Could not add the answer explanations automatically. You can paste them from the answer key as feedback."
      : note;
  });

  Logger.log("Quiz form created with " + questionCount + " question(s).");
  Logger.log("Edit link (for you): " + form.getEditUrl());
  Logger.log("Student link (share this): " + form.getPublishedUrl());
  notes.forEach(function (note) {
    Logger.log("NOTE: " + note);
  });
}
