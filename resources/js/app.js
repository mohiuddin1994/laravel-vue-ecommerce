/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue').default;

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('website-component', require('./components/website/websitMasterFile/websiteMaster').default);
// Vue.component('admin-component', require('./components/admin/adminMasterFile/adminMaster').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

// data store
Vue.config.silent = true

import Vuex from 'vuex'

Vue.use(Vuex)


import Swal from 'sweetalert2';

  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 1000,
    timerProgressBar: true,

  })
  window.Toast = Toast




 import VueRouter from 'vue-router'

 Vue.use(VueRouter)
import { routes } from './routes/routes';

import {filters} from "./filters"
 const router = new VueRouter({

    routes,
  


  })


import { storeData } from './store/websiteStore'

const store = new Vuex.Store(
    storeData,
  )
const app = new Vue({
    el: '#app',
    router,
    store,
});
