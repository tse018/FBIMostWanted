<template>
   <section class="wanted">
      <article v-for="person in wanted" class="wanted__article">
         <figure class="wanted__figure" :data-text-after="person.title">
            <img :src="person.images[0].original" :alt="person.images.caption" class="wanted__image" />
            <figcaption class="wanted__figcaption">
               {{ person.title + ' ' + person.subjects[0] }}
            </figcaption>
         </figure>
      </article>
   </section>
</template>

<script>
export default {
   data() {
      return {
         wanted: [],
         title: "Lastest News",
         index: 0,
         pressed: "button-pressed",
      };
   },

   async created() {
      /* fetching API in the list */
      this.wanted = await this.$store.dispatch("fetchFbiApi");

      /* getting the list using getters */
      this.wanted = this.$store.getters.getWantedList;

      this.filteringWantedPeople();
   },

   computed: {
      slides() {
         this.wanted;
      },

      currentSlide() {
         return this.slides[this.index];
      },

      slideLength() {
         return this.slides.length;
      },
   },

   methods: {
      filteringWantedPeople() {
         const onTheListOfWantedPeople = this.wanted.filter((item) => {
            return (
               item.subjects[0]
            );
         });

         this.wanted = onTheListOfWantedPeople;
      }, 

      goToIndex(index) {
         this.index = index;
      },

      next() {
         if (this.index === thus.slideLength - 1) {
            this.index = 0;
         } else {
            this.index++;
         };
      },
   },
};
</script>

<style>
.wanted {
   width: 100%;
   margin-bottom: 40px;
   display: grid;
   grid-template-columns: repeat(4, 1fr);
   column-gap: 10px;
   row-gap: 10px;
   margin: 50px 130px;
} 

.wanted__image {
   width: 60%;
   height: 60%;
}





</style>
