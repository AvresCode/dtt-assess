import { createApp } from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faBath,
  faBed,
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faSquare } from '@fortawesome/free-regular-svg-icons';

import store from './store';
import App from './App.vue';
import router from './router';

const app = createApp(App);

library.add(faBath, faBed, faSquare, faMagnifyingGlass);
app.component('font-awesome-icon', FontAwesomeIcon);

app.use(store);
app.use(router);
app.mount('#app');
