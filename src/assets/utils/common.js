import moment from "moment/moment"

// 右键弹窗事件
document.oncontextmenu = function () {
    // 禁用默认弹窗
    return false;
}

// 将时间戳转化为对应的日期
export const dateToTime = function (time) {
  let newTime
  if (!time) {
      return console.warn('缺少必要转化时间量')
  }
  moment(new Date(time)).format("YYYY/MM/DD")
  newTime = moment(new Date(time)).format("YYYY/MM/DD")
  return newTime
}

// 将日期转化为对应的时间戳
export const timeToDate = function (time) {
  debugger
  let newTime
  if (!time) {
      return console.warn('缺少必要转化时间量')
  }
  newTime = moment(time)
  // newTime = moment(new Date(time)).format("YYYY/MM/DD")
  return newTime
}
