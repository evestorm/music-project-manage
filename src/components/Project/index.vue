<template>
  <div class="project-container">
    <span class="project-container-eyes-btn" @click="handleCheck(row)">
    <em class="vxe-icon-eye-fill"></em>
  </span>
  <div class="project-container-content">
    <p>{{ row.project && row.project.projectName }}</p>
    <p>项目类型: {{ row.project && row.project.projectType }}</p>
    <p>上级项目: 无</p>
    <p>项目评级: {{ row.project && row.project.projectGrade }}</p>
    <p>优先级: {{ row.project && row.project.priority }}</p>
    <p>完成率: {{ row.project && row.project.completionRate }}%</p>
    <p>制片负责人: {{ row.project && row.project.productionDirector }}</p>
    <p>内容负责人: {{ row.project && row.project.contentOwner }}</p>
  </div>
</div>
</template>
<script setup>
  const props = defineProps(['row']);
  const emits = defineEmits(['handleCheck']);
  const handleCheck = row => {
  emits('handleCheck', row, '项目详情');
};
</script>
<style lang="scss" scoped>
  .project-container {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  &-eyes-btn {
    cursor: pointer;
  }
}
</style>
