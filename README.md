## V4.2 image loading fix
Fixed lazy-loading of detached images in the Batik gallery and homepage project cards. Added `check-media.html` media diagnostic page to verify assets actually exist on GitHub Pages. No real image or video is bundled.

## V4.1 media patch
Supports Batik images in original PNG/JPG/JPEG/WebP, certificate PDFs as linked cards, a fifth pattern image, optional cover2, and an optional demo video. No real media is included in the ZIP.

# Chong Jun Hao — Portfolio V4 (Batik Studio case study)

V4 preserves the V3 dark desktop/mobile portfolio and upgrades only the Batik Studio narrative, media layout, and research summary.

- Batik study: `projects/batik-studio.html`
- Batik specific styling: `assets/batik-case.css`
- Optional media loader and image lightbox: `assets/batik-case.js`
- Batik media folder: `assets/media/batik/`
- Other portfolio data: `assets/portfolio-data.js`

**Run:** Open `index.html` locally, or deploy via the existing `.github/workflows/deploy.yml` to GitHub Pages.

**Upload:** Replace files inside your current `junhao-portfolio` repository; Commit to main, Push origin. No new repository or server required.

See `README_中文_素材放置指南.md` for exact media filenames and privacy guidance. The site displays dark themed placeholders until real media is added.
