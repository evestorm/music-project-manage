import { getProject } from "@/api/table";

export default {
  // 获取表格数据
  async getTableData(store, payload) {
    const { project, stage, schedules } = await getProject();
    store.commit('setTableData', { project, stage, schedules })
  }
}