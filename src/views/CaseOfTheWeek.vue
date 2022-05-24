<template>
   <main>
      <section>
         <article v-for="element in list" class="article">
            <div class="article__grid-container">
               <h2 class="article__subject-title">
                  {{ element.subjects[1] }}
               </h2>
            </div>

            <div class="article__grid-container">
               <figure class="article__hero-image">
                  <img
                     :src="element.images[0].large"
                     :alt="element.images.caption"
                     class="article__image"
                  />

                  <figcaption>
                     {{ element.description }}
                  </figcaption>
               </figure>
            </div>

            <p v-if="element.details">
               {{ element.details.replace(/<[^>]*>?/gm, "")}}
            </p>

            <p v-else="element.caution">
               {{ element.caution.replace(/<[^>]*>?/gm, "")}}
            </p>
         </article>
      </section>
   </main>
</template>

<script>
import seoMixin from '../mixins/seoMixin.js';

export default {
   mixins: [seoMixin],

   data() {
      return {
         list: [],
      };
   },

   async created() {
      /* fetching API in the list */
      this.list = await this.$store.dispatch("fetchFbiApi");

      this.list = this.$store.getters.getWantedList;

      this.filteringCaseOfTheWeek();

      this.metaTags({
         title: 'Case Of The Week',
		});

   },

   methods: {
      filteringCaseOfTheWeek() {
         const caseOfTheWeek = this.list.filter((subject) => {
            return subject.subjects[1] === "Case of the Week";
         });

         this.list = caseOfTheWeek;
      },
   },
};
</script>

<style scoped> 

</style>
