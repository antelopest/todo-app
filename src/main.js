'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const themes = {
    light: 'light-theme',
    dark: 'dark-theme'
  };

  let theme =
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
      ? themes.dark
      : themes.light;

  document.body.classList.add(theme);
});
