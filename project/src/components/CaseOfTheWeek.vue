<template>
   <article class="article">
      <div v-for="element in list">
         {{ element }}
      </div>
      
   </article>
</template>

<script>
export default {
   data() {
      return {
         list: {},
         details: '',
         image: '',
      }
   },

   async created() {
      /* fetching API in the list */
      this.list = await this.$store.dispatch('fetchFbiApi');

      /* getting the list using getters */
      this.list = this.$store.getters.getCaseOfTheWeek;
      console.log(this.list);

      this.details = this.$store.getters.getDetails;
      console.log(this.details);

      this.image = this.$store.getters.getImage;
      console.log(this.image);
   },
};
</script>

<style>
.article {
   margin-top: 150px;
}

@media screen and (max-width: 600px) {
   .article__title {
      grid-column: span 4;
      font-size: var(--mobile-undertitle);
   }
}

</style>