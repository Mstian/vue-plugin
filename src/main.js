import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false
import toast from './lib/index.js';
Vue.use(toast);

new Vue({
  render: h => h(App)
}).$mount('#app')

