<template>
  <div class="stage-container">
    <!-- <span class="drag-btn">
      <i class="vxe-icon-edit"></i>
    </span> -->
    <span class="eyes-btn" @click="handleCheck(row)">
			<em class="vxe-icon-eye-fill"></em>
		</span>
    <div>
      <p>{{ row.name }}</p>
      <p>相关部组: {{ row.relevantDep }}</p>
      <p>负责人: {{ row.chargePerson }}</p>
      <p>完成率: {{ row.completionRate }}%</p>
    </div>
  </div>
</template>
<script setup>
const props = defineProps(['row']);
const emits = defineEmits(['addStage', 'handleCheck']);
const addStage = row => {
  emits('addStage', row);
};
const handleCheck = row => {
  emits('handleCheck', row, '阶段详情')
}
</script>

<style lang="scss" scoped>
.stage-container {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  .eyes-btn {
    cursor: pointer;
  }
  .drag-btn {
    cursor: move;
    font-size: 12px;
  }
}
</style>
