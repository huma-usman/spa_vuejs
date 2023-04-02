import Vue from 'vue'
import App from './App.vue'
import DataChart from './components/DataChart.vue'
import DataTable from './components/DataTable.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './store.js'
import store from './store.js'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

new Vue({
  store,
  el: '#app',
  render: h => h(App), 
})
