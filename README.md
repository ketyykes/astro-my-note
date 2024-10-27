# 水土曜來了筆記

[![使用 Starlight 構建](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)

「水土曜來了筆記」是一個專注於技術分享與學習資源的網站。透過簡潔的界面，使用者可以輕鬆瀏覽各種技術內容，包括文件翻譯、技術觀點、工具推薦與學習筆記等。網站目標是成為技術學習與參考的資源庫。

## Features

- 文件翻譯：提供繁體中文的技術文件翻譯，方便中文使用者閱讀。
- 技術觀點：以淺顯易懂的方式解釋技術，適合初學者。
- 工具推薦：介紹實用工具，加速學習和實作進度。
- 學習筆記：記錄各種學習過程中的技術筆記。
- 實作筆記：詳細的實作步驟和心得，供他人參考與學習。

## Tech Stack

- 框架：[Astro](https://astro.build/)
- 靜態網站生成器：[Starlight](https://starlight.astro.build/)
- 時間處理：[dayjs](https://day.js.org/)


## 專案結構

此專案基於 Astro，並使用 pnpm 進行套件管理。以下為主要的專案結構概述。

```plaintext
.
├── README.md               # 專案說明文件
├── astro.config.mjs        # Astro 配置檔案
├── package.json            # 專案依賴與腳本配置
├── pnpm-lock.yaml          # pnpm 的鎖定檔案，確保一致性
├── public                  # 靜態資源資料夾
│   └── favicon.png         # 網站的圖示檔案
├── src                     # 原始碼資料夾
│   ├── assets              # 靜態資源，例如圖片或圖示
│   ├── content             # 內容資料夾，包含各類型文件
│   │   ├── config.ts       # 內容配置檔案
│   │   └── docs            # 文件相關資料夾
│   │       ├── guides      # 導引文件
│   │       ├── learn_note  # 學習筆記
│   │       ├── reference   # 技術參考
│   │       └── tools       # 工具推薦
│   └── env.d.ts            # TypeScript 環境宣告檔案
└── tsconfig.json           # TypeScript 設定檔案
```
## 文件與資源

- [Astro 官方文件](https://docs.astro.build/)
- [Starlight GitHub](https://github.com/withastro/starlight)
- [dayjs](https://day.js.org/)

