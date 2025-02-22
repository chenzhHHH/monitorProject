<template>
  <div class="date-time-container">
    <div class="time-box">
      07 : 42 : 33
    </div>

    <div class="bottom-box">
      <div class="date-box">
        2025/02/18
      </div>

      <div class="timezone-box">
        UTC
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.date-time-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 5px 0 5px;

  .time-box {
    font-size: 28px;
    font-weight: bold;
  }

  .bottom-box {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    font-size: 14px;

    .date-box {

    }

    .timezone-box {

    }
  }
}
</style>
