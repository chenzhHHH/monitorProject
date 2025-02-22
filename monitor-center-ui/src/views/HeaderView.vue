<template>
  <div class="header-container">
    <div class="header-title-box">
      <div class="header-title">
        CNC
      </div>

      <div class="header-title-triangle"></div>
    </div>

    <div class="header-menu-box">
      <div class="per-menu-box">
        登录
      </div>

      <div class="per-menu-box">
        控制
      </div>

      <div class="per-menu-box">
        运行模式控制
      </div>

      <div class="per-menu-box">
        工具
      </div>

      <div class="per-menu-box">
        关于
      </div>
    </div>

    <div class="right-box">
      <DateTimeBox timezone="UTC"></DateTimeBox>
      <div class="seg-box"></div>
      <DateTimeBox timezone="PEK"></DateTimeBox>
    </div>
  </div>
</template>

<script setup lang="ts">
import DateTimeBox from "@/components/DateTimeBox.vue";

</script>

<style lang="scss" scoped>
.header-container {
  display: flex;
  align-items: center;
  height: 100%;
  color: #fff;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);

  .header-title-box {
    display: flex;
    align-items: center;
    height: 100%;

    .header-title {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      background-color: #767676;
      padding: 0 10px 0 10px;
      font-weight: bold;
      font-size: 20px;
      cursor: pointer;
    }

    .header-title-triangle {
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 0 60px 60px 0;
      border-color: transparent transparent #767676 transparent;
    }
  }

  .header-menu-box {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 50px;
    cursor: pointer;

    .per-menu-box {
      display: flex;
      flex-direction: row;
      align-items: center;
      height: 100%;
      padding: 0 10px 0 10px;
      font-size: 13px;

      &:hover {
        background-color: #898888;
      }
    }
  }

  .right-box {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: auto;

    .seg-box {
      width: 2px;
      background-color: #797979;
      height: 30px;
      margin: 0 10px 0 10px;
    }
  }
}
</style>
