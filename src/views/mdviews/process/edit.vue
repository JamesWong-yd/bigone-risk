<template>
  <div style="margin:10px;">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>风险处理</span>
        <div class="btn">
          <el-button @click="changeCard">返回</el-button>
          <el-button type="primary">提交核查</el-button>
          <el-button type="primary">风险移除</el-button>
          <el-button type="primary">保存</el-button>
        </div>
      </div>
      <el-row>
        <!--  -->
        <el-col :span="5" style="border-right:1px solid #ccc">
          <div class="title">流程</div>
          <div class="my-edit" style="height: 400px;width:200px;margin: 0 auto">
            <el-steps direction="vertical" :active="3" >
              <el-step title="开始"></el-step>
              <el-step title="预收监控"></el-step>
              <el-step title="收件"></el-step>
              <el-step title="处理"></el-step>
              <el-step title="增证"></el-step>
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
                  <el-input v-model="form.a"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="16">
                <el-form-item label="项目名称" >
                  <el-input v-model="form.b"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="风险点产生日期" >
                  <el-input v-model="form.c"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="触发风险点" >
                  <el-input v-model="form.d"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="所属业务处室" >
                  <el-select v-model="form.e" placeholder="请选择" style="width:100%">
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
                  <el-select v-model="form.f" placeholder="请选择" style="width:100%">
                    <el-option label="旧村改造" value="旧村改造"></el-option>
                    <el-option label="旧厂改造" value="旧厂改造"></el-option>
                    <el-option label="旧城镇改造" value="旧城镇改造"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="报送人" >
                  <el-input v-model="form.g"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="风险点级别" required>
                  <el-select v-model="form.h" placeholder="请选择" style="width:100%">
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
                  <el-input v-model="form.i" type="textarea" :rows="2"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <!--  -->
            <div class="title" style="border-top: 1px solid #ccc">风险基本信息</div>
            <el-row>
              <el-col :span="8">
                <el-form-item label="案件风险状态" >
                  <el-input v-model="form.j"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="处理人" >
                  <el-select v-model="form.k" placeholder="默认当前操作人" multiple style="width:100%">
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
                    <el-input placeholder="" v-model="form.l">
                      <template slot="append">天</template>
                    </el-input>
                 </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="24">
                <el-form-item label="处理结果及理由" >
                  <el-input v-model="form.m" type="textarea" :rows="2"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="24">
                <el-form-item label="处理结果及理由" >
                  <el-input v-model="form.n" type="textarea" :rows="2"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-form-item label="附件" >
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
            <el-row>
              <el-col :span="24">
                <el-form-item label="操作" >
                  <el-radio v-model="form.o" label="1">风险解锁</el-radio>
                  <el-radio v-model="form.o" label="2">锁定案件</el-radio> </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </el-col>
      </el-row>
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
        o: ''
      },
      fileList2: []
    }
  },
  methods: {
    changeCard() {},
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
.title{
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

