# CHONG JUN HAO · DARK DESKTOP PORTFOLIO OS

An original dark interactive portfolio inspired by creative desktop-style websites, built for **GitHub Pages**.

**Live URL (after deploying in your existing repo):**
https://junhao87.github.io/junhao-portfolio/

## What's inside

- A dark space-themed welcome screen with animated orbiting rings
- Interactive desktop with animated background and app shortcuts
- Clickable bottom dock
- Draggable, closable, minimizable and maximizable app windows (on desktop)
- Portfolio folder with category filters and **three case studies**: Batik Studio, SCCCI AI Theatre, Nan'ao AI Travel Guide
- About Me, Experience & Education, Awards, Skills and Contact windows
- Command-palette app search (Ctrl+K / Cmd+K)
- Local mock terminal with safe predefined commands (`help`, `projects`, `open about`, etc.)
- Responsive full-screen windows on mobile
- Separate dark résumé page, printable to PDF (`resume.html`)
- GitHub Actions deployment workflow, ready for your existing Pages deployment

### No build tools needed

This version is a static HTML/CSS/JavaScript site with original procedural CSS visuals. It runs without `npm` or Node.js, and all interactive functionality is local in the browser. The Google Font link is optional; the fallback fonts work when offline.

## How to update your existing GitHub Desktop repository (Chinese)

1. **备份你现有的网页。** 在 GitHub Desktop 使用 `Repository → Show in Explorer`，打开 `junhao-portfolio` 本地目录。建议先另存一份旧版。
2. 解压 `JunHao_Dark_Desktop_Portfolio_GitHub_Pages.zip`。
3. 将解压后文件夹**里面的所有文件和文件夹**复制进你 GitHub Desktop 的 `junhao-portfolio` 根目录，并选择覆盖旧版同名文件。
4. 确认文件结构如下面示例。`index.html` 必须位于根目录，不能被额外的外层文件夹包住。
5. 回到 GitHub Desktop，填写 Summary（例如 `Upgrade dark interactive desktop portfolio`），点击 **Commit to main**。
6. 点击 **Push origin**。
7. 在 GitHub 网站中保持 `Settings → Pages → Build and deployment → Source: GitHub Actions`。
8. 去 `Actions` 查看名为 `Deploy Portfolio to GitHub Pages` 的任务是否绿色成功。
9. 打开 https://junhao87.github.io/junhao-portfolio/ ，用 Ctrl+Shift+R 强制刷新网页。

```text
junhao-portfolio/
  index.html
  resume.html
  README.md
  .nojekyll
  assets/
    styles.css
    main.js
    favicon.svg
  .github/
    workflows/
      deploy.yml
```

> Windows 文件资源管理器能看到隐藏的 `.github` 目录。如果没有看到，需要开启显示隐藏项目。请确保这个目录也复制过去。

## Test locally

- Double-click `index.html` to preview in a browser. OR
- In VS Code open the folder and use Live Server.

The page uses relative asset URLs, so it works from a GitHub Pages subpath like `/junhao-portfolio/`.

## Editing your information

- `index.html`: headings, About text, timeline, awards and contact content.
- `assets/main.js`: case-study descriptions and UI behaviour, including Terminal commands.
- `assets/styles.css`: colors, typography, layout and responsiveness. Edit the variables in `:root` for the dark palette.
- `resume.html`: standalone résumé information and print styles.

## Before sharing publicly

- Verify the résumé wording and contact details.
- Replace the illustrated project visuals with your own screenshots/media if desired.
- Add only public client/project material that you're allowed to share.
- This website doesn't contain your original uploaded résumé PDF; `resume.html` is a web recreation based on the text of your earlier résumé.

## Credits / scope

This is **not a copy** of another creator's assets or code. The visuals and UI are original, using desktop-OS interaction conventions. The glowing orb/orbits are implemented with CSS 3D effects and a small starfield canvas — it is not an imported 3D model, nor does it use Three.js.

© Chong Jun Hao, 2026.
