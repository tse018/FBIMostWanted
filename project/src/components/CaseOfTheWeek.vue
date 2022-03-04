<template>
   <article v-for="element in list" class="article">
      <div class="article__grid-container">
         <h2 class="article__subject-title">
            {{ element.subjects[1] }}
         </h2>
      </div>

      <div class="article__grid-container">
         <h2 class="article__case-title">
            {{ element.title }}
         </h2>
      </div>

      <div class="article__grid-container">
         <figure class="article__hero-image">
            <img :src="element.images[0].large" :alt="element.images.caption" class="article__image" />
            
            <figcaption class="article__details">
               {{ element.details.replace(/<[^>]*>?/gm, '') }}
            </figcaption>
         </figure>
      </div>
   </article>
</template>

<script>
export default {
   data() {
      return {
         list: [],
      };
   },

   async created() {
      /* fetching API in the list */
      this.list = await this.$store.dispatch("fetchFbiApi");

      this.list = this.$store.getters.getWantedList;

      this.filteringCaseOfTheWeek();
   },

   methods: {
      filteringCaseOfTheWeek() {
         const caseOfTheWeek = this.list.filter((subject) => {
            // return subject.subjects[0] === "Seeking Information";
            // console.log({subjects})
            return subject.subjects[1] === "Case of the Week";
         });

         this.list = caseOfTheWeek;
      },
   },
};
</script>

<style>
.article__grid-container {
   width: 100%;
   margin-bottom: 10px;
   display: grid;
   grid-template-columns: repeat(12, 1fr);
   column-gap: 10px;
   row-gap: 10px;
}

.article__subject-title {
   grid-column: 6 / 8;
}

.article__case-title {
   grid-column: 5 / 9;
   margin-left: 50px;
}

.article__hero-image {
   grid-column: 2 / 12;
}


.article__image {
   width: 100%;
   height: 50%;
}

.article__details {
   padding: 20px 0 100px 0;
}

@media screen and (max-width: 600px) {
   .article__title {
      grid-column: span 4;
      font-size: var(--mobile-undertitle);
   }
}
</style>
