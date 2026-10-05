# Quiz Builder: From CSV to Google Forms to Google Classroom

Each day has a quiz of 5 multiple-choice questions, in a file named like `Day-1-Quiz.csv`. This page shows how to turn one of these files into a Google Form quiz, and how to give it to students in Google Classroom.

**Status:** The script has **not been run yet** by the person who wrote it. Please test it with one quiz before relying on it (see Pilot E in `INSTRUCTOR-PILOT-CHECKLIST.md`). If anything fails, use the fallback at the bottom.

## What is in the CSV

| Column | Meaning |
|--------|---------|
| `question` | The question text |
| `option_a` to `option_d` | The four answer options |
| `correct` | The letter of the right answer: A, B, C or D |
| `points` | Marks for the question (1 in all workshop quizzes) |
| `explanation` | A short reason, shown after the student answers |

Run `python tools/quiz-builder/check_quiz_csv.py` to check that all CSV files are well formed.

## Steps

### 1. Put the CSV into a Google Sheet

1. Go to Google Sheets and create a **blank spreadsheet**. Rename it to the quiz name, for example `Day 1 Quiz`. The form will use this name as its title.
2. Click **File**, then **Import**, then **Upload**, and choose the CSV file.
3. For **Import location**, choose **Replace spreadsheet**. Click **Import data**.

Check that row 1 shows the eight column names, and rows 2 to 6 show the questions.

### 2. Add the script

1. In the sheet, click **Extensions**, then **Apps Script**.
2. Delete any code in the editor, and paste the whole content of `Build-Quiz-Form.gs`.
3. Click **Save**.

### 3. Run it

1. In the toolbar, choose the function **buildQuizForm**, and click **Run**.
2. The first time, Google asks you to allow the script to create forms for you. Follow the steps and allow it.
3. Open the execution log. You will see two links: one to **edit** the form, and one to **share** with students.

### 4. Check the form

Open the edit link and check:

- There are 5 questions, each with 4 options, and each one is required.
- Quiz mode is on. If it is not, open **Settings** and turn on **Make this a quiz**. The log will tell you if the script could not do this.
- The correct answer is marked, and each question is worth 1 point.

### 5. Give it to students in Google Classroom

1. In your class, open **Classwork** and create a new assignment. If a **Quiz assignment** option is available, choose it. Attach your form (it is in your Google Drive).
2. Set the due date and the points, and assign it.

I could not confirm the exact menu names in Google Classroom from here, because the help page I tried to read was not available. If the menu looks different, create a normal assignment and attach the Google Form from Drive.

## What I verified and what I did not

| Item | Status |
|------|--------|
| Apps Script has `FormApp.create`, `addMultipleChoiceItem`, `createChoice(value, isCorrect)`, `setPoints`, `setRequired` | Confirmed in the reference pages that were read (from a summary of the pages) |
| Apps Script has `setIsQuiz` and the feedback methods | **Not confirmed.** The script continues if they fail |
| Google Classroom can import questions straight from a CSV file | **Not confirmed.** That is why this script is used |
| The Classroom menu names | **Not confirmed** |

## Fallback if the script does not work

1. Create a Google Form by hand and turn on **Make this a quiz**.
2. Use the printable answer key (for example `00-Instructor-Kit/quiz/Day-1-Quiz-Answer-Key.md` or its PDF) to type the 5 questions and mark the correct answers.
3. Or print the answer key PDF and run the quiz on paper.
