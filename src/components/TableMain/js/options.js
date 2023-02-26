import { reactive } from "vue";
import { mergeRowMethod } from '@/assets/utils/businessFn';
import { setHeaderCell } from './utils';

export const gridOptions = reactive({
  border: true, // 边框
  // showOverflow: true, // 当内容过长时显示为省略号 开启样式有问题
  // showHeaderOverflow: true, // 当表头内容过长时显示为省略号 开启样式有问题
  height: 'auto',
  rowConfig: {
    // isCurrent: true, // 选中行高亮
    // isHover: true // 悬浮高亮
  },
  columnConfig: { // 列配置
    isCurrent: true, // 选中列高亮
    isHover: true, // 悬浮高亮
    resizable: true, // 可拖动
  },
  menuConfig: {

  },
  mouseConfig: {
    selected: true, // 鼠标点击选中样式
  },
  scrollX: {
    enabled: false, // 关闭虚拟滚动 开启不支持spanMethod
  },
  loading: false, // 控制loading显示
  spanMethod: mergeRowMethod, // 合并单元格
  headerCellClassName: setHeaderCell, // 设置今天表头高亮
});