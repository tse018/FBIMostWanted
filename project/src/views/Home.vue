<template>
   <Header />
   <FilteringCategory />
   <main>
      <CaseOfTheWeek />
      <MostWanted />
      <Captured />
      <MissingPeople /> 
   </main>
   <Footer />
</template>

<script>
import Header from '../components/Header.vue';
import CaseOfTheWeek from '../components/CaseOfTheWeek.vue';
import Captured from '../components/Captured.vue';
import MissingPeople from '../components/MissingPeople.vue';
import MostWanted from '../components/MostWanted.vue';
import FilteringCategory from '../components/FilteringCategory.vue';
import Footer from '../components/Footer.vue';

export default {
   components: {
      Header,
      CaseOfTheWeek,
      Captured,
      MissingPeople,
      MostWanted,
      FilteringCategory,
      Footer,
   }
}
</script>

<style>
</style>
