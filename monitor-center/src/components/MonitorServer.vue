<template>
  <div class="monitor-server-container">
    <div :class="['left-info-box', leftInfoClass]">
      <div v-if="isShow" class="left-info-text-box">
        S
      </div>
    </div>

    <div class="middle-info-box">
      <div class="status-light-box"></div>

      <div class="info-name-box">
        LOGREC1
      </div>
    </div>

    <div class="right-info-box">

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

    const leftInfoClass = computed(() => {
      return {
        'normal-left-info-box': isShow.value,
        'default-left-info-box': !isShow.value
      };
    });

    return {
      leftInfoClass
    }
  }
})
</script>

<style lang="scss" scoped>
.monitor-server-container {
  display: flex;
  min-height: 30px;
  max-width: 150px;
  border-radius: 3px;
  font-size: 15px;

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
    background: rgb(201, 255, 79);
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
      background: rgb(201, 255, 79);
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
}
</style>