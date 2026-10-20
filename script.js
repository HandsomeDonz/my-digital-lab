const root = document.documentElement;
const themeButton = document.querySelector("#themeButton");
const savedTheme = localStorage.getItem("lab-theme");

if (savedTheme === "light" || savedTheme === "dark") {
  root.dataset.theme = savedTheme;
}

themeButton.addEventListener("click", () => {
  const next = root.dataset.theme === "light" ? "dark" : "light";
  root.dataset.theme = next;
  localStorage.setItem("lab-theme", next);
});

const canvas = document.querySelector("#gameCanvas");
const ctx = canvas.getContext("2d");
const overlay = document.querySelector("#gameOverlay");
const overlayMessage = document.querySelector("#overlayMessage");
const startButton = document.querySelector("#startGame");
const scoreValue = document.querySelector("#scoreValue");
const bestValue = document.querySelector("#bestValue");
const livesValue = document.querySelector("#livesValue");
const leftButton = document.querySelector("#moveLeft");
const rightButton = document.querySelector("#moveRight");

const world = {
  running: false,
  score: 0,
  lives: 3,
  best: Number(localStorage.getItem("pixel-catch-best") || 0),
  lastTime: 0,
  spawnTimer: 0,
  keys: new Set(),
  stars: [],
  particles: [],
  player: { x: 275, y: 318, width: 90, height: 18, speed: 330 }
};

bestValue.textContent = String(world.best).padStart(3, "0");

function resetGame() {
  world.running = true;
  world.score = 0;
  world.lives = 3;
  world.lastTime = performance.now();
  world.spawnTimer = 0;
  world.stars = [];
  world.particles = [];
  world.player.x = canvas.width / 2 - world.player.width / 2;
  scoreValue.textContent = "000";
  livesValue.textContent = "3";
  overlay.classList.add("hidden");
  canvas.focus();
  requestAnimationFrame(loop);
}

function spawnStar() {
  const size = 12 + Math.floor(Math.random() * 10);
  world.stars.push({
    x: 20 + Math.random() * (canvas.width - 40 - size),
    y: -size,
    size,
    speed: 105 + Math.random() * 95,
    hue: Math.random() > 0.5 ? "#d8ff5f" : "#54e6ff"
  });
}

function burst(x, y, color) {
  for (let i = 0; i < 8; i += 1) {
    world.particles.push({
      x,
      y,
      vx: (Math.random() - 0.5) * 130,
      vy: (Math.random() - 0.7) * 130,
      life: 0.5,
      color
    });
  }
}

function update(dt) {
  const moveLeft = world.keys.has("ArrowLeft") || world.keys.has("a") || world.keys.has("A");
  const moveRight = world.keys.has("ArrowRight") || world.keys.has("d") || world.keys.has("D");
  if (moveLeft) world.player.x -= world.player.speed * dt;
  if (moveRight) world.player.x += world.player.speed * dt;
  world.player.x = Math.max(8, Math.min(canvas.width - world.player.width - 8, world.player.x));

  world.spawnTimer -= dt;
  if (world.spawnTimer <= 0) {
    spawnStar();
    world.spawnTimer = Math.max(0.25, 0.72 - world.score * 0.007);
  }

  for (let i = world.stars.length - 1; i >= 0; i -= 1) {
    const star = world.stars[i];
    star.y += star.speed * dt;
    const caught =
      star.y + star.size >= world.player.y &&
      star.y <= world.player.y + world.player.height &&
      star.x + star.size >= world.player.x &&
      star.x <= world.player.x + world.player.width;

    if (caught) {
      world.score += 10;
      scoreValue.textContent = String(world.score).padStart(3, "0");
      burst(star.x + star.size / 2, star.y + star.size / 2, star.hue);
      world.stars.splice(i, 1);
    } else if (star.y > canvas.height + star.size) {
      world.lives -= 1;
      livesValue.textContent = String(world.lives);
      world.stars.splice(i, 1);
      if (world.lives <= 0) endGame();
    }
  }

  for (let i = world.particles.length - 1; i >= 0; i -= 1) {
    const p = world.particles[i];
    p.x += p.vx * dt;
    p.y += p.vy * dt;
    p.vy += 190 * dt;
    p.life -= dt;
    if (p.life <= 0) world.particles.splice(i, 1);
  }
}

