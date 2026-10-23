# Batik Studio V4.3 图片修复说明

## 问题
旧版 V4.2 图片组件使用 lazy 图片加载 + visibility:hidden，必须触发 JS 的 load 事件才会显示。图片检查页只检查 HTTP HEAD 成功，不能证明图片可以被浏览器显示。视频使用独立的加载逻辑，因此可能出现视频显示但图片不显示的现象。

## V4.3 修复
1. Batik Case Study 图片改为 eager 加载；CSS 只在加载成功后淡入，不再设置 visibility:hidden。
2. 自动尝试 PNG、JPG、JPEG 和 WebP，优先 PNG。
3. 解决首页项目封面的同类隐藏问题。
4. 图片检测页除了 FOUND，还会检验浏览器能否成功解码；并展示缩略图。
5. Batik Case Study JS、CSS 以及首页主 JS 加上版本参数以避免使用旧缓存。
6. 保留 V4.2 其他项目、移动布局、原始 PDF 链接和 Demo 视频。

## GitHub Desktop 更新操作
1. 先备份目前的 Repository。
2. 解压 V4.3 ZIP；把里面所有文件复制到 `junhao-portfolio` 仓库根目录，覆盖同名网站代码。
3. **不要删除** `assets/media/batik/` 里自己上传的照片、PDF 和 demo.mp4；此 ZIP 不包含这些真实媒体。
4. GitHub Desktop → Commit to main → Push origin。
5. 等 GitHub Actions 变成绿色成功，再打开：
   - https://junhao87.github.io/junhao-portfolio/projects/batik-studio.html
   - https://junhao87.github.io/junhao-portfolio/check-media.html
6. 浏览器按 Ctrl + Shift + R 强制刷新。

## 排查结果怎样理解
- FOUND + ✓ 可显示：服务器有这个文件，而且浏览器能够解码。
- FOUND + ✕ 无法解码：文件存在但图片内容不能显示，例如图片数据或编码异常；用 WPS/画图重新导出标准 PNG 或 JPEG。
- NOT FOUND：没有上传正确文件、大小写不同或目录错误。
- PDF / VIDEO：不属于图片解码测试，文件存在但需各自的阅读器或播放器测试。

如果检测页图片都“可显示”但项目页依旧只有视频，请在 Case Study 页按 F12，在 Console 截图错误，同时提供 Network 里 `batik-case.js?v=4.3` 的状态；我们可继续准确定位。
