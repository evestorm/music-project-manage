<template>
  <div class="main-container">
    <!--顶部筛选-->

    <!--表格-->
    <div class="table-container">
      <vxe-grid ref="xGrid" :="gridOptions" @="gridEvents">
        <!--项目column插槽-->
        <template #projectId_default="{ row }">
          <Project :row="row" />
        </template>
        <!-- 阶段插槽 -->
        <template #stageId_header>
          <StageHeader />
        </template>
        <template #stageId_default="{ row }">
          <Stage :row="row" />
        </template>
        <!-- 日期数据 -->
        <template #cell_default="{ row, column }">
          <TableCell :dataKey="`${row.projectId}_${row.stageId}_${column.field}`" />
        </template>
        <template #cell_header="{ column }">
          <div class="day">{{ day(column.field) }}</div>
          <div class="date">{{ date(column.field) }}</div>
        </template>
      </vxe-grid>
    </div>
  </div>
</template>

<script setup>
import {computed, ref, nextTick} from "vue";

import { gridOptions } from "@/components/TableMain/js/options";
import gridEvents from '@/components/TableMain/js/events';

import Project from '@/components/Project';
import Stage from '@/components/Stage';
import StageHeader from "@/components/Stage/StageHeader";
import TableCell from "@/components/TableCell";

import {formatDate, getWeek} from "@/utils/date";
import { init } from './js/tableData';

import store from '@/store';

const xGrid = ref(null);

nextTick(() => {
  // 存储 xGrid
  store.commit('setxGrid', xGrid.value);
  init();
});

// 计算日期
const date = computed(() => (timeStamp) => {
  return formatDate(timeStamp);
});

// 计算周几
const day = computed(() => (timeStamp) => {
  return getWeek(timeStamp);
});
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>