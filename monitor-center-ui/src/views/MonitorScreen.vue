<template>
  <div class="monitor-screen-container">
    <div class="row1-box">
      <div class="monitor-block-box">
        <EquipmentView :monitorMapItem="monitorVoMap"></EquipmentView>
      </div>
    </div>

    <div class="row2-box margin-top-5">
      <div class="monitor-block-box">
        <SeatView :monitorMapItem="null"></SeatView>
      </div>
    </div>

    <div class="row3-box margin-top-5">
      <div class="monitor-block-box">
        <DatabaseView :monitorMapItem="mysqlVoMap"></DatabaseView>
      </div>

      <div class="monitor-block-box margin-left-5" style="flex: 1;">
        <MonitorSourceView :monitorMapItem="null"></MonitorSourceView>
      </div>
    </div>

    <div class="row4-box margin-top-5">
      <div class="monitor-block-box">
        <NportView :monitorMapItem="null"></NportView>
      </div>

      <div class="monitor-block-box margin-left-5">
        <DataLinkView :monitorMapItem="null"></DataLinkView>
      </div>

      <div class="monitor-block-box margin-left-5">
        <InterfaceSwitchView :monitorMapItem="null"></InterfaceSwitchView>
      </div>

      <div class="monitor-block-box margin-left-5">
        <FirewallView :monitorMapItem="null"></FirewallView>
      </div>

      <div class="monitor-block-box margin-left-5">
        <SwitchView :monitorMapItem="switchVoMap"></SwitchView>
      </div>

      <div class="monitor-block-box margin-left-5" style="flex: 1;">
        <ExternalSystemView :monitorMapItem="null"></ExternalSystemView>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import EquipmentView from "@/views/monitorSubViews/EquipmentView.vue";
import SeatView from "@/views/monitorSubViews/SeatView.vue";
import DatabaseView from "@/views/monitorSubViews/DatabaseView.vue";
import MonitorSourceView from "@/views/monitorSubViews/MonitorSourceView.vue";
import NportView from "@/views/monitorSubViews/NportView.vue";
import DataLinkView from "@/views/monitorSubViews/DataLinkView.vue";
import InterfaceSwitchView from "@/views/monitorSubViews/InterfaceSwitchView.vue";
import FirewallView from "@/views/monitorSubViews/FirewallView.vue";
import SwitchView from "@/views/monitorSubViews/SwitchView.vue";
import ExternalSystemView from "@/views/monitorSubViews/ExternalSystemView.vue";

</script>

<style lang="scss" scoped>
.monitor-screen-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background: #939393;
    border-radius: 5px;
  }

  .monitor-block-box {
    background: #767676;
    border: 1px solid #6a6a6a;
    padding: 10px 10px 10px 10px;
    border-radius: 3px;
  }

  .margin-left-5 {
    margin-left: 5px;
  }

  .margin-top-5 {
    margin-top: 5px;
  }

  .row1-box {

  }

  .row2-box {

  }

  .row3-box {
    display: flex;
    flex-direction: row;
  }

  .row4-box {
    display: flex;
    flex-direction: row;
  }
}
</style>
