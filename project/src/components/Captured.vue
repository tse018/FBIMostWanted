<template>
   <section>
      <h2>
         {( title )}
      </h2>

      <article v-for="person in capturedList">
         {{ person }}
      </article>
   </section>
</template>

<script>
export default {
   data() {
      return {
         capturedList: [],
         title: 'Captured',
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
            return capture.status === 'captured';
         });

         this.capturedList = capturedPerson;
      }
   }
}
</script>

<style>

</style>