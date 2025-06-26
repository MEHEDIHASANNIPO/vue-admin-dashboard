<script setup>
import {
  Chart as ChartJS,
  Title, Tooltip, Legend,
  RadialLinearScale, PointElement, LineElement, Filler
} from 'chart.js'
import { Radar } from 'vue-chartjs'

ChartJS.register(Title, Tooltip, Legend, RadialLinearScale, PointElement, LineElement, Filler)

const data = {
  labels: ['HTML', 'CSS', 'JS', 'Vue', 'Laravel', 'Python'],
  datasets: [
    {
      label: 'Skill score',
      data: [8, 7, 9, 8, 6, 9],
      fill: true,
      backgroundColor: 'rgba(67,185,178,0.2)',
      borderColor: '#43b9b2',
      pointBackgroundColor: '#43b9b2'
    }
  ]
}

const options = {
  responsive: true,
  plugins: { title: { display: true, text: 'Developer Skill Radar' } },
  scales: { r: { min: 0, max: 10, ticks: { stepSize: 2 } } }
}
</script>

<template>
  <Radar :data="data" :options="options" />
</template>
