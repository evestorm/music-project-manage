// 合并项目
export function mergeRowMethod({ row, _rowIndex, column, visibleData }) {
	const fields = ['projectId'];
	const cellValue = row[column.field];
	if (cellValue && fields.includes(column.field)) {
		const prevRow = visibleData[_rowIndex - 1];
		let nextRow = visibleData[_rowIndex + 1];
		if (prevRow && prevRow[column.field] === cellValue) {
			return { rowspan: 0, colspan: 0 };
		} else {
			let countRowspan = 1;
			while (nextRow && nextRow[column.field] === cellValue) {
				nextRow = visibleData[++countRowspan + _rowIndex];
			}
			if (countRowspan > 1) {
				return { rowspan: countRowspan, colspan: 1 };
			}
		}
	}
}
