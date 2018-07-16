<template>
  <div>
    <div :is="card" @changeCard="changeCard"></div>
  </div>
</template>
<script>
import Manage from './manage'
import Add from './add'
export default {
  components: {
    Manage,
    Add
  },
  data () {
    return {
      card: 'manage'
    }
  },
  methods: {
    changeCard(val){
      this.card = val
    }
  }
}
</script>
