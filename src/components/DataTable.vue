<template>
  <div>
    <b-table id="my-table" :items="data" :per-page="0" :fields="fields">
      <template #cell(view)="row">
        <b-button v-model="row.detailsShowing" @click="row.toggleDetails">
          Details
        </b-button>
      </template>

      <template #row-details="row">
        <b-card>
          <b-row class="mb-2">
            <b-col sm="3" class="text-sm-right"><b>Name:</b></b-col>
            <b-col>{{ row.item.name }}</b-col>
            <b-col>{{ row.item.description }}</b-col>
            <b-col>{{ row.item.date }}</b-col>
          </b-row>
        </b-card>
      </template>
    </b-table>
    <b-pagination v-on:change="onPageChange"   :value="currentPage" :total-rows="dataLength" :per-page="10"
      aria-controls="my-table" pills></b-pagination>
  </div>
</template>

<script>

export default {
  name: 'DataTable',
  data: () => ({
    fields: ['id', 'value', 'name', 'view'],
  }),
  mounted() {
    this.$store.dispatch('getData');
  },
  computed: {
    data() {
      return this.$store.state.data;
    },
    dataLength() {
      return this.$store.state.dataLength;
    },
    currentPage(){
      return this.$store.state.currentPage;
    }
  },
  methods: {
    onPageChange(value) {
      this.$store.dispatch('updatePage', value);
      this.$store.dispatch('getData');
    }
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
