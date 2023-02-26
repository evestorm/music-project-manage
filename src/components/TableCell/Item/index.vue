<template>
    <div class="item">
        <!-- 任务 -->
        <task 
            v-if="item.scheduleType === 'task' && item.taskName.length > 0"
            :item="item"
        >
        </task>
        <!-- 关节节点 -->
        <node 
            v-if="item.scheduleType === 'node'"
            :item="item"
        ></node>
        <!-- 备注 -->
        <note 
            v-if="item.scheduleType === 'note'"
            :item="item"
        ></note>
    </div>
</template>

<script setup>
    import Task from './Task.vue';
    import Node from './Node.vue';
    import Note from './Note.vue';

    const props = defineProps({
        item: Object
    })
</script>

<style lang="scss" scoped>

</style>