<template>
  <div style="margin:10px;">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>风险处理</span>
        <div class="btn">
          <el-button @click="changeCard">返回</el-button>
          <el-button type="primary" v-if="type==='edit'" @click="changeCard">提交核查</el-button>
          <el-button type="primary" v-if="type==='edit'" @click="changeCard">风险移除</el-button>
          <el-button type="primary" v-if="type==='edit'" @click="changeCard">保存</el-button>
        </div>
      </div>
      <el-row>
        <!--  -->
        <el-col :span="5" style="border-right:1px solid #ccc">
          <div class="title">流程</div>
          <div class="my-edit" style="height: 400px;width:200px;margin: 0 auto">
            <el-steps direction="vertical" :active="2" >
              <el-step title="开始"></el-step>
              <el-step title="风险告警"></el-step>
              <el-step title="风险处理"></el-step>
              <el-step title="风险核查"></el-step>
              <el-step title="审核"></el-step>
              <el-step title="结束"></el-step>
            </el-steps>
          </div>
        </el-col>
        <!--  -->
        <el-col :span="19"  style="border-left:1px solid #ccc">
          <div class="title">风险基本信息</div>
          <el-form ref="form" :model="form" label-width="120px">
            <el-row>
              <el-col :span="8">
                <el-form-item label="风险流水号" >
                  <el-input v-model="form.a" :disabled="true"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="16">
                <el-form-item label="项目名称" >
                  <el-input v-model="form.b" :disabled="true"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="风险点产生日期" >
                  <el-input v-model="form.c" :disabled="true"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="触发风险点" >
                  <el-input v-model="form.d" :disabled="true"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="所属业务处室" >
                  <el-select v-model="form.e" placeholder="请选择" style="width:100%" :disabled="true">
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
              <el-col :span="8">
                <el-form-item label="业务类别" required>
                  <el-select v-model="form.f" placeholder="请选择" style="width:100%" :disabled="true">
                    <el-option label="旧村改造" value="旧村改造"></el-option>
                    <el-option label="旧厂改造" value="旧厂改造"></el-option>
                    <el-option label="旧城镇改造" value="旧城镇改造"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="报送人" >
                  <el-input v-model="form.g" :disabled="true"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="风险点级别" required>
                  <el-select v-model="form.h" placeholder="请选择" style="width:100%" :disabled="true">
                    <el-option label="高" value="高"></el-option>
                    <el-option label="中" value="中"></el-option>
                    <el-option label="低" value="低"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="24">
                <el-form-item label="问题描述" >
                  <el-input v-model="form.i" type="textarea" :rows="2" :disabled="true"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
            <el-col :span="24">
              <el-form-item label="环节" >
                <el-steps :active="active" finish-status="success" class="my-step" :disabled="type ==='look'">
                  <el-step title="项目申请" @click.native="active = 0"></el-step>
                  <el-step title="项目初审" @click.native="active = 1"></el-step>
                  <el-step title="项目审阅" @click.native="active = 2"></el-step>
                  <el-step title="项目会审" @click.native="active = 3"></el-step>
                  <el-step title="项目确认" @click.native="active = 4"></el-step>
                </el-steps>
              </el-form-item>
            </el-col>
          </el-row>
            <!--  -->
            <div class="title" style="border-top: 1px solid #ccc"></div>
            <el-tabs>
              <el-tab-pane label="风险处理信息">
                <el-row>
                  <el-col :span="8">
                    <el-form-item label="案件风险状态" >
                      <el-input v-model="form.j" :disabled="true"></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">
                    <el-form-item label="处理人" >
                      <el-select v-model="form.k" placeholder="默认当前操作人" multiple style="width:100%" :disabled="type!=='edit'">
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
                  <el-col :span="8">
                    <el-form-item label="中止时限" >
                        <el-input placeholder="" v-model="form.l" :disabled="type!=='edit'">
                          <template slot="append">天</template>
                        </el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="8">
                    <el-form-item label="违规性质" >
                        <el-input placeholder="" v-model="form.w" :disabled="type!=='edit'">
                        </el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="24">
                    <el-form-item label="处理结果及理由" >
                      <el-input v-model="form.m" type="textarea" :rows="2" :disabled="type!=='edit'"></el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="24">
                    <el-form-item label="处理整改情况" >
                      <el-input v-model="form.n" type="textarea" :rows="2" :disabled="type!=='edit'"></el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row>
                  <el-form-item label="附件" v-if="type==='edit'" >
                  <el-upload
                    class="upload-demo"
                    action="https://jsonplaceholder.typicode.com/posts/"
                    :on-preview="handlePreview"
                    :on-remove="handleRemove"
                    :file-list="fileList2"
                    list-type="picture">
                    <el-button size="small" type="primary">点击上传</el-button>
                    <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                  </el-upload>
                  </el-form-item>
                </el-row>
              </el-tab-pane>
              <el-tab-pane label="防控措施">
                <el-row>
                  <el-col :span="24">
                    <el-form-item label="操作" >
                      <el-radio v-model="form.o" label="1" :disabled="type!=='edit'">风险解锁</el-radio>
                      <el-radio v-model="form.o" label="2" :disabled="type!=='edit'">锁定案件</el-radio> </el-form-item>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="24">
                    <el-form-item label="防控措施记录" >
                      <el-input v-model="form.p" type="textarea" :rows="2" :disabled="type!=='edit'"></el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="24">
                    <el-form-item label="备注" >
                      <el-input v-model="form.q" type="textarea" :rows="2" :disabled="type!=='edit'"></el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
              </el-tab-pane>
              <el-tab-pane label="情况核查">
                <el-row>
                  <el-col :span="8">
                    <el-form-item label="核查人" >
                      <el-select v-model="form.r" placeholder="默认当前操作人" multiple style="width:100%" :disabled="type!=='edit'">
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
                  <el-col :span="8">
                    <el-form-item label="核查时限" >
                      <el-date-picker
                        v-model="form.s"
                        :disabled="type!=='edit'"
                        type="date"
                        style="width:100%"
                        placeholder="选择日期">
                      </el-date-picker>
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">
                    <el-form-item label="核查方式" >
                      <el-select v-model="form.t" placeholder="" multiple style="width:100%" :disabled="type!=='edit'">
                        <el-option label="抽查" value="抽查"></el-option>
                      </el-select>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="24">
                    <el-form-item label="核查情况" >
                      <el-input v-model="form.u" type="textarea" :rows="2" :disabled="type!=='edit'"></el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="24">
                    <el-form-item label="核查结果" >
                      <el-input v-model="form.v" type="textarea" :rows="2" :disabled="type!=='edit'"></el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
              </el-tab-pane>
            </el-tabs>
          </el-form>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>
<script>
export default {
  props: {
    type: {
      type: String,
      default: 'look'
    }
  },
  data() {
    return {
      form: {
        a: 'YW180700001',
        b: '天河区棠下旧村庄全面改造成本核算项目',
        c: '2018-05-25',
        d: '拆运费',
        e: '项目审核处',
        f: '旧村改造',
        g: '罗嘉伟',
        h: '高',
        i: '天河区棠下项目中门牌号为A05的户主的拆用费大于每平方30元',
        j: '案件已被锁止',
        k: '默认当前操作人',
        l: '3',
        m: '由于房屋周遭的环境问题影响导致的费用增加，请查看上传的附件照片。',
        n: '',
        o: '1',
        p: '',
        q: '',
        r: '',
        s: '',
        t: '',
        u: '',
        v: ''
      },
      fileList2: [],
      active: 3
      }
  },
  methods: {
    changeCard() {
      this.$emit('changeCard', { card: 'manage', type: 'add' })
    },
    handlePreview() {},
    handleRemove() {}
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

