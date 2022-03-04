<template>
   <nav class="navbar">
      <select class="contact__input contact__select" name="issues-options">
				<!-- loops options and render all the issuses and :value to show in values attribute -->
				<option :value="category" v-for="(category, index) in category">
					{{ category.subjects[0] }}
				</option>
			</select>
   </nav>
</template>

<script>
export default {
   data() {
      return {
         category: [],
      };
   },

   async created() {
      /* fetching API in the list */
      this.category = await this.$store.dispatch("fetchFbiApi");

      /* getting the list using getters */
      this.category = this.$store.getters.getWantedList;

      this.filteringWantedPeople();
   },

   methods: {
      filteringWantedPeople() {
         let missingPeople = this.category.filter((item) => {
            // return item.subjects[0] === "Seeking Information";
            // console.log(item.subjects[0] === 'Kidnappings and Missing Persons')
            return item.subjects[0] !== "Kidnappings and Missing Persons";
         });

         this.category = missingPeople;
      },
   },
};
</script>

<style>
.navbar {
   margin-top: 100px;
}
</style>
