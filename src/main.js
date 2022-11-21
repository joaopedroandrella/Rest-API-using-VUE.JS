import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

//FontAwesome

import { library } from '@fortawesome/fontawesome-svg-core';
import {  } from '@fortawesome/free-regular-svg-icons';
import { faUserSecret, fas  } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { dom } from "@fortawesome/fontawesome-svg-core";
library.add(faUserSecret, fas);
dom.watch();

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css' 

createApp(App)
    .component("fa", FontAwesomeIcon)
    .use(router)
    .mount('#app')
