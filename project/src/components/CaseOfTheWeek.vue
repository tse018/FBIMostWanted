<template>
   <section class="case">
      <article v-for="element in list" class="case__article">
         <div class="case__article-subject">
            <h2>
               {{ element.subjects[1] }}
            </h2>
            
            <RouterLink :to="{ name: 'caseoftheweek', params: { case_id: element.subjects[1].replaceAll(' ', '-')}}">
               <h2>
                  {{ element.title }}
               </h2>
            </RouterLink>
         </div>

         <figure class="case__article-hero">
            <img
               :src="element.images[0].large"
               :alt="element.images.caption"
               class="case__article-image"
            />

            <figcaption class="case__article-title">
               {{ element.description }}
            </figcaption>
         </figure>

         <p class="case__article-details">
            {{ element.reward_text }}
         </p>
      </article>
   </section>
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
            return subject.subjects[1] === "Case of the Week";
         });

         this.list = caseOfTheWeek;
      },
   },
};
</script>

<style>
.case__article {
   display: grid;
   grid-template-columns: repeat(2, 1fr);
   gap: 10px;
   grid-auto-rows: minmax(100px, auto);
}

.case__article-subject {
   grid-column: 1;
   grid-row: 1;
}

.case__article-title {
   grid-column: 1;
   grid-row: 1 / 1;
}

.case__article-hero {
   grid-column: 2;
   grid-row: 1 / 4;
}
</style>
