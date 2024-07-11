// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/home/Home.vue';
import Catalog from '../views/Catalog/Catalog.vue';
import Search from '../views/Search/Search.vue';

const routes = [
  { 
    path: '/',
    component: Home,
    name: "Home",
   },
  { path: '/catalog', 
    component: Catalog,
    name: "Catalog"
   },
   {
     path: '/search',
     component: Search,
     name: 'Search',
   },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;