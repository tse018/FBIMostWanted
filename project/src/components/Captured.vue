<template>
   <section class="captured">
      <article v-for="person in capturedList" :key="person.title" class="captured__article">
         <h2>
            {{ person.title }}
            <br />
            <!-- Modifing the text so the first string is in upperCase -->
            {{ status + person.status.charAt().toUpperCase() + person.status.substr(1).toLowerCase() }}
         </h2>

      <figure>
         <img :src="person.images[0].large" :alt="person.title" />

         <figcaption>
            {{ person.title.charAt().toUpperCase() + person.title.substr(1).toLowerCase() + ' ' + person.status}}
         </figcaption>
      </figure>

      <p>
         {{ person.caution.replaceAll(/<[^>]*>?/gm, "") }} 
      </p>
      </article>
   </section>
</template>

<script>
export default {
   data() {
      return {
         capturedList: [],
         title: 'Captured',
         status: 'Status:',
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
            return capture.status.includes('captured');
         });

         /* connecting the empty array from data our filtered array now only contains captured people */
         this.capturedList = capturedPerson;
      },
   },
}
</script>

<style scoped>
.captured {
   margin-bottom: 500px;
}

figcaption {
   font-style: italic;
}

img {
   width: 30%;
   height: 70%;
}
</style>
