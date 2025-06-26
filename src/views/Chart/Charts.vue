<script setup>
/** All Library Import */
import { ref } from 'vue';
import { PageName } from '@/components/PageName';
import VarChart from '@/components/Chart/VarChart.vue';
import LineChart from '@/components/Chart/LineChart.vue';
import CircleCharts from '@/components/Chart/CircleChart.vue';
import PieChart from '@/components/Chart/PieChart.vue';
import RadarChart from '@/components/Chart/RadarChart.vue';
import PolarAreaChart from '@/components/Chart/PolarAreaChart.vue';

/** All Instance */
PageName.value = 'Charts';
</script>
<template>
   <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Var Chart -->
        <div class="bg-white rounded-lg p-4 shadow-md">
            <VarChart/>
        </div>

        <!-- Line Chart -->
        <div class="bg-white rounded-lg p-4 shadow-md">
            <LineChart class="min-h-full"/>
        </div>

        <!-- Circle Chart -->
        <div class="bg-white rounded-lg p-4 shadow-md">
            <CircleCharts class="max-h-92"/>
        </div>

        <!-- Pie Chart -->
        <div class="bg-white rounded-lg p-4 shadow-md">
            <PieChart class="max-h-92"/>
        </div>

        <!-- Radar Chart -->
        <div class="bg-white rounded-lg p-4 shadow-md">
            <RadarChart class="max-h-92"/>
        </div>

        <!-- PolarArea Chart -->
        <div class="bg-white rounded-lg p-4 shadow-md">
            <PolarAreaChart class="max-h-92"/>
        </div>
   </div>
</template>