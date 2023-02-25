<template>
  <div class="container">
    <vxe-toolbar>
      <template #buttons>
        <vxe-button @click="allAlign = 'left'">居左</vxe-button>
        <vxe-button @click="allAlign = 'center'">居中</vxe-button>
        <vxe-button @click="allAlign = 'right'">居右</vxe-button>
      </template>
    </vxe-toolbar>
    <vxe-toolbar>
      <template #buttons>
        <vxe-button @click="toggleFixedColumn(0, 'left')">切换第一列固定</vxe-button>
        <vxe-button @click="toggleFixedColumn(1, 'left')">切换第二列固定</vxe-button>
        <vxe-button @click="toggleFixedColumn(4, 'right')">切换第五列固定</vxe-button>
        <vxe-button @click="toggleFixedColumn(5, 'right')">切换第六列固定</vxe-button>
      </template>
    </vxe-toolbar>
    <vxe-table
        ref="customTableRef"
        class="custom-table"
        @cell-click="cellClickEvent"
        :="config">
      <!--NOTE: 设置 type=seq 开启序号列-->
      <!--NOTE: 固定列 left | right-->
      <!--固定列建议在 vxe-table 上设置 show-overflow 该值，禁用自动换行，大幅提升渲染速度-->
      <vxe-column type="seq" width="100" fixed="left"></vxe-column>
      <!--(注：不应该全部都使用固定像素，应该当所有列加起来的宽度小于表格宽度时，就会出现空白区，可以配合 "%" 或 "min-width" 实现等比例缩放)-->
      <vxe-column field="name" title="Name" min-width="200"></vxe-column>
      <!--NOTE: 单元格鼠标移入hover的提示-->
      <vxe-column field="sex" title="Sex" width="10%" :title-help="{message: '自定义图标', icon: 'vxe-icon-question-circle-fill'}"></vxe-column>
      <vxe-column field="age" title="Age" show-overflow="ellipsis"></vxe-column>
      <!--NOTE: 溢出省略号-->
      <!--当内容溢出时显示为省略号，show-overflow 和 show-header-overflow 和 show-footer-overflow-->
      <!--ellipsis 当内容溢出时显示为省略号-->
      <!--title 当内容溢出时显示为省略号并用原生 title 显示-->
      <!--tooltip 当内容溢出时显示为省略号并用 tooltip 显示-->
      <vxe-column field="address" title="Address" show-overflow="ellipsis"></vxe-column>
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
  { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai lllllooasdamsdmasdmasdm asdmasdmamsdmasd sad' }
]);
const customTableRef = ref(null);
const seqMethod = ref({
  seqMethod({ rowIndex }) {
    return `NO${rowIndex + 1000}`
  }
});
const selectCell = reactive({
  row: null,
  column: null
})
const headerCellClassName = ({ row, column }) => {
  if (column.field === 'name') {
    return 'col-blue'
  }
  return null
}
const rowClassName = ({ rowIndex }) => {
  if ([2, 3, 5].includes(rowIndex)) {
    return 'row-green'
  }
  return null
}
const cellClassName = ({ row, column }) => {
  if (column.field === 'sex') {
    if (row.sex >= '1') {
      return 'col-red'
    } else if (row.age === 26) {
      return 'col-orange'
    }
  } else if (row === selectCell.row && column === selectCell.column) {
    return 'col-orange'
  }
  return null
}
const cellClickEvent = ({ row, column }) => {
  selectCell.row = row
  selectCell.column = column
  console.log(row, column)
}
const headerCellStyle = ({ column }) => {
  if (column.field === 'name') {
    return {
      backgroundColor: '#f60',
      color: '#ffffff'
    }
  }
}

const rowStyle = ({ rowIndex }) => {
  if ([2, 3, 5].includes(rowIndex)) {
    return {
      backgroundColor: 'red',
      color: '#ffffff'
    }
  }
}

