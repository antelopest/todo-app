import './styles/main.scss';

import core from './core/core';
import shared from './shared/shared.js';

import SidebarComponent from './shared/sidebar/sidebar.component';

document.getElementById('app').innerHTML = SidebarComponent();
