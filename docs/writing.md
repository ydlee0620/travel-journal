# 代理創作工作流程

本文檔說明如何透過 AI 代理或自動化工作流程來添加新的旅行遊記。

## 📋 工作流程概述

1. **準備素材**：收集照片和遊記草稿
2. **創建文章**：生成 Markdown 文件
3. **處理圖片**：優化並放置圖片
4. **預覽檢查**：本地預覽確認效果
5. **發布更新**：提交並推送到 GitHub

## 🤖 代理操作指南

### 步驟 1：準備照片素材

照片應放置在 `public/images/posts/` 目錄下。建議的命名規則：

```
public/images/posts/
├── 目的地-日期-封面.jpg        # 例如：taipei-2024-cover.jpg
├── 目的地-日期-1.jpg           # 例如：taipei-2024-1.jpg
├── 目的地-日期-2.jpg           # 例如：taipei-2024-2.jpg
└── ...
```

**圖片要求：**
- 格式：JPG、PNG 或 WebP
- 封面尺寸：建議 1200×800px（3:2 比例）
- 內文圖片：最大寬度 1200px
- 檔案大小：建議每張不超過 500KB

### 步驟 2：創建遊記 Markdown

在 `src/content/posts/` 目錄下創建新文件，檔名使用英文小寫和連字符：

```markdown
---
title: "遊記標題"
date: 2024-09-23
location: "地點名稱"
cover: "/travel-journal/images/posts/封面圖片.jpg"
tags: ["標籤1", "標籤2", "標籤3"]
draft: false
---

## 引言

開頭段落，簡述這次旅行的背景和感受...

## 行程亮點

### 景點一

描述第一個景點的體驗...

![景點照片](/travel-journal/images/posts/圖片1.jpg)

### 景點二

描述第二個景點的體驗...

## 旅行小提示

- 建議一
- 建議二
- 建議三

## 結語

總結這次旅行的心得...
```

### 步驟 3：內容結構建議

一篇完整的遊記建議包含以下部分：

1. **引言**（1-2 段）
   - 旅行背景
   - 為什麼選擇這個地點
   - 整體感受

2. **行程內容**（依時間或主題）
   - 早晨／中午／下午／傍晚
   - 或依景點／活動分類
   - 每個部分 2-3 段

3. **美食推薦**（選填）
   - 特色餐廳
   - 街邊小吃
   - 當地特產

4. **實用資訊**
   - 交通方式
   - 最佳遊覽時間
   - 預算參考
   - 注意事項

5. **結語**（1-2 段）
   - 旅行心得
   - 推薦理由
   - 未來計劃

### 步驟 4：標籤使用指南

標籤幫助讀者找到相關內容，建議的標籤類型：

- **地理位置**：台北、台中、高雄、日本、韓國...
- **旅行類型**：自由行、跟團、週末遊、長途旅行...
- **主題**：美食、文化、自然、建築、購物...
- **季節**：春天、夏天、秋天、冬天...
- **特色**：親子、情侶、獨旅、攝影...

每篇遊記建議使用 3-5 個標籤。

### 步驟 5：圖片路徑規則

所有圖片路徑必須包含 `/travel-journal/` 基礎路徑：

```markdown
✅ 正確：/travel-journal/images/posts/my-photo.jpg
❌ 錯誤：/images/posts/my-photo.jpg
❌ 錯誤：images/posts/my-photo.jpg
```

### 步驟 6：草稿與發布

使用 `draft` 欄位控制文章是否顯示：

```yaml
draft: true   # 草稿，不會顯示在網站上
draft: false  # 已發布，會顯示在網站上
```

## 🔄 完整自動化流程範例

以下是一個完整的代理操作範例：

```bash
# 1. 進入專案目錄
cd /workspace

# 2. 創建新遊記目錄（如果需要）
mkdir -p public/images/posts

# 3. 複製照片到指定位置
# （假設照片已準備好）
cp /path/to/photos/* public/images/posts/

# 4. 創建遊記 Markdown 文件
cat > src/content/posts/new-trip.md << 'EOF'
---
title: "新旅程標題"
date: 2024-09-23
location: "地點"
cover: "/travel-journal/images/posts/cover.jpg"
tags: ["標籤"]
draft: false
---

遊記內容...
EOF

# 5. 本地預覽
npm run dev

# 6. 建置測試
npm run build

# 7. 提交更新
git add .
git commit -m "新增遊記：新旅程標題"
git push
```

