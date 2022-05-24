<template>
   <header class="header grid">
      <RouterLink :to="{ name: 'home' }" class="header__title grid__item">
         FBI Most Wanted
      </RouterLink>

      <div class="header__searchbar grid__item">
         <FilteringCategory />
      </div>
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
.header {
   position: fixed;
   top: 0;
   background-color: aliceblue;
   z-index: 100;
}

.header__title {
   grid-column: 2 / 6;
   font-size: var(--desktop-title);
   margin-top: -10px;
   text-decoration: none;
   color: blue;
}

.header__searchbar {
   grid-column: 7 / 11;
}

/* Mobile */
@media screen and (max-width: 600px) {
   .header__title {
      grid-column: span 4;
      font-size: var(--mobile-title);
   }
   .header__searchbar {
      display: none;
   }
}
</style>
