<template>
  <div class="main-container">
    <el-container class="main-container-box">
      <el-header class="header-box">
        <HeaderView></HeaderView>
      </el-header>

      <el-container class="content-container-box">
        <el-aside width="0px">
          Aside
        </el-aside>

        <el-main class="content-main-box">
          <div style="height: calc(100vh - 131px)">
            <MonitorScreen></MonitorScreen>
          </div>
        </el-main>

        <el-aside width="25%">
          <div style="height: calc(100vh - 131px)">
            <WarningScreen></WarningScreen>
          </div>
        </el-aside>
      </el-container>

      <el-footer class="footer-box">

      </el-footer>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import HeaderView from "@/views/HeaderView.vue";
import MonitorScreen from '@/views/MonitorScreen.vue'
import WarningScreen from "@/views/WarningScreen.vue";


</script>

<style lang="scss" scoped>
.main-container {
  .main-container-box {
    .header-box {
      height: 60px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      padding: 0;
    }

    .content-container-box {
      .content-main-box {
        padding: 0;
        margin-top: 10px;
      }
    }

    .footer-box {
      margin-top: 10px;
      height: 35px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
  }
}
</style>
