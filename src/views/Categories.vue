<template>
   <section class="category">
      <article v-for="subject in filtered" :key="subject.title">
            <h2 style="padding-top: 100px">
               {{ subject.title }}
            </h2>

            <figure>
               <img :src="subject.images[0].large" :alt="subject.title" />

               <figcaption>
                  {{ subject.description }}
               </figcaption>
            </figure>

            <!--  
            some cases have details value:null, so by using v-if / v-else can show
            all the cases with information depending if it has caution or details values.
            NOTE: NONE OF THE CASES HAVE BOTH VALUES.
         -->
      </article>
   </section>
</template>

<script>
import seoMixin from "../mixins/seoMixin.js";

export default {
   mixins: [seoMixin],

   data() {
      return {
         /* store all the data from rest-api */
         categories: [],

         /* store only the filtered data of subjects */
         filtered: [],
      };
   },

   /* watching the route and when its changed trigger a new created instance for the new category params */
   watch: {
      $route() {
         this.filteringCategoriesBasedOnParams();
      },
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
         const findCategories = this.categories.filter((item) => {
            if (this.$route.params.subjects_id) {
               return item.subjects.includes(
                  this.$route.params.subjects_id.replaceAll("-", " ")
               );
            }
         });

         /* store the findingCategories variable into the empty array called filtered */
         this.filtered = findCategories;
      },
   },
};
</script>

<style scoped>
.category {
   padding-bottom: 500px;
}

img {
   width: 30%;
   height: 60%;
}
</style>
