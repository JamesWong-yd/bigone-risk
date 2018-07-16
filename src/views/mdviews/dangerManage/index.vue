<template>
  <div>
    <manage v-if="card === 'manage'" @changeCard="changeCard"></manage>
    <add-danger v-else @changeCard="changeCard"></add-danger>
  </div>
</template>
<script>
import Manage from './manage'
import AddDanger from './add'
export default {
  name: 'manageIndex',
  components: {
    Manage,
    AddDanger
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
