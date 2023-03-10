# 初始化项目

```shell
npm create vite@latest
```

```shell
lance@yangliangdeMacBook-Pro music-project-manage % npm create vite@latest
✔ Project name: … music-project-manage
✔ Select a framework: › Vue
✔ Select a variant: › Customize with create-vue ↗
Need to install the following packages:
  create-vue@3.6.0
Ok to proceed? (y) y

Vue.js - The Progressive JavaScript Framework

✔ Add TypeScript? [No] / Yes
✔ Add JSX Support? [No] / Yes
✔ Add Vue Router for Single Page Application development? No / [Yes]
✔ Add Pinia for state management? [No] / Yes
✔ Add Vitest for Unit Testing? [No] / Yes
✔ Add an End-to-End Testing Solution? › [No]
✔ Add ESLint for code quality? [No] / Yes
```

## 安装必要的库

```shell
npm install axios -S # 网络请求
npm install sass -D # 支持 sass
npm install vuex -S # 状态管理器
npm install element-plus -S # 饿了么Vue3组件
npm install qs -S
npm install moment -S
```

## 删除不要的文件

- `src/views/Home.vue`
- `src/views/About.vue`
- `src/components/HelloWorld.vue`
- `src/components/TheWelcome.vue`
- `src/components/WelcomeItem.vue`
- `src/components/icons/*`
- `src/assets/base.css`

## 新增页面

- `src/views/PersonView.vue` # 项目视图
- `src/views/ProjectView.vue` # 人员视图

## 新增样式

- `src/assets/index.js`
- `src/assets/common.scss`
- `src/assets/reset.scss`

## 修改 App.vue

```vue
<template>
<!--    <RouterLink to="/">Home</RouterLink>-->
<!--    <RouterLink to="/about">About</RouterLink>-->
  <RouterView />
</template>
<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<style scoped lang="scss"></style>
```

## 修改 main.js

```js
import { createApp } from 'vue';
import store from '@/stores';
import App from './App.vue';
import router from './router';

import axios from "axios";

import '@/assets/styles/index';

const app = createApp(App)
app.config.globalProperties.$axios = axios;
app.use(store).use(router).mount('#app');
```

## 修改 router/index.js

```js
import { createRouter, createWebHistory } from 'vue-router'
import ProjectView from '@/views/ProjectView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ProjectView
    },
    {
      path: '/person',
      name: 'PersonView',
      component: () => import('@/views/PersonView.vue')
    }
  ]
})

export default router
```

## 新增 store 文件

- `src/stores/*`

# vxe-table 使用

```shell
npm install xe-utils vxe-table
```

安装插件

```js
import { App, createApp } from 'vue'
import VXETable from 'vxe-table'
import 'vxe-table/lib/style.css'

function useTable (app: App) {
  app.use(VXETable)

  // 给 vue 实例挂载内部对象，例如：
  // app.config.globalProperties.$XModal = VXETable.modal
  // app.config.globalProperties.$XPrint = VXETable.print
  // app.config.globalProperties.$XSaveFile = VXETable.saveFile
  // app.config.globalProperties.$XReadFile = VXETable.readFile
}

createApp(App).use(useTable).mount('#app')
```

# 相关配置

## unplugin-auto-import、unplugin-vue-components

```shell
npm install unplugin-auto-import unplugin-vue-components -D
```

经过上面的配置后，便可以在 vue 项目中的任意的 SFC 中使用任意组件而不用再手动引入了，包括其对应的样式也不用手动引入。

来源：https://xie.infoq.cn/article/e576f022653a7e0cb872038f1

更新 `vite.config.js`

```js
import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
})

```