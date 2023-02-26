// 右键弹窗逻辑
import store from '@/store';
import { useInitialData } from '@/assets/utils/hooks';
import { dateToTime } from '@/assets/utils/common.js'
const { data } = useInitialData();

// 展示右键弹窗
export function showPop({ row, column, $event }) {
    // console.log({ row, column, $event });
    const { type } = $event;
          
    switch(type) {
        case 'click': // 左键单击
            console.log('左键单击');
            // 隐藏右键弹窗
            store.commit('setRightClickShow', false);
            break;
        case 'dblclick': // 左键双击
            console.log('左键双击');
            // 显示弹窗
            showRightPop(column, $event);
            let cellKey = store.state.cellKey.split('_')
            store.commit('setEditCellKey', `${cellKey[0]}_${cellKey[1]}_${dateToTime(cellKey[2]*1)}`);
            break;
        case 'contextmenu': // 右键单击
            console.log('右键单击');
            // 显示弹窗
            showRightPop(column, event);
            break;
        default:
            break;
    }

    
}

// 显示右键弹窗
function showRightPop(column, $event) {
    const key = store.state.cellKey,
        { field } = column,
        hasCellData = data.schedules[key];


    // 空单元格时才展示右键菜单 排除阶段和首列
    if(!hasCellData && field != 'stageId' && field != 'projectId') {
        // 设置坐标
        setPopXY($event);
        store.commit('setRightClickShow', true);
        store.commit('setRightClickType', 'empty');
    }  
}

// 设置右键坐标
function setPopXY($event) {
    //异步获取页面的可视宽高
    setTimeout(()=>{
      const viewWidth = document.documentElement.clientWidth || document.documentElement.offsetWidth,
            viewHeight = window.innerHeight || document.documentElement.clientHeight || document.body.offsetHeight,
            oMenuDom = document.getElementsByClassName('pop')[0],
            menuWidth = oMenuDom.offsetWidth,
            menuHeight = oMenuDom.offsetHeight,
            // 解构出鼠标右键在页面上的瞬时位置
            { x, y } = $event,
            // 当鼠标在x轴位置,大于加上菜单宽度,说明此时菜单在X轴放不下,就直接把菜单的X轴向左平移一个菜单宽度,yPop也一样
            xPop = x + menuWidth > viewWidth ? x - menuWidth : x,
            yPop = y + menuHeight > viewHeight ? y - menuHeight : y;
      store.commit('setPop', {
          xPop,
          yPop
      });
    })
}

// ================== 有数据单元格 任务、关键节点、备注点击操作 =====================
// 有数据单元格单击
export function cellClick(e) {
    console.log("有数据单元格单击");
}

// 有数据单元格双击
export function cellDblClick(e) {
    console.log("有数据单元格双击");
}

// 有数据单元格右键单击 (模板加号右键)
export function cellRightClick(e) {
    console.log("有数据单元格右击");
    // 设置弹窗坐标
    setPopXY(e);

    store.commit('setRightClickType', 'noempty');
    store.commit('setRightClickShow', true);
}

// ================== 有数据单元格 模板点击操作 =====================

// 有数据单元格单击
export function addCellClick(e) {
    console.log("有数据单元格单击");
}

// 有数据单元格双击
export function addCellDblClick(e) {
    console.log("有数据单元格双击");
    store.commit('setRightClickType', 'noempty');
    store.commit('setRightClickShow', true);
}

// 有数据单元格右键单击 (模板加号右键)
export function addCellRightClick(e) {
    console.log("有数据单元格右击");
    // 设置弹窗坐标
    setPopXY(e);

    store.commit('setRightClickType', 'empty');
    store.commit('setRightClickShow', true);
}