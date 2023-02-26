import { createApp } from 'vue';
import store from '@/store';
import App from './App';
import router from './router';

import axios from "axios";

import VXETable from "vxe-table";
import 'vxe-table/lib/style.css';

import '@/assets/styles/index';
import '@/assets/utils/index';
import '@/assets/utils/common';

const app = createApp(App);
app.config.globalProperties.$axios = axios;
app.use(store).use(router).use(VXETable).mount('#app');
