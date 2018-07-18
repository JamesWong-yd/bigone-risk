<template>
  <div :class="className" :style="{height:height,width:width}"></div>
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons') // echarts theme
import { debounce } from '@/utils'

const animationDuration = 2000

export default {
  props: {
    className: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '250px'
    }
  },
  data() {
    return {
      chart: null
    }
  },
  mounted() {
    this.initChart()
    this.__resizeHanlder = debounce(() => {
      if (this.chart) {
        this.chart.resize()
      }
    }, 100)
    window.addEventListener('resize', this.__resizeHanlder)
  },
  beforeDestroy() {
    if (!this.chart) {
      return
    }
    window.removeEventListener('resize', this.__resizeHanlder)
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    initChart() {
      this.chart = echarts.init(this.$el, 'macarons')

      this.chart.setOption({
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        legend: {
          data: ['低风险', '中风险', '高风险']
        },
        grid: {
          top: 40,
          left: '2%',
          right: '2%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: [
              '办公室',
              '组织人事处',
              '计划资金处',
              '土地管理处',
              '前期工作处',
              '项目审核处',
              '建设监督处'
            ],
            axisTick: {
              alignWithLabel: true
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            axisTick: {
              show: false
            }
          }
        ],
        series: [
          {
            name: '低风险',
            type: 'bar',
            stack: 'vistors',
            barWidth: '30%',
            data: [9, 5, 2, 4, 9, 10, 8],
            animationDuration,
            itemStyle: {
              normal: {
                color: '#909399'
              }
            }
          },
          {
            name: '中风险',
            type: 'bar',
            stack: 'vistors',
            barWidth: '30%',
            data: [8, 5, 20, 3, 9, 14, 20],
            animationDuration,
            itemStyle: {
              normal: {
                color: '#E6A23C'
              }
            }
          },
          {
            name: '高风险',
            type: 'bar',
            stack: 'vistors',
            barWidth: '30%',
            data: [8, 9, 11, 8, 10, 3, 18],
            animationDuration,
            itemStyle: {
              normal: {
                color: '#F56C6C'
              }
            }
          }
        ]
      })
    }
  }
}
</script>
