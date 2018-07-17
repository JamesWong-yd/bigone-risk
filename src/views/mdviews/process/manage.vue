<template>
  <div class="main">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>风险核查</span>
        <!-- <div class="btn" >
          <el-button type="primary" @click="changeCard">添加风险点</el-button>
        </div> -->
      </div>
      <div>
        <!--  -->
        <div>
          <el-form :model="ruleForm" ref="ruleForm" label-width="150px" >
            <el-row>
              <el-col :span="6">
                <el-form-item label="系统名称" >
                  <el-input v-model="ruleForm.a"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="项目名称">
                  <el-input v-model="ruleForm.b"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="风险级别">
                  <el-select v-model="ruleForm.c" placeholder="请选择" style="width:100%">
                    <el-option label="高" value="高"></el-option>
                    <el-option label="中" value="中"></el-option>
                    <el-option label="低" value="低"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="风险点产生日期" prop="region">
                  <el-date-picker
                    v-model="ruleForm.d"
                    type="date"
                    placeholder="选择日期">
                  </el-date-picker>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="6">
                <el-form-item label="风险详细信息" prop="name">
                  <el-input v-model="ruleForm.e"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="风险点处理情况" prop="name">
                  <el-input v-model="ruleForm.f"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="触发风险点" prop="name">
                  <el-input v-model="ruleForm.g"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="6" style="text-align:right;padding-right:42px">
                <el-button type="primary">查询</el-button>
                <el-button>重置</el-button>
              </el-col>
            </el-row>
          </el-form>
        </div>
        <hr color="#ccc">
        <!--  -->
        <el-table
          :data="tabledata"
          :fit="true">
          <el-table-column
            type="index"
            width="50">
          </el-table-column>
          <el-table-column
            prop="a"
            label="风险业务编号">
          </el-table-column>
          <el-table-column
            prop="b"
            label="项目名称">
          </el-table-column>
          <el-table-column
            prop="c"
            label="风险级别">
            <template slot-scope="scope">
            <el-tag
              :type="dangerComputed(scope.row.c)"
              disable-transitions>{{scope.row.c}}</el-tag>
          </template>
          </el-table-column>
          <el-table-column
            prop="d"
            label="业务类型">
          </el-table-column>
          <el-table-column
            prop="e"
            label="触发风险点">
          </el-table-column>
          <el-table-column
            prop="f"
            label="问题描述">
          </el-table-column>
          <el-table-column
            prop="g"
            label="风险点处理情况">
          </el-table-column>
          <el-table-column
            prop="h"
            label="风险点产生日期">
          </el-table-column>
          <el-table-column
            prop="i"
            label="报送者">
          </el-table-column>
          <el-table-column label="操作" width="200">
            <template slot-scope="scope">
              <el-button
              size="mini"
              type=""
              @click="handleEdit(scope.$index, scope.row)">查看</el-button>
              <el-button
                size="mini"
                type="warning"
                @click="handleEdit(scope.$index, scope.row)">处理风险点</el-button>
            </template>
          </el-table-column>
        </el-table>
        <div style="margin-top:10px">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page.sync="page"
            :page-size="pageSize"
            layout="prev, pager, next, jumper"
            :total="total">
          </el-pagination>
        </div>
      </div>
    </el-card>
  </div>
</template>
<script>
import FXDGL from '@/mock/FXCL'

export default {
  name: 'aaa',
  data() {
    return {
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
      tabledata: []
    }
  },
  created() {
    this.tabledata = FXDGL.filter((item, index) => {
      return index < 10
    })
  },
  methods: {
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
