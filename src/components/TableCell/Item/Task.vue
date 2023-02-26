<template>
  <div
    v-if="
      `${item.projectId}_${item.stageId}_${item.scheduleTime}` ==
      store.state.editCellKey
    "
    class="task task-input"
    :data-item="JSON.stringify(item)"
  >
    <!-- <input
      v-model="item.taskName"
      v-if="true"
      @blur="inputBlur"
      size="mini"
      v-focus
      /> -->
    <el-input
      v-model="item.taskName"
      placeholder="请输入任务名"
      size="large"
      @blur="inputBlur"
      clearable
    />
  </div>
  <div v-else class="task" :data-item="JSON.stringify(item)">
    {{ item.taskName }}
  </div>
</template>

<script setup>
import { useStore } from "vuex";
const props = defineProps({
  item: Object,
});
const store = useStore();

const inputBlur = function () {
  let cellKey = store.state.cellKey.split("_");
  console.log("cellKey", cellKey);
  console.log("cellKey", dateToTime(cellKey[2] * 1));
};
</script>

<style lang="scss" scoped>
.task {
  background-color: #d0505f;
  width: 100%;
  height: 50px;
  line-height: 50px;
  text-align: left;
  padding-left: 20px;
  box-sizing: border-box;
  // background-color: #579bfc;
  color: #fff;
  outline-color: #100952;
  border: none;
  border-bottom: 1px solid #fff;
  ::v-deep .el-input {
    .el-input__wrapper {
      padding: 0;
    }
  }
}
.task-input {
  background-color: #d0505f;
  width: 100%;
  height: 100%;
  line-height: 100%;
  text-align: center;
  padding-left: 0px;
  box-sizing: border-box;
}
// .task-input{
//   .el-input{
//     .el-input__wrapper{
//       padding: 0;
//     }
//   }
// }
</style>