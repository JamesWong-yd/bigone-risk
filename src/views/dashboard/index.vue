<template>
  <div style="padding:10px">
    <el-row :gutter="10">
      <el-col :span="18">
        <bar-chart style="margin-bottom: 10px;"></bar-chart>
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>实时风险</span>
          </div>
          <div>
            <el-table
              :stripe="true"
              :data="tabledata"
              style="width: 100%">
              <el-table-column
                prop="a"
                label="风险级别">
                <template slot-scope="scope">
                <el-tag
                  :type="dangerComputed(scope.row.a)"
                  disable-transitions>{{scope.row.a}}</el-tag>
              </template>
              </el-table-column>
              <el-table-column
                prop="b"
                label="项目名称"
                width="240">
              </el-table-column>
              <el-table-column
                prop="c"
                label="业务类型">
              </el-table-column>
              <el-table-column
                prop="d"
                label="问题描述"
                width="200">
              </el-table-column>
              <el-table-column
                prop="e"
                label="风险点产生日期">
              </el-table-column>
              <el-table-column
                prop="f"
                label="报送者">
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
      </el-col>
      <el-col :span="6">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>实时风险提示信息</span>
          </div>
          <div class="bigone-cansecl">
            <el-collapse @change="handleChange" accordion>
              <el-collapse-item title="关于临迁费的风险信息" name="1">
                <div class="bigone-cancel-color">报送者1报送了一条关于临迁费的风险信息，请尽快处理。</div>
              </el-collapse-item>
              <el-collapse-item title="关于拆运费的风险信息" name="2">
                <div class="bigone-cancel-color">报送者2报送了一条关于拆运费的风险信息，请尽快处理。</div>
              </el-collapse-item>
              <el-collapse-item title="关于临迁费的风险信息" name="3">
                <div class="bigone-cancel-color">报送者3报送了一条关于临迁费的风险信息，请尽快处理。</div>
              </el-collapse-item>
              <el-collapse-item title="关于复建费的风险信息" name="4">
                <div class="bigone-cancel-color">报送者4报送了一条关于复建费的风险信息，请尽快处理。</div>
              </el-collapse-item>
              <el-collapse-item title="关于临迁费的风险信息" name="5">
                <div class="bigone-cancel-color">报送者5报送了一条关于临迁费的风险信息，请尽快处理。</div>
              </el-collapse-item>
              <el-collapse-item title="关于复建费的风险信息" name="6">
                <div class="bigone-cancel-color">报送者6报送了一条关于复建费的风险信息，请尽快处理。</div>
              </el-collapse-item>
            </el-collapse>
          </div>
        </el-card>
        <el-card class="box-card" style="margin-top:10px">
          <div slot="header" class="clearfix">
            <span>条例规范下载</span>
          </div>
          <div class="bigone-cansecl bigone-upload">
            <div>《广州市城市更新办法》</div>
            <div>《广州市旧村庄更新实施办法》</div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import SSfXdata from "@/mock/SHFX"
import BarChart from '@/views/mdviews/danger/danger'

export default {
  data() {
    return {
      page: 1,
      pageSize: 10,
      total: 18,
      tabledata: []
    }
  },
  created () {
    this.tabledata = SSfXdata.filter((item,index)=>{
      return index<5
    })
  },
  methods: {
    dangerComputed(val) {
      if (val === '高') {
        return 'danger'
      }
      if (val === '中') {
        return 'warning'
      }
      return 'info'
    },
    handleSizeChange() {},
    handleCurrentChange() {},
    handleChange() {}
  },
  components: {
    BarChart
  }
}
</script>
<style scoped>
.bigone-cansecl {
  height: 360px;
  overflow: hidden;
  overflow-y: scroll;
}
.bigone-upload {
  height: 220px;
  overflow-y: scroll;
}
.bigone-cansecl::-webkit-scrollbar {
  width: 3px;
}
.bigone-cansecl::-webkit-scrollbar-track {
  background-color: #bee1eb;
}
.bigone-cansecl::-webkit-scrollbar-thumb {
  background-color: #00aff0;
}
.bigone-cansecl::-webkit-scrollbar-thumb:hover {
  background-color: #9c3;
}
.bigone-cansecl::-webkit-scrollbar-thumb:active {
  background-color: #00aff0;
}

.bigone-upload div {
  line-height: 40px;
  border-bottom: 1px solid #ccc;
  cursor: pointer;
  color: #606266;
}
.bigone-cansecl div:hover {
  color: #409eff;
}
</style>
