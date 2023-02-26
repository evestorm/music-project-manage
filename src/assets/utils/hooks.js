import { reactive } from "vue";
import { dateToDateTime, formatScheduleData } from "./index";
import { getProject } from "@/api/table";
import { buildDate, getWeek, formatDate } from "@/utils/date.js";

const data = reactive({
  project: [], // 首列项目数据
  stage: [], // 阶段数据
  schedules: [], // 表格数据
  allData: [], // 表格数据
  allColumn: [], // 表头数据
  allDate: buildDate(30), // 日期数据
  // lastTimeStamp: allDate[allDate.length - 1], // 最后的时间戳
  lastTimeStamp: 0, // 最后的时间戳
  tableTooltipConfig: {}, // tooltip 配置
});

// 使用初始数据
export function useInitialData() {
  // 设置最后的时间戳
  data.lastTimeStamp = data.allDate[data.allDate.length - 1];

  // 设置接口初始化数据
  function setInitialData({ project, stage, schedules }) {
    data.project = project;
    data.stage = stage.sort((a, b) => {
      return Number(a.projectId.replace(/\D/g, "")) - Number(b.projectId.replace(/\D/g, ""));
    });
    data.schedules = schedules;
  }

  // 设置行数据
  function setRowsData(stage) {
    data.allData = data.allData.concat(stage);
  }

  // 设置列数据
  function setColumnsData(allColumn) {
    data.allColumn = allColumn;
  }

  // 设置最后时间戳
  function setLastTimeStamp(timeStamp) {
    console.log(timeStamp);
    data.lastTimeStamp = timeStamp;
  }

  // 设置表格数据
  function setSchedule(value, type) {
    let newSchedules = Object.values(data.schedules);

    let arr = [...newSchedules].filter(item => {
      switch (type) {
        case "executor":
          return value === item.executor;
        case "nodeKey":
          return value === item.scheduleType;
        case "note":
          return value === item.scheduleType;
      }
    });

    data.schedules = formatScheduleData(arr);
  }

  return {
    data,
    setInitialData,
    setRowsData,
    setColumnsData,
    setLastTimeStamp,
    setSchedule,
  };
}
// 新增单元格数据(此方法为自身调用,主要为了当数据增加以后,做视图更新的)
export function addSchedule(cellObj) {
  let key = `${cellObj.projectId}_${cellObj.stageId}_${cellObj.scheduleStampTime}`;
  let schedulesData = data.schedules[`${cellObj.projectId}_${cellObj.stageId}_${cellObj.scheduleStampTime}`];
  if (schedulesData?.length > 0) {
    schedulesData.push(cellObj);
  } else {
    data.schedules[key] = [cellObj];
  }
}

// 配置表格tooltip
data.tableTooltipConfig = {
  showAll: true, // 所有单元格开启工具提示
  enterable: true, // 鼠标是否可进入到工具提示中
  contentMethod: ({ items, row, rowIndex, $rowIndex, column, columnIndex, $columnIndex, type, cell, $event }) => {
    const { field } = column;
    if (field == "projectId" || field == "" || row == undefined) {
      return "";
    }

    const { projectId, stageId } = row;

    // 获取当前列的时间戳
    const timeStemp = dateToDateTime(field);

    // 获取当前单元格数据
    const cellData = data.schedules[`${projectId}_${stageId}_${timeStemp}`] || "";

    // 单元格有数据才展示tooltip
    if (cellData) {
      if (cellData.taskName) {
        return cellData.taskName;
      }
      if (cellData.nodeName) {
        return cellData.nodeName;
      }
      if (cellData.content) {
        return cellData.content;
      }
    }

    // 其他请情况不展示tooltip
    return "";
  },
};
