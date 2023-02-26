import store from "@/store";
import { gridOptions } from "./options";
import { getProject } from "@/api/table";
import { useInitialData } from "@/assets/utils/hooks";
import { getGrid } from "@/utils";
import { buildDate, getWeek, formatDate } from "@/utils/date.js";

const { data, setInitialData, setRowsData, setColumnsData, setLastTimeStamp } = useInitialData();

// 初始化表格
export function init() {
  gridOptions.loading = true;
  Promise.all([
    findColumnList(data.allDate.length).then(res => {
      console.log("findColumnList", res);
      // 表头数据
      const $grid = getGrid();

      setColumnsData(res);

      if ($grid) {
        $grid.loadColumn(data.allColumn);
      }
    }),
    getProject().then(res => {
      console.log("getProject", res);
      // 行数据
      const $grid = getGrid();

      const { project, stage, schedules } = res;
      setInitialData({ project, stage, schedules });
      setRowsData(data.allData.concat(res.stage));

      // 存储到vuex中方便查看
      store.commit("setTableData", { project, stage, schedules });
      console.log("data", data);
      if ($grid) {
        $grid.loadData(data.allData);
      }
    }),
  ]).then(() => {
    gridOptions.loading = false;
  });
}

// 获取列数据
const findColumnList = size => {
  return new Promise(resolve => {
    const columns = [
      {
        field: "projectId",
        title: "首列",
        width: 200,
        align: "center",
        fixed: "left",
        slots: {
          default: "projectId_default",
        },
      },
      {
        field: "stageId",
        title: "阶段",
        width: 200,
        align: "center",
        fixed: "left",
        slots: {
          default: "stageId_default",
        },
      },
    ];

    for (let i = 0; i < size; i++) {
      const config = {
        field: data.allDate[i],
        title: data.allDate[i],
        date: formatDate(data.allDate[i]),
        align: "center",
        minWidth: 260,
        className: "cell-item",
        params: 1111,
        slots: {
          default: "cell_default",
          header: "cell_header",
        },
      };

      columns.push(config);
    }

    resolve(columns);
  });
};

// 追加列
export const loadColumns = size => {
  gridOptions.loading = true;
  const columnsData = buildDate(size, data.lastTimeStamp);
  const $grid = getGrid();

  const columns = [];
  for (let i = 0; i < columnsData.length; i++) {
    const config = {
      field: columnsData[i],
      title: columnsData[i],
      date: formatDate(columnsData[i]),
      align: "center",
      minWidth: 260,
      slots: {
        default: "cell_default",
        header: "cell_header",
      },
    };

    if (columnsData.length - 1 === i) {
      // lastTimeStamp = data[i];
      setLastTimeStamp(columnsData[i]);
    }

    columns.push(config);
  }
  data.allColumn = data.allColumn.concat(columns); // 局部追加并保存全量数据
  if ($grid) {
    $grid.loadColumn(data.allColumn);
  }
  // 1秒后关闭loading
  setTimeout(() => {
    gridOptions.loading = false;
  }, 1000);
  console.log(columns);
};
