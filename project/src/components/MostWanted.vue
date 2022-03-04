<template>
   <h2>
      {{ title }}
   </h2>

<div class="wanted">
   <figure v-for="person in wanted" class="wanted__person">
      <img :src="person.images[0].original" :alt="person.images.caption" class="article__image" />

      <figcaption class="grid__item">
         {{ person.title }}
         {{ person.subjects[0] }}
      </figcaption>
   </figure>


</div>
   
</template>

<script>
export default {
   data() {
      return {
         wanted: [],
         title: 'Lastest News '
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
         const missingPeople = this.wanted.filter((item) => {
            // return item.subjects[0] === "Seeking Information";
            // console.log(item.subjects[0] === 'Kidnappings and Missing Persons')
            return item.subjects[0] !== 'Seeking Information' && "Kidnappings and Missing Persons" ;
         });
         
         this.wanted = missingPeople
         console.log(this.wanted)
      },
   },
};
</script>

<style>
.wanted {
   max-width: 100%;
   margin-bottom: 40px;
   display: grid;
   grid-template-columns: repeat(4, 1fr);
   column-gap: 10px;
   row-gap: 10px;
}

</style>
