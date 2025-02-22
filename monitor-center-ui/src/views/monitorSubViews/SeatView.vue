<template>
  <div class="seat-monitor-container">
    <div class="seat-monitor-title-box">
      <div class="seat-monitor-title-line seat-monitor-short-title-line"></div>
      <div class="seat-monitor-title-text">TWR</div>
      <div class="seat-monitor-title-line"></div>
    </div>

    <MonitorServer :monitorItem="objT"></MonitorServer>
  </div>
</template>

<script setup lang="ts">
import MonitorServer from '@/components/MonitorServer.vue'
import {defineProps} from "vue";

const props = defineProps({
  monitorMapItem: {type: Object, default: () => new Map()}
});

const objT = {
  isValid: false
};
</script>

<style lang="scss" scoped>
.seat-monitor-container {
  .seat-monitor-title-box {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 10px 0 10px 0;

    .seat-monitor-short-title-line {
      max-width: 100px;
    }

    .seat-monitor-title-line {
      flex: 1;
      height: 1px;
      background-color: #a4a4a4;
    }

    .seat-monitor-title-text {
      margin: 0 10px 0 10px;
      white-space: nowrap;
      color: #a4a4a4;
    }
  }
}
</style>
