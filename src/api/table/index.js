// 用于表格的请求调用
import request from "@/utils/request";
import { formatScheduleData, formatProject, formatStage } from "@/assets/utils";
import { ElMessage } from "element-plus";
// 初始化表格数据
export async function getProject(data) {
  try {
    const res = await request.get("api/project/getProject", data);
    if (res?.data?.message === "success") {
      const { project, stage, schedules } = res.data.data;
      return Promise.resolve({
        project: formatProject(project),
        stage: formatStage(stage, formatProject(project)),
        schedules: formatScheduleData(schedules),
      });
    }
    ElMessage.error({ message: res?.data?.message || "获取数据失败" });
  } catch (error) {
    throw new Error(error);
  }
}

// 新增阶段
export async function addStage(data) {
  try {
    const res = await request.post("api/project/addStage", data);
    console.log(res);
    if (res?.data?.result === "ok" && res?.data?.data?.msg === "添加成功") {
      ElMessage.success({ message: res?.data?.message || "添加成功" });
    } else {
      ElMessage.error({ message: res?.data?.message || "添加失败" });
    }
  } catch (error) {
    throw new Error(error);
  }
}
// 获取类型
export async function getTypes(data) {
  try {
    const res = await request.get("api/project/getTypes", data);
    return res?.data?.message === "success" ? res?.data?.data : [];
  } catch (error) {
    throw new Error(error);
  }
}

// 获取相关部组
export async function getDepAndCharge() {
  try {
    const res = await request.get("api/project/getDepAndCharge");
    return res?.data?.result === "ok" ? res?.data?.data : new Map();
  } catch (error) {
    throw new Error(error);
  }
}
