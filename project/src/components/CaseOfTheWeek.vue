<template>
   <article class="article">
      <div v-for="element in list">
         <h2>
            {{ element.subjects[1] }}
         </h2>

         <h2>
            {{ element.title}}
         </h2>

         <img :src="element.images[0].large" :alt="element.images.caption" />
      </div>
   </article>
</template>

<script>
export default {
   data() {
      return {
         list: {},
      };
   },

   async created() {
      /* fetching API in the list */
      this.list = await this.$store.dispatch("fetchFbiApi");

      /* getting the list using getters */
      this.list = this.$store.getters.getWantedList;

      const caseOfTheWeek= this.list.filter((subject) => {
         // return subject.subjects === 'Seeking Information';
         // console.log({subjects})
         return (subject.subjects[1] === 'Case of the Week')
         });
         this.list = caseOfTheWeek;
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
