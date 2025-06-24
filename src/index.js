import './styles/main.scss';

import core from './core/core';
import shared from './shared/shared.js';

import SidebarComponent from './shared/components/sidebar/sidebar.component';
import Router from './core/router/Router';

document.getElementById('app').innerHTML = await SidebarComponent();

/*
 * public
 * /login
 * /signup
 *
 * private
 * /today
 * /calendar
 * /events
 * /tasks
 * /tags
 * /help
 * /settings
 *
 *
 * /filters
 * all
 * english
 * development
 * sport
 * */
