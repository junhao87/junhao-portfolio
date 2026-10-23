# V4 Batik Studio 专项更新（保留 V3 电脑版与手机版）

这一版主要完善 `projects/batik-studio.html`，没有重新设计 SCCCI 或 Nan’ao。
Batik Studio 页面专门设计了平台图、AI 图样、3D 服装、书签实物、客户/访客照片、奖项证书及 Demo 视频栏目。

## 图片如何加进去

**步骤**：GitHub Desktop → `junhao-portfolio` → **Repository → Show in Explorer** → `assets/media/batik/` → 放入按下面命名的图片/视频 → Commit → Push origin。

| 你提供什么 | 放入这个路径 | 页面位置 |
|---|---|---|
| 最适合作为封面的漂亮 Batik 图 | `assets/media/batik/cover.jpg` | 首页 Batik 卡片 + Case Study 大封面 |
| 整个 Batik Studio 网站截图 | `assets/media/batik/platform-overview.jpg` | 完整平台展示 |
| AI pipeline / 技术架构图（有的话） | `assets/media/batik/pipeline-diagram.jpg` | Generation pipeline |
| AI 生成的第 1–4 张 Batik 图 | `assets/media/batik/ai-pattern-01.jpg` ... `ai-pattern-04.jpg` | AI 图样展示四宫格 |
| 3D T-shirt 截图 | `assets/media/batik/garment-tshirt.jpg` | 3D 服装 |
| 3D Baju Kurung 截图 | `assets/media/batik/garment-baju-kurung.jpg` | 3D 服装 |
| 制作的书签成品照片 | `assets/media/batik/bookmark-product.jpg` | Beyond the Screen |
| 客户/访客与书签或平台的照片 | `assets/media/batik/bookmark-event.jpg` | Beyond the Screen |
| DIGITEX 金奖奖状/获奖照片 | `assets/media/batik/award-gold.jpg` | Recognition |
| DEIC Oral Presenter 证书 | `assets/media/batik/deic-certificate.jpg` | Recognition |
| 展览板或展会照片 | `assets/media/batik/exhibition.jpg` | Recognition |
| 平台操作演示视频 | `assets/media/batik/demo.mp4` | Demonstration |

说明：**没有提供素材时，页面会显示精心设计的占位图**。上传真实图片以后，页面会自动显示；点击真实图片可以放大预览。一般不需要再改 HTML。

## 上传的小技巧

- 每张照片或截图先使用清晰且适度压缩的 JPG。宽图建议 1600px 左右；证书建议保留可读文字。
- AI 图样四张可以展示不同风格/颜色；如果很多，先选最能体现生成质量和差异的四张。
- 如果图片实际是 PNG，可转换为 JPG 后上传，**不要只更改扩展名**；也可以把网页 `data-img` 路径改成 `.png`。
- `demo.mp4` 建议 H.264 编码；体积大的视频建议交给我一起优化，不要把超大视频直接推送到 GitHub Repository。
- 访客/客户照片如能识别人脸，先征得公开展示的明确同意；否则裁切或模糊化。奖状、学位证书请遮盖证件号码、学号、签名等不想公开的信息。
- 如果你说的“文凭照片”是**毕业学位证书**而非 DIGITEX/DEIC 证书，建议放在 About/Education 栏目，不与项目获奖混淆；可以提供后由我排版。

## Portfolio 网站保持不变

`index.html` / `resume.html` / 原有黑色桌面和手机界面保留；`assets/portfolio-data.js` 的 Batik 内容已从原本较笼统的简历描述更新为你的实际工作：**独立开发者与研究者**，并同步到首页项目介绍。

你的 Batik 独立页面：

`https://junhao87.github.io/junhao-portfolio/projects/batik-studio.html`

## 以后修改 Batik 的文字

- 首页项目短描述：`assets/portfolio-data.js`，找到 `projects.batik`。
- 本次完整版 Case Study 正文：`projects/batik-studio.html`。
- 本页 CSS：`assets/batik-case.css`。
- 媒体自动加载和点击放大：`assets/batik-case.js`。
- 其他两个项目的文件还没有修改，之后再逐个整理。

## 研究数据说明

研究中的 `94.8% / 77.6% / 56.9%` 是 **58 人用户偏好问卷**的数据，不是模型识别率，也不是模型 accuracy。比较五种 pipeline 的“最好”是你报告中描述的**定性综合比较**，没有编造模型分数或其它未提供指标。

---

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
