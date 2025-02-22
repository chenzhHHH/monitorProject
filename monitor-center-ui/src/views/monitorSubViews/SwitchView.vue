<template>
  <div class="switch-monitor-container">
    <div class="switch-monitor-grid-box">
      <div class="switch-monitor-grid-item" v-for="(sMItem, sMIndex) in switchMonitors" :key="sMIndex">
        <MonitorServer :monitorItem="sMItem" :isShowNetwork="false"></MonitorServer>
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

let switchMonitors = ref<Array<Object>>([])

watch(() => monitorMapItem, (newVal) => {
  switchMonitors.value = Object.values(newVal).flat() as Object[]
}, {deep: true})
</script>

<style lang="scss" scoped>
.switch-monitor-container {
  .switch-monitor-grid-box {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-auto-rows: 1fr;
    gap: 5px;

    .switch-monitor-grid-item {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      height: 100%;
    }
  }
}
</style>
