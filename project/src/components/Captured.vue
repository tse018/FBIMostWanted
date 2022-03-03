<template>
   <section v-for="person in captured">
      {{ person}}
   </section>
</template>

<script>
export default {
   data() {
      return {
         captured: [],
      };
   },

   async created() {
      /* fetching API into the data  */
      this.captured = await this.$store.dispatch('fetchFbiApi');
      this.captured = this.$store.getters.getWantedList;


      const capturedPerson = this.captured.filter((capture) => {
         // return capture.subjects[0];
         //console.log(capture.status === 'captured')
         return capture.status == 'captured';
         });
         this.captured = capturedPerson;
         console.log(this.captured)
   },
}
</script>

<style>

</style>