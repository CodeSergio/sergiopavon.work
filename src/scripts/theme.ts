const STORAGE_KEY = 'theme';
type Theme = 'light' | 'dark';

function getCurrentTheme(): Theme {
  const d = document.documentElement.dataset.theme;
  return d === 'dark' ? 'dark' : 'light';
}

function setTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  try {
    localStorage.setItem(STORAGE_KEY, theme);
  } catch {
    // ignore
  }
  syncToggles(theme);
}

function syncToggles(theme: Theme) {
  const toggles = document.querySelectorAll<HTMLButtonElement>('[data-theme-toggle]');
  toggles.forEach((btn) => {
    btn.setAttribute('aria-pressed', theme === 'dark' ? 'true' : 'false');

    const label = btn.querySelector<HTMLElement>('[data-theme-label]');
    if (label) label.textContent = theme === 'dark' ? 'Tema oscuro' : 'Tema claro';

    btn.setAttribute('aria-label', theme === 'dark' ? 'Cambiar a tema claro' : 'Cambiar a tema oscuro');

    // Icon represents the action (not the current state)
    // Light mode -> show moon (switch to dark)
    // Dark mode  -> show sun  (switch to light)
    const sun = btn.querySelector<SVGElement>('[data-theme-icon="sun"]');
    const moon = btn.querySelector<SVGElement>('[data-theme-icon="moon"]');
    const isDark = theme === 'dark';
    if (sun) sun.toggleAttribute('hidden', !isDark);
    if (moon) moon.toggleAttribute('hidden', isDark);
  });
}

function init() {
  syncToggles(getCurrentTheme());
  document.addEventListener('click', (ev) => {
    const target = ev.target as HTMLElement | null;
    const btn = target?.closest?.('[data-theme-toggle]') as HTMLButtonElement | null;
    if (!btn) return;
    const next: Theme = getCurrentTheme() === 'dark' ? 'light' : 'dark';
    setTheme(next);
  });
}

init();
