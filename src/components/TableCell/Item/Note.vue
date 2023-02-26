<template>
    <div class="note">
        {{ item.content }}
    </div>
</template>

<script setup>
    const props = defineProps({
        item: Object
    });
</script>

<style lang="scss" scoped>
    .note {
        background-color: #fdab3d;
        width: 100%;
        // height: 24px;
        // line-height: 24px;
        height: 50px;
        line-height: 50px;
        text-align: left;
        padding-left: 20px;
        box-sizing: border-box;
        color: #fff;
        outline-color:#100952;
        border: none;
        border-bottom: 1px solid #fff;
    }
</style>