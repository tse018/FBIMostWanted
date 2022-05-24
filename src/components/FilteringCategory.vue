<template>
   <nav class="navbar-container">
      <!-- v-bind @change to trigger when user changes the drop down menu
            which trigger goToPages function from methods
      -->
      <select class="navbar-container__selector" name="select-category" @change="goToPages">
         <!-- Placeholder for user to see what this dropdown is about -->
         <option class="navbar-container__options" selected="selected" value="">
            Select a Category
         </option>

         <option class="navbar-container__options" :value="item" v-for="(item, index) in category" :key="item">
            {{ item }}
         </option>

         <option class="navbar-container__options" value="captured">
            Captured
         </option>

         <option class="navbar-container__options" value="case of the week">
            Case Of The Week
         </option>
      </select>
   </nav>
</template>

<script>

export default {
   data() {
      return {
         category: [],
         path: '/category/'
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
      /* using new Set for creating a new list of subjects with only 1 of each catergories */
      mappingCategories() {
         const noRepeatingCategory = [
            ...new Set(this.category.map(category => category.subjects[0])),
         ];

         /* this.category which is empty, will now containt the new mapped array of the subjects */
         this.category = noRepeatingCategory;
      },

       /* getting the event argument from dropdown menu */
      goToPages(event) {
         /* replacing %20 in link with '-' for better search optimalization
            the path we creating will look like this /wanted/Criminal-Enterprise-Investigations
         */
         this.$router.push(this.path + event.target.value.replaceAll(' ', '-') );
      },
   },
};
</script>

<style scoped>
@media screen and (max-width: 600px) {
   .navbar-container {
      display: flex;
      justify-content: center;
   }

   .navbar-container__selector {
      width: 300px;
      border-radius: 40px;
      display: flex;
      font-size: 20px;
      text-align: center;
   }
}

@media screen and (min-width: 601px) {
   .navbar-container {
      display: flex;
      justify-content: center;
   }

   .navbar-container__selector {
      width: 300px;
      border-radius: 40px;
      display: flex;
      font-size: 20px;
      text-align: center;
   }
}

@media screen and (min-width: 901px) {
   .navbar-container {
      display: flex;
      width: 50%;
      justify-content: center;
      margin: auto;
      padding: 20px;
      
   }

   .navbar-container__selector {
      width: 400px;
      border-radius: 20px;
      display: flex;
      font-size: 20px;
      text-align: center;
      margin: 20px;
      font-size: 24px;
   }
}


</style>
