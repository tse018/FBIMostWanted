<template>
   <main class="article-container">
      <article v-for="element in list" class="article-container__content">
         <h2 class="article-container__content-header">
            {{ element.subjects[1] }}
         </h2>

         <figure class="article-container__content-figure">
            <img :src="element.images[0].large" :alt="element.images.caption" class="article-container__content-image" />

            <figcaption class="article-container__content-details">
               {{ element.description }}
            </figcaption>
         </figure>

         <!-- some people in the FBI REST-API have details and some have caution, but not both a the same time -->
         <p class="article-container__content-paragraph" v-if="element.details">
            {{ element.details.replace(/<[^>]*>?/gm, "") }}
         </p>

         <p class="article-container__content-paragraph" v-else="element.caution">
            {{ element.caution.replace(/<[^>]*>?/gm, "") }}
         </p>
      </article>
   </main>
</template>

<script>
import seoMixin from "../mixins/seoMixin.js";

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
         title: "Case Of The Week",
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
@media screen and (max-width: 1200px) {
   .article-container {
      padding: 20px;
      margin: 20px;
   }

   .article-container__content {
      padding: 20px;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
   }

   .article-container__content-header {
      width: 100%;
      margin: -50px 0 20px 0;
      text-align: center;
   }

   .article-container__content-figure {
      height: 100%;
      width: 50vw;
      padding-bottom: 20px;
      text-align: center;
   }

   .article-container__content-image {
      width: 100%;
      height: 100%;
   }

   .article-container__content-paragraph {
      padding: 20px;
   }
}

@media screen and (min-width: 1201px) {
   .article-container {
      padding: 20px;
      margin: 20px;
   }

   .article-container__content {
      padding: 20px;
      display: flex;
      flex-wrap: wrap;
   }

   .article-container__content-header {
      width: 100%;
      margin: -50px 260px 0 0;
      text-align: end;
   }

   .article-container__content-figure {
      height: 450px;
      max-width: 400px;
      padding-bottom: 20px;
      margin-left: 100px;
   }

   .article-container__content-image {
      width: 100%;
      height: 100%;
   }

   .article-container__content-details {
      font-size: var(--desktop-figcaption);
   }

   .article-container__content-paragraph {
      width: 50ch;
      margin: 0 auto;
      padding: 50px;
   }
}

@media screen and (min-width: 2000px) {
   .article__container {
      position: relative;
   }

   .article-container__content-header {
      position: absolute;
      right: 20%;
   }
}
</style>
