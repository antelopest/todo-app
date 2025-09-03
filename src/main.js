'use strict';

const Themes = {
  light: 'light',
  dark: 'dark'
};

const todos = [
  {
    id: 1,
    text: 'Learn JavaScript',
    completed: false
  },
  {
    id: 2,
    text: 'Learn CSS',
    completed: false
  },
  {
    id: 3,
    text: 'Learn HTML',
    completed: true
  },
  {
    id: 4,
    text: 'Build project',
    completed: false
  }
];

document.addEventListener('DOMContentLoaded', () => {
  let theme =
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
      ? Themes.dark
      : Themes.light;

  document.body.setAttribute('data-theme', theme);

  document
    .getElementById('todo__theme-toggle')
    .addEventListener('click', () => {
      document.body.setAttribute(
        'data-theme',
        document.body.getAttribute('data-theme') === Themes.light
          ? Themes.dark
          : Themes.light
      );
    });

  document.getElementById('todo__list').innerText = '';

  for (const todo of todos) {
    const li = document.createElement('li');
    li.classList.add('todo__item');

    if (todo.completed) {
      li.classList.add('todo__item--completed');
    }

    const span = document.createElement('span');
    span.innerText = todo.text;
    span.classList.add('todo__text');

    const button = document.createElement('button');
    button.classList.add('todo__delete');
    button.ariaLabel = 'Delete todo';

    li.appendChild(span);
    li.appendChild(button);

    document.getElementById('todo__list').appendChild(li);
  }
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
