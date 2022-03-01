<template>
   <Header />
   <main>
      <CaseOfTheWeek />
   </main>
   <Footer />
</template>

<script>
import Header from '../components/Header.vue';
import CaseOfTheWeek from '../components/CaseOfTheWeek.vue';
import Footer from '../components/Footer.vue';


export default {
   components: {
      Header,
      CaseOfTheWeek,
      Footer,
   }
}
</script>

<style>
</style>
