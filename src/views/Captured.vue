<template>
   <section class="captured-container">
      <article
         v-for="person in capturedList"
         :key="person.title"
         class="captured-container__article-container"
      >
         <h2 class="captured-container__title">
            {{ person.title }}
            <br />
            <!-- Modifing the text so the first string is in upperCase and status first letter is always capital -->
            {{
               status +
               person.status.charAt().toUpperCase() +
               person.status.substr(1).toLowerCase()
            }}
         </h2>

         <figure class="captured-container__image-container">
            <img
               class="captured-container__image"
               :src="person.images[0].large"
               :alt="person.title"
            />
         </figure>

         <p class="captured-container__description">
            <!-- REGEX for removing <p> tags coming from rest api </p>-->
            {{ person.caution.replaceAll(/<[^>]*>?/gm, "") }}
         </p>
      </article>
   </section>
</template>

<script>
import seoMixin from "../mixins/seoMixin.js";

export default {
   mixins: [seoMixin],

   data() {
      return {
         capturedList: [],
         title: "Captured",
         status: "Status:",
      };
   },

   async created() {
      /* fetching API from Vuex store into the empty array from data property  */
      this.capturedList = await this.$store.dispatch("fetchFbiApi");
      this.capturedList = this.$store.getters.getWantedList;

      /* before created we want to show the filtered version of only captured people */
      this.filteringCapturedPeople();

      this.metaTags({
         title: "Captured",
      });
   },

   computed: {
      errors() {
         this.errors = this.$store.getters.getErrors;
      },
   },

   methods: {
      /* we are filtering the values from the rest-api to show everyone that has status of captured */
      filteringCapturedPeople() {
         const capturedPerson = this.capturedList.filter((capture) => {
            return capture.status.includes("captured");
         });

         /* connecting the empty array from data our filtered array now only contains captured people */
         this.capturedList = capturedPerson;
      },
   },
};
</script>

<style scoped>
@media screen and (max-width: 980px) {
   .captured-container {
      height: 100vh;
      width: 100vw;
      padding: 0 50px;
      margin: 20px;
   }

   .captured-container__article-container {
      font-size: 20;
   }

   img {
      font-size: 0; /* hiding alt text */
   }
}

@media screen and (min-width: 981px) {
   .captured-container {
      height: 80vh;
      width: 90vw;
      padding: 0 50px;
      margin: 20px;
      overflow: auto;
   }

   .captured-container__article-container {
      padding: 20px 100px;
      margin: 20px;
      font-size: 24px;
   }

   img {
      font-size: 0; /* hiding alt text */
   }
}
</style>
