<template>
  <div class="table-cell">
    <template
        v-if="data.schedules[dataKey]"
    >
      <cell-item
          v-for="(item, index) of data.schedules[dataKey]"
          :key="index"
          :item="item"
          @click="cellClick"
          @dblclick="cellDblClick"
          @contextmenu.prevent="cellRightClick"
      ></cell-item>
      <div
          class="placeholder"
          @click="addCellClick"
          @dblclick="addCellDblClick"
          @contextmenu.prevent="addCellRightClick"
      >
        +
      </div>
    </template>
    <div
        v-else
        class="placeholder-nodata"
    >
      +
    </div>
  </div>
</template>

<script setup>
import { useInitialData } from '@/assets/utils/hooks';
import {
  cellClick,
  cellDblClick,
  cellRightClick,
  addCellClick,
  addCellDblClick,
  addCellRightClick
} from '@/components/TableMain/js/pop.js';
import CellItem from './Item';

const props = defineProps({
  dataKey: String,
});

const {
  data
} = useInitialData();



</script>

<style lang="scss" scoped>
.table-cell {
  .placeholder {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 50px;
    text-align: left;
    box-sizing: border-box;
    outline-color:#100952;
    border: 1px solid #ccc;
  }

  .placeholder-nodata {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    text-align: left;
    box-sizing: border-box;
  }
}

</style>