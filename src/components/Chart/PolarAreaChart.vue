<script setup>
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, RadialLinearScale } from 'chart.js'
import { PolarArea } from 'vue-chartjs'

ChartJS.register(Title, Tooltip, Legend, ArcElement, RadialLinearScale)

const data = {
  labels: ['Africa', 'Asia', 'Europe', 'Americas', 'Oceania'],
  datasets: [
    {
      label: 'Population (%)',
      data: [17, 60, 10, 12, 1],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF']
    }
  ]
}

const options = {
  responsive: true,
  plugins: { title: { display: true, text: 'Population by Continent' } }
}
</script>

<template>
  <PolarArea :data="data" :options="options" />
</template>
