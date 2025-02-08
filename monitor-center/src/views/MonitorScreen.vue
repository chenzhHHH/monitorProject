<template>
  <div class="monitor-screen-container">
    <MonitorServer></MonitorServer>
  </div>
</template>

<script>

import MonitorServer from '@/components/MonitorServer.vue'

export default ({
  name: 'MonitorScreen',
  components: {
    MonitorServer
  },
  setup() {

  }
})
</script>

<style lang="scss" scoped>
.monitor-screen-container {

}
</style>
