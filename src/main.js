import './assets/main.css'
import "bootstrap/dist/css/bootstrap.min.css";

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Store
import store from "./store/index";
// Axios
import http from "./axios";

const app = createApp(App)

app.use(router)
app.use(store);

app.config.globalProperties.$http = http;

app.mount('#app')

import "bootstrap/dist/js/bootstrap.min";