<template>
<!--    <RouterLink to="/">Home</RouterLink>-->
<!--    <RouterLink to="/about">About</RouterLink>-->
  <RouterView />
</template>
<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<style lang="scss">
/* 每个单元格 中padding值取消 */
.vxe-table--render-default .vxe-body--column:not(.col--ellipsis).cell-item {
  padding: 0 0;
}

.vxe-table--render-default .cell-item .vxe-cell {
  padding-left: 2px;
  padding-right: 2px;
}
</style>
