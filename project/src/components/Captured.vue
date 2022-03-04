<template>
   <section v-for="person in capturedList">
      {{ person }}
   </section>
</template>

<script>
export default {
   data() {
      return {
         capturedList: [],
      };
   },

   async created() {
      /* fetching API into the data  */
      this.capturedList = await this.$store.dispatch('fetchFbiApi');
      this.capturedList = this.$store.getters.getWantedList;

      this.filteringCapturedPeople();
   },

   methods: {
      filteringCapturedPeople() {
         const capturedPerson = this.capturedList.filter((capture) => {
         // return capture.subjects[0];
         //console.log(capture.status === 'captured')
         return capture.status === 'captured';
         });
         this.capturedList = capturedPerson;
      }
   }
}
</script>

<style>

</style>