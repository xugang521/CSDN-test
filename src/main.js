import Vue from 'vue'
import ElementUI from 'element-ui';//ele ref
import 'element-ui/lib/theme-chalk/index.css';//ele ref 
import App from './App.vue'
import router from './router'
import store from './store'
import MyHeader from './components/header.vue'
import Leftnav from './components/Leftnav.vue'

Vue.use(ElementUI);//ele ref 
Vue.config.productionTip = false

Vue.component("my-header",MyHeader);
Vue.component("left-nav",Leftnav);

new Vue({
  el:'#app',  //ele ref
  router,
  store,
  render: h => h(App)
}).$mount('#app')
