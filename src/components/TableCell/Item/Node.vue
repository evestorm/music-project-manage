<template>
    <div class="node">
        {{ item.nodeName }}
    </div>
</template>

<script setup>
    const props = defineProps({
        item: Object
    });
</script>

<style lang="scss" scoped>
.node {
  background-color: #448c80;
  width: 100%;
  height: 50px;
  line-height: 50px;
  text-align: left;
  padding-left: 20px;
  box-sizing: border-box;
  color: #fff;
  outline-color:#091a52;
  border: none;
  border-bottom: 1px solid #fff;
}
</style>