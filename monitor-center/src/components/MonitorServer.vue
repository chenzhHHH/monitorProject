<template>
  <div class="monitor-server-container">
    <div class="left-info-box">
      S
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

export default ({
  name: 'MonitorServer',
  components: {},
  setup() {

  }
})
</script>

<style lang="scss" scoped>
.monitor-server-container {
  display: flex;
  min-height: 30px;
  max-width: 150px;
  border-radius: 3px;
  font-size:  15px;

  .left-info-box {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 18px;
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
    background: rgb(189, 255, 0);
    color: #fff;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  }

  .middle-info-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 80px;
    padding: 6px 3px 6px 3px;
    background: gray;

    .status-light-box {
      width: 100%;
      height: 10px;
      border-radius: 5px;
      background: rgba(189, 255, 0);
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
    background: gray;
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
  }
}
</style>