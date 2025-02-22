<template>
  <div class="interface-switch-monitor-container">
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
.interface-switch-monitor-container {

}
</style>
