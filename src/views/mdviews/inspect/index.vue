<template>
  <div>
    <manage v-if="card === 'manage'" @changeCard="changeCard"></manage>
    <add-danger v-else @changeCard="changeCard" :type="type"></add-danger>
  </div>
</template>
<script>
import Manage from './manage'
import AddDanger from './edit'
export default {
  name: 'manageIndex',
  components: {
    Manage,
    AddDanger
  },
  data () {
    return {
      card: 'manage',
      type: 'add'
    }
  },
  methods: {
    changeCard(val){
      this.card = val.card
      this.type = val.type
    }
  }
}
</script>
