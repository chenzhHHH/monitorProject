<template>
  <div class="warning-screen-container">
    <div class="warning-table-box">
      <el-table :data="tableData" height="100%" style="width: 100%">
        <el-table-column prop="num" label="序号" width="60px"/>
        <el-table-column prop="warnDate" label="日期时间" width="200px"/>
        <el-table-column prop="targetType" label="目标类型" width="80px"/>
        <el-table-column prop="detailContent" label="详细内容" width="180px"/>
        <el-table-column prop="isConfirm" label="确认" width="60px"/>
      </el-table>
    </div>
  </div>
</template>

<script setup lang="ts">
const tableData = [{
  num: '9972',
  warnDate: '2024-11-11 23:14:21 088',
  targetType: 'adsb',
  detailContent: 'ADSB通道56006有数据',
  isConfirm: false
}, {
  num: '9973',
  warnDate: '2024-11-11 23:50:11 008',
  targetType: 'adsb',
  detailContent: 'ADSB通道56006有数据',
  isConfirm: false
}, {
  num: '9974',
  warnDate: '2024-11-12 10:04:29 018',
  targetType: 'adsb',
  detailContent: 'ADSB通道56006有数据',
  isConfirm: false
}, {
  num: '9975',
  warnDate: '2024-11-13 15:22:51 077',
  targetType: 'adsb',
  detailContent: 'ADSB通道56006有数据',
  isConfirm: false
}]
</script>

<style lang="scss" scoped>
.warning-screen-container {
  height: 100%;
  margin-top: 10px;

  .warning-table-box {
    height: 100%;
    overflow-y: auto;
    padding: 0px 0 0px 10px;

    ::v-deep .el-table {
      border-radius: 3px;
      overflow-x: auto;
      border: none;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      font-size: 13px;
      color: #fff;
      --el-table-bg-color: #666;

      th {
        background: linear-gradient(to bottom, #777, #444);
        font-weight: bold;
        text-align: center;
        padding: 5px 0 5px 0;
        border: none;
        color: #fff;
      }

      td {
        padding: 5px 0 5px 0;
        text-align: left;
        border: none;
      }

      tr {
        &:nth-child(odd) {
          background-color: #666;
        }

        &:nth-child(even) {
          background-color: #444;
        }

        &:hover > td {
          background-color: #949494;
        }
      }

      .el-table__inner-wrapper::before {
        height: 0;
      }
    }
  }
}
</style>
