(() => {
  "use strict";

  const C = {
    ink: 0x071b20, ink2: 0x0d2b2e, paper: 0xe2edca, paper2: 0xc7d8b4,
    acid: 0xd6df57, coral: 0xf05d4f, teal: 0x28aaa4, cream: 0xf2e8c9,
    orange: 0xf6b967, dark: 0x020b0d, wood: 0xb27443, blue: 0x2e7891
  };

  const objects = [
    { id: "bookshelf", title: "書架 / 關於我", x: 115, y: 210, radius: 105 },
    { id: "whiteboard", title: "白板 / 設計理念", x: 467, y: 212, radius: 105 },
    { id: "arcade", title: "街機 / 小遊戲", x: 842, y: 240, radius: 105 },
    { id: "computer", title: "電腦 / 知識桌面", x: 190, y: 545, radius: 112 },
    { id: "phone", title: "終端 / 聯絡方式", x: 506, y: 550, radius: 96 },
    { id: "projects", title: "工作桌 / 專案", x: 754, y: 550, radius: 112 }
  ];

  const sheets = {
    bookshelf: {
      icon: "▥", path: "C:\\ROOM\\ABOUT_ME\\",
      html: `<article class="content-sheet">
        <p class="eyebrow">ABOUT / WORLD LOG 001</p>
        <h2>把個人網站<br>變成一個世界</h2>
        <p>這不是普通的自我介紹頁，而是一間可以走動的數位房間。你可以像玩舊式 RPG 一樣靠近物件，再慢慢打開內容。</p>
        <div class="note-block"><strong>核心想法：</strong>網站不只用來「閱讀」，也能讓人探索、發現與留下記憶。</div>
        <h3>這間房間如何誕生？</h3>
        <p>從復古遊戲、網點印刷、日系像素美術與早期電腦介面出發，把技術解說、設計筆記、專案與小遊戲變成房間裡的物件。</p>
        <h3>視覺關鍵字</h3>
        <ul><li>米白、墨綠、酸黃、橘紅與青藍的限制色盤</li><li>清晰像素，不用模糊濾鏡假裝復古</li><li>網點、印刷錯位與平面立體感</li><li>少用裝飾外框，線條只負責結構與深度</li></ul>
        <div class="fact-strip"><span>PLAYER 01</span><span>ROOM 01</span><span>BUILD 2026</span></div>
      </article>`
    },
    whiteboard: {
      icon: "▤", path: "C:\\ROOM\\DESIGN_NOTES\\",
      html: `<article class="content-sheet">
        <p class="eyebrow">DESIGN SYSTEM / FIELD NOTES</p>
        <h2>一張地圖，<br>六個內容入口</h2>
        <p>畫面採用你指定的 <strong>2D RPG 俯視／三分之四室內視角</strong>：地板從上方看，牆面與家具保留正面高度，所以空間會比純平面俯視更有立體感。</p>
        <h3>互動規則</h3>
        <ul><li>WASD 或方向鍵移動，靠近後按 E、Enter 或空白鍵。</li><li>滑鼠可直接點擊；手機則有虛擬方向鍵。</li><li>家具具有碰撞，角色會被桌子、沙發與牆壁擋住。</li><li>角色走到家具前後時，會依位置改變遮擋順序。</li></ul>
        <h3>為什麼用 Phaser？</h3>
        <p>Phaser 像一個專門製作 2D 遊戲的工具箱，已經準備好角色移動、碰撞、縮放、鍵盤與觸控。程式庫放在網站內，GitHub Pages 只要提供靜態檔案就能運行。</p>
        <div class="note-block">這是第一版可玩原型。之後可再換成更細緻的角色動畫、音效與多房間地圖。</div>
      </article>`
    },
    projects: {
      icon: "▧", path: "C:\\ROOM\\PROJECTS\\",
      html: `<article class="content-sheet">
        <p class="eyebrow">PROJECT DESK / ACTIVE BUILDS</p>
        <h2>正在製作的<br>數位實驗</h2>
        <h3>01 — 像素 RPG 個人網站</h3><p>把作品集、技術筆記與關於我轉化成可探索的房間。第一階段完成角色移動、碰撞、六個互動點與手機操作。</p>
        <h3>02 — 復古遊戲展示櫃</h3><p>研究如何使用合法、自有或授權的 ROM，配合 EmulatorJS / WebAssembly，讓復古遊戲在瀏覽器執行。</p>
        <h3>03 — 本機連結解析工具</h3><p>用 Python 製作有逾時、錯誤跳過與非同步處理的桌面 GUI，避免網路請求讓介面卡死。</p>
        <div class="fact-strip"><span>PHASER 3</span><span>HTML / CSS</span><span>GITHUB PAGES</span></div>
        <div class="note-block"><strong>下一步：</strong>加入第二張場景、可替換的個人資料與真正的像素角色行走影格。</div>
      </article>`
    },
    phone: {
      icon: "▣", path: "C:\\ROOM\\CONTACT\\",
      html: `<article class="content-sheet">
        <p class="eyebrow">COMM TERMINAL / CONNECTION</p><h2>訊號已連線</h2>
        <p>公開版本由 GitHub Pages 託管。GitHub 保存程式碼，Pages 則把 HTML、CSS、JavaScript 變成任何人都能開啟的網站。</p>
        <h3>公開入口</h3><p><a href="https://handsomedonz.github.io/my-digital-lab/" target="_blank" rel="noreferrer">handsomedonz.github.io/my-digital-lab/</a></p>
        <h3>GitHub</h3><p><a href="https://github.com/HandsomeDonz/my-digital-lab" target="_blank" rel="noreferrer">github.com/HandsomeDonz/my-digital-lab</a></p>
        <div class="note-block">這裡暫時不放私人信箱。之後可增加公開社群、聯絡表單或委託入口。</div>
      </article>`
    }
  };

  const folderDocument = (label, body, action = "") => `<article class="folder-document"><p class="folder-document-label">${label}</p>${body}${action}</article>`;
  const folders = {
    tech: ["WEB_TECH", folderDocument("REFERENCE / WEB TECHNOLOGY", `<details open><summary>Rust 是什麼？</summary><p>Rust 是一種程式語言，像蓋房子的高強度工具。它重視速度與記憶體安全，常用來製作底層程式、遊戲工具與高效能服務。</p></details>
      <details><summary>WebAssembly（Wasm）是什麼？</summary><p>Wasm 像瀏覽器能讀懂的「高速通用零件」。Rust、C、C++ 等語言可編譯成 Wasm，讓模擬器、影像編輯器與遊戲引擎在瀏覽器高速執行。</p></details>
      <details><summary>WebGL 與 WebGPU</summary><p>它們都讓網頁使用顯示卡。WebGL 像成熟的舊公路；WebGPU 像更新、更有效率的高速公路，但舊裝置支援度要另外確認。</p></details>`)],
    github: ["GITHUB_PAGES", folderDocument("REFERENCE / HOSTING", `<details open><summary>GitHub 可以當後端嗎？</summary><p>GitHub 適合存程式碼、圖片和靜態網站，但不是完整後端。它像免費展示櫃：可以擺 HTML、CSS、JavaScript，卻不能直接替每位使用者執行 Python、保管密碼或寫入資料庫。</p></details>
      <details><summary>那資料要放哪裡？</summary><p>純作品集可直接用 GitHub Pages。需要登入、留言或雲端存檔時，可另外接 Supabase、Firebase 或 Cloudflare Workers。</p></details>
      <details><summary>目前這個網站怎麼運作？</summary><p>角色移動與碰撞都在瀏覽器中執行。GitHub Pages 只負責把檔案送到瀏覽器，因此不必一直開著自己的電腦。</p><p><a href="https://github.com/HandsomeDonz/my-digital-lab" target="_blank" rel="noreferrer">查看目前的 GitHub 專案</a></p></details>`)],
    games: ["BROWSER_GAMES", folderDocument("REFERENCE / PLAYABLE WEB", `<details open><summary>這個資料夾放什麼？</summary><p>這裡是遊戲相關的文字筆記；它不會自行載入外部 ROM，也不會跳到錯誤頁面。下方按鈕會啟動房間內建的 DATA STAR 小遊戲。</p></details>
      <details><summary>網頁為什麼能玩復古遊戲？</summary><p>網頁先下載 JavaScript 或 WebAssembly 模擬器，再讀取合法取得的 ROM。模擬器扮演舊主機，畫面透過 Canvas、WebGL 或 WebGPU 繪製。</p></details>
      <details><summary>ROM 與 GitHub Pages</summary><p>ROM 是遊戲程式、美術與聲音的資料檔。只有自製、已授權或你依法有權使用的內容才適合公開；大型檔案通常也不適合直接放在 GitHub Pages。</p></details>`, `<button type="button" class="folder-launch" data-launch-object="arcade">▶ 啟動 DATA STAR 小遊戲</button>`)],
    design: ["DESIGN_NOTES", folderDocument("REFERENCE / VISUAL SYSTEM", `<details open><summary>這次的視覺方向</summary><p>使用限制色盤、清晰像素邊緣、網點噪點與早期電腦介面。家具靠色塊與陰影呈現平面立體，不用大量卡片外框切碎畫面。</p></details><details><summary>如何使用參考圖？</summary><p>取「感覺」而不複製素材：網點印刷、低色數立體感、清晰但有細節的像素人物。</p></details>`)],
    about: ["README_ME", folderDocument("SYSTEM / README", `<details open><summary>README.TXT</summary><p>這台電腦是房間裡的知識索引。它是模擬桌面，不會讀取你真正的電腦檔案。</p></details><details><summary>WHY_THIS_ROOM.TXT</summary><p>目標是讓第一次接觸 GitHub、WebAssembly 或前端技術的人，也能用容易理解的比喻進入這個世界。</p></details>`)]
  };

  const bookshelfFiles = {
    world: ["《數位房間建造誌》", `<article class="book-prose-content"><p class="eyebrow">WORLD LOG / BOOK 001</p><h2>把個人網站變成一個可以探索的房間</h2><p>這是一本暫定內容的數位房間建造誌。一般作品集像一排資料卡；這個版本則把關於我、設計筆記、專案與小遊戲變成房間裡真正存在的物件。</p><p>訪客可以靠近電腦、書牆、白板與工作桌，再親手打開內容。遊戲地圖負責探索感，展開的文字面板則負責清楚閱讀。</p><p>視覺上使用限制色盤、清晰像素邊緣、印刷網點與平面陰影。之後可以把這段文字換成正式的自我介紹、創作理念或個人經歷。</p></article>`]
  };

  const deskFiles = {
    rpg: ["CASE 01 / 像素 RPG 網站", `<article class="content-sheet compact-sheet"><p class="eyebrow">PROJECT FILE / ACTIVE</p><h2>像素 RPG<br>個人網站</h2><p>把作品集、技術筆記與關於我轉化成可探索的房間。現在已完成角色移動、家具碰撞、前後遮擋、六個互動點與手機操作。</p><div class="fact-strip"><span>PHASER 3</span><span>PLAYABLE</span><span>V2 PROTOTYPE</span></div></article>`],
    emulator: ["CASE 02 / 復古遊戲展示櫃", `<article class="content-sheet compact-sheet"><p class="eyebrow">PROJECT FILE / RESEARCH</p><h2>瀏覽器裡的<br>復古主機</h2><p>研究 EmulatorJS、WebAssembly 與合法 ROM 的載入方式，讓自製、Homebrew 或取得授權的遊戲可以直接在網頁運行。</p><div class="note-block">下一步：建立遊戲分類、存檔與全螢幕介面。</div></article>`],
    downloader: ["CASE 03 / 連結解析工具", `<article class="content-sheet compact-sheet"><p class="eyebrow">PROJECT FILE / TOOL</p><h2>本機下載<br>輔助工具</h2><p>使用 Python 製作具備逾時、錯誤跳過與非同步處理的桌面 GUI，避免網路請求讓介面卡死。</p><div class="note-block">分享平台若要求登入、驗證或官方客戶端，仍必須遵循平台流程。</div></article>`],
    notes: ["桌面便條 / NEXT BUILD", `<article class="content-sheet compact-sheet"><p class="eyebrow">HANDWRITTEN NOTE / TODO</p><h2>下一次更新</h2><ul><li>增加角色行走影格與更多表情。</li><li>設計第二張房間或戶外街道。</li><li>加入背景音樂、環境音效與靜音設定。</li><li>讓網站內容可由簡單資料檔更新。</li></ul></article>`]
  };

  const whiteboardFiles = {
    view: ["NOTE 01 / 視角設計", `<article class="content-sheet compact-sheet"><p class="eyebrow">VISUAL NOTE</p><h2>三分之四<br>室內視角</h2><p>地板從上方看，牆面、桌子與書櫃保留正面高度，因此同時具有俯視探索感和家具的立體層次。</p><div class="note-block">角色會依照 Y 軸位置改變深度，走到家具前後時產生遮擋。</div></article>`],
    control: ["NOTE 02 / 互動規則", `<article class="content-sheet compact-sheet"><p class="eyebrow">CONTROL NOTE</p><h2>靠近、提示、<br>再互動</h2><ul><li>WASD 或方向鍵移動。</li><li>E、Enter 或空白鍵操作附近物件。</li><li>滑鼠可以直接點擊閃爍區域。</li><li>手機使用虛擬方向鍵與 A 鍵。</li></ul></article>`],
    stack: ["NOTE 03 / 技術選擇", `<article class="content-sheet compact-sheet"><p class="eyebrow">TECH NOTE</p><h2>Phaser 3 +<br>靜態網站</h2><p>Phaser 處理角色、碰撞、縮放與輸入；HTML 和 CSS 負責視窗內容。所有檔案都能由 GitHub Pages 直接託管。</p><div class="fact-strip"><span>PHASER 3</span><span>NO BACKEND</span><span>GITHUB PAGES</span></div></article>`]
  };

  const $ = (selector) => document.querySelector(selector);
  const dom = {
    dialog: $("#contentDialog"), body: $("#dialogBody"), title: $("#dialogTitle"),
    icon: $("#dialogIcon"), path: $("#dialogPath"), menu: $("#menuDialog"),
    help: $("#helpDialog"), prompt: $("#interactionPrompt"), promptText: $("#interactionText"),
    visited: $("#visitedCount"), location: $("#hudLocation")
  };
  const parse = (value, fallback) => { try { return JSON.parse(value); } catch { return fallback; } };
  const visited = new Set(parse(localStorage.getItem("digital-room-visited") || "[]", []));
  const touch = { up: false, down: false, left: false, right: false };
  let nearby = null;
  let modalOpen = false;
  let focusGame = () => {};
  let stopArcade = null;

  function setModal(value) {
    modalOpen = value;
    if (!value) requestAnimationFrame(focusGame);
  }
  function show(dialog) {
    [dom.dialog, dom.menu, dom.help].forEach((item) => { if (item !== dialog && item.open) item.close(); });
    setModal(true);
    if (!dialog.open) dialog.showModal();
  }
  function updateVisited() {
    dom.visited.textContent = visited.size;
    localStorage.setItem("digital-room-visited", JSON.stringify([...visited]));
  }
  function computerHTML() {
    return `<div class="computer-shell"><div class="computer-screen">
      <div class="desktop-toolbar"><span>DIGITAL ROOM OS / 8-BIT</span><span>${new Date().toLocaleTimeString("zh-TW", { hour: "2-digit", minute: "2-digit" })}</span></div>
      <div class="folder-grid" id="folderGrid">
        ${[["tech","WEB TECH"],["github","GITHUB"],["games","GAMES"],["design","DESIGN"],["about","README"],["trash","TRASH"]].map(([id,label]) => `<button class="folder-button" data-folder="${id}"><span class="folder-icon"></span><span>${label}</span></button>`).join("")}
      </div>
      <section class="folder-view" id="folderView" hidden><header><h3 id="folderTitle">FOLDER</h3><button type="button" id="folderBack">← BACK</button></header><div class="folder-content" id="folderContent"></div></section>
    </div></div>`;
  }
  function wireComputer() {
    const grid = $("#folderGrid"), view = $("#folderView"), content = $("#folderContent");
    grid?.addEventListener("click", (event) => {
      const button = event.target.closest("[data-folder]");
      if (!button) return;
      const data = folders[button.dataset.folder] || ["TRASH", "<p>資源回收桶是空的。這個模擬桌面不會存取你真正的檔案。</p>"];
      $("#folderTitle").textContent = data[0];
      $("#folderContent").innerHTML = data[1];
      grid.hidden = true;
      view.hidden = false;
    });
    content?.addEventListener("click", (event) => {
      const button = event.target.closest("[data-launch-object]");
      if (button) openObject(button.dataset.launchObject);
    });
    $("#folderBack")?.addEventListener("click", () => { view.hidden = true; grid.hidden = false; });
  }
  function inspectorHTML(title, bodyClass, scene, viewId) {
    return `<div class="inspection-shell ${bodyClass}">
      <div class="inspection-topbar"><span>${title}</span><span>SELECT AN OBJECT</span></div>
      <div class="inspection-scene" id="${viewId}Scene">${scene}</div>
      <section class="inspection-view" id="${viewId}View" hidden>
        <header><h3 id="${viewId}Title">FILE</h3><button type="button" id="${viewId}Back">← BACK</button></header>
        <div id="${viewId}Content"></div>
      </section>
    </div>`;
  }
  function wireInspector(attribute, viewId, files, expandDown = false) {
    const scene = $(`#${viewId}Scene`);
    const view = $(`#${viewId}View`);
    scene?.addEventListener("click", (event) => {
      const button = event.target.closest(`[${attribute}]`);
      if (!button) return;
      const data = files[button.getAttribute(attribute)];
      if (!data) return;
      $(`#${viewId}Title`).textContent = data[0];
      $(`#${viewId}Content`).innerHTML = data[1];
      if (expandDown) scene.classList.add("inspection-scene-open");
      else scene.hidden = true;
      view.hidden = false;
      if (expandDown) requestAnimationFrame(() => view.scrollIntoView({ behavior: "smooth", block: "nearest" }));
    });
    $(`#${viewId}Back`)?.addEventListener("click", () => {
      view.hidden = true;
      if (expandDown) scene?.classList.remove("inspection-scene-open");
      else scene.hidden = false;
    });
  }
  function wireBookshelf() {
    const scene = $("#bookScene"), view = $("#bookView");
    scene?.addEventListener("click", (event) => {
      const button = event.target.closest("[data-book]");
      if (!button) return;
      const data = bookshelfFiles[button.dataset.book];
      if (!data) return;
      $("#bookTitle").textContent = data[0];
      $("#bookContent").innerHTML = data[1];
      scene.classList.add("bookcase-scene-open");
      view.hidden = false;
      requestAnimationFrame(() => view.scrollIntoView({ behavior: "smooth", block: "nearest" }));
    });
    $("#bookBack")?.addEventListener("click", () => {
      view.hidden = true;
      scene?.classList.remove("bookcase-scene-open");
      scene?.querySelector(".featured-book")?.focus();
    });
  }
  function bookshelfHTML() {
    return `<div class="bookcase-shell">
      <div class="bookcase-scene" id="bookScene" aria-label="橫向像素書牆">
        <div class="bookcase-heading"><span>PERSONAL ARCHIVE</span><span>01 / 01</span></div>
        <div class="book-rail">
          <span class="shelf-book spine-a" aria-hidden="true">FIELD</span>
          <span class="shelf-book spine-b" aria-hidden="true">199X</span>
          <span class="shelf-book spine-c" aria-hidden="true">WEB</span>
          <span class="shelf-book spine-d" aria-hidden="true">NOTES</span>
          <button class="featured-book" type="button" data-book="world" aria-label="抽出並打開數位房間建造誌">
            <span class="featured-cover">DIGITAL<br>ROOM<small>WORLD LOG 001</small></span>
            <span class="featured-pages"></span>
          </button>
          <span class="shelf-book spine-e" aria-hidden="true">PIXEL</span>
          <span class="shelf-book spine-f" aria-hidden="true">ROOM</span>
          <span class="shelf-book spine-g" aria-hidden="true">BUILD</span>
          <span class="shelf-book spine-h" aria-hidden="true">2026</span>
        </div>
        <div class="bookcase-caption"><b>《數位房間建造誌》</b><span>點擊中央抽出的書本閱讀</span></div>
        <div class="shelf-shadow" aria-hidden="true"></div>
      </div>
      <section class="inspection-view book-reading-view" id="bookView" hidden>
        <header><h3 id="bookTitle">FILE</h3><button type="button" id="bookBack">← BACK TO SHELF</button></header>
        <div id="bookContent"></div>
      </section>
    </div>`;
  }
  function deskHTML() {
    const scene = `<div class="desk-closeup" aria-label="俯視像素工作桌">
      <div class="desk-wall"><span class="desk-clock">12:42</span><span class="desk-inbox">IN: 3</span><span class="desk-outbox">OUT</span></div>
      <div class="desk-surface">
        <button class="desk-object desk-notebook" type="button" data-desk="rpg"><span>RPG<br>ROOM</span><small>筆記本</small></button>
        <button class="desk-object desk-floppy" type="button" data-desk="emulator"><i></i><span>EMU<br>LAB</span><small>磁片</small></button>
        <button class="desk-object desk-card" type="button" data-desk="downloader"><span>LINK<br>TOOL</span><small>專案卡</small></button>
        <button class="desk-object desk-note" type="button" data-desk="notes"><span>NEXT<br>BUILD</span><small>便條</small></button>
        <div class="desk-pencil" aria-hidden="true"></div>
        <div class="desk-coffee" aria-hidden="true"><i></i></div>
      </div>
      <div class="desk-drawers"><span></span><span></span><span></span></div>
    </div>`;
    return inspectorHTML("PROJECT DESK / CASE FILES", "desk-interface expandable-inspector", scene, "desk");
  }
  function terminalHTML() {
    return `<div class="computer-shell terminal-computer-shell"><div class="computer-screen terminal-program-screen">
      <div class="desktop-toolbar"><span>COMM TERMINAL / TEXT MODE</span><span class="signal-online">● ONLINE</span></div>
      <div class="terminal-scroll" tabindex="0" aria-label="模擬聯絡資料與系統紀錄">
        <p><b>DR-COMM 1.6</b> — PERSONAL SIGNAL CONSOLE</p>
        <p class="terminal-dim">COPYRIGHT (C) DIGITAL ROOM LAB / LOCAL BUILD</p>
        <hr>
        <p><span class="terminal-prompt">C:\CONTACT&gt;</span> OPEN PROFILE.TXT</p>
        <section><b>PROFILE / 關於這個訊號</b><p>這裡是房間對外聯絡的文字終端。它只顯示公開連結，不會讀取訪客的電腦、帳號或私人資料。</p></section>
        <p><span class="terminal-prompt">C:\CONTACT&gt;</span> READ CHANNELS.LOG</p>
        <section class="terminal-contact-list">
          <p><span>WEB</span><a href="https://handsomedonz.github.io/my-digital-lab/" target="_blank" rel="noreferrer">handsomedonz.github.io/my-digital-lab/</a></p>
          <p><span>CODE</span><a href="https://github.com/HandsomeDonz/my-digital-lab" target="_blank" rel="noreferrer">github.com/HandsomeDonz/my-digital-lab</a></p>
          <p><span>EMAIL</span><em>NOT PUBLISHED / 尚未公開</em></p>
          <p><span>ZONE</span><em>ASIA / TAIPEI</em></p>
        </section>
        <p><span class="terminal-prompt">C:\CONTACT&gt;</span> STATUS</p>
        <section><b>LOCAL PREVIEW: READY</b><p>目前正在測試新版互動房間；公開 GitHub Pages 保留原版本，確認後才會更新。</p></section>
        <p class="terminal-dim">END OF TRANSMISSION — SCROLL UP TO REVIEW</p>
      </div>
      <div class="terminal-commandline"><span>C:\CONTACT&gt;</span><span class="terminal-cursor" aria-hidden="true"></span><small>↑↓ SCROLL</small></div>
    </div></div>`;
  }
  function whiteboardHTML() {
    const scene = `<div class="whiteboard-closeup" aria-label="像素風格設計白板">
      <div class="board-surface">
        <div class="board-title"><b>DIGITAL ROOM / DESIGN MAP</b><span>BUILD 02</span></div>
        <button class="board-note note-view" type="button" data-board="view"><i></i><b>01 / VIEW</b><span>俯視地板<br>正面家具<br>Y-SORT</span></button>
        <button class="board-note note-control" type="button" data-board="control"><i></i><b>02 / CONTROL</b><span>MOVE → NEAR<br>PRESS E<br>OPEN OBJECT</span></button>
        <button class="board-note note-stack" type="button" data-board="stack"><i></i><b>03 / STACK</b><span>PHASER 3<br>HTML + CSS<br>STATIC HOST</span></button>
        <span class="board-arrow arrow-one" aria-hidden="true"></span><span class="board-arrow arrow-two" aria-hidden="true"></span>
        <div class="board-sketch" aria-hidden="true"><span></span><i></i><b>ROOM 01</b></div>
        <div class="board-tray" aria-hidden="true"><i></i><i></i><i></i></div>
      </div>
    </div>`;
    return inspectorHTML("DESIGN BOARD / PINNED NOTES", "whiteboard-interface expandable-inspector", scene, "board");
  }
  function arcadeHTML() {
    return `<div class="computer-shell arcade-computer-shell"><div class="computer-screen arcade-program-screen">
      <div class="desktop-toolbar"><span>GAME.EXE / DATA STAR</span><span>PLAYER 01</span></div>
      <div class="arcade-window">
        <div class="arcade-window-bar"><span>◆ DIGITAL ROOM ENTERTAINMENT</span><span>RUNNING</span></div>
        <div class="arcade-screen"><canvas id="arcadeCanvas" width="480" height="270" tabindex="0" aria-label="接星星小遊戲"></canvas>
          <div class="arcade-overlay" id="arcadeOverlay"><b>DATA STAR</b><span>左右方向鍵 / A D 移動</span><button type="button" id="startArcade">START</button></div>
        </div>
        <div class="arcade-controls"><button type="button" id="arcadeLeft" aria-label="向左">◀</button><span>SCORE <b id="arcadeScore">000</b> / BEST <b id="arcadeBest">000</b> / LIFE <b id="arcadeLives">3</b></span><button type="button" id="arcadeRight" aria-label="向右">▶</button></div>
      </div>
      <div class="arcade-program-footer"><span>MOVE: ← → / A D</span><span>ESC CLOSE</span></div>
    </div></div>`;
  }
  function openObject(id) {
    const meta = objects.find((item) => item.id === id);
    if (!meta) return;
    visited.add(id);
    updateVisited();
    dom.title.textContent = meta.title;
    dom.icon.textContent = id === "arcade" ? "◆" : id === "computer" ? "▰" : sheets[id]?.icon || "■";
    dom.path.textContent = id === "computer" ? "C:\\ROOM\\COMPUTER\\" : id === "arcade" ? "C:\\ROOM\\ARCADE\\" : sheets[id]?.path || "C:\\ROOM\\";
    dom.body.innerHTML =
      id === "computer" ? computerHTML() :
      id === "arcade" ? arcadeHTML() :
      id === "bookshelf" ? bookshelfHTML() :
      id === "projects" ? deskHTML() :
      id === "phone" ? terminalHTML() :
      id === "whiteboard" ? whiteboardHTML() :
      sheets[id]?.html || "";
    show(dom.dialog);
    if (id === "computer") wireComputer();
    if (id === "arcade") wireArcade();
    if (id === "bookshelf") wireBookshelf();
    if (id === "projects") wireInspector("data-desk", "desk", deskFiles, true);
    if (id === "whiteboard") wireInspector("data-board", "board", whiteboardFiles, true);
  }
  function setNearby(meta) {
    if (nearby?.id === meta?.id) return;
    nearby = meta || null;
    dom.prompt.hidden = !meta;
    dom.promptText.textContent = meta ? meta.title : "互動";
    if (dom.location) dom.location.textContent = meta ? meta.title.toUpperCase() : "ROOM 01 / 工作室";
  }

  function wireArcade() {
    stopArcade?.();
    const canvas = $("#arcadeCanvas"), ctx = canvas?.getContext("2d"), overlay = $("#arcadeOverlay");
    if (!ctx || !overlay) return;
    const state = { active: false, raf: 0, last: 0, spawn: 0, score: 0, lives: 3, best: Number(localStorage.getItem("pixel-catch-best") || 0), keys: new Set(), stars: [], player: { x: 205, y: 239, w: 70, h: 14 } };
    $("#arcadeBest").textContent = String(state.best).padStart(3, "0");
    const draw = () => {
      ctx.fillStyle = "#071b20"; ctx.fillRect(0, 0, 480, 270);
      ctx.fillStyle = "rgba(226,237,202,.12)";
      for (let x=13;x<480;x+=21) for (let y=13;y<270;y+=21) ctx.fillRect(x,y,2,2);
      ctx.fillStyle = "#28aaa4"; ctx.fillRect(0,228,480,2);
      state.stars.forEach((s) => { ctx.fillStyle=s.color; ctx.fillRect(s.x+s.size*.36,s.y,s.size*.28,s.size); ctx.fillRect(s.x,s.y+s.size*.36,s.size,s.size*.28); });
      ctx.fillStyle="#d6df57"; ctx.fillRect(state.player.x,state.player.y,state.player.w,state.player.h);
      ctx.fillStyle="#071b20"; ctx.fillRect(state.player.x+8,state.player.y+5,state.player.w-16,4);
      ctx.fillStyle="#f05d4f"; ctx.fillRect(state.player.x+30,state.player.y-7,10,7);
    };
    const end = () => {
      state.active=false;
      if (state.score>state.best) { state.best=state.score; localStorage.setItem("pixel-catch-best",state.best); $("#arcadeBest").textContent=String(state.best).padStart(3,"0"); }
      overlay.querySelector("b").textContent=`本局 ${state.score} 分`;
      overlay.querySelector("span").textContent=`最高紀錄 ${state.best} 分`;
      $("#startArcade").textContent="RETRY"; overlay.classList.remove("hidden");
    };
    const frame = (time) => {
      if (!state.active) return;
      const dt=Math.min(.034,(time-state.last)/1000||0); state.last=time;
      if (state.keys.has("ArrowLeft")||state.keys.has("a")) state.player.x-=270*dt;
      if (state.keys.has("ArrowRight")||state.keys.has("d")) state.player.x+=270*dt;
      state.player.x=Math.max(6,Math.min(404,state.player.x));
      state.spawn-=dt;
      if (state.spawn<=0) { const size=12+Math.floor(Math.random()*8); state.stars.push({x:15+Math.random()*(450-size),y:-size,size,speed:95+Math.random()*110,color:Math.random()>.5?"#d6df57":"#28aaa4"}); state.spawn=Math.max(.28,.72-state.score*.006); }
      for (let i=state.stars.length-1;i>=0;i--) { const s=state.stars[i]; s.y+=s.speed*dt; const hit=s.y+s.size>=239&&s.y<=253&&s.x+s.size>=state.player.x&&s.x<=state.player.x+70; if(hit){state.score+=10;$("#arcadeScore").textContent=String(state.score).padStart(3,"0");state.stars.splice(i,1);} else if(s.y>280){state.lives--;$("#arcadeLives").textContent=state.lives;state.stars.splice(i,1);if(!state.lives)end();} }
      draw(); if(state.active) state.raf=requestAnimationFrame(frame);
    };
    const start = () => { cancelAnimationFrame(state.raf); Object.assign(state,{active:true,last:performance.now(),spawn:0,score:0,lives:3,stars:[]}); state.player.x=205; $("#arcadeScore").textContent="000";$("#arcadeLives").textContent="3";overlay.classList.add("hidden");canvas.focus();state.raf=requestAnimationFrame(frame); };
    const down=(e)=>{if(["ArrowLeft","ArrowRight","a","d","A","D"].includes(e.key)){e.preventDefault();state.keys.add(e.key.toLowerCase());state.keys.add(e.key);}};
    const up=(e)=>{state.keys.delete(e.key.toLowerCase());state.keys.delete(e.key);};
    window.addEventListener("keydown",down);window.addEventListener("keyup",up);$("#startArcade").addEventListener("click",start);
    [["#arcadeLeft","ArrowLeft"],["#arcadeRight","ArrowRight"]].forEach(([id,key])=>{const b=$(id);const on=e=>{e.preventDefault();state.keys.add(key);};const off=()=>state.keys.delete(key);b.addEventListener("pointerdown",on);b.addEventListener("pointerup",off);b.addEventListener("pointercancel",off);});
    stopArcade=()=>{state.active=false;cancelAnimationFrame(state.raf);window.removeEventListener("keydown",down);window.removeEventListener("keyup",up);};
    draw();
  }

  function playerTextures(scene) {
    ["down","up","left","right"].forEach((dir) => [0,1].forEach((frame) => {
      const g=scene.add.graphics();
      g.fillStyle(C.dark).fillRect(7,1,12,5).fillRect(dir==="left"?5:7,5,dir==="right"?14:12,7);
      g.fillStyle(C.cream).fillRect(8,7,10,7);
      if(dir==="down") g.fillStyle(C.ink).fillRect(10,9,2,2).fillRect(15,9,2,2);
      if(dir==="left") g.fillStyle(C.ink).fillRect(7,9,2,2);
      if(dir==="right") g.fillStyle(C.ink).fillRect(17,9,2,2);
      g.fillStyle(C.coral).fillRect(6,14,14,10);
      g.fillStyle(C.acid).fillRect(dir==="left"?5:19,15,3,7);
      g.fillStyle(C.ink2).fillRect(8,24,5,frame?7:8).fillRect(15,24,5,frame?8:7);
      g.fillStyle(C.paper).fillRect(frame?8:7,30,6,2).fillRect(frame?14:15,30,6,2);
      g.generateTexture(`player-${dir}-${frame}`,26,34);g.destroy();
    }));
  }
  function room(scene) {
    const g=scene.add.graphics().setDepth(0);
    g.fillStyle(C.dark).fillRect(0,0,960,640);g.fillStyle(C.ink2).fillRect(20,18,920,602);
    g.fillStyle(C.cream).fillRect(30,28,900,86);g.fillStyle(C.coral).fillRect(30,104,900,12);
    g.fillStyle(0x0e6766).fillRect(30,116,900,484);g.fillStyle(C.ink).fillRect(30,600,900,10);
    g.lineStyle(2,0x166f6d,.65);for(let x=30;x<=930;x+=40)g.lineBetween(x,116,x,600);for(let y=116;y<=600;y+=40)g.lineBetween(30,y,930,y);
    g.fillStyle(0x165653,.32);for(let x=48;x<920;x+=40)for(let y=134;y<590;y+=40)g.fillRect(x,y,3,3);
    const rug=scene.add.graphics().setDepth(220);rug.fillStyle(C.ink).fillRect(330,238,304,174);rug.fillStyle(C.paper2).fillRect(338,246,288,158);rug.fillStyle(C.orange).fillRect(352,260,260,130);rug.fillStyle(C.coral).fillTriangle(482,270,482,382,376,326);rug.fillStyle(C.teal).fillTriangle(490,270,596,326,490,382);rug.lineStyle(4,C.ink).strokeRect(352,260,260,130);
    const sign=scene.add.graphics().setDepth(40);sign.fillStyle(C.ink).fillRect(46,43,206,46);sign.fillStyle(C.acid).fillRect(54,51,16,30);
    scene.add.text(80,53,"DIGITAL ROOM / 01",{fontFamily:"monospace",fontSize:"15px",fontStyle:"bold",color:"#e2edca"}).setDepth(41);scene.add.text(80,72,"PERSONAL WORLD",{fontFamily:"monospace",fontSize:"9px",color:"#91aa9b"}).setDepth(41);
    const win=scene.add.graphics().setDepth(45);win.fillStyle(C.ink).fillRect(716,42,190,54);win.fillStyle(C.blue).fillRect(724,50,174,38);win.fillStyle(C.cream).fillRect(734,57,42,9).fillRect(803,71,64,8);win.fillStyle(C.coral).fillRect(780,50,7,38);
  }
  function collider(scene,x,y,w,h){const r=scene.add.rectangle(x,y,w,h,0xff0000,0);scene.physics.add.existing(r,true);scene.physics.add.collider(scene.player,r);}
  function hotspot(scene,meta,x,y,w,h){const z=scene.add.zone(x,y,w,h).setDepth(1500).setInteractive({useHandCursor:true});z.on("pointerdown",()=>openObject(meta.id));const m=scene.add.graphics().setDepth(1400);m.lineStyle(3,C.acid,.95).strokeRect(x-w/2+3,y-h/2+3,w-6,h-6);m.fillStyle(C.acid).fillRect(x+w/2-12,y-h/2+7,6,6);scene.tweens.add({targets:m,alpha:.2,duration:800,yoyo:true,repeat:-1});}
  function furniture(scene) {
    const o=Object.fromEntries(objects.map(x=>[x.id,x]));
    const shelf=scene.add.graphics().setDepth(180);shelf.fillStyle(C.ink).fillRect(52,112,126,109);shelf.fillStyle(C.wood).fillRect(60,120,110,93);shelf.fillStyle(C.cream).fillRect(70,130,14,27).fillRect(87,126,10,31).fillRect(101,134,18,23);shelf.fillStyle(C.coral).fillRect(124,128,12,29);shelf.fillStyle(C.teal).fillRect(140,133,18,24);shelf.fillStyle(C.ink).fillRect(60,160,110,7);shelf.fillStyle(C.acid).fillRect(71,174,18,29).fillRect(94,179,12,24);shelf.fillStyle(C.cream).fillRect(111,172,17,31).fillRect(133,180,25,23);shelf.fillStyle(C.ink).fillRect(48,213,134,12);collider(scene,115,204,134,48);hotspot(scene,o.bookshelf,115,163,138,126);
    const board=scene.add.graphics().setDepth(175);board.fillStyle(C.ink).fillRect(340,116,254,92);board.fillStyle(C.paper).fillRect(349,124,236,71);board.fillStyle(C.teal).fillRect(365,140,69,7).fillRect(365,155,102,5);board.fillStyle(C.coral).fillRect(493,139,72,7).fillRect(479,158,86,5);board.fillStyle(C.wood).fillRect(364,198,206,9);collider(scene,467,198,244,26);hotspot(scene,o.whiteboard,467,157,260,105);
    const arc=scene.add.graphics().setDepth(215);arc.fillStyle(C.ink).fillRect(789,111,107,142);arc.fillStyle(0x7d3241).fillRect(797,118,91,125);arc.fillStyle(C.acid).fillRect(804,125,77,24);arc.fillStyle(C.ink2).fillRect(807,156,71,47);arc.fillStyle(C.teal).fillRect(815,164,55,31);arc.fillStyle(C.coral).fillRect(826,170,12,16);arc.fillStyle(C.ink).fillRect(807,211,71,25);arc.fillStyle(C.acid).fillCircle(829,220,5);arc.fillStyle(C.coral).fillCircle(850,220,5);scene.add.text(813,132,"ARCADE",{fontFamily:"monospace",fontSize:"11px",fontStyle:"bold",color:"#071b20"}).setDepth(216);collider(scene,842,230,110,50);hotspot(scene,o.arcade,842,180,120,154);
    const sofa=scene.add.graphics().setDepth(350);sofa.fillStyle(C.ink).fillRect(62,257,174,83);sofa.fillStyle(C.paper2).fillRect(70,265,158,54);sofa.fillStyle(C.cream).fillRect(78,273,69,38).fillRect(151,273,69,38);sofa.fillStyle(C.coral).fillRect(70,319,158,17);collider(scene,149,314,180,66);
    const table=scene.add.graphics().setDepth(410);table.fillStyle(C.ink).fillEllipse(484,347,118,64);table.fillStyle(C.cream).fillEllipse(484,339,108,54);table.fillStyle(C.coral).fillRect(464,328,40,22);table.fillStyle(C.ink).fillRect(477,367,15,40);collider(scene,484,351,118,62);
    const plant=scene.add.graphics().setDepth(360);plant.fillStyle(C.wood).fillRect(665,268,54,40);plant.fillStyle(C.ink).fillRect(659,260,66,13);plant.fillStyle(C.acid).fillTriangle(691,260,663,225,682,262);plant.fillStyle(C.teal).fillTriangle(693,259,719,220,706,264);plant.fillStyle(C.paper2).fillTriangle(691,257,684,210,700,257);collider(scene,692,288,66,45);
    const pc=scene.add.graphics().setDepth(515);pc.fillStyle(C.ink).fillRect(72,421,254,103);pc.fillStyle(C.wood).fillRect(80,429,238,59);pc.fillStyle(C.orange).fillRect(88,437,222,35);pc.fillStyle(C.paper2).fillRect(119,375,92,63);pc.fillStyle(C.ink).fillRect(127,382,76,45);pc.fillStyle(C.teal).fillRect(134,389,62,31);pc.fillStyle(C.acid).fillRect(141,396,25,5).fillRect(141,407,45,4);pc.fillStyle(C.paper).fillRect(156,438,18,10).fillRect(126,454,83,10);pc.fillStyle(C.coral).fillRect(234,438,45,28);pc.fillStyle(C.ink).fillRect(88,488,18,51).fillRect(292,488,18,51);collider(scene,199,472,260,108);hotspot(scene,o.computer,190,431,265,136);
    const phone=scene.add.graphics().setDepth(525);phone.fillStyle(C.ink).fillRect(459,416,94,116);phone.fillStyle(C.paper2).fillRect(467,424,78,98);phone.fillStyle(C.ink2).fillRect(477,434,58,32);phone.fillStyle(C.teal).fillRect(484,441,44,18);phone.fillStyle(C.coral).fillRect(479,477,12,12).fillRect(496,477,12,12).fillRect(513,477,12,12);phone.fillStyle(C.acid).fillRect(479,496,46,14);collider(scene,506,496,100,78);hotspot(scene,o.phone,506,470,108,128);
    const desk=scene.add.graphics().setDepth(525);desk.fillStyle(C.ink).fillRect(638,421,252,111);desk.fillStyle(C.wood).fillRect(646,429,236,61);desk.fillStyle(C.cream).fillRect(654,437,220,37);desk.fillStyle(C.coral).fillRect(675,443,55,24);desk.fillStyle(C.teal).fillRect(742,441,70,28);desk.fillStyle(C.acid).fillRect(824,440,34,30);desk.fillStyle(C.ink).fillRect(654,490,18,52).fillRect(856,490,18,52);collider(scene,764,474,260,108);hotspot(scene,o.projects,754,449,265,135);
    collider(scene,15,320,30,640);collider(scene,945,320,30,640);collider(scene,480,8,960,16);collider(scene,480,627,960,26);collider(scene,480,103,900,22);
  }

  class Room extends Phaser.Scene {
    create() {
      playerTextures(this);room(this);
      const pos=parse(localStorage.getItem("digital-room-position")||"{}",{});
      this.player=this.physics.add.sprite(Number.isFinite(pos.x)?Phaser.Math.Clamp(pos.x,55,905):485,Number.isFinite(pos.y)?Phaser.Math.Clamp(pos.y,150,580):560,"player-up-0");
      this.player.setCollideWorldBounds(true).setScale(1.35);this.player.body.setSize(15,10).setOffset(6,24);furniture(this);
      this.cursors=this.input.keyboard.createCursorKeys();this.keys=this.input.keyboard.addKeys("W,A,S,D");this.dir="up";this.step=0;this.nextStep=0;this.lastSave=0;
      ["E","ENTER","SPACE"].forEach(key=>this.input.keyboard.on(`keydown-${key}`,e=>{if(key==="SPACE"&&!modalOpen)e.preventDefault();if(!modalOpen&&nearby)openObject(nearby.id);}));
      const canvas=this.game.canvas;canvas.tabIndex=0;canvas.setAttribute("aria-label","像素工作室遊戲畫面");focusGame=()=>canvas.focus({preventScroll:true});canvas.addEventListener("pointerdown",focusGame);requestAnimationFrame(focusGame);
      this.add.text(45,575,"TIP  靠近閃爍物件，按 E 互動",{fontFamily:"monospace",fontSize:"11px",color:"#e2edca",backgroundColor:"#071b20",padding:{x:8,y:5}}).setDepth(1900);
    }
    update(time) {
      if(modalOpen){this.player.body.setVelocity(0);return;}
      let x=0,y=0;if(this.cursors.left.isDown||this.keys.A.isDown||touch.left)x--;if(this.cursors.right.isDown||this.keys.D.isDown||touch.right)x++;if(this.cursors.up.isDown||this.keys.W.isDown||touch.up)y--;if(this.cursors.down.isDown||this.keys.S.isDown||touch.down)y++;
      if(x||y){const n=Math.hypot(x,y);this.player.body.setVelocity(x/n*185,y/n*185);this.dir=Math.abs(x)>Math.abs(y)?(x<0?"right":"left"):(y<0?"up":"down");if(time>this.nextStep){this.step=1-this.step;this.nextStep=time+145;}}else{this.player.body.setVelocity(0);this.step=0;}
      this.player.setTexture(`player-${this.dir}-${this.step}`).setDepth(this.player.y+20);
      let found=null,dist=Infinity;objects.forEach(meta=>{const d=Phaser.Math.Distance.Between(this.player.x,this.player.y,meta.x,meta.y);if(d<meta.radius&&d<dist){found=meta;dist=d;}});setNearby(found);
      if(time-this.lastSave>1100){this.lastSave=time;localStorage.setItem("digital-room-position",JSON.stringify({x:Math.round(this.player.x),y:Math.round(this.player.y)}));}
    }
  }

  const game=new Phaser.Game({type:Phaser.AUTO,parent:"game-root",width:960,height:640,backgroundColor:"#071b20",pixelArt:true,roundPixels:true,render:{antialias:false,pixelArt:true},scale:{mode:Phaser.Scale.FIT,autoCenter:Phaser.Scale.CENTER_BOTH},physics:{default:"arcade",arcade:{gravity:{x:0,y:0},debug:false}},scene:Room});
  document.querySelectorAll("[data-open-object]").forEach(button=>button.addEventListener("click",()=>openObject(button.dataset.openObject)));
  $("#menuButton")?.addEventListener("click",()=>show(dom.menu));$("#helpButton")?.addEventListener("click",()=>show(dom.help));
  $("#closeMenu").addEventListener("click",()=>dom.menu.close());$("#closeHelp").addEventListener("click",()=>dom.help.close());$("#closeDialog").addEventListener("click",()=>dom.dialog.close());
  $("#startExploring").addEventListener("click",()=>{localStorage.setItem("digital-room-help-seen","1");dom.help.close();});
  $("#mobileInteract").addEventListener("click",()=>{if(nearby&&!modalOpen)openObject(nearby.id);});
  document.querySelectorAll("[data-direction]").forEach(button=>{const key=button.dataset.direction;const on=e=>{e.preventDefault();touch[key]=true;button.setPointerCapture?.(e.pointerId);};const off=()=>touch[key]=false;button.addEventListener("pointerdown",on);button.addEventListener("pointerup",off);button.addEventListener("pointercancel",off);button.addEventListener("pointerleave",off);});
  [dom.dialog,dom.menu,dom.help].forEach(dialog=>{dialog.addEventListener("close",()=>{if(dialog===dom.dialog){stopArcade?.();stopArcade=null;}if(![dom.dialog,dom.menu,dom.help].some(d=>d.open))setModal(false);});dialog.addEventListener("click",e=>{if(e.target===dialog)dialog.close();});});
  window.addEventListener("blur",()=>Object.keys(touch).forEach(k=>touch[k]=false));
  updateVisited();
  if(!localStorage.getItem("digital-room-help-seen"))window.addEventListener("load",()=>setTimeout(()=>show(dom.help),350),{once:true});
  window.DigitalRoom={game,openObject};
})();
