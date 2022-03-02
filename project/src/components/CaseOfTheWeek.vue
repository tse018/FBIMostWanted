<template>
   <article class="article grid">
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
      }
   },

   async created() {
      /* fetching API in the list */
      this.list = await this.$store.dispatch('fetchFbiApi');

      /* getting the list using getters */
      this.list = this.$store.getters.getCaseOfTheWeek;
      console.log(this.list)
   },
}
</script>

<style>
.article {
   margin-top: 150px;
}

.article__title {
   grid-column: 5 / 8;
   font-size: var(--desktop-undertitle);
}

@media screen and (max-width: 600px) {
   .article__title {
      grid-column: span 4;
      font-size: var(--mobile-undertitle);
   }
}

</style>