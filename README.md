# Chong Jun Hao — Interactive Portfolio (2026)

A polished, responsive editorial/creative-desk portfolio built from Chong Jun Hao's October 2026 résumé. Original visual design inspired by the spirit of interactive design portfolios. No React or dependency installation is needed: this is a lightweight static website that works on GitHub Pages for free.

## Features

- Interactive desk-style intro and 3 clickable featured project files.
- Responsive home, projects, about, work journey, education, recognition and contact sections.
- Working project filters, accessible project detail dialogs, theme switch, mobile navigation and scroll animations.
- Print-friendly résumé page at `resume.html` (Print → Save as PDF).
- Fully illustrative CSS artwork, **not** project screenshots or images from the reference website.
- GitHub Actions workflow for automatic deploy to GitHub Pages.

## Preview locally

Open `index.html` in Chrome or Edge. No install, no server and no build step.
For an optional local server, open a terminal in this folder and run `python -m http.server 8000`, then visit `http://localhost:8000`.

## Publish on GitHub Pages (Free)

1. Create a **public** repository on GitHub, e.g. `junhao-portfolio`.
2. Upload **the contents of this folder**, including the hidden `.github` directory and `.nojekyll` file, to the repository root. (Unzip first; do not upload the zip as a single file.)
3. Ensure the branch is named **main**.
4. Open repository **Settings → Pages → Build and deployment → Source → GitHub Actions**.
5. Open the **Actions** tab; the `Deploy Portfolio to GitHub Pages` workflow should deploy automatically after the push. You can also choose **Run workflow** manually.
6. Browse to `https://YOUR-GITHUB-USERNAME.github.io/junhao-portfolio/`.

Alternative simpler deploy: Remove the `.github/workflows/deploy.yml` file and choose **Deploy from a branch** → `main` → `/ (root)` in Settings → Pages.

### Use the shortest professional URL

If you name the repository `YOUR-GITHUB-USERNAME.github.io` (exactly), your website URL will be `https://YOUR-GITHUB-USERNAME.github.io/`.

## Personalise before making public

- Main text: edit `index.html`, particularly the hero, project descriptions and achievements.
- Résumé: edit `resume.html`. The email currently matches the supplied 2026 résumé; the private phone number is intentionally omitted from the website.
- CSS colors, layouts and illustrations: `assets/styles.css`.
- Project case-study dialog text: `assets/main.js`, object `cases`.
- All graphics are CSS illustrations and should eventually be replaced or supplemented with **real** project screenshots when you have permission to show them.
- The source résumé PDF could not be included as a raw file, so the website links to the built-in HTML résumé instead. The print button can save it as a PDF.
- No GitHub profile link was inserted: add only a verified personal account URL.
- Check that all award/project details and current job dates still match your latest information before publishing.

## Future additions

Replace illustrative art with real screenshots or short optimised videos. Add case-study URLs, verified GitHub project links, project demos and an original headshot if desired. Avoid publishing client-confidential SCCCI assets and access credentials. GitHub Pages is **static hosting**; it cannot run Flask or database servers.