const cellStyle = ({ row, column }) => {
  if (column.field === 'sex') {
    if (row.sex >= '1') {
      return {
        backgroundColor: '#187'
      }
    } else if (row.age === 26) {
      return {
        backgroundColor: '#2db7f5'
      }
    }
  }
}
const toggleFixedColumn = (index, type) => {
  const $table = customTableRef.value;
  const tableColumns = $table.getColumns()
  const fxColumn = tableColumns[index]
  if (fxColumn) {
    fxColumn.fixed = fxColumn.fixed ? null : type
  }
  // NOTE: 刷新列
  $table.refreshColumn();
}
const config = reactive({
  showOverflow: true, // 固定列建议设置 show-overflow 该值，禁用自动换行，大幅提升渲染速度
  // 设置 height 可以用来固定表头
  // height: '150', // 当一个表格需要铺满父容器时，通过设置 height=auto 表格会自动根据父容器的高度去铺满，但是只会在数据重新加载时才会计算; 还可以根据不同场景添加 sync-resize（属性监听） 或 auto-resize（父元素监听），这样就只需要通过样式控制父容器高度就可以实现响应式表格
  autoResize: false, // 设置为 auto-resize 响应式就可以自动跟随父容器宽、高动态变化
  // maxHeight: '100', // 当一个表格高度需要自适应的时候可以设置为最大高度，通过设置 max-height 参数; 也可以设置相对于父容器的百分比
  align: allAlign, // 列对齐形式
  data: tableData1, // 数据
  rowConfig: {
    isHover: true, // 行 hover 高亮
    height: 80, // 修改行高，可以通过 show-overflow 和 row-config.height 修改行的高度
  },
  size: 'mini', // table 尺寸 [medium / small / mini]
  // seqConfig: {
  //   startIndex: 100, // 使用 seq-config={startIndex} 自定义起始序号
  // },
  seqConfig: seqMethod, // 使用 seq-config={seqMethod} 自定义方法
  scrollY: {
    enabled: false, // 自动换行：单元格超出指定宽度自动换行，通过设置 scroll-y="{enabled: false} 关闭虚拟滚动，则支持自动换行
  },
  stripe: true, // 斑马线条纹，通过设置 stripe 参数
  border: 'full', // 通过设置 border=false|default 默认显示边框; 通过设置 border=true|full 显示完整边框; 通过设置 border=outer 显示外边框; 通过设置 border=inner 显示内边框; 通过设置 border=none 去掉所有边框
  round: false, // 圆角边框
  headerCellClassName: headerCellClassName, // 行的样色、单元格样式，表头的样式、表尾的样式、全部都可以完全自定义，通过设置 cell-class-name、header-cell-class-name、row-class-name ...等参数
  rowClassName: rowClassName,
  cellClassName: cellClassName, // 通过 cell-click 事件点击改变颜色，见 vxe-table 上的 cell-click 事件
  rowStyle: rowStyle, // 行的动态样色、单元格动态样式，表头的动态样式、表尾的动态样式、可以通过设置 cell-style、header-cell-style、row-style ...等参数
  cellStyle: cellStyle,
  headerCellStyle: headerCellStyle,
  showHeader: true, // 显示隐藏表头
  columnConfig: {
    resizable: true, // 通过设置 column-config.resizable 属性启用列宽拖动功能
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

<style lang="scss">
.custom-table {
  .vxe-body--row.row-green {
    background-color: #187;
    color: #fff;
  }
  .vxe-header--column.col-blue {
    background-color: #2db7f5;
    color: #fff;
  }
  .vxe-body--column.col-red {
    background-color: red;
    color: #fff;
  }
  .vxe-body--column.col-orange {
    background-color: #f60;
    color: #fff;
  }
  // NOTE: 滚动条样式
  /*滚动条整体部分*/
  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }
  /*滚动条的轨道*/
  ::-webkit-scrollbar-track {
    background-color: orange;
  }
  /*滚动条里面的小方块，能向上向下移动*/
  ::-webkit-scrollbar-thumb {
    background-color: #bfbfbf;
    border-radius: 5px;
    border: 1px solid #F1F1F1;
    box-shadow: inset 0 0 6px rgba(0,0,0,.3);
  }
  ::-webkit-scrollbar-thumb:hover {
    background-color: #A8A8A8;
  }
  ::-webkit-scrollbar-thumb:active {
    background-color: #787878;
  }
  /*边角，即两个滚动条的交汇处*/
  ::-webkit-scrollbar-corner {
    background-color: #FFFFFF;
  }
}
</style>