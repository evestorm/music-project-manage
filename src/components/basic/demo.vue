<template>
  <!-- 数据源的方式  -->
  <vxe-table border :data="tableData">
    <vxe-column type="seq" width="60"></vxe-column>
    <vxe-column field="name" title="Name">
      <template #default="{ row }">
        <!--图标-->
        <i class="vxe-icon-edit"></i>
        <span>自定义插槽模板 {{ row.name }}</span>
        <!--按钮-->
        <vxe-button content="默认颜色"></vxe-button>
      </template>
    </vxe-column>
    <vxe-column field="sex" title="Sex"></vxe-column>
    <vxe-column field="age" title="Age"></vxe-column>
  </vxe-table>

  <hr style="padding: 20px 0; border: none">

  <!-- 配置的方式 -->
  <vxe-grid v-bind="gridOptions">
    <template #name="{ row }">
      <span>自定义插槽模板 {{ row.name }}</span>
    </template>
  </vxe-grid>
</template>

<script setup>
import {reactive, ref} from "vue";

const tableData = ref([
  { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
  { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
  { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
  { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' }
]);
const gridOptions = reactive({
  border: true,
  columns: [
    { type: 'seq', width: 50 }, // 序号
    { field: 'name', title: 'Name', slots: { default: 'name' } }, // 命名插槽
    { field: 'sex', title: 'Sex', showHeaderOverflow: true },
    { field: 'address', title: 'Address', showOverflow: true },
    { field: 'age', title: 'Age' }
  ],
  data: [
    { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
    { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
    { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
    { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' }
  ]
});
</script>