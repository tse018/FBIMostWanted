<template>
   <Header />
   <main>
      <CaseOfTheWeek />
      <Captured />
   </main>
   <Footer />
</template>

<script>
import Header from '../components/Header.vue';
import CaseOfTheWeek from '../components/CaseOfTheWeek.vue';
import Captured from '../components/Captured.vue';
import Footer from '../components/Footer.vue';


export default {
   components: {
      Header,
      CaseOfTheWeek,
      Captured,
      Footer,
   }
}
</script>

<style>
</style>
