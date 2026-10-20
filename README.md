# 我的像素世界 V2

一座可以自由探索的 2D 像素 RPG 個人網站。頁面只保留單色標題與中央遊戲地圖，使用 Phaser 3 製作角色移動、家具碰撞、前後遮擋與六個互動區，並保留鍵盤、滑鼠和手機操作。

## 操作

- WASD 或方向鍵：移動角色
- E、Enter 或空白鍵：與附近物件互動
- 滑鼠：直接點擊閃爍物件
- 手機：使用畫面上的方向鍵與 A 鍵

互動物件包含桌上電腦、設計白板、書架、專案工作桌、聯絡終端與復古街機。桌上電腦內的 WEB TECH、GITHUB、GAMES、DESIGN 與 README 使用一致的折疊文件介面，GAMES 另有明確的小遊戲啟動按鈕。書牆中央書本平常維持直立，懸停時抽出封面，點擊後在下方展開暫定文章；白板與工作桌也會保留原場景，再於下方長出可捲動的資料面板。聯絡終端與街機沿用電腦的米白厚機殼與網點螢幕，前者提供可捲動的模擬聯絡紀錄，後者直接啟動可遊玩的小遊戲。

## 本機預覽

在專案資料夾執行：

```bash
python3 -m http.server 8765 --directory dist
```

瀏覽器開啟 `http://127.0.0.1:8765/`。

## GitHub Pages

專案已包含 `.github/workflows/deploy.yml`。將整個資料夾上傳到 GitHub 後，在 Repository 的 `Settings > Pages` 將 Source 設為 `GitHub Actions`，之後每次更新 `main` 分支都會自動發布 `dist`。

## 技術與部署

- 純 HTML、CSS、JavaScript
- Phaser 3.90 已放在 `dist/vendor/`，不依賴執行時 CDN
- GitHub Pages 可直接託管，不需要伺服器後端

## 下一版方向

- 繪製更多角色行走影格與家具細節。
- 增加第二張房間或戶外地圖。
- 加入音效、背景音樂與靜音設定。
- 使用合法的 Homebrew、自製或授權 ROM 測試 EmulatorJS。
