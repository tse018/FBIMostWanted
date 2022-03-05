<template>
  <Header />
  <FilteringCategory />
  <Footer />
</template>

<script>
import Header             from "../components/Header.vue";
import FilteringCategory  from "../components/FilteringCategory.vue";
import Footer             from "../components/Footer.vue";

export default {
  components: {
    Header,
    FilteringCategory,
    Footer,
  },
};
</script>

<style>
</style>
