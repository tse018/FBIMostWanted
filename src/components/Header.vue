<template>
   <header class="header-container">
      <RouterLink class="header-container__link" :to="{ name: 'home' }" aria-label="go to home page">
         FBI Most Wanted
      </RouterLink>

      <FilteringCategory />
   </header>
</template>

<script>
import FilteringCategory from "../components/FilteringCategory.vue";

export default {
   components: {
      FilteringCategory,
   },
};
</script>

<style scoped>
/* Mobile */
@media screen and (max-width: 600px) {
   .header-container {
      display: flex;
      flex-direction: column;
      background-color: aliceblue;
      height: 100px;
   }

   .header-container__link {
      margin: auto;
      text-decoration: none;
      font-size: 40px;
   }
}

@media screen and (min-width: 601px) {
   .header-container {
      display: flex;
      flex-direction: column;
      background-color: aliceblue;
      height: 100px;
   }

   .header-container__link {
      margin: auto;
      text-decoration: none;
      font-size: 40px;
   }
}

@media screen and (min-width: 901px) {
   .header-container {
      display: flex;
      flex-direction: row;
      height: 100px;
      background-color: aliceblue;
   }

   .header-container__link {
      font-size: 40px;
      display: flex;
      justify-content: left;
      margin: 20px 0 0 100px;
   }
}
</style>
