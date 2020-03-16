import Vue from 'vue'
import BootstrapVue from "bootstrap-vue"
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import VueBreadcrumbs from 'vue-breadcrumbs'


import router from './routes'
import VueRouter from 'vue-router'

Vue.use(BootstrapVue)
Vue.use(VueRouter)

Vue.use(VueBreadcrumbs, {
  template: '<nav class="breadcrumb" v-if="$breadcrumbs.length"> ' +
      '<router-link class="breadcrumb-item" v-for="(crumb, key) in $breadcrumbs" :to="linkProp(crumb)" :key="key">{{ crumb | crumbText }}</router-link> ' +
      '</nav>'
});

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
