import './styles/main.scss';

import core from './core/core';
import shared from './shared/shared.js';

import SidebarComponent from './shared/sidebar/sidebar.component';
import Router from './core/router/Router';

document.getElementById('app').innerHTML = await SidebarComponent();
