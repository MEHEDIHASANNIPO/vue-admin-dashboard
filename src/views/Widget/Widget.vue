<script setup>
/** All Library Import */
import { ref } from 'vue';
import { PageName } from '@/components/PageName';
import PorfileCard from '@/components/Widgets/PorfileCard.vue';
import ProductCard from '@/components/Widgets/ProductCard.vue';
import InstagramCard from '@/components/Widgets/InstagramCard.vue';
import SocialCard from '@/components/Widgets/SocialCard.vue';
import AboutCard from '@/components/Widgets/AboutCard.vue';
import TagsCard from '@/components/Widgets/TagsCard.vue';
import ScheduleCard from '@/components/Widgets/ScheduleCard.vue';
import TransactionsCard from '@/components/Widgets/TransactionsCard.vue';
import Buttons from '@/components/Widgets/Buttons.vue';

/** All Instance */
PageName.value = 'Widgets';
</script>
<template>
   
  <div class="flex flex-col lg:flex-row items-start gap-5">
   
    <!-- Profile Card -->
    <PorfileCard />

    <!-- Product Card -->
    <ProductCard />

    <!-- Instagram Post Card -->
    <InstagramCard />

    <!-- Social Share Card -->
    <SocialCard />
  </div>

  <div class="flex flex-col lg:flex-row items-start gap-5 my-5">
   
    <!-- About Card -->
    <AboutCard />

    <!-- Tags Card -->
    <TagsCard />

    <!-- Schedule Card -->
    <ScheduleCard />

    <!-- Transactions Card -->
    <TransactionsCard />
  </div>

  <!-- Buttons -->
  <Buttons />
</template>