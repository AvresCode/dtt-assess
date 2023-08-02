import { createApp } from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faBath,
  faBed,
  faMagnifyingGlass,
  faLocationDot,
  faStar,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faSquare,
  faStar as farStar,
} from '@fortawesome/free-regular-svg-icons';

import store from './store';
import App from './App.vue';
import router from './router';

const app = createApp(App);

library.add(
  faBath,
  faBed,
  faSquare,
  faMagnifyingGlass,
  faLocationDot,
  faStar,
  farStar
);
app.component('font-awesome-icon', FontAwesomeIcon);

app.use(store);
app.use(router);
app.mount('#app');
