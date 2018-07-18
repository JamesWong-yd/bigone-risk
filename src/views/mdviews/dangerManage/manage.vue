<template>
  <div class="main">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>风险点管理</span>
        <div class="btn" >
          <el-button type="primary" @click="changeCard">添加风险点</el-button>
        </div>
      </div>
      <div>
        <!--  -->
        <div>
          <el-form :model="ruleForm" ref="ruleForm" label-width="100px" >
            <el-row>
              <el-col :span="5">
                <el-form-item label="风险点名称" prop="name">
                  <el-input v-model="ruleForm.a"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="5">
                <el-form-item label="风险点描述" prop="name">
                  <el-input v-model="ruleForm.b"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="5">
                <el-form-item label="风险级别" prop="region">
                  <el-select v-model="ruleForm.c" placeholder="请选择">
                    <el-option label="高" value="高"></el-option>
                    <el-option label="中" value="中"></el-option>
                    <el-option label="低" value="低"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="5">
                <el-form-item label="风险点编号" prop="name">
                  <el-input v-model="ruleForm.d"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="4" style="text-align:center">
                <el-button type="primary">查询</el-button>
                <el-button>重置</el-button>
              </el-col>
            </el-row>
          </el-form>
        </div>
        <!--  -->
        <el-table
          :stripe="true"
          :data="tabledata"
          :fit="true">
          <el-table-column
            type="index"
            width="50">
          </el-table-column>
          <el-table-column
            prop="a"
            label="风险点编码">
          </el-table-column>
          <el-table-column
            prop="b"
            label="风险点名称">
          </el-table-column>
          <el-table-column
            prop="c"
            label="风险点描述"
            width="350">
          </el-table-column>
          <el-table-column
            prop="d"
            label="风险级别">
            <template slot-scope="scope">
            <el-tag
              :type="dangerComputed(scope.row.d)"
              disable-transitions>{{scope.row.d}}</el-tag>
          </template>
          </el-table-column>
          <el-table-column
            prop="e"
            label="业务处室"
            width="200">
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button
                size="mini"
                @click="handleEdit('look')">查看</el-button>
              <el-button
                size="mini"
                type="warning"
                @click="handleEdit('edit')">修改</el-button>
              <el-button
                size="mini"
                type="danger"
                @click="handleChange(scope.$index, scope.row)">失效</el-button>
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
import FXDGL from '@/mock/FXDGL'

export default {
  name: 'aaa',
  data() {
    return {
      ruleForm: {
        a: '',
        b: '',
        c: '',
        d: ''
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
    handleEdit(ei) {
      this.$emit('changeCard', { card: 'add', type: ei })
    },
    handleChange() {},
    changeCard() {
      this.$emit('changeCard', { card: 'add', type: 'add' })
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
