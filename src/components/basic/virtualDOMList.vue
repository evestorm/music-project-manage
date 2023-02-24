<template>
  <p>
    <vxe-button @click="loadData(10)">加载10条</vxe-button>
    <vxe-button @click="loadData(500)">加载500条</vxe-button>
    <vxe-button @click="loadData(500000)">加载50w条</vxe-button>
  </p>
  <p>
    <vxe-list height="240" class="my-list" :loading="data.loading" :data="data.list">
      <template #default="{ items }">
        <span style="display: block" class="my-list-item" v-for="(item, index) in items" :key="index">{{ item.label }}</span>
      </template>
    </vxe-list>
  </p>
  <p>
    <!--指定行元素的选择器-->
    <vxe-list class="my-ul-list" height="200" :data="data.list" :scroll-y="{sItem: 'li'}">
      <template #default="{ items }">
        <ul>
          <li v-for="(item, index) in items" :key="index">
            <img src="https://pic2.zhimg.com/50/v2-f7031359103859e1ed38559715ef5f3f_hd.gif" height="28">
            <span>{{ item.label }}</span>
           </li>
        </ul>
      </template>
    </vxe-list>
  </p>
</template>

<script setup>
import {nextTick, reactive, onMounted} from "vue";
import { VXETable } from 'vxe-table';
const mockList = [];
const data = reactive({
  loading: false,
  list: []
});
// 模拟后台
const getList = (size) => {
  return new Promise(resolve => {
    setTimeout(() => {
      if (size > mockList.length) {
        for (let index = mockList.length; index < size; index++) {
          mockList.push({
            id: index,
            label: `row_${index}`
          })
        }
      }
      resolve(mockList.slice(0, size));
    }, 100)
  })
}
const loadData = async (size) => {
  data.loading = true;
  data.list = await getList(size);
  data.loading = false;
  const startTime = Date.now();
  await nextTick();
  await VXETable.modal.message({ content: `渲染 ${size} 行，用时 ${Date.now() - startTime}毫秒`, status: 'info' })
}

// 初始化
onMounted(async () => {
  data.list = await getList(10000);
})
</script>

<style scoped lang="scss">
.my-list {
  border: 1px solid #e8eaec;
}
.my-list .my-list-item {
  height: 28px;
  padding-left: 15px;
}
.my-ul-list {
  border: 1px solid #e8eaec;
}
.my-ul-list li {
  height: 40px;
}
.my-table-list {
  border: 1px solid #e8eaec;
}
.my-table-list table {
  width: 100%;
  text-align: center;
}
.my-table-list .my-tr {
  height: 32px;
}
.my-table-list .my-tr:hover {
  background-color: #f5f7fa;
}
.my-table-list td {
  border-right: 1px solid #e8eaec;
}
</style>