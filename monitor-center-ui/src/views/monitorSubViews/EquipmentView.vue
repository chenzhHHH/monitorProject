<template>
  <div class="equipment-monitor-container">
    <div class="equipment-monitor-grid-box">
      <div class="equipment-monitor-grid-item" v-for="(monitorVoMapValue, monitorVoMapKey, index) in monitorMapItem" :key="index">
        <div class="per-equipment-monitor-box">
          <div class="equipment-monitor-title">{{ monitorVoMapKey }}</div>

          <div class="equipment-monitor-server" v-for="(item, index) in monitorVoMapValue" :key="index">
            <MonitorServer :monitorItem="item"></MonitorServer>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {defineProps, toRefs} from "vue";

const props = defineProps({
  monitorMapItem: {type: Object, default: () => new Map()}
});

const {monitorMapItem} = toRefs(props);
</script>

<style lang="scss" scoped>
.equipment-monitor-container {
  .equipment-monitor-grid-box {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    grid-auto-rows: 1fr;
    gap: 5px;

    .equipment-monitor-grid-item {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      height: 100%;

      .per-equipment-monitor-box {
        display: flex;
        flex-direction: column;
        align-items: center;
        //width: 89px;
        background: #424242;
        padding: 5px 5px 5px 5px;
        border-radius: 3px;

        .equipment-monitor-title {
          font-size: 13px;
          color: #fff;
        }

        .equipment-monitor-server {
          margin-top: 10px;
        }
      }
    }
  }
}
</style>
