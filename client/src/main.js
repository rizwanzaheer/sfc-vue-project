// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'

// Components
import './components'

// Plugins
import './plugins'

// Sync router with store
import { sync } from 'vuex-router-sync'

// Application imports
import App from './App'
import i18n from '@/i18n'
import router from '@/router'
import store from '@/store'
import Axios from 'axios'
import vuetify from '@/plugins/vuetify' // path to vuetify export
import firebase from 'firebase/app'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Sync store with router
sync(store, router)

let config = require('./environment/' + process.env.NODE_ENV + '.json')
firebase.initializeApp(config)

Vue.config.productionTip = false
Vue.prototype.$http = Axios
Vue.use(BootstrapVue)

const token = localStorage.getItem('token')
if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = token
}

/* eslint-disable */
export const app = new Vue({
	i18n,
	router,
	store,
  vuetify,
	render: h => h(App)
}).$mount('#app')
