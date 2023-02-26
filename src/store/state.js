export default {
  schedules: [], // 表格数据
  stage: [], // 阶段数据
  project: [], // 首列项目数据
  $grid: null, // 表格对象
  cellKey: '', // 当前选中单元格的键，用于获取单元格中的数据
  editCellKey:'', // 双击的时候记录双击的位置
  rightClickShow: false, // 右键弹窗默认隐藏
  rightClickType: 'empty', // 右键弹窗元素默认为空 empty / noempty
  xPop: 0, // 右键菜单x轴坐标
  yPop: 0, // 右键菜单y轴坐标
  CopyPasteboard: null, // 复制粘贴板
  addTaskDialogshow: false, // 新增任务弹窗
  addKeyNodeDialogshow:false, // 添加关键节点弹窗
  addMemoDialogShow:false, // 添加备忘录弹窗
  addDescriptionDialogShow:false, // 添加描述弹窗
}