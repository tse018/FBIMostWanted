<template>
   <section class="wanted">
      <article v-for="person in wanted" class="wanted__article">
         <figure class="wanted__figure">
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
      };
   },

   async created() {
      /* fetching API in the list */
      this.wanted = await this.$store.dispatch("fetchFbiApi");

      /* getting the list using getters */
      this.wanted = this.$store.getters.getWantedList;

      this.filteringWantedPeople();
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
   },
};
</script>

<style>
.wanted {
   width: 100%;
   margin-bottom: 40px;
   display: grid;
   grid-template-columns: repeat(12, 1fr);
   column-gap: 10px;
   row-gap: 10px;
} 



</style>
