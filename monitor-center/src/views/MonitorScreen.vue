<template>
  <div class="monitor-screen-container">
    <div class="per-monitor-box">
      <div class="monitor-title">SDFP</div>

      <div class="monitor-server">
        <MonitorServer></MonitorServer>
      </div>

      <div class="monitor-server">
        <MonitorServer></MonitorServer>
      </div>
    </div>
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
  display: flex;

  .per-monitor-box {
    display: flex;
    flex-direction: column;
    background: #000;
    padding: 10px;

    .monitor-title {
      color: #fff;
    }

    .monitor-server {
      margin-top: 10px;
    }
  }
}
</style>
