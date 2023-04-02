<template>
  <div>
    <canvas ref="chart" />
  </div>
</template>

<script>
import Chart from 'chart.js';

export default {
  name: 'DataChart',
  // props: {
  //   data: Array
  // },
  mounted() {
    this.renderChart();
  }, 
  computed: {
    data() {
      return this.$store.state.data
    }
  },
  methods: {
    renderChart() {
      const ctx = this.$refs.chart.getContext('2d');
      const data = this.calculateChartData();
      
      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['Total Value', 'Average Value', 'Number of Items >= 50'],
          datasets: [{
            label: 'Data Summary',
            data: data,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)'
            ],
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
          },
          responsive: true,
          maintainAspectRatio: false
        }
      });
    },
    calculateChartData() {
      const totalValue = this.data.reduce((acc, curr) => acc + curr.value, 0);
      const avgValue = totalValue / this.data.length;
      const itemsGreaterThan50 = this.data.filter(item => item.value >= 50).length;
      
      return [totalValue, avgValue, itemsGreaterThan50];
    }
  }
};
</script>

<style scoped>
canvas {
  max-width: 500px;
  max-height: 500px;
}
</style>
