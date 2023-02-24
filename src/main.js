import { createApp } from 'vue';
import store from '@/stores';
import App from './App.vue';
import router from './router';

import axios from "axios";

import '@/assets/styles/index';

const app = createApp(App)
app.config.globalProperties.$axios = axios;
app.use(store).use(router).mount('#app');
