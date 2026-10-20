# 我的數位實驗室 V1

這是第一版個人靜態網站。內容包含技術概念筆記、GitHub 發布流程、資料存放方式，以及一個純 JavaScript 像素小遊戲。

## 本機預覽

在專案資料夾執行：

```bash
python3 -m http.server 8765 --directory dist
```

瀏覽器開啟 `http://127.0.0.1:8765/`。

## GitHub Pages

專案已包含 `.github/workflows/deploy.yml`。將整個資料夾上傳到 GitHub 後，在 Repository 的 `Settings > Pages` 將 Source 設為 `GitHub Actions`，之後每次更新 `main` 分支都會自動發布 `dist`。

## 下一版

- 加入 EmulatorJS。
- 建立遊戲清單與分類。
- 使用合法的 Homebrew 或自製 ROM 測試。
- 加入模擬器存檔與全螢幕。
