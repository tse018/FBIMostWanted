<template>
   <section>
      <h2>
         {{ title }}
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
      /* fetching API from Vuex store into the empty array from data property  */
      this.capturedList = await this.$store.dispatch('fetchFbiApi');
      this.capturedList = this.$store.getters.getWantedList;

      /* before created we want to show the filtered version of only captured people */
      this.filteringCapturedPeople();
   },

   methods: {
      /* we are filtering the values from the rest-api to show everyone that has status of captured */
      filteringCapturedPeople() {
         const capturedPerson = this.capturedList.filter((capture) => {
            return capture.status === 'captured';
         });


         /* connecting the empty array from data our filtered array now only contains captured people */
         this.capturedList = capturedPerson;
      }
   }
}
</script>

<style>

</style>