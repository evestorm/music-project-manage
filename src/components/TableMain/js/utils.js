import { formatDate } from "../../../utils/date";

// 设置表头 今天 高亮
export function setHeaderCell({ $rowIndex, column, columnIndex, $columnIndex }) {
    // console.log({ $rowIndex, column, columnIndex, $columnIndex });
    const { field } = column;
    // 今日时间戳
    const nowTimeStamp = new Date(formatDate(new Date().getTime())).getTime();
    if(field == nowTimeStamp) {
        return 'now-day-header';
    }
}