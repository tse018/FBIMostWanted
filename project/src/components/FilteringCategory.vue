<template>
   <nav class="navbar">
      <!-- v-bind @change to trigger when user changes the drop down menu
            which trigger goToPages function from methods
      -->
      <select class="navbar__selector" name="select-category" @change="goToPages"> 
         <!-- Placeholder for user to see what this dropdown is about -->
         <option selected="selected" value="null">
            Select a category you want to see
         </option>
         
         <!-- loops to show all the subjects from rest-api  -->
         <option :value="item" v-for="(item, index) in category" :key="item" >
            {{ item }}
         </option>
      </select>
   </nav>
</template>

<script>
export default {
   data() {
      return {
         category: [],
         path: '/wanted/'
      };
   },

   async created() {
      /* fetching API in the list */
      this.category = await this.$store.dispatch("fetchFbiApi");

      /* getting the list using getters */
      this.category = this.$store.getters.getWantedList;

      /* show the new list which is begin mapped in the template  */
      this.mappingCategories();
   },

   methods: {
      /* creating a new list of subjects with only 1 of each catergories */
      mappingCategories() {
         const noRepeatingCategory = [
            ...new Set(this.category.map(category => category.subjects[0])),
         ];
         
         /* this.category which is empty, will now containt the new mapped array of the subjects */
         this.category = noRepeatingCategory;
      },

       /* getting the argument from dropdown menu */
      goToPages(event) {
         /* replacing %20 in link with '-' for better search optimalization
            the path we creating will look like this /wanted/Criminal-Enterprise-Investigations
         */
         this.$router.push(this.path + event.target.value.replaceAll(' ', '-'));
      },
   },
};
</script>

<style>
.navbar {
   margin-top: 100px;
}
</style>
