HANABI — Creative System Refinement
基礎版本：hanabi-main-2.zip（用戶提供）

範圍：20 個 HANABI HTML（2 首頁、12 媒體頁、2 目錄、4 法律頁）。
CSS：共用 system.css 及四個頁面類別 stylesheet；直接整理原有宣告、合併重複規則，沒有新增 !important 或尾部 hotfix。原有部分 legacy 規則仍保留。
Typography：保留已確認 Hero / Media Section Heading；統一其他文字角色 tracking、leading 及文案節奏。
Shape：0px / 6px / 50%；媒體內容圖片直角 16:9；減少容器裝飾。
Content：繁簡摘要、40 個媒體 tab 內文、媒體數據及來源連結、Remarks / CTA、Footer 統一。未有實景圖片的 tab 採用文字排版。

QA：隔離 Chromium 測試 20 頁 × 7 闊度（1440,1280,1024,768,430,390,375px）。140 組無偵測到頁面橫向溢出、標題寬度溢出、媒體圖片比例／圓角異常或 JS 錯誤。測試媒體 tab、FAQ、手機導航、篩選操作及模擬表單事件。實際本地圖片預覽：首頁、港鐵頁及目錄桌面／手機。抽查受保護文字 computed styles 與原版一致。HTML href/src/data-primary-src/data-secondary-src 本地路徑檢查無遺漏。

限制：隔離預覽使用本地資產及 fallback font，未驗證正式網域、外部字體、實機 Safari、實際表單提交或 GA4/Ads 轉換。正式網站未更新，亦未確認線上版本與提供 ZIP 完全一致。保留 CNAME、sitemap.xml 及原版 zh/index.html（非 HANABI 內容，待網站管理者確認）。舊 QA/部署文件屬原版紀錄，以此檔及新 QA JSON 為本次 refinement 紀錄。原法律文案並非本次法律審核對象。部署前建議先比較線上版本及 staging 測試。
