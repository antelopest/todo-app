'use strict';

const Themes = {
  light: 'light',
  dark: 'dark'
};

document.addEventListener('DOMContentLoaded', () => {
  let theme =
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
      ? Themes.dark
      : Themes.light;

  document.body.classList.add(theme);
});

const form = document.getElementById('todo__form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
});

const Filters = {
  all: 'all',
  active: 'active',
  completed: 'completed'
};
