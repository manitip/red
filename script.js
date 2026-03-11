document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('[data-menu-toggle]');
  const menu = document.querySelector('[data-menu]');
  if (menuToggle && menu) {
    menuToggle.addEventListener('click', () => {
      menu.classList.toggle('is-open');
      menuToggle.setAttribute('aria-expanded', String(menu.classList.contains('is-open')));
    });
  }

  const tabs = document.querySelectorAll('[data-tab-button]');
  const panels = document.querySelectorAll('[data-tab-panel]');
  if (tabs.length && panels.length) {
    tabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        const target = tab.getAttribute('data-tab-button');
        tabs.forEach((button) => button.classList.remove('is-active'));
        panels.forEach((panel) => panel.classList.remove('is-active'));
        tab.classList.add('is-active');
        document.querySelector(`[data-tab-panel="${target}"]`)?.classList.add('is-active');
      });
    });
  }
});
