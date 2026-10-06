#!/usr/bin/env python3
"""Build a PDF next to every Markdown file in this workshop folder.

How it works:
    Markdown  --(pandoc)-->  HTML  --(headless Chromium)-->  PDF

Needs:
    - pandoc
    - Python package "playwright" with its Chromium browser installed

Usage (run from the main workshop folder):
    python tools/build_pdfs.py                     # build all PDFs
    python tools/build_pdfs.py Day-1-Web-Basics     # build only one folder
    python tools/build_pdfs.py GOOGLE-CLASSROOM.md # build a single markdown file

Notes:
    - Files inside "starter" and "done" folders are code folders, so they are skipped.
    - A PDF is only rebuilt when its Markdown file is newer, unless you use --force.
"""

import argparse
import html
import os
import shutil
import subprocess
import sys
import tempfile
from pathlib import Path

from playwright.sync_api import sync_playwright

ROOT = Path(__file__).resolve().parent.parent
CSS_FILE = Path(__file__).resolve().parent / "pdf.css"
SKIP_DIRS = {"starter", "done", "node_modules", ".git"}


def get_pandoc_cmd() -> str:
    found = shutil.which("pandoc")
    if found:
        return found
    candidates = [
        Path(os.environ.get("LOCALAPPDATA", "")) / "Pandoc" / "pandoc.exe",
        Path(os.environ.get("ProgramFiles", "")) / "Pandoc" / "pandoc.exe",
        Path(os.environ.get("ProgramFiles(x86)", "")) / "Pandoc" / "pandoc.exe",
    ]
    for candidate in candidates:
        if candidate.is_file():
            return str(candidate)
    return "pandoc"


def find_markdown_files(base: Path):
    for path in sorted(base.rglob("*.md")):
        try:
            relative_parts = set(path.relative_to(ROOT).parts)
            if relative_parts & SKIP_DIRS:
                continue
        except ValueError:
            pass
        yield path


def markdown_to_html(markdown_path: Path, html_path: Path, title: str):
    command = [
        get_pandoc_cmd(),
        str(markdown_path),
        "--from", "gfm",
        "--to", "html5",
        "--standalone",
        "--embed-resources",
        "--css", str(CSS_FILE),
        "--metadata", f"pagetitle={title}",
        "--output", str(html_path),
    ]
    subprocess.run(command, check=True)


def first_heading(markdown_path: Path) -> str:
    for line in markdown_path.read_text(encoding="utf-8").splitlines():
        if line.startswith("# "):
            return line[2:].strip()
    return markdown_path.stem


def main():
    parser = argparse.ArgumentParser(description="Build PDFs from Markdown files.")
    parser.add_argument("target", nargs="?", default=".", help="folder or single markdown file to build (default: whole workshop)")
    parser.add_argument("--force", action="store_true", help="rebuild even if the PDF is up to date")
    args = parser.parse_args()

    target_path = Path(args.target)
    if not target_path.is_absolute():
        if not target_path.exists() and (ROOT / args.target).exists():
            target_path = (ROOT / args.target).resolve()
        else:
            target_path = target_path.resolve()

    if not target_path.exists():
        print(f"Error: Target '{args.target}' not found.")
        return 1

    if target_path.is_file():
        if target_path.suffix.lower() != ".md":
            print(f"Error: '{target_path.name}' is not a Markdown (.md) file.")
            return 1
        files = [target_path]
    elif target_path.is_dir():
        files = list(find_markdown_files(target_path))
    else:
        print(f"Error: Target '{args.target}' is neither a file nor a directory.")
        return 1

    if not files:
        print("No Markdown files found.")
        return 0

    built = 0
    with tempfile.TemporaryDirectory() as temp_dir, sync_playwright() as playwright:
        browser = playwright.chromium.launch()
        page = browser.new_page()

        for markdown_path in files:
            pdf_path = markdown_path.with_suffix(".pdf")
            try:
                display_path = pdf_path.relative_to(ROOT)
            except ValueError:
                display_path = pdf_path.name

            if (not args.force and pdf_path.exists()
                    and pdf_path.stat().st_mtime >= markdown_path.stat().st_mtime):
                print(f"up to date  {display_path}")
                continue

            title = first_heading(markdown_path)
            html_path = Path(temp_dir) / (markdown_path.stem + ".html")
            markdown_to_html(markdown_path, html_path, title)

            page.goto(html_path.as_uri())
            page.pdf(
                path=str(pdf_path),
                format="A4",
                print_background=True,
                margin={"top": "18mm", "bottom": "20mm", "left": "16mm", "right": "16mm"},
                display_header_footer=True,
                header_template=(
                    '<div style="font-size:8px;color:#6b7280;width:100%;padding:0 16mm;">'
                    f"{html.escape(title)}</div>"
                ),
                footer_template=(
                    '<div style="font-size:8px;color:#6b7280;width:100%;padding:0 16mm;'
                    'display:flex;justify-content:space-between;">'
                    "<span>Web Technology Workshop, Mandsaur University</span>"
                    '<span>Page <span class="pageNumber"></span> of <span class="totalPages"></span></span>'
                    "</div>"
                ),
            )
            built += 1
            print(f"built       {display_path}")

        browser.close()

    print(f"Done. {built} PDF file(s) built.")
    return 0


if __name__ == "__main__":
    sys.exit(main())

