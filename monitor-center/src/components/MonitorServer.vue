<template>
  <div class="monitor-server-container">
    <div class="monitor-server-top-box">
      <div :class="['left-info-box', leftInfoClass]">
        <div v-if="isShow" class="left-info-text-box">
          S
        </div>
      </div>

      <div class="middle-info-box">
        <div class="status-light-box"></div>

        <div class="info-name-box">
          SDFP1
        </div>
      </div>

      <div class="right-info-box">

      </div>

      <div v-if="isShowEquipment" class="float-left-bottom-info-box">

      </div>
    </div>

    <div class="monitor-server-bottom-box">
      <div class="network-port-box">
        <div class="per-network-port-box">
          A
        </div>

        <div class="per-network-port-box">
          B
        </div>

        <div class="per-network-port-box">
          S
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import {computed, ref} from "vue";

export default ({
  name: 'MonitorServer',
  components: {},
  setup() {
    const isShow = ref(false);
    const isShowEquipment = ref(false);

    const leftInfoClass = computed(() => {
      return {
        'normal-left-info-box': isShow.value,
        'default-left-info-box': !isShow.value
      };
    });

    return {
      isShow,
      isShowEquipment,
      leftInfoClass
    }
  }
})
</script>

<style lang="scss" scoped>
.monitor-server-container {
  width: 116px;

  .monitor-server-top-box {
    display: flex;
    min-height: 30px;
    border-radius: 3px;
    font-size: 15px;
    position: relative;

    .left-info-box {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 18px;
      border-top-left-radius: 3px;
      border-bottom-left-radius: 3px;
      color: #fff;
      text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);

      .left-info-text-box {

      }
    }

    .default-left-info-box {
      background: rgb(176, 176, 176)
    }

    .normal-left-info-box {
      background: rgb(196 247 82);
    }

    .warning-left-info-box {
      background: rgb(247, 255, 0);
    }

    .middle-info-box {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 80px;
      padding: 6px 3px 6px 3px;
      background: rgb(176, 176, 176);

      .status-light-box {
        width: 100%;
        height: 10px;
        border-radius: 5px;
        background: rgb(196 247 82);
        box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);
      }

      .info-name-box {
        margin-top: 5px;
        color: #fff;
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
      }
    }

    .right-info-box {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 18px;
      background: rgb(176, 176, 176);
      border-top-right-radius: 3px;
      border-bottom-right-radius: 3px;
    }

    .float-left-bottom-info-box {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 0 30px 30px 0;
      border-bottom-left-radius: 3px;
      border-color: transparent transparent rgb(200, 200, 200) transparent;
    }
  }

  .monitor-server-bottom-box {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 5px;

    .network-port-box {
      display: flex;
      flex-direction: row;

      .per-network-port-box {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        font-size: 12px;
        color: #fff;
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
        background: rgb(196 247 82);

        &:not(:last-child) {
          margin-right: 1px;
        }
      }
    }
  }
}
</style>