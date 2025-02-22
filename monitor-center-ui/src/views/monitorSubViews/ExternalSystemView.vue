<template>
  <div class="external-system-monitor-container">
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
.external-system-monitor-container {

}
</style>
