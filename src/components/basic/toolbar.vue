<template>
  <vxe-toolbar perfect ref="toolbarRef">
    <!--貌似 slot 只能是 buttons-->
    <template #buttons>
      <vxe-button type="text" content="新增"></vxe-button>
      <vxe-button type="text" content="删除"></vxe-button>
      <vxe-button type="text" content="保存"></vxe-button>
    </template>
  </vxe-toolbar>
  <vxe-toolbar ref="xToolbar" custom>
    <template #buttons>
      <vxe-button content="自定义模板"></vxe-button>
      <vxe-button content="按钮2"></vxe-button>
      <vxe-button content="按钮3"></vxe-button>
      <vxe-button content="下拉按钮">
        <template #dropdowns>
          <vxe-button content="按钮1"></vxe-button>
          <vxe-button content="按钮2"></vxe-button>
          <vxe-button content="按钮3"></vxe-button>
        </template>
      </vxe-button>
    </template>
    <template #tools>
      <vxe-button type="text" icon="vxe-icon-question-circle-fill" class="tool-btn"></vxe-button>
      <vxe-button type="text" icon="vxe-icon-funnel" class="tool-btn" @click="funnelEvent"></vxe-button>
    </template>
  </vxe-toolbar>
  <vxe-table ref="xTableRef" :data="tableData">
    <vxe-column field="name" title="Name"></vxe-column>
    <vxe-column field="role" title="Role"></vxe-column>
    <vxe-column field="sex" title="Sex"></vxe-column>
  </vxe-table>
</template>

<script setup>
import {nextTick, ref} from "vue";

const tableData = ref([
  { name: 'Test1', role: '前端', sex: '男' },
  { name: 'Test2', role: '后端', sex: '男' },
  { name: 'Test3', role: '测试', sex: '男' },
  { name: 'Test4', role: '设计师', sex: '女' }
]);

const toolbarRef = ref(null);
const xToolbar = ref(null);
const xTableRef = ref(null);

const funnelEvent = (e) => {
  console.log(e);
}

nextTick(() => {
  const $table = xTableRef.value;
  // const $toolbar = toolbarRef.value;
  const $toolbar = xToolbar.value;
  $table.connect($toolbar);
})
</script>

<style lang="scss"></style>