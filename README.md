# 旅行日記 ✈️

一個用於記錄旅行經歷的個人網站，使用 Astro 構建。

## 🌐 網站預覽

網站將部署在：**https://ydlee0620.github.io/travel-journal/**

## ✨ 功能特色

- 📝 **遊記發布**：使用 Markdown 格式輕鬆撰寫遊記
- 📸 **照片展示**：支援封面圖片和內文圖片
- 🏷️ **標籤分類**：為遊記添加標籤，方便分類
- 📱 **響應式設計**：在任何設備上都能完美顯示
- ⚡ **快速載入**：靜態網站生成，載入速度極快

## 🚀 本地開發

### 安裝依賴

```bash
npm install
```

### 啟動開發伺服器

```bash
npm run dev
```

開發伺服器將在 `http://localhost:4321` 啟動。

### 建置網站

```bash
npm run build
```

建置完成的檔案將輸出到 `dist/` 目錄。

### 預覽建置結果

```bash
npm run preview
```

## 📝 如何添加新遊記

### 1. 創建遊記文件

在 `src/content/posts/` 目錄下創建一個新的 Markdown 文件，例如 `my-trip.md`：

```markdown
---
title: "我的旅行標題"
date: 2024-09-23
location: "旅行地點"
cover: "/travel-journal/images/posts/my-trip-cover.jpg"
tags: ["標籤1", "標籤2"]
draft: false
---

在這裡撰寫你的遊記內容...

## 小標題

你可以使用 Markdown 語法來格式化文字、插入圖片等。

![圖片說明](/travel-journal/images/posts/my-trip-photo.jpg)
```

### 2. 添加照片

將照片放置在 `public/images/posts/` 目錄下。照片檔名建議使用英文和數字，避免使用特殊字元。

建議的圖片規格：
- **封面圖片**：1200×800px 或相近比例
- **內文圖片**：最大寬度 1200px

### 3. 前置資料說明

每篇遊記的開頭需要包含以下前置資料（frontmatter）：

- `title`：遊記標題（必填）
- `date`：發布日期，格式為 YYYY-MM-DD（必填）
- `location`：旅行地點（必填）
- `cover`：封面圖片路徑（選填）
- `tags`：標籤陣列（選填）
- `draft`：是否為草稿，`true` 表示不會在網站上顯示（選填，預設為 `false`）

### 4. Markdown 語法

你可以使用所有標準的 Markdown 語法：

- **標題**：`## 標題` 或 `### 子標題`
- **粗體**：`**粗體文字**`
- **斜體**：`*斜體文字*`
- **連結**：`[連結文字](URL)`
- **圖片**：`![圖片說明](圖片路徑)`
- **列表**：使用 `-` 或 `1.` 開頭
- **引用**：使用 `>` 開頭

## 🌐 GitHub Pages 部署

### 自動部署

當你將程式碼推送到 `main` 分支時，GitHub Actions 會自動建置並部署網站到 GitHub Pages。

### 啟用 GitHub Pages（首次設置）

如果這是第一次部署，請按照以下步驟啟用 GitHub Pages：

1. 進入 GitHub 儲存庫頁面
2. 點擊 **Settings**（設定）
3. 在左側選單中找到 **Pages**
4. 在 **Source** 下拉選單中選擇 **GitHub Actions**
5. 儲存設定

部署完成後，你的網站將在幾分鐘內可以訪問。

### 檢查部署狀態

- 進入 **Actions** 標籤查看工作流程執行狀態
- 綠色勾號表示部署成功
- 紅色叉號表示部署失敗，點擊查看錯誤日誌

## 📁 專案結構

```
travel-journal/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions 部署配置
├── public/
│   ├── images/
│   │   └── posts/              # 遊記圖片
│   └── favicon.svg             # 網站圖示
├── src/
│   ├── components/
│   │   └── PostCard.astro      # 遊記卡片元件
│   ├── content/
│   │   ├── config.ts           # 內容集合配置
│   │   └── posts/              # 遊記 Markdown 文件
│   ├── layouts/
│   │   └── Layout.astro        # 主要布局
│   └── pages/
│       ├── index.astro         # 首頁
│       ├── about.astro         # 關於頁面
│       └── posts/
│           ├── index.astro     # 遊記列表頁
│           └── [slug].astro    # 單篇遊記頁面
├── astro.config.mjs            # Astro 配置
├── package.json                # 專案依賴
└── README.md                   # 本文件
```

## 🛠️ 技術棧

- **[Astro](https://astro.build/)**：現代化的靜態網站生成器
- **TypeScript**：型別安全的 JavaScript
- **Markdown/MDX**：內容撰寫格式

## 📚 更多資訊

### 代理工作流程

如果你使用 AI 代理來協助管理內容，請參閱 [`docs/writing.md`](docs/writing.md) 了解工作流程。

### 自訂樣式

網站的全域樣式定義在 `src/layouts/Layout.astro` 中。你可以修改 CSS 變數來調整顏色主題：

```css
:root {
  --primary-color: #667eea;
  --secondary-color: #764ba2;
  --text-color: #333;
  --bg-color: #ffffff;
  --light-bg: #f8f9fa;
}
```

## 📄 授權

MIT License

## 🤝 貢獻

歡迎提交 Issue 和 Pull Request！

---

**祝你旅途愉快！** ✈️🌏
