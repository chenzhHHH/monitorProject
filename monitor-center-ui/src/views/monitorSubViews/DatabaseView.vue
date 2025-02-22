<template>
  <div class="database-monitor-container">
    <div class="database-monitor-grid-box">
      <div class="database-monitor-grid-item" v-for="(dbMItem, dbMIndex) in databaseMonitors" :key="dbMIndex">
        <MonitorServer :monitorItem="dbMItem"></MonitorServer>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import MonitorServer from '@/components/MonitorServer.vue'
import {defineProps, ref, toRefs, watch} from "vue";

const props = defineProps({
  monitorMapItem: {type: Object, default: () => new Map()}
});

const {monitorMapItem} = toRefs(props);

let databaseMonitors = ref<Array<Object>>([])

watch(() => monitorMapItem, (newVal) => {
  databaseMonitors.value = Object.values(newVal).flat() as Object[]
}, {deep: true})
</script>

<style lang="scss" scoped>
.database-monitor-container {
  .database-monitor-grid-box {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 1fr;
    gap: 5px;

    .database-monitor-grid-item {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      height: 100%;
    }
  }
}
</style>
