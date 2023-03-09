import { createApp } from 'vue';
import App from './App.vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStar as faSolidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as faRegularStar } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import '@fortawesome/fontawesome-free/css/all.css';
import '../style/general.scss';
import '../node_modules/flag-icon-css/css/flag-icons.min.css';

// Aggiungi le icone alla libreria FontAwsome
library.add(faSolidStar, faRegularStar);

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app');
