<template>
   <main class="wanted-container" ref="scroll-container" @mousewheel="horizontalScrolling">
      <figure v-for="person in wanted" class="wanted-list__image-container">
         <img :src="person.images[0].original" :alt=" 'image of ' + person.title + ' and wanted for ' + person.subjects[0]" class="wanted-list__image" />

         <figcaption class="wanted-list__image-description">
            CASE: {{ person.title }}
            <br />
            CATEGORY: {{ person.subjects[0] }}
         </figcaption>
      </figure>
   </main>
</template>

<script>
import seoMixin from "../mixins/seoMixin.js";

export default {
   mixins: [seoMixin],

   data() {
      return {
         wanted: [],
      };
   },

   async created() {
      /* fetching API so when refresh content will be fetched again*/
      this.wanted = await this.$store.dispatch("fetchFbiApi");

      /* getting the list using getters */
      this.wanted = this.$store.getters.getWantedList;

      this.filteringWantedPeople();

      this.metaTags({
         title: "FBI Most Wanted",
      });
   },

   computed: {
      horizontalScrolling() {
         const scrollContainer = this.$refs["scroll-container"];

         scrollContainer.addEventListener("wheel", (evt) => {
            if (window.innerWidth > 600) {
               evt.preventDefault();
               scrollContainer.scrollLeft += evt.deltaY;
            }
         });
      },
   },

   methods: {
      filteringWantedPeople() {
         const onTheListOfWantedPeople = this.wanted.filter((item) => {
            return item.subjects[0];
         });

         this.wanted = onTheListOfWantedPeople;
      },
   },
};
</script>

<style scoped>
@media screen and (max-width: 600px) {
   .wanted-container {
      display: grid;
   }

   .wanted-list__image-container {
      max-height: 50%;
   }

   .wanted-list__image {
      width: 50vh;
      height: 50vh;
      padding: 20px;
      margin: 20px;
   }

   .wanted-list__image-description {
      position: relative;
      bottom: 40%;
      text-align: center;
      opacity: 0.8;
      z-index: 100;
      background-color: whitesmoke;
      color: black;
      margin: 0 5%;
      font-size: 18px;
   }
}

@media screen and (min-width: 601px) {
   .wanted-container {
      max-height: 100vh;
      display: flex;
      overflow-y: hidden;
   }

   .wanted-list__image-container {
      max-height: 80vh;
   }

   .wanted-list__image {
      width: 60vh;
      margin: 0 20px;
      padding: 20px 20px 0px;
      height: 80vh;
      font-size: 0; /* hiding alt text / image border when images isn´t there */
   }

   .wanted-list__image-description {
      position: relative;
      bottom: 98%;
      text-align: center;
      opacity: 0.8;
      z-index: 100;
      background-color: whitesmoke;
      color: black;
      margin: 0 5%;
   }
}
</style>
