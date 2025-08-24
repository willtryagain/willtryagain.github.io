(function () {
  const root = document.documentElement;
  const body = document.body;
  const menu = document.getElementById('menu');
  const navToggle = document.querySelector('.nav-toggle');
  const themeToggle = document.getElementById('theme-toggle');
  const year = document.getElementById('year');

  if (year) {
    year.textContent = String(new Date().getFullYear());
  }

  function getSystemPrefersDark() {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  function applyTheme(theme) {
    body.classList.remove('light', 'dark');
    if (theme === 'light' || theme === 'dark') {
      body.classList.add(theme);
    } else {
      // follow system
      if (getSystemPrefersDark()) body.classList.add('dark');
      else body.classList.add('light');
    }
  }

  function getStoredTheme() {
    try { return localStorage.getItem('theme') || 'system'; } catch { return 'system'; }
  }

  function setStoredTheme(theme) {
    try { localStorage.setItem('theme', theme); } catch {}
  }

  // Initialize theme
  applyTheme(getStoredTheme());

  // Respond to system changes if following system
  if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
      if (getStoredTheme() === 'system') applyTheme('system');
    });
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const current = body.classList.contains('dark') ? 'dark' : body.classList.contains('light') ? 'light' : 'system';
      const next = current === 'dark' ? 'light' : current === 'light' ? 'system' : 'dark';
      setStoredTheme(next);
      applyTheme(next);
      themeToggle.setAttribute('aria-label', `Theme: ${next}`);
    });
  }

  if (navToggle && menu) {
    navToggle.addEventListener('click', () => {
      const expanded = navToggle.getAttribute('aria-expanded') === 'true' || false;
      navToggle.setAttribute('aria-expanded', String(!expanded));
      menu.classList.toggle('open');
    });
  }

  // Smooth scroll for same-page anchors
  document.addEventListener('click', (e) => {
    const target = e.target;
    if (!(target instanceof Element)) return;
    if (target.matches('a[href^="#"]')) {
      const id = target.getAttribute('href');
      if (!id) return;
      const el = document.querySelector(id);
      if (!el) return;
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      history.pushState(null, '', id);
    }
  });
})();


