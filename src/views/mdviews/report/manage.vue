<template>
  <div class="main">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>风险报告</span>
        <!-- <div class="btn" >
          <el-button @click="changeCard">查看统计</el-button>
        </div> -->
      </div>
      <el-form :model="ruleForm" ref="ruleForm" label-width="150px" >
        <el-row>
          <el-col :span="6">
            <el-form-item label="业务类型" >
              <el-select v-model="ruleForm.a" placeholder="请选择" style="width:100%">
                <el-option label="旧村改造" value="旧村改造"></el-option>
                <el-option label="旧厂改造" value="旧厂改造"></el-option>
                <el-option label="旧城镇改造" value="旧城镇改造"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="时间范围" prop="region">
              <el-date-picker
                v-model="ruleForm.b"
                type="daterange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期">
              </el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="业务处室">
              <el-select v-model="ruleForm.c" placeholder="请选择" style="width:100%">
                <el-option label="办公室" value="办公室"></el-option>
                <el-option label="组织人事处（政策法规处）" value="组织人事处（政策法规处）"></el-option>
                <el-option label="计划资金处" value="计划资金处"></el-option>
                <el-option label="土地整备处" value="土地整备处"></el-option>
                <el-option label="前期工作处" value="前期工作处"></el-option>
                <el-option label="项目审核处" value="项目审核处"></el-option>
                <el-option label="建设监督处" value="建设监督处"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="3" style="text-align:center;padding-right:42px">
            <el-button type="primary" @click="downloadpdf">生成报告</el-button>
          </el-col>
        </el-row>
      </el-form>
      <div v-if="pdfshow">
        <!--  -->
        <embed src="./static/aaaa.pdf" type="application/pdf" width="100%" :style="{height:heights+'px'}"></embed>
      </div>
    </el-card>
  </div>
</template>
<script>
import FXDGL from '@/mock/FXHC'

export default {
  name: 'aaa',
  data() {
    return {
      heights: '600',
      ruleForm: {
        a: '',
        b: '',
        c: '',
        d: '',
        e: '',
        f: '',
        g: ''
      },
      page: 1,
      pageSize: 10,
      total: 7,
      tabledata: [],
      pdfshow: false
    }
  },
  created() {
    this.heights = this.heightsChange()
    let _this = this
    window.onresize = function() {
      _this.heights = _this.heightsChange()
    }
  },
  methods: {
    downloadpdf() {
      this.pdfshow = true
    },
    heightsChange() {
      return window.innerHeight - 300
    },
    handleSizeChange() {},
    handleCurrentChange() {},
    handleEdit() {
      this.$emit('changeCard', 'add')
    },
    handleChange() {},
    changeCard() {
      this.$emit('changeCard', 'add')
    },
    dangerComputed(val) {
      if (val === '高') {
        return 'danger'
      }
      if (val === '中') {
        return 'warning'
      }
      return 'info'
    }
  }
}
</script>
<style scoped>
.main {
  margin: 10px;
  height: 100%;
}
.clearfix {
  position: relative;
}
.clearfix .btn {
  display: inline-block;
  position: absolute;
  top: -10px;
  right: -10px;
}
</style>
