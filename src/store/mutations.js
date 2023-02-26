export default {
  // 设置表格数据
  setTableData(state, { project, stage, schedules }) {
    state.project = project;
    state.stage = stage;
    state.schedules = schedules;
  },
  // 设置表格对象
  setxGrid(state, $grid) {
    state.$grid = $grid;
  },
  // 设置单元格key 用于获取单元格中的数据数组
  setCellKey(state, cellKey) {
    state.cellKey = cellKey;
  },
  // 双击位置信息
  setEditCellKey(state,data){
    state.editCellKey = data;
  },
  // 修改弹窗是否显示
  setRightClickShow(state, isShow) {
    state.rightClickShow = isShow;
  },
  // 设置右键显示的菜单
  setRightClickType(state, type) {
    state.rightClickType = type;
  },
  // 修改显示的坐标
  setPop(state, { xPop, yPop }) {
    state.xPop = xPop;
    state.yPop = yPop;
  },
  // 新增任务弹窗盒子显示
  changeAddTaskDialogshow(state,status){
    state.addTaskDialogshow = status;
  },
  // 新增关键节点弹窗显示
  changeAddkeyNodeDialogshow(state,status){
    state.addKeyNodeDialogshow = status;
  },
  // 添加备忘录弹窗显示
  changeAddMemoDialogshow(state,status){
    state.addKeyNodeDialogshow = status;
  },
  // 添加描述弹窗盒子显示
  changeAddDescriptionDialogshow(state,status){
    state.addKeyNodeDialogshow = status;
  }







  // // 修改右键弹窗的显示状态
  // handlePopStatus(state, status) {
  //   state.rightClickShow = status;
  // },
  // // 修改展示的右键弹窗
  // selectRightPup(state, type) {
  //   state.rightClickType = type;
  // },
  // // 修改生成日期的数量
  // setDateNum(state, dateNum) {
  //   state.dateNum = dateNum;
  // },
  // // 设置表格数据
  // setTabelData(state, tableData) {
  //   state.tableData = tableData;
  // },
  // // 修改编辑状态
  // setIsEdit(state, isEdit) {
  //   state.isEdit = isEdit;
  // },
  // // 修改编辑单元格标识
  // setEditCellFlag(state, editCellFlag) {
  //   state.editCellFlag = editCellFlag;
  // },
  // // 设置表格表头时间数据
  // setTableHeaderDate(state, tableHeaderDate) {
  //   state.tableHeaderDate = tableHeaderDate;
  // },
  // // 设置单元格坐标
  // setCellIndex(state, { row, column, idx }) {
  //   state.setCellIndex = {
  //     row,
  //     column,
  //     idx
  //   };
  // },
  // // 新增指定坐标的任务
  // addCell(state, { row, column, name, active, objId }) {

  //   console.log(state.tableData[row][`obj${column}`]);
  //   let arr = state.tableData[row][`obj${column}`];
  //   if (!arr) {
  //     state.tableData[row][`obj${column}`] = [];
  //   }
  //   state.tableData[row][`obj${column}`].push({
  //     name: name,
  //     [active]: true,
  //     objId: objId
  //   });
  //   localStorage.setItem('arrData', JSON.stringify(state.tableData));
  //   // console.log(state.tableData[row].obj1);
  //   // state.tableData[row].obj.push({
  //   //     name: '11'
  //   // })
  //   // console.log(state.tableData[row].obj1);
  //   // state.tableData[row][`obj${column}`].push({
  //   //     name: '新任务'
  //   // })
  // },
  // //编辑结束,替换对应编辑过(失去焦点)数据的方法
  // replaceEditData(state, { item, position, target }) {
  //   //将新的数据赋值给对应的数据源
  //   state.tableData[position.row][`obj${position.column}`][position.idx].name = target;
  //   localStorage.setItem('arrData', JSON.stringify(state.tableData));
  // },
  // // 修改新增任务弹窗显示/隐藏
  // handleaddTaskShowStatus(state, status) {
  //   state.addTaskShow = status;
  // },
  // // 修改新增任务弹窗显示/隐藏
  // handleaddKeyNodeShowStatus(state, status) {
  //   state.addKeyNodeDialoghow = status;
  // },
  // //设置复制粘贴板的值
  // setCopyPasteboard(state, { row, column, idx }) {
  //   let CopyPboard = idx === '' ? JSON.stringify(state.tableData[row][`obj${column}`]) : JSON.stringify(state.tableData[row][`obj${column}`][idx])
  //   //如果复制的区域有内容,才进行复制
  //   if (CopyPboard && JSON.parse(CopyPboard).length > 0) {
  //     state.CopyPasteboard = JSON.parse(CopyPboard)
  //     ElMessage.success('已成功复制到粘贴板')
  //   } else {
  //     ElMessage.warning('请选择要复制的内容')
  //   }
  // },
  // //整体新增单元格,现在阶段可用于整个单元格复制
  // pasteCell(state, { row, column, idx }) {
  //   if (state.CopyPasteboard) {
  //     let arr = state.tableData[row][`obj${column}`];
  //     if (!arr) {
  //       state.tableData[row][`obj${column}`] = [];
  //     }
  //     state.CopyPasteboard.forEach((e, i) => {
  //       state.tableData[row][`obj${column}`].push(e)
  //     });
  //     localStorage.setItem('arrData', JSON.stringify(state.tableData));
  //     ElMessage.success('粘贴成功')
  //   } else {
  //     ElMessage.warning('粘贴板无内容,请复制内容')
  //   }
  // }
}