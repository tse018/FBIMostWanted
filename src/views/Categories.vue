<template>
   <main class="category-container">
      <article class="category-container__article-container" v-for="subject in filtered" :key="subject.title">
         <h2 class="category-container__article-header">
            {{ subject.title }}
         </h2>

         <figure class="category-container__article-figure">
            <img class="category-container__article-image" :src="subject.images[0].large" :alt="subject.title" />

            <figcaption class="category-container__article-figcaption">
               {{ subject.description }}
            </figcaption>
         </figure>

         <!--  
               some cases have details value:null, so by using v-if / v-else can show
               all the cases with information depending if it has caution or details values.
               When dropdown some categories won´t show up without this v-if / v-else.
               NOTE: NONE OF THE CASES HAVE BOTH VALUES.
            -->

         <template v-if="subject.details">
            <p class="category-container__article-paragraph">
               {{ subject.details.replace(/<[^>]*>?/gm, "") }}
            </p>
         </template>

         <template v-else="subject.caution">
            <p class="category-container__article-paragraph">
               {{ subject.caution.replace(/<[^>]*>?/gm, "") }}
            </p>
         </template>
      </article>
   </main>
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
         this.metaTags({
            title: this.$route.params.subjects_id,
         });
      },
   },

   async created() {
      /* fetching rest-api into the empty categories list which we have defined in data() */
      this.categories = await this.$store.dispatch("fetchFbiApi");
      this.categories = this.$store.getters.getWantedList;

      /* before created we want to show the only filtered data based on params to the browser */
      this.filteringCategoriesBasedOnParams();
      this.metaTags({
         title: this.$route.params.subjects_id,
      });
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
@media screen and (max-width: 1200px) {
   .category-container {
      padding: 20px;
      margin: 20px;
   }

   .category-container__article-container {
      padding: 20px;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
   }

   .category-container__article-header {
      width: 100%;
      text-align: center;
   }

   .category-container__article-figure {
      height: 100%;
      width: 500px;
      padding-bottom: 20px;
   }

   .category-container__article-image {
      width: 100%;
      height: 100%;
   }

   .category-container__article-paragraph {
      padding: 20px;
      width: 60ch;
   }
}

@media screen and (min-width: 1201px) {
   .category-container {
      padding: 20px;
      margin: 20px;
   }

   .category-container__article-container {
      padding: 20px;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
   }

   .category-container__article-header {
      width: 100%;
      font-size: 40px;
      text-align: center;
      padding-bottom: 50px;
   }

   .category-container__article-figure {
      height: 100%;
      width: 40vw;
      padding-bottom: 20px;
      text-align: center;
   }

   .category-container__article-image {
      width: 100%;
      height: 100%;
   }

   .category-container__article-paragraph {
      width: 50%;
      margin: 0 auto;
      padding: 50px;
      font-size: 28px;
      width: 50ch;
   }
}
</style>
