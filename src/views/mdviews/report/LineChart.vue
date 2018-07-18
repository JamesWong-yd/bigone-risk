<template>
  <div :class="className" :style="{height:height,width:width}"></div>
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons') // echarts theme
import { debounce } from '@/utils'

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
      default: '350px'
    },
    autoResize: {
      type: Boolean,
      default: true
    },
    activeName: {
      type: String
    }
    // chartData: {
    //   type: Object,
    //   default:
    // }
  },
  data() {
    return {
      chart: null,
      chartData: {
        expectedData: [],
        actualData: [],
        ldata: []
      }
    }
  },
  created() {
    this.setdata()
  },
  mounted() {
    this.initChart()
    if (this.autoResize) {
      this.__resizeHanlder = debounce(() => {
        if (this.chart) {
          this.chart.resize()
        }
      }, 100)
      window.addEventListener('resize', this.__resizeHanlder)
    }

    // 监听侧边栏的变化
    const sidebarElm = document.getElementsByClassName('sidebar-container')[0]
    sidebarElm.addEventListener('transitionend', this.__resizeHanlder)
  },
  beforeDestroy() {
    if (!this.chart) {
      return
    }
    if (this.autoResize) {
      window.removeEventListener('resize', this.__resizeHanlder)
    }

    const sidebarElm = document.getElementsByClassName('sidebar-container')[0]
    sidebarElm.removeEventListener('transitionend', this.__resizeHanlder)

    this.chart.dispose()
    this.chart = null
  },
  watch: {
    // chartData: {
    //   deep: true,
    //   handler(val) {
    //     this.setOptions(val)
    //   }
    // },
    activeName() {
      this.setdata()
    }
  },
  methods: {
    setdata() {
      for (let i in this.chartData) {
        this.chartData[i] = []
        for (let j = 0; j < 12; j++) {
          this.chartData[i].push(Math.floor(Math.random() * 15))
        }
      }
    },
    setOptions({ expectedData, actualData, ldata } = {}) {
      this.chart.setOption({
        xAxis: {
          data: [
            '1月',
            '2月',
            '3月',
            '4月',
            '5月',
            '6月',
            '7月',
            '8月',
            '9月',
            '10月',
            '11月',
            '12月'
          ],
          boundaryGap: false,
          axisTick: {
            show: false
          }
        },
        grid: {
          left: 10,
          right: 10,
          bottom: 20,
          top: 30,
          containLabel: true
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross'
          },
          padding: [5, 10]
        },
        yAxis: {
          axisTick: {
            show: false
          }
        },
        legend: {
          data: ['高风险', '中风险', '低风险']
        },
        series: [
          {
            name: '高风险',
            itemStyle: {
              normal: {
                color: '#F56C6C',
                lineStyle: {
                  color: '#F56C6C',
                  width: 2
                },
                areaStyle: {
                  color: '#F56C6C'
                }
              }
            },
            smooth: true,
            type: 'line',
            data: expectedData,
            animationDuration: 2800,
            animationEasing: 'cubicInOut'
          },
          {
            name: '中风险',
            smooth: true,
            type: 'line',
            itemStyle: {
              normal: {
                color: '#E6A23C',
                lineStyle: {
                  color: '#E6A23C',
                  width: 2
                },
                areaStyle: {
                  color: '#E6A23C'
                }
              }
            },
            data: actualData,
            animationDuration: 2800,
            animationEasing: 'quadraticOut'
          },
          {
            name: '低风险',
            smooth: true,
            type: 'line',
            itemStyle: {
              normal: {
                color: '#909399',
                lineStyle: {
                  color: '#909399',
                  width: 2
                },
                areaStyle: {
                  color: '#909399'
                }
              }
            },
            data: ldata,
            animationDuration: 2800,
            animationEasing: 'quadraticOut'
          }
        ]
      })
    },
    initChart() {
      this.chart = echarts.init(this.$el, 'macarons')
      this.setOptions(this.chartData)
    }
  }
}
</script>
