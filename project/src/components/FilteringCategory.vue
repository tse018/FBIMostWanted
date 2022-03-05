<template>
   <nav class="navbar">
      <!-- Mobile -->
      <select class="navbar__selector" name="select-category" @change="goToPages"> 
         <!-- Placeholder -->
         <option selected="selected" value="null">
            Select a category you want to see
         </option>

         <option :value="item" v-for="(item, index) in category">
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
         path: '/'
      };
   },

   async created() {
      /* fetching API in the list */
      this.category = await this.$store.dispatch("fetchFbiApi");

      /* getting the list using getters */
      this.category = this.$store.getters.getWantedList;

      this.mappingCategories();
   },

   methods: {
      mappingCategories() {
         const noRepeatingCategory = [
            ...new Set(this.category.map((category) => category.subjects[0])),
         ];
         
         this.category = noRepeatingCategory;
      },

      goToPages(event) {
         this.$router.push(this.path + event.target.value);
      },
   },
};
</script>

<style>
.navbar {
   margin-top: 100px;
}
</style>