function drawStar(star) {
  const s = star.size;
  ctx.fillStyle = star.hue;
  ctx.fillRect(star.x + s * 0.35, star.y, s * 0.3, s);
  ctx.fillRect(star.x, star.y + s * 0.35, s, s * 0.3);
  ctx.fillStyle = "rgba(255,255,255,.85)";
  ctx.fillRect(star.x + s * 0.42, star.y + s * 0.18, s * 0.16, s * 0.16);
}

function draw() {
  ctx.fillStyle = "#06080d";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "rgba(255,255,255,.075)";
  for (let x = 16; x < canvas.width; x += 32) {
    for (let y = 16; y < canvas.height; y += 32) ctx.fillRect(x, y, 2, 2);
  }

  ctx.fillStyle = "rgba(84,230,255,.1)";
  ctx.fillRect(0, 305, canvas.width, 55);
  ctx.fillStyle = "rgba(84,230,255,.25)";
  ctx.fillRect(0, 305, canvas.width, 2);

  for (const star of world.stars) drawStar(star);
  for (const p of world.particles) {
    ctx.globalAlpha = Math.max(0, p.life * 2);
    ctx.fillStyle = p.color;
    ctx.fillRect(p.x, p.y, 4, 4);
  }
  ctx.globalAlpha = 1;

  ctx.fillStyle = "#d8ff5f";
  ctx.fillRect(world.player.x, world.player.y, world.player.width, world.player.height);
  ctx.fillStyle = "#10140a";
  ctx.fillRect(world.player.x + 8, world.player.y + 5, world.player.width - 16, 5);
  ctx.fillStyle = "#54e6ff";
  ctx.fillRect(world.player.x + world.player.width / 2 - 5, world.player.y - 7, 10, 7);

  ctx.fillStyle = "rgba(255,255,255,.55)";
  ctx.font = "12px ui-monospace, monospace";
  ctx.fillText("COLLECT THE DATA STARS", 16, 24);
}

function loop(time) {
  if (!world.running) return;
  const dt = Math.min(0.034, (time - world.lastTime) / 1000);
  world.lastTime = time;
  update(dt);
  draw();
  if (world.running) requestAnimationFrame(loop);
}

function endGame() {
  world.running = false;
  if (world.score > world.best) {
    world.best = world.score;
    localStorage.setItem("pixel-catch-best", String(world.best));
    bestValue.textContent = String(world.best).padStart(3, "0");
  }
  overlayMessage.textContent = `本局 ${world.score} 分。最高紀錄 ${world.best} 分。`;
  startButton.textContent = "再玩一次";
  overlay.classList.remove("hidden");
}

function setTouchKey(key, down) {
  if (down) world.keys.add(key);
  else world.keys.delete(key);
}

startButton.addEventListener("click", resetGame);
window.addEventListener("keydown", (event) => {
  if (["ArrowLeft", "ArrowRight", " "].includes(event.key) && document.activeElement === canvas) event.preventDefault();
  world.keys.add(event.key);
});
window.addEventListener("keyup", (event) => world.keys.delete(event.key));

for (const [button, key] of [[leftButton, "ArrowLeft"], [rightButton, "ArrowRight"]]) {
  button.addEventListener("pointerdown", (event) => {
    event.preventDefault();
    button.setPointerCapture(event.pointerId);
    setTouchKey(key, true);
  });
  button.addEventListener("pointerup", () => setTouchKey(key, false));
  button.addEventListener("pointercancel", () => setTouchKey(key, false));
}

document.addEventListener("visibilitychange", () => {
  if (document.hidden && world.running) {
    world.lastTime = performance.now();
    world.keys.clear();
  }
});

draw();
