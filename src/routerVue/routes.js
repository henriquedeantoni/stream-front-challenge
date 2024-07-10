// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/home/Home.vue';
import Result from '../views/movieForm/Result.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/result', component: Result }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;