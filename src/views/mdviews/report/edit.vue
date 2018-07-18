<template>
  <div style="margin:10px;">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>查看统计</span>
        <div class="btn">
          <el-button @click="changeCard">返回</el-button>
        </div>
      </div>
      <el-tabs v-model="activeName2" type="border-card">
        <el-tab-pane label="月度风险廉政分析报告1（按风险级别统计）" name="1">
          <el-form :model="form" ref="ruleForm" label-width="150px" >
            <el-row>
              <el-col :span="10">
                <el-form-item label="风险点产生日期" prop="region">
                  <el-date-picker style="width:100%"
                    v-model="form.b"
                    type="month"
                    placeholder="选择日期">
                  </el-date-picker>
                </el-form-item>
              </el-col>
              <el-col :span="10">
                <el-form-item label="业务处室">
                  <el-select v-model="form.c" placeholder="请选择" style="width:100%">
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
              <el-col :span="4" style="text-align:center;padding-right:42px">
                <el-button type="primary" @click="handlePreview">查询</el-button>
              </el-col>
            </el-row>
            <el-row>
              <el-col style="border-top:1px solid #ccc;line-height:50px">月度风险级别情况:</el-col>
              <el-col :span="24">
                <el-table
                  :data="fileList2"
                  stripe
                  style="width: 100%">
                  <el-table-column
                    type="index"
                    width="50">
                  </el-table-column>
                  <el-table-column
                    prop="a"
                    label="风险点">
                  </el-table-column>
                  <el-table-column
                    prop="b"
                    label="风险总数">
                  </el-table-column>
                  <el-table-column
                    prop="c"
                    label="高风险">
                  </el-table-column>
                  <el-table-column
                    prop="d"
                    label="中风险">
                  </el-table-column>
                  <el-table-column
                    prop="e"
                    label="低风险">
                  </el-table-column>
                </el-table>
              </el-col>
              <el-col style="padding-top:50px">
                <line-chart v-if="activeName2==='1'" :activeName="activeName2" ></line-chart>
              </el-col>
            </el-row>
          </el-form>
        </el-tab-pane>
        <el-tab-pane label="月度风险廉政分析报告2（按风险数量统计）" name="2">
          <el-form :model="form" ref="ruleForm" label-width="150px" >
            <el-row>
              <el-col :span="10">
                <el-form-item label="风险点产生日期" prop="region">
                  <el-date-picker style="width:100%"
                    v-model="form.b"
                    type="year"
                    placeholder="选择日期">
                  </el-date-picker>
                </el-form-item>
              </el-col>
              <el-col :span="10">
                <el-form-item label="业务处室">
                  <el-select v-model="form.c" placeholder="请选择" style="width:100%">
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
              <el-col :span="4" style="text-align:center;padding-right:42px">
                <el-button type="primary" @click="handlePreview">查询</el-button>
              </el-col>
            </el-row>
            <el-row>
              <el-col style="border-top:1px solid #ccc;line-height:50px">月度风险级别情况:</el-col>
              <el-col :span="24">
                <el-table
                  :data="fileList"
                  stripe
                  style="width: 100%">
                  <el-table-column
                    type="index"
                    width="50">
                  </el-table-column>
                  <el-table-column
                    prop="aa"
                    label="风险点">
                  </el-table-column>
                  <el-table-column
                    prop="a"
                    label="1月">
                  </el-table-column>
                  <el-table-column
                    prop="b"
                    label="2月">
                  </el-table-column>
                  <el-table-column
                    prop="c"
                    label="3月">
                  </el-table-column>
                  <el-table-column
                    prop="d"
                    label="4月">
                  </el-table-column>
                  <el-table-column
                    prop="e"
                    label="5月">
                  </el-table-column>
                  <el-table-column
                    prop="f"
                    label="6月">
                  </el-table-column>
                  <el-table-column
                    prop="g"
                    label="7月">
                  </el-table-column>
                  <el-table-column
                    prop="h"
                    label="8月">
                  </el-table-column>
                  <el-table-column
                    prop="i"
                    label="9月">
                  </el-table-column>
                  <el-table-column
                    prop="j"
                    label="10月">
                  </el-table-column>
                  <el-table-column
                    prop="k"
                    label="11月">
                  </el-table-column>
                  <el-table-column
                    prop="l"
                    label="12月">
                  </el-table-column>
                </el-table>
              </el-col>
              <el-col :span="24" style="padding-top:50px">
                <line-chart v-if="activeName2==='2'" :activeName="activeName2"></line-chart>
              </el-col>
            </el-row>
          </el-form>
        </el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>
<script>
import lineChart from './LineChart'
export default {
  data() {
    return {
      activeName2: '1',
      form: {
        a: '',
        b: '',
        c: '',
        d: '',
        e: '',
        f: '',
        g: '',
        h: '',
        i: '',
        j: '',
        k: '',
        l: '',
        m: '',
        n: '',
        o: ''
      },
      fileList: [
        {aa:'拆运费',a:'3',b:'7',c:'3',d:'8',e:'5',f:'6',g:'4',h:'8',i:'9',j:'8',k:'1',l:'0'},
        {aa:'前期费',a:'12',b:'2',c:'3',d:'4',e:'5',f:'2',g:'6',h:'2',i:'3',j:'10',k:'2',l:'7'},
        {aa:'复建费',a:'13',b:'6',c:'9',d:'0',e:'5',f:'6',g:'5',h:'8',i:'2',j:'4',k:'1',l:'4'},
        {aa:'临迁费',a:'7',b:'1',c:'3',d:'4',e:'1',f:'3',g:'7',h:'4',i:'1',j:'10',k:'4',l:'1'},
        ],
      fileList2: [
        {
          a: '拆运费',
          b: '12',
          c: '5',
          d: '3',
          e: '2'
        },
        {
          a: '前期费',
          b: '2',
          c: '0',
          d: '1',
          e: '1'
        },
        {
          a: '复建费',
          b: '5',
          c: '4',
          d: '1',
          e: '0'
        },
        {
          a: '临迁费',
          b: '18',
          c: '6',
          d: '7',
          e: '5'
        }
      ]
    }
  },
  methods: {
    changeCard() {
      this.$emit('changeCard', 'manage')
    },
    handlePreview() {},
    handleRemove() {}
  },
  components: {
    lineChart
  }
}
</script>
<style scoped>
.clearfix {
  position: relative;
}
.clearfix .btn {
  display: inline-block;
  position: absolute;
  top: -10px;
  right: -10px;
}
.my-step {
  cursor: pointer;
}
.mask-title {
  font-size: 12px;
}
.title {
  font-size: 16px;
  font-weight: 800;
  line-height: 40px;
  margin-bottom: 10px;
  border-bottom: 1px solid #ccc;
  text-indent: 10px;
}
</style>

<style>
.my-edit .el-step.is-horizontal .el-step__line {
  top: 17px;
}
.my-edit .is-process {
  color: red;
  border-color: red;
}
</style>

