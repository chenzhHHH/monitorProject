<template>
  <div class="main-container">
    <el-container>
      <el-header>xxx系统监控123</el-header>

      <el-container>
        <el-aside width="0px">Aside</el-aside>

        <el-main>
          <MonitorScreen></MonitorScreen>
        </el-main>

        <el-aside width="0px">Aside</el-aside>
      </el-container>

      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script>
import MonitorScreen from '@/views/MonitorScreen.vue'

export default {
  name: 'HomeView',
  components: {
    MonitorScreen
  }
}
</script>

<style lang="scss" scoped>
.main-container {

}
</style>
