// ЛР №4, Частина 1 — Робота з JavaScript
const VARIANT = 25; // номер варіанта (порядковий номер у журналі)

/* ---------- 1. Зберігання даних у браузері (localStorage) ---------- */
function saveSystemInfo() {
  const info = {
    userAgent: navigator.userAgent,
    platform: navigator.platform,
    language: navigator.language,
    languages: navigator.languages.join(', '),
    cookieEnabled: navigator.cookieEnabled,
    online: navigator.onLine,
    cpuCores: navigator.hardwareConcurrency,
    screen: `${screen.width}×${screen.height}`,
    timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
  };
  for (const [key, value] of Object.entries(info)) {
    localStorage.setItem(key, String(value));
  }
}

function renderStorage() {
  const list = document.getElementById('storage-list');
  list.innerHTML = '';
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const dt = document.createElement('dt');
    const dd = document.createElement('dd');
    dt.textContent = key;
    dd.textContent = localStorage.getItem(key);
    list.append(dt, dd);
  }
}

/* ---------- 2. Відгуки з сервера (Fetch API) ---------- */
async function loadReviews() {
  const status = document.getElementById('reviews-status');
  const container = document.getElementById('reviews-list');
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${VARIANT}/comments`);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const comments = await response.json();
    status.remove();
    comments.forEach((c) => {           // у порядку отримання
      const card = document.createElement('article');
      card.className = 'review';
      const title = document.createElement('h3');
      const email = document.createElement('p');
      const body = document.createElement('p');
      title.textContent = c.name;
      email.className = 'meta';
      email.textContent = c.email;
      body.textContent = c.body;
      card.append(title, email, body);
      container.append(card);
    });
  } catch (error) {
    status.textContent = `Не вдалося завантажити відгуки: ${error.message}`;
  }
}

/* ---------- 3. Модальне вікно з формою через 1 хвилину ---------- */
function setupModal() {
  const modal = document.getElementById('feedback-modal');
  const close = () => { modal.hidden = true; };
  setTimeout(() => { modal.hidden = false; }, 60000);
  document.getElementById('modal-close').addEventListener('click', close);
  modal.addEventListener('click', (e) => { if (e.target === modal) close(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });
}

/* ---------- 4. Денна / нічна тема ---------- */
function applyTheme(theme) {
  document.body.classList.toggle('dark-mode', theme === 'dark');
  document.getElementById('theme-toggle').textContent =
    theme === 'dark' ? '☀️ Денна тема' : '🌙 Нічна тема';
}

function setupTheme() {
  const hours = new Date().getHours();
  let theme = hours >= 7 && hours < 21 ? 'light' : 'dark'; // 07:00–21:00 — день
  applyTheme(theme);
  document.getElementById('theme-toggle').addEventListener('click', () => {
    theme = theme === 'dark' ? 'light' : 'dark';
    applyTheme(theme);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  saveSystemInfo();
  renderStorage();
  loadReviews();
  setupModal();
  setupTheme();
});
