<template>
  <div style="margin:10px;">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>风险点添加</span>
        <div class="btn">
          <el-button @click="changeCard">返回</el-button>
          <el-button type="primary">添加</el-button>
        </div>
      </div>
      <!--  -->
      <div>
        <el-form ref="form" :model="form" label-width="150px">
          <el-row>
            <el-col :span="8">
              <el-form-item label="业务类别" required>
                <el-select v-model="form.a" placeholder="请选择" style="width:100%">
                  <el-option label="旧村改造" value="旧村改造"></el-option>
                  <el-option label="旧厂改造" value="旧厂改造"></el-option>
                  <el-option label="旧城镇改造" value="旧城镇改造"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="风险点编码" required>
                <el-input v-model="form.b"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="风险点名称" required>
                <el-input v-model="form.c"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <el-form-item label="风险点级别" required>
                <el-select v-model="form.e" placeholder="请选择" style="width:100%">
                  <el-option label="高" value="高"></el-option>
                  <el-option label="中" value="中"></el-option>
                  <el-option label="低" value="低"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="风险点描述" required>
                <el-input v-model="form.f"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="参数信息" required>
                <el-input v-model="form.g"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </div>
      <!--  -->
      <el-tabs type="border-card">
        <el-tab-pane label="风险情况" class="my-edit">
          <el-form ref="form" :model="form" label-width="120px">
          <el-row>
            <el-col :span="24">
              <el-form-item label="环节" >
                <el-steps :active="active" finish-status="success" class="my-step">
                  <el-step title="项目申请" @click.native="active = 0"></el-step>
                  <el-step title="项目初审" @click.native="active = 1"></el-step>
                  <el-step title="项目审阅" @click.native="active = 2"></el-step>
                  <el-step title="项目会审" @click.native="active = 3"></el-step>
                  <el-step title="项目确认" @click.native="active = 4"></el-step>
                </el-steps>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <el-form-item label="流程" >
                <el-select v-model="form.h" placeholder="请选择" style="width:100%">
                  <el-option label="旧村庄全面改造成本核算" value="旧村庄全面改造成本核算"></el-option>
                  <el-option label="旧村庄微改造" value="旧村庄微改造"></el-option>
                  <el-option label="旧厂房自行改造" value="旧厂房自行改造"></el-option>
                  <el-option label="旧厂房政府收储" value="旧厂房政府收储"></el-option>
                  <el-option label="旧厂房政府收储与自行改造结合" value="旧厂房政府收储与自行改造结合"></el-option>
                  <el-option label="旧城镇全面改造" value="旧城镇全面改造"></el-option>
                  <el-option label="旧城镇微改造" value="旧城镇微改造"></el-option>
                  <el-option label="村级工业园改造" value="村级工业园改造"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="业务类型" >
                <el-select v-model="form.i" placeholder="请选择" style="width:100%">
                  <el-option label="前期费" value="前期费"></el-option>
                  <el-option label="临迁费" value="临迁费"></el-option>
                  <el-option label="拆运费" value="拆运费"></el-option>
                  <el-option label="复建费" value="复建费"></el-option>
                  <el-option label="农转用" value="农转用"></el-option>
                  <el-option label="不可预见费" value="不可预见费"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="业务处室" >
                <el-select v-model="form.j" placeholder="请选择" style="width:100%">
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
          </el-row>
          <el-row>
            <el-col :span="24">
              <el-form-item label="判断表达式" >
                <el-input v-model="form.k" type="textarea" :rows="2"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
        </el-tab-pane>
        <el-tab-pane label="判断条件">
          <el-form ref="form" :model="form" label-width="120px">
            <el-row>
              <el-col :span="24">
                <el-form-item label="判断条件" >
                  <el-input v-model="form.l" type="textarea" :rows="2"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="24">
                <el-form-item label="处理依据" >
                  <el-input v-model="form.m" type="textarea" :rows="2"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </el-tab-pane>
        <el-tab-pane label="系统防控措施">
          <el-form ref="form" :model="form" label-width="120px">
            <el-row>
              <el-col :span="12">
                <el-form-item label="处理操作" >
                  <el-radio v-model="form.n" label="允许继续办案">
                    <i class="el-icon-success" style="color:#67C23A"></i> 允许继续办案</el-radio>
                  <el-radio v-model="form.n" label="锁定案件">
                    <i class="el-icon-error" style="color:red"></i>  锁定案件</el-radio>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="通知形式" >
                  <el-radio v-model="form.o" label="短信">
                    <i class="el-icon-news" style="color:#0f0"></i> 短信</el-radio>
                  <el-radio v-model="form.o" label="邮件">
                    <i class="el-icon-message" style="color:#00f"></i> 邮件</el-radio>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="12">
                <el-form-item label="通知范围" >
                  <el-select v-model="form.p" placeholder="请选择" multiple style="width:100%">
                    <el-option label="人员1" value="人员1"></el-option>
                    <el-option label="人员2" value="人员2"></el-option>
                    <el-option label="人员3" value="人员3"></el-option>
                    <el-option label="人员4" value="人员4"></el-option>
                    <el-option label="人员5" value="人员5"></el-option>
                    <el-option label="人员6" value="人员6"></el-option>
                    <el-option label="人员7" value="人员7"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </el-tab-pane>
        <el-tab-pane label="信息模板">
          <el-form ref="form" :model="form" label-width="120px">
            <el-row>
              <el-col>
                <el-form-item label="系统提示">
                  <el-tabs v-model="activeName1">
                    <el-tab-pane label="预制" name="1">
                      <el-checkbox v-model="form.q">显示办案时间</el-checkbox>
                      <el-checkbox v-model="form.qq">显示案件名称</el-checkbox>
                      <el-checkbox v-model="form.qqq">显示案件状态</el-checkbox>
                    </el-tab-pane>
                    <el-tab-pane label="自定义" name="2">
                        自定义：<el-input v-model="form.qqqq" type="textarea" :rows="2"></el-input>
                    </el-tab-pane>
                  </el-tabs>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col>
                <el-form-item label="短信">
                  <el-tabs v-model="activeName2">
                    <el-tab-pane label="预制" name="1">
                      <el-checkbox v-model="form.r">显示办案时间</el-checkbox>
                      <el-checkbox v-model="form.rr">显示案件名称</el-checkbox>
                      <el-checkbox v-model="form.rrr">显示案件状态</el-checkbox>
                    </el-tab-pane>
                    <el-tab-pane label="自定义" name="2">
                        自定义：<el-input v-model="form.rrrr" type="textarea" :rows="2"></el-input>
                    </el-tab-pane>
                  </el-tabs>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col>
                <el-form-item label="邮件">
                  <el-tabs v-model="activeName3">
                    <el-tab-pane label="预制" name="1">
                      <el-checkbox v-model="form.s">显示办案时间</el-checkbox>
                      <el-checkbox v-model="form.ss">显示案件名称</el-checkbox>
                      <el-checkbox v-model="form.sss">显示案件状态</el-checkbox>
                    </el-tab-pane>
                    <el-tab-pane label="自定义" name="2">
                        自定义：<el-input v-model="form.ssss" type="textarea" :rows="2"></el-input>
                    </el-tab-pane>
                  </el-tabs>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
          <div class="mask-title">
            备注：
            <p>
            1.预制当选择“预制”模板时，只需勾选信息所要包含的内容信息即可，例如勾选“显示办案时间”，“显示案件名称”，“显示案件状态”后，信息内容则如下所示：您于xxx所办理的案件xxx，已处于廉政风险智能防控系统监控当中，目前案件状态为xxx！
            </p>
            <p>
            2、自定义：可根据实际情况手动编写信息模板。特定符号指代如下：办案人员符号为BARY,案件提交时间符号为AJTJSJ,案件名称符号为AJMC.案件状态符号为AJZT
            </p>
          </div>
        </el-tab-pane>
        <el-tab-pane label="风险点阈值设置">
          <div class="mask-title">
            注：本月该风险点的风险数量在阈值对应的范围内，风险点的级别自动更新
          </div>
          <el-form ref="form" :model="form" label-width="96px">
            <el-form-item label="是否设置阈值" >
              <el-switch v-model="form.t"
                          active-color="#13ce66"
                          inactive-color="#ccc">
                        </el-switch>
            </el-form-item>
          </el-form>
          <!--  -->
          <div v-if="form.t">
            <el-button type="text" style="float:right">添加阈值项</el-button>
            <el-table
              :data="tableData2"
              style="width: 100%">
              <el-table-column
                type="index"
                width="50">
              </el-table-column>
              <el-table-column
                prop="a"
                label="风险数量设置（个）">
              </el-table-column>
              <el-table-column
                prop="b"
                label="风险级别设置">
              </el-table-column>
              <el-table-column
                prop="c"
                label="时间">
              </el-table-column>
              <el-table-column
                fixed="right"
                label="操作"
                width="100">
                <template slot-scope="scope">
                  <el-button @click="handleClick(scope.row)" type="text" size="small">修改</el-button>
                  <el-button @click="handleChange(scope.row)" type="text" size="small">失效</el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
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
        o: '',
        p: '',
        q: '',
        qq: '',
        qqq: '',
        qqqq: '',
        r: '',
        rr: '',
        rrr: '',
        rrrr: '',
        s: '',
        ss: '',
        sss: '',
        ssss: '',
        t: false
      },
      active: 0,
      activeName1: '1',
      activeName2: '1',
      activeName3: '1',
      tableData2: [
        { a: '10 ~ 1000', b: '高', c: '2018-07-10 至 2018-07-30' },
        { a: '10 ~ 1000', b: '高', c: '2018-07-10 至 2018-07-30' },
        { a: '10 ~ 1000', b: '高', c: '2018-07-10 至 2018-07-30' }
      ]
    }
  },
  methods: {
    changeCard() {
      this.$emit('changeCard', 'manage')
    },
    handleClick() {},
    handleChange() {}
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

