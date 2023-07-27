import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './pages/HomePage.vue';
import AboutPage from './pages/AboutPage.vue';
import HouseDetails from './pages/HouseDetails.vue';
import AddListing from './pages/AddListingPage.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/about', component: AboutPage },
  { path: '/houses/:id', component: HouseDetails },
  { path: '/addListing', component: AddListing },
  // { path: '/houses/:id', component: HouseDetails, props: true },
];

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
});

export default router;
