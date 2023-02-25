<template>
  <div class="container">
    <vxe-toolbar>
      <template #buttons>
        <vxe-button @click="$refs.xTable.sort({ field: 'name', order: 'asc' })">Name 升序</vxe-button>
        <vxe-button @click="$refs.xTable.sort({ field: 'name', order: 'desc' })">Name 降序</vxe-button>
        <vxe-button @click="$refs.xTable.clearSort()">清除排序</vxe-button>
      </template>
    </vxe-toolbar>

    <vxe-table
        border
        ref="xTable"
        height="300"
        :row-config="{isHover: true}"
        :data="tableData">
      <vxe-column type="seq" width="60"></vxe-column>
      <vxe-column field="name" title="Name" sortable></vxe-column>
      <vxe-column field="role" title="Role" sortable></vxe-column>
      <vxe-column field="age" title="Age" sortable></vxe-column>
      <vxe-column field="num" title="字符串" sort-type="string" sortable></vxe-column>
      <vxe-column field="num2" title="数值" sort-type="number" sortable></vxe-column>
      <vxe-column field="address" title="Address" sortable></vxe-column>
    </vxe-table>
  </div>
  <div class="container">
    <vxe-table
        border
        height="300"
        :row-config="{isHover: true}"
        :data="tableData2">
      <vxe-column type="seq" width="60"></vxe-column>
      <vxe-column field="name" title="Name" :sort-by="sortNameMethod2" sortable>
        <template #default="{ row }">
          <span style="color: red;">名字：{{ row.name }}</span>
        </template>
      </vxe-column>
      <vxe-column field="num" title="Num" sortable></vxe-column>
      <vxe-column field="num1" title="分离格式化与数值字段" sort-by="num1" sortable :formatter="formatterNum2"></vxe-column>
      <vxe-column field="num2" title="分离格式化与字符串字段" sort-by="num2" sort-type="number" sortable :formatter="formatterNum2"></vxe-column>
    </vxe-table>
  </div>
</template>

<script setup>
import {ref} from "vue";
import XEUtils from 'xe-utils';

const tableData = ref([
  { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, num: '3.8', num2: '3.8', address: 'test abc' },
  { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, num: '511', num2: '511', address: 'Guangzhou' },
  { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, num: '12.8', num2: '12.8', address: 'Shanghai' },
  { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 23, num: '103', num2: '103', address: 'test abc' },
  { id: 10005, name: 'Test5', role: 'Develop', sex: 'Women', age: 30, num: '56', num2: '56', address: 'Shanghai' },
  { id: 10006, name: 'Test6', role: 'Designer', sex: 'Women', age: 21, num: '49', num2: '49', address: 'test abc' },
  { id: 10007, name: 'Test7', role: 'Test', sex: 'Man', age: 29, num: '400.9', num2: '400.9', address: 'test abc' },
  { id: 10008, name: 'Test8', role: 'Develop', sex: 'Man', age: 35, num: '5000', num2: '5000', address: 'test abc' }
]);

// NOTE: 配置 sort-by 指定字段排序、或者方法返回自定义排序的值
const tableData2 = ref([
  { name: '小红11', role: '前端', num: 7, num1: 1368.7, num2: '1368.7' },
  { name: '老王1', role: '后端', num: 6, num1: 89657, num2: '89657' },
  { name: '小红111111', role: '后端', num: 1, num1: 672, num2: '672' },
  { name: '小明11', role: '前端', num: 2, num1: 482456, num2: '482456' },
  { name: '老徐111', role: '测试', num: 3, num1: 7546.7, num2: '7546.7' },
  { name: '老王11', role: '前端', num: 3, num1: 6897, num2: '6897' },
  { name: '老徐11111111', role: '测试', num: 4, num1: 8957, num2: '8957' },
  { name: '小明111111111', role: '前端', num: 4, num1: 56433.57, num2: '56433.57' },
  { name: '小明1', role: '前端', num: 8, num1: 977, num2: '977' },
  { name: '小明111', role: '测试', num: 6, num1: 98477, num2: '98477' },
  { name: '小红11111', role: '后端', num: 9, num1: 67017, num2: '67017' },
  { name: '老徐11', role: '前端', num: 5, num1: 7364, num2: '7364' },
  { name: '老徐11', role: '测试', num: 1, num1: 1573.7, num2: '1573.7' },
  { name: '小红1111', role: '前端', num: 4, num1: 16807, num2: '16807' },
  { name: '小红111', role: '前端', num: 2, num1: 744345.7, num2: '744345.7' },
  { name: '小明111', role: '测试', num: 3, num1: 10957, num2: '10957' },
  { name: '老王1', role: '前端', num: 6, num1: 6737, num2: '6737' },
  { name: '老王1111', role: '后端', num: 4, num1: 83445.1, num2: '83445.1' },
  { name: '老徐11', role: '前端', num: 8, num1: 4636677, num2: '4636677' },
  { name: '小明111111', role: '测试', num: 7, num1: 5783537, num2: '5783537' }
])

const formatterNum2 = ({ cellValue }) => {
  return XEUtils.commafy(Number(cellValue), { digits: 2 })
}

const sortNameMethod2 = ({ row }) => {
  // 按名称长度进行排序
  return row.name.length
}
</script>

<style lang="scss">
.container {
  margin-bottom: 20px;
}
</style>