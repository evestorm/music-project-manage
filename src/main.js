import { createApp } from 'vue';
import store from '@/stores';
import App from './App.vue';
import router from './router';

import axios from "axios";

import VXETable from "vxe-table";
import 'vxe-table/lib/style.css';

import '@/assets/styles/index.js';

const app = createApp(App);
app.config.globalProperties.$axios = axios;
app.use(store).use(router).use(VXETable).mount('#app');
