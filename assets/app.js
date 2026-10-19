(() => {
  const root = document.documentElement;
  const toggle = document.getElementById('themeToggle');
  const setTheme = theme => {
    root.dataset.theme = theme;
    toggle.setAttribute('aria-pressed', String(theme === 'dark'));
    toggle.setAttribute('aria-label', theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
    document.querySelector('meta[name="theme-color"]').content = theme === 'dark' ? '#1a1917' : '#faf9f7';
    try { localStorage.setItem('rui-theme', theme); } catch {}
  };
  let theme = 'light';
  try { if (localStorage.getItem('rui-theme') === 'dark') theme = 'dark'; } catch {}
  setTheme(theme);
  toggle.addEventListener('click', () => setTheme(root.dataset.theme === 'dark' ? 'light' : 'dark'));
})();
