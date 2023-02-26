//用于单元格的请求调用
import request from "@/utils/request";
import { ElMessage } from "element-plus";

//新增单元格
export async function addCell(data) {
  try {
    const res = await request.post("api/project/addCell", data);
    console.error(res);
    if (res?.data?.result === "ok") {
      ElMessage.success({ message: res?.data?.data?.msg || "添加成功" });
      return { message: res?.data?.data?.msg || "添加成功" };
    } else {
      ElMessage.error({ message: res?.data?.data?.msg || "添加失败" });
      return { message: res?.data?.data?.msg || "添加失败" };
    }
  } catch (error) {
    ElMessage.error({ message: "添加失败" });
    throw new Error(error);
  }
}
//更新单元格接口
export async function updateCell(data) {
  try {
    const res = await request.post("api/project/updateCell", data);
    console.error(res);
    if (res?.data?.result === "ok") {
      ElMessage.success({ message: res?.data?.data?.msg || "更新成功" });
    } else {
      ElMessage.error({ message: res?.data?.data?.msg || "更新失败" });
    }
  } catch (error) {
    ElMessage.error({ message: "更新失败" });
    throw new Error(error);
  }
}
