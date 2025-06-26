<script setup>
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js'
import { Pie } from 'vue-chartjs'

ChartJS.register(Title, Tooltip, Legend, ArcElement)

const data = {
  labels: ['Chrome', 'Safari', 'Firefox', 'Others'],
  datasets: [
    {
      label: 'Market Share',
      data: [63, 19, 10, 8],
      backgroundColor: ['#4285F4', '#FFE168', '#FF7139', '#9E9E9E']
    }
  ]
}

const options = {
  responsive: true,
  plugins: { title: { display: true, text: 'Browser Share 2025' } }
}
</script>

<template>
  <Pie :data="data" :options="options" />
</template>
