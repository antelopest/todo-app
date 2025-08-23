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

const todos = [];

const form = document.getElementById('todo__form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
});

const toggleThemes = document.getElementById('todo__theme-toggle');

toggleThemes.addEventListener('click', () => {
  if (document.body.classList.contains(Themes.light)) {
    document.body.classList.replace(Themes.light, Themes.dark);
  } else {
    document.body.classList.replace(Themes.dark, Themes.light);
  }
});

const Filters = {
  all: 'all',
  active: 'active',
  completed: 'completed'
};
