<template>
  <div class="container">
    <vxe-table
        border
        ref="xTable1"
        :row-config="{isHover: true}"
        :data="demo1.tableData"
        @filter-visible="filterVisibleEvent"
        @filter-change="filterChangeEvent">
      <vxe-column field="id" title="ID"></vxe-column>
      <vxe-column field="name" title="Name" sortable :filters="[]" :filter-method="filterNameMethod"></vxe-column>
      <vxe-column field="sex" title="Sex" sortable :filters="[{label: 'Man', value: '1'}, {label: 'Woman', value: '0'}]" :filter-multiple="false"></vxe-column>
      <vxe-column field="age" title="Age" :filters="[{ data: '' }]" :filter-method="filterAgeMethod">
        <template #filter="{ $panel, column }">
          <input type="type" v-for="(option, index) in column.filters" :key="index" v-model="option.data" @input="$panel.changeOption($event, !!option.data, option)">
        </template>
      </vxe-column>
      <vxe-column field="time" title="Time" sortable></vxe-column>
    </vxe-table>
  </div>
</template>

<script setup>
import {nextTick, reactive, ref} from "vue";

const xTable1 = ref()

const demo1 = reactive({
  tableData: [
    { id: 10001, name: 'Test1', role: 'Develop', sex: '0', age: 28, address: 'test abc' },
    { id: 10002, name: 'Test2', role: 'Test', sex: '1', age: 22, address: 'Guangzhou' },
    { id: 10003, name: 'Test3', role: 'PM', sex: '0', age: 32, address: 'Shanghai' },
    { id: 10004, name: 'Test4', role: 'Designer', sex: '1', age: 24, address: 'Shanghai' },
    { id: 10005, name: 'Test5', role: 'Develop', sex: '0', age: 32, address: 'Shenzhen' },
    { id: 10006, name: 'Test6', role: 'Designer', sex: '0', age: 28, address: 'Shanghai' }
  ]
})

const filterVisibleEvent = ({ column, visible }) => {
  console.log(`${column.field} ${visible ? '打开' : '关闭'}筛选面板`)
}

const filterChangeEvent = ({ column }) => {
  console.log(`${column.field} 筛选了数据`)
}

const filterNameMethod = (e) => {
  console.log(e);
}

const filterAgeMethod = (e) => {
  console.log(e);
}

nextTick(() => {
  // 异步加载筛选数据
  setTimeout(() => {
    const $table = xTable1.value
    if ($table) {
      const nameColumn = $table.getColumnByField('name')
      if (nameColumn) {
        $table.setFilter(nameColumn, [
          { label: 'id大于10002', value: 10002 },
          { label: 'id大于10003', value: 10003 }
        ])
      }
    }
  }, 500)
})
</script>

<style scoped lang="scss"></style>