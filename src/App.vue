<template>
  <div>
    <template>
      <data-Table :data="data" />
    </template>
    <data-chart :data="data" />
  </div>
</template>

<script>
import DataChart from './components/DataChart.vue'
import DataTable from './components/DataTable.vue'

export default {
  name: 'App',
  // props: {
  //   data: Array
  // },
  components: {
    DataTable,
    DataChart
  },  
  computed: {
    data() {
      return this.$store.state.data
    }
  }
}
</script>
