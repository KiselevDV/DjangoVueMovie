// Маршрутизация уровня проекта
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'  // базовый компонент из views
import Single from "@/views/Single";

Vue.use(VueRouter)

// Все маршруты
const routes = [
  {
    path: '/',  // путь
    name: 'Home',  // имя пути
    component: Home  // сам компонент - views/Home.vue
  },
  {
    path: '/:id',  // динамическая подстановка пути
    name: 'Single',
    component: Single
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]
// Объекты со всеми раутами выше
const router = new VueRouter({
  routes
})
// Подключаем их
export default router