## ✅ 內容檢查清單

發布前請確認：

- [ ] 標題清晰且吸引人
- [ ] 日期正確
- [ ] 地點明確
- [ ] 封面圖片設定且路徑正確
- [ ] 標籤適當（3-5 個）
- [ ] draft 設為 false
- [ ] 內文圖片路徑正確
- [ ] 內容結構完整
- [ ] 文字通順無錯別字
- [ ] 圖片已優化，檔案大小合理
- [ ] 本地預覽正常

## 🐛 常見問題

### Q: 圖片不顯示？

**A:** 檢查以下幾點：
1. 圖片檔案是否存在於 `public/images/posts/` 目錄
2. 路徑是否包含 `/travel-journal/` 前綴
3. 檔名是否正確（區分大小寫）
4. 圖片格式是否支援（JPG、PNG、WebP）

### Q: 新文章沒有出現在列表中？

**A:** 檢查：
1. `draft` 是否設為 `false`
2. 文件是否放在 `src/content/posts/` 目錄
3. 文件副檔名是否為 `.md` 或 `.mdx`
4. Frontmatter 格式是否正確

### Q: 日期格式錯誤？

**A:** 日期必須使用 YYYY-MM-DD 格式，例如：
```yaml
date: 2024-09-23  # ✅ 正確
date: 2024/09/23  # ❌ 錯誤
date: 23-09-2024  # ❌ 錯誤
```

### Q: 如何調整圖片大小？

**A:** 使用圖片編輯工具或命令列工具：

```bash
# 使用 ImageMagick 調整圖片大小
convert input.jpg -resize 1200x output.jpg

# 使用 ImageMagick 壓縮圖片
convert input.jpg -quality 85 output.jpg
```

## 📊 內容管理建議

### 組織方式

建議按年份或主題組織遊記：

```
src/content/posts/
├── 2024-taiwan-trip-1.md
├── 2024-taiwan-trip-2.md
├── 2024-japan-tokyo.md
└── 2024-japan-osaka.md
```

### 命名規範

文件命名建議格式：`年份-地區-簡短描述.md`

例如：
- `2024-taipei-oldtown.md`
- `2024-japan-kyoto-temples.md`
- `2024-weekend-getaway-yilan.md`

### 定期維護

建議定期執行以下維護任務：

1. **檢查連結**：確保所有圖片連結有效
2. **更新資訊**：更新過時的旅遊資訊
3. **優化圖片**：壓縮大型圖片檔案
4. **整理標籤**：統一標籤用詞

## 🚀 進階功能

### 使用 MDX

如果需要更豐富的互動內容，可以使用 MDX 格式（`.mdx`），支援在 Markdown 中嵌入 React 元件。

### 自訂元件

在 `src/components/` 目錄下創建自訂元件，例如圖片畫廊、地圖嵌入等。

### 添加更多前置資料

可以擴展 frontmatter 以支援更多功能：

```yaml
---
title: "標題"
date: 2024-09-23
location: "地點"
cover: "/travel-journal/images/posts/cover.jpg"
tags: ["標籤"]
draft: false
featured: true              # 是否為精選文章
author: "作者名稱"          # 作者
description: "文章摘要"     # SEO 描述
---
```

## 📝 寫作技巧

### 引人入勝的開頭

- 使用描述性語言設定場景
- 分享個人感受或意外發現
- 提出有趣的問題

### 生動的描述

- 使用五感描寫（視覺、聽覺、嗅覺、味覺、觸覺）
- 加入個人觀察和感受
- 使用比喻和形象化語言

### 實用的資訊

- 提供具體的時間、地點、價格
- 分享親身經驗和建議
- 包含交通和路線資訊

### 真實的感受

- 分享旅途中的喜悅和挑戰
- 記錄意外和驚喜
- 表達個人成長和體悟

---

**祝創作順利！** 📝✨
