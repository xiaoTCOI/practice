// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import VueRouter from 'vue-router'
// import '../node_modules/vue-router/dist/vue-router.js'
// Vue.use(VueRouter)
import ElementUI from 'element-ui'
import '../node_modules/element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
import VueResource from 'vue-resource'
import '../node_modules/vue-resource/dist/vue-resource.js'
Vue.use(VueResource)
// router.push('login')
Vue.config.productionTip = false

// 路由跳转
// Vue.prototype.$goRoute = function (index) {
// 	// alert('1')
//   this.$router.push({path:index})
// }

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
