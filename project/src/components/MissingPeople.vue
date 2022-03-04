<template>
   <section>
      <div v-for="person in people">
         {{ person.title }}
      </div>

   </section>
</template>

<script>
export default {
   data() {
      return {
         people: [],
      }
   },

   async created() {
      /* fetching API in the list */
      this.people = await this.$store.dispatch("fetchFbiApi");

      /* getting the list using getters */
      this.people = this.$store.getters.getWantedList;

      this.filteringMissingPeople();
   },

   methods: {
      filteringMissingPeople() {
         let missingPeople = this.people.filter((item) => {
         // return subject.subjects[0] === "Seeking Information";
         // console.log(item.subjects[0] === 'Kidnappings and Missing Persons')
         return item.subjects[0] === 'Kidnappings and Missing Persons';
      });
      
      this.people = missingPeople;
      },
   }
}
</script>

<style>

</style>