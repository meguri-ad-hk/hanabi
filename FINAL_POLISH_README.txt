HANABI Final Polish — 2026-11-26
基於 HANABI_Creative_System_Refinement.zip，繁簡同步。
首頁：圖片內媒體標籤、FAQ 直角框、精簡表單標題、移除提交箭咀、統一選單高度。
全站：Footer 收緊，保留原有欄目及字體。
媒體頁：羅湖式圖片左文字右，手機圖片先行；缺圖保留空白16:9框；數據前綴、數字、單位分層；相關媒體 hover 漸層底線、active tab 漸層；hero synopsis 桌面兩個語意句段、手機自然換行。
直接修改 system.css、home 和 media 樣式，無新增 override 檔或 !important。保留原有 legacy CSS。
QA：隔離 Chromium 20頁×7闊度；未偵測橫向溢出、標題溢出或 JS 錯誤；額外檢查表單高度、媒體 tab 圖片比例與順序、數據、桌面摘要。584個本地路徑存在。
限制：測試使用本地資產及 fallback font，未驗證正式網域、實機 Safari、外部字體或真實 GA4/Ads/Formspree 轉換。較早 QA 文件僅為歷史紀錄，以 FINAL_POLISH_QA.json 為本輪紀錄。
原版 zh/index.html 保留未改，待管理者確認。
