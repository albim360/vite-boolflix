import { createApp } from 'vue';
import App from '../src/App.vue'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStar as faSolidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as faRegularStar } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import '@fortawesome/fontawesome-free/css/all.css';
import '../style/general.scss';
import '../node_modules/flag-icon-css/css/flag-icons.min.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios';
import AppMain from './components/AppMain.vue';

// Aggiungi le icone alla libreria FontAwsome
library.add(faSolidStar, faRegularStar);

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app');
