// Главный файл - точка входа для приложения
import Vue from 'vue'  // сам vue.js
import App from './App.vue'
import router from './router'  // пути

Vue.config.productionTip = false  // - разработка (debug)
// Новый объект Vue
new Vue({
  router,  // пути
  render: h => h(App)  // что будем рендерить
  // Что будем искать в html и куда будем рендерить весь проект (по id - #app)
}).$mount('#app')
