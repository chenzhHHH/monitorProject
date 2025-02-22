<template>
  <div class="nport-monitor-container">
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
.nport-monitor-container {

}
</style>
