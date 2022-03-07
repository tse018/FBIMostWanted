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
            <img :src="element.images[0].large" :alt="element.images.caption" class="case__article-image" />

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
      /* fetching the rest-api into the empty list we getting the values from vuex fbiDatabase store */
      this.list = await this.$store.dispatch("fetchFbiApi");
      this.list = this.$store.getters.getWantedList;

      /* before created want to only show the filtered list which only contains case of the week */
      this.filteringCaseOfTheWeek();
   },

   methods: {
      filteringCaseOfTheWeek() {
         /* filtering to show only case of the week item from the rest-api */
         const caseOfTheWeek = this.list.filter((subject) => {
            return subject.subjects.includes("Case of the Week");
         });

         /* fetching the filtered version of the rest-api to store in the empty list we named in data()  */
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
