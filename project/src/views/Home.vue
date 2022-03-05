<template>
   <Header />
   <FilteringCategory />
   <main>
      <CaseOfTheWeek />
      <LatestNews />
      <Captured />
   </main>
   <Footer />
</template>

<script>
import Header from '../components/Header.vue';
import FilteringCategory from '../components/FilteringCategory.vue';
import CaseOfTheWeek from '../components/CaseOfTheWeek.vue';
import LatestNews from '../components/LatestNews.vue';
import Captured from '../components/Captured.vue';
import Footer from '../components/Footer.vue';

export default {
   components: {
      Header,
      FilteringCategory,
      CaseOfTheWeek,
      Captured,
      LatestNews,
      Footer,
   }
}
</script>

<style>
</style>
