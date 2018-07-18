<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style>
.el-table th{
  background: #CFEAF8;
}
.el-input.is-disabled .el-input__inner,.el-textarea.is-disabled .el-textarea__inner{
  color: #333
}
</style>

