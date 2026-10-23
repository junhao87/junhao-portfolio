# Portfolio V3 — 照片、项目截图、视频、Case Study 放置指南

> 当前版本保留黑色电脑桌面，同时有独立手机首页、底部导航与适合触控的项目窗口。
> 所有图片和视频都是**可选**的。没有素材时网站会显示深色占位画面，不会假装已经有真实项目照片。

## 1. 你的素材应该放哪里？（文件名严格一致）

```text
junhao-portfolio/                    ← GitHub Desktop 中的 Repo 根目录
├── index.html                        ← 电脑 + 手机首页
├── resume.html                       ← 网页简历
├── projects/                         ← 独立 Case Study 网页（已经做好框架）
│   ├── batik-studio.html
│   ├── sccci-ai-theatre.html
│   └── nanao-ai-guide.html
├── assets/
│   ├── portfolio-data.js             ← 项目文字唯一主要修改位置
│   ├── main.js / styles.css          ← 主站交互和样式
│   ├── case-study.js / case-study.css← 独立项目页模板
│   └── media/
│       ├── profile/
│       │   └── profile.jpg           ← 你的个人照片（选填）
│       ├── batik/
│       │   ├── cover.jpg             ← 大封面图
│       │   ├── 01.jpg                ← 第一张系统/流程截图
│       │   ├── 02.jpg                ← 第二张结果/页面截图
│       │   └── demo.mp4              ← Demo 演示（选填）
│       ├── sccci/
│       │   ├── cover.jpg
│       │   ├── 01.jpg
│       │   ├── 02.jpg
│       │   └── demo.mp4
│       └── nanao/
│           ├── cover.jpg
│           ├── 01.jpg
│           ├── 02.jpg
│           └── demo.mp4
└── .github/workflows/deploy.yml      ← GitHub Pages 自动部署
```

**如何上传：** 打开 GitHub Desktop → Repository → Show in Explorer → 找到上面指定的文件夹，把素材重命名后直接复制进去。然后回到 GitHub Desktop → Summary 写 `Add portfolio media` → Commit to main → Push origin。打开 GitHub Actions 观察部署，再刷新网站。

**照片/截图的建议规格：** 个人照片竖版 900×1100 或更大；封面横版 1600×900；项目截图原比例即可，尽量 JPG、质量 75–85%，每张 200 KB–1.5 MB。**视频：** MP4、H.264 视频编码、AAC 音频；建议 720p/1080p，并压缩到约 5–20 MB。避免超过 GitHub 的单文件限制（网页上传有更严格的限制），大视频可先提供 YouTube 或 Vimeo 链接，下一版做嵌入。

**不需要同时上传全部素材。** 任何一个文件放进指定路径就能在相应位置自动出现。

## 2. 三个独立 Case Study 的网址

- `https://junhao87.github.io/junhao-portfolio/projects/batik-studio.html`
- `https://junhao87.github.io/junhao-portfolio/projects/sccci-ai-theatre.html`
- `https://junhao87.github.io/junhao-portfolio/projects/nanao-ai-guide.html`

每一页包括：项目封面、Overview、Challenge、Approach、Process、真实截图展示区、Demo 视频播放区、My Contribution 和 Outcome。首页项目详情的 **OPEN COMPLETE CASE STUDY ↗** 能直接跳转。

## 3. 项目文字要怎样修改？

在 VS Code 打开 `assets/portfolio-data.js`，找到 `projects: { batik: {...}, sccci: {...}, nanao: {...} }`。

需要更新的主要字段：
- `tagline`: 项目的一句话介绍
- `summary`: 整体介绍（作用、面向谁）
- `challenge`: 为什么做这个、有什么问题
- `approach`: 使用什么方法、开发思路
- `contribution`: **你本人实际负责的部分**
- `result`: 测试结果、成果、奖项（仅写有依据的）
- `process`: 三个工作阶段
- `tags`: 真实使用的技术/技能
- `note`: 免责声明或未来计划

注意每段文字保留英文单引号和必要的逗号。如果你不熟悉 JS，只需把你整理的文字发给我，我会帮你更新文件。

## 4. 可以直接这样把项目资料发给我

```text
项目名称：Batik Studio
项目背景与目的：
我负责的工作（不要写成团队共同负责）：
使用的技术、模型、框架：
系统流程 / 功能：
有没有实测数据或成果：
想放的截图说明（cover / 01 / 02）：
Demo 视频或视频链接：
项目 Github / Live Demo 链接（如果有）：
需要隐藏的客户/内部内容：
```

如果你提供照片、视频或截图，可以用 ZIP 一起上传，并按项目分类。我可以根据你实际提供的资料重新排版；目前的网站只是预留了接口和栏目。

## 5. 个人照片的显示位置

把 `profile.jpg` 放进 `assets/media/profile/`，就会同时显示在「About Me」个人档案和手机首页的联系卡片。没有照片时保持原本的 JH 文字头像。

## 6. 版权与隐私提醒

SCCCI 的客户截图、内部资料、真实数据库、人脸和员工资料等，上传到公开 GitHub 之前应确认有公开授权。GitHub Pages 的 Public Repository 默认任何人都可能访问文件。建议先打码或使用可公开的测试资料。不要把 API key、`.env`、客户机密或私人的证件图片加入仓库。
