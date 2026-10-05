#!/usr/bin/env python3
"""Check that every quiz CSV in the workshop is well formed.

Usage (from the main workshop folder):
    python tools/quiz-builder/check_quiz_csv.py

It checks:
    - the header has the 8 expected columns
    - every quiz has exactly 5 questions
    - every question has 4 non-empty options
    - the 'correct' column is A, B, C or D
    - the points are a positive number
    - no option is repeated inside one question
"""

import csv
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent.parent
COLUMNS = ["question", "option_a", "option_b", "option_c", "option_d", "correct", "points", "explanation"]
QUESTIONS_PER_QUIZ = 5


def check_file(path: Path) -> list:
    problems = []
    with path.open(newline="", encoding="utf-8") as handle:
        reader = csv.DictReader(handle)
        if reader.fieldnames != COLUMNS:
            return [f"header is {reader.fieldnames}, expected {COLUMNS}"]
        rows = list(reader)

    if len(rows) != QUESTIONS_PER_QUIZ:
        problems.append(f"has {len(rows)} questions, expected {QUESTIONS_PER_QUIZ}")

    for number, row in enumerate(rows, start=1):
        label = f"question {number}"
        if not row["question"].strip():
            problems.append(f"{label}: empty question text")
        options = [row[key].strip() for key in ("option_a", "option_b", "option_c", "option_d")]
        if any(option == "" for option in options):
            problems.append(f"{label}: an option is empty")
        if len(set(options)) != 4:
            problems.append(f"{label}: two options are the same")
        if row["correct"].strip().upper() not in ("A", "B", "C", "D"):
            problems.append(f"{label}: 'correct' must be A, B, C or D")
        try:
            if float(row["points"]) <= 0:
                problems.append(f"{label}: points must be above zero")
        except ValueError:
            problems.append(f"{label}: points is not a number")
        if not row["explanation"].strip():
            problems.append(f"{label}: no explanation")
    return problems


def main() -> int:
    files = sorted(ROOT.rglob("*-Quiz.csv"))
    if not files:
        print("No quiz CSV files found.")
        return 1

    failed = False
    for path in files:
        problems = check_file(path)
        name = path.relative_to(ROOT)
        if problems:
            failed = True
            print(f"FAIL  {name}")
            for problem in problems:
                print(f"      {problem}")
        else:
            print(f"PASS  {name}")
    return 1 if failed else 0


if __name__ == "__main__":
    sys.exit(main())
