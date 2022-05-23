<template>
   <main>
      <CaseOfTheWeek />
      <LatestNews />
      <Captured />
   </main>
   <Footer />
</template>

<script>
import CaseOfTheWeek from '../components/CaseOfTheWeek.vue';
import LatestNews from '../components/LatestNews.vue';
import Captured from '../components/Captured.vue';

export default {
   components: {
      CaseOfTheWeek,
      Captured,
      LatestNews,
   },
}
</script>

<style>
</style>
