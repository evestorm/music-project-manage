import { getGrid } from '@/utils';
// 滚动到指定列
export const scrollColumn = (timeStamp) => {
    // console.log(xGrid.value.getColumns);
    // xGrid.scrollToColumn()
    // console.log($grid.getColumnByField('col_3'));
    // $grid.scrollToColumn($grid.getColumnByField('col_31')).then(res => {
    //     console.log(res);
    // })
    const $grid = getGrid();
    // 滚动到指定列
    $grid.scrollToColumn(timeStamp);
}