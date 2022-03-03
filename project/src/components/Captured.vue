<template>
   <div v-for="items in capturedPerson">
      {{ items }}
   </div>
</template>

<script>
export default {
   data() {
      return {
         capturedPerson: {},
      };
   },

   async created() {
      /* fetching API into the data  */
      this.capturedPerson = await this.$store.dispatch('fetchFbiApi');
      this.capturedPerson = this.$store.getters.getWantedList;


      const captured = this.capturedPerson.filter((capture) => {
         // return capture.subjects[0];
         //console.log(capture.status === 'captured')
         return capture.status == 'captured';
         });
         this.capturedPerson = captured;
         console.log(this.capturedPerson)
   },
}
</script>

<style>

</style>