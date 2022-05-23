<template>
   <section class="case">
      <article v-for="element in list" :key="element.title" class="case__article">
         <div class="case__subject">
            <h2>
               {{ element.subjects[1] }}
            </h2>
            
            <RouterLink :to="{ name: 'caseoftheweek', params: { case_id: element.subjects[0].replaceAll(' ', '-')} }" class="case__routerlink">
               <h2 class="case__title">
                  {{ element.title }}
               </h2>
            </RouterLink>
         </div>

         <figure class="case__figure">
            <img :src="element.images[0].large" :alt="element.images.caption" class="case__image" />

            <figcaption class="case__description">
               {{ element.description }}
            </figcaption>
         </figure>

         <p class="case__reward">
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
         const caseOfTheWeek = this.list.filter(subject => {
            return subject.subjects.includes("Case of the Week");
         });

         /* fetching the filtered version of the rest-api to store in the empty list we named in data()  */
         this.list = caseOfTheWeek;
      },
   },
};
</script>

<style scoped>

.case {
   border: 2px solid red;
   margin: 50px 130px;
}

.case__article {
   display: flex;
}

.case__subject {
   width: 100%;
   border: 2px solid red;
   font-weight: bolder;
}

.case__title {
   font-weight: normal;
   color: black;
}


.case__image {
   display: flex;
}


</style>
