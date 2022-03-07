<template>
   <Header />
   <FilteringCategory />

   <div v-for="subject in filtered">
      {{ subject.subjects }}
   </div>

   <Footer />
</template>

<script>
import Header from "../components/Header.vue";
import FilteringCategory from "../components/FilteringCategory.vue";
import Footer from "../components/Footer.vue";

export default {
   components: {
      Header,
      FilteringCategory,
      Footer,
   },

   data() {
      return {
         /* store all the data from rest-api */
         categories: [],

         /* store only the filtered data of subjects */
         filtered: [],

         renderMyComponent: true,
      };
   },

   /* watching the route and when its changed, creates a new created instance */
   watch: {
      $route() {
         this.filteringCategoriesBasedOnParams();
      }
   },

   async created() {
      /* fetching rest-api into the empty categories list which we have defined in data() */
      this.categories = await this.$store.dispatch("fetchFbiApi");
      this.categories = this.$store.getters.getWantedList;

      /* before created we want to show the only filtered data based on params to the browser */
      this.filteringCategoriesBasedOnParams();
   },

   methods: {
      filteringCategoriesBasedOnParams() {
         /* filtering the categories array which contains all the data from rest-api
            to only show the filtered array which only shows the subjects we get from the params 
         */
         const findCategories = this.categories.filter(item => {
            return item.subjects.includes(this.$route.params.subjects_id.replaceAll('-', ' '))
            //return item.subjects.includes('ViCAP Homicides and Sexual Assaults')
         });

         /* store the findingCategories variable into the empty array called filtered */
         this.filtered = findCategories;
      },
   },
};
</script>

<style>
</style>
