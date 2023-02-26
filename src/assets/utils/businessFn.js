// 合并项目
// resource: https://vxetable.cn/#/table/api?filterName=span-method
export function mergeRowMethod({ row, _rowIndex, column, visibleData }) {
  console.log({
    row,
    _rowIndex,
    column,
    visibleData,
  });
  // 只有前两列的 column.field 才等于 projectId 或 stageId；其他情况下是 timestamp
  const fields = ["projectId"];
  const cellValue = row[column.field];
  if (cellValue && fields.includes(column.field)) {
    const prevRow = visibleData[_rowIndex - 1]; // 前一行
    let nextRow = visibleData[_rowIndex + 1]; // 后一行
    if (prevRow && prevRow[column.field] === cellValue) {
      // 起始
      return { rowspan: 0, colspan: 0 };
    } else {
      let countRowspan = 1;
      while (nextRow && nextRow[column.field] === cellValue) {
        nextRow = visibleData[++countRowspan + _rowIndex];
      }
      if (countRowspan > 1) {
        // 终止
        return { rowspan: countRowspan, colspan: 1 };
      }
    }
  }
}
