<template>
  <div class="stage-header-container">
    <span class="stage">阶段</span>
    <vxe-button type="text" icon="vxe-icon-add" @click="addStage"></vxe-button>
  </div>
</template>

<script setup>
const emits = defineEmits(['addStage']);
const addStage = row => {
  emits('addStage', row);
};
</script>

<style lang="scss" scoped>

</style>