const statusText = document.querySelector('#status');
const helloButton = document.querySelector('#helloBtn');
const themeButton = document.querySelector('#themeBtn');

helloButton.addEventListener('click', () => {
  statusText.textContent = 'Hello from GitHub Pages! 🎉';
});

themeButton.addEventListener('click', () => {
  const isDark = document.body.classList.toggle('dark');
  themeButton.textContent = isDark ? '☀️ โหมดสว่าง' : '🌙 โหมดมืด';
  themeButton.setAttribute('aria-label', isDark ? 'เปลี่ยนเป็นโหมดสว่าง' : 'เปลี่ยนเป็นโหมดมืด');
});
