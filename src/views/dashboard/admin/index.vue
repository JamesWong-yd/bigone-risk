<template>
  <div class="dashboard-editor-container">
    <!-- <github-corner></github-corner> -->
    <el-row style="background:#fff;padding:16px 16px 0;margin-bottom:32px;">
      <bar-chart></bar-chart>
    </el-row>

  </div>
</template>

<script>
import BarChart from './components/BarChart'

const lineChartData = {
  newVisitis: {
    expectedData: [10, 10, 11, 14, 15, 10, 15],
    actualData: [12, 8, 9, 15, 16, 14, 15]
  },
  messages: {
    expectedData: [2, 19, 12, 14, 16, 13, 14],
    actualData: [18, 16, 11, 10, 14, 15, 13]
  },
  purchases: {
    expectedData: [8, 10, 12, 10, 10, 9, 10],
    actualData: [12, 0, 10, 13, 14, 13, 13]
  },
  shoppings: {
    expectedData: [13, 14, 11, 12, 1, 10, 10],
    actualData: [10, 2, 9, 4, 16, 14, 13]
  }
}

export default {
  name: 'dashboard-admin',
  components: {
    BarChart
  },
  data() {
    return {
      lineChartData: lineChartData.newVisitis
    }
  },
  methods: {
    handleSetLineChartData(type) {
      this.lineChartData = lineChartData[type]
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.dashboard-editor-container {
  padding: 32px;
  background-color: rgb(240, 242, 245);
  .chart-wrapper {
    background: #fff;
    padding: 16px 16px 0;
    margin-bottom: 32px;
  }
}
</style>
