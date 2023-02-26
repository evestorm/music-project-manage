import store from "@/store";
import { showPop } from "./pop";
import { loadColumns } from "./tableData";
export default {
  // 滚动事件
  scroll: ({ scrollLeft, scrollWidth, $event }) => {
    // console.log(store.state.$grid.getColumnByField('1670774400000'));
    // 滚动到最右侧
    if (scrollWidth - $event.target.clientWidth <= scrollLeft + 1) {
      console.log("滚动到最右侧");
      // 加载10列
      loadColumns(10);
    }
  },
  // 单元格选中
  cellSelected({ row, column, $event }) {
    const { field } = column;
    if (field === "stageId" || field === "projectId") return;

    const { projectId, stageId } = row;
    // 设置key
    store.commit("setCellKey", `${projectId}_${stageId}_${field}`);
    console.log("点击位置信息====", `${projectId}_${stageId}_${field}`);

    // // 是否显示右键弹窗
    // showPop({ row, column, $event });
  },
  // 单元格点击
  cellClick({ row, column, $event }) {
    // 是否显示右键弹窗
    showPop({ row, column, $event });
    // console.log("单击", $event);
  },
  // 只对 menu-config 配置时有效，单元格被鼠标右键时触发该事件
  cellMenu({ row, column, $event }) {
    // 是否显示右键弹窗
    showPop({ row, column, $event });
    // console.log("右键单击", $event);
  },
  // 单元格双击
  cellDblclick({ row, column, $event }) {
    // console.log("双击", $event);
    // 是否显示右键弹窗
    showPop({ row, column, $event });
  },
};
