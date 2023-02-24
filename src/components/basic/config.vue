<template>
  <div class="container">
    <vxe-toolbar>
      <template #buttons>
        <vxe-button @click="allAlign = 'left'">居左</vxe-button>
        <vxe-button @click="allAlign = 'center'">居中</vxe-button>
        <vxe-button @click="allAlign = 'right'">居右</vxe-button>
      </template>
    </vxe-toolbar>
    <vxe-table
        :="config">
      <!--NOTE: 设置 type=seq 开启序号列-->
      <vxe-column type="seq" width="100"></vxe-column>
      <!--(注：不应该全部都使用固定像素，应该当所有列加起来的宽度小于表格宽度时，就会出现空白区，可以配合 "%" 或 "min-width" 实现等比例缩放)-->
      <vxe-column field="name" title="Name" min-width="200"></vxe-column>
      <!--NOTE: 单元格鼠标移入hover的提示-->
      <vxe-column field="sex" title="Sex" width="10%" :title-help="{message: '自定义图标', icon: 'vxe-icon-question-circle-fill'}"></vxe-column>
      <vxe-column field="age" title="Age"></vxe-column>
    </vxe-table>
  </div>
</template>

<script setup>
import {reactive, ref} from "vue";

const allAlign = ref('');
const tableData1 = ref([
  { id: 10001, name: 'Test1', role: 'Develop', sex: 'ManManManManManManManMan', age: 28, address: 'test abc' },
  { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
  { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
  { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' }
]);
const seqMethod = ref({
  seqMethod({ rowIndex }) {
    return `NO${rowIndex + 1000}`
  }
})
const config = reactive({
  align: allAlign, // 列对齐形式
  data: tableData1, // 数据
  rowConfig: {
    isHover: true, // 行 hover 高亮
  },
  size: 'mini', // table 尺寸 [medium / small / mini]
  // seqConfig: {
  //   startIndex: 100, // 使用 seq-config={startIndex} 自定义起始序号
  // },
  seqConfig: seqMethod, // 使用 seq-config={seqMethod} 自定义方法
  scrollY: {
    enabled: false, // 自动换行：单元格超出指定宽度自动换行，通过设置 scroll-y="{enabled: false} 关闭虚拟滚动，则支持自动换行
  },
  tooltipConfig: {
    // 通过 tooltip-config.showAll 开启全表工具提示，还可以配合 contentMethod 方法重写默认的提示内容，显示逻辑完全自定义控制，可以返回 null 使用默认的提示消息
    // 还可以设置 tooltip-config.enterable 允许鼠标进入 tooltip 中，通过 title-help 设置列标题的帮助提示消息
    showAll: true,
    enterable: true,
    contentMethod: ({ type, column, row, items, _columnIndex }) => {
      const { field } = column
      // 重写默认的提示内容
      if (field === 'role' || field === 'date') {
        if (type === 'header') {
          return column.title ? '自定义标题提示内容：' + column.title : ''
        } else if (type === 'footer') {
          return items[_columnIndex] ? '自定义表尾提示内容，\n并且自定义换行：\n' + items[_columnIndex] : ''
        }
        return row[field] ? '自定义提示内容：' + row[field] : ''
      } else if (field === 'rate') {
        // 返回空字符串，控制单元格不显示提示内容
        return ''
      }
      // 其余的单元格使用默认行为
      return null
    }
  }
})
</script>

<style lang="scss"></style>