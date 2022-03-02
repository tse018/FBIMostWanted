<template>
   <header class="header grid">
      <div class="header__menu grid__item">
         <Icons :icon="'menu'" />
      </div>

      <RouterLink :to="{name: 'home'}" class="header__title grid__item">
         FBI Most Wanted
      </RouterLink>

      <div class="header__searchbar grid__item">
         <input type="text" v-model="input" name="search" class="header__input" />
         <div class="header__search">
            <Icons :icon="'search'" class="header__search" />
         </div>
      </div>

      <ul class="header__elements">
         <li class="header__element-instagram">
            <Icons :icon="'instagram'" />
         </li>

         <li class="header__element-linked">
            <Icons :icon="'linkedIn'" />
         </li>

         <li class="header__element-mail">
            <Icons :icon="'mail'" />
         </li>

         <li class="header__element-twitter">
            <Icons :icon="'twitter'" />
         </li>

         <li class="header__element-facebook">
            <Icons :icon="'facebook'" />
         </li>

         <li class="header__element-youtube">
            <Icons :icon="'youtube'" />
         </li>
      </ul>

      <!-- Dark Mode toggle button
         - Add dark / ligth mode
      -->
   </header>
</template>

<script>
import Icons from '../components/Icons.vue';

export default {
   components: {
      Icons,
   },

   data() {
      return {
         input: 'what are you looking for?',
      }
   }
}
</script>

<style>
.header {
   position: fixed;
   top: 0;
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

.header__input {
   width: 470px;
   height: 59px;
   border-radius: 40px;
   padding-left: 50px;
   margin-left: -20px;
}

.header__elements {
   grid-column: 11;
}

.header__search {
   margin-top: -42px;
   margin-left: 400px;
}

.header__elements {
   width: 20px;
   display: grid;
   grid-template-columns: repeat(2, 1fr);
}

/* left side */
.header__element-instagram {
   grid-column: 1;
}

.header__element-linked {
   grid-column: 1;
   grid-row: 2;
   margin-top: -15px;
}

.header__element-mail {
   grid-column: 1;
   grid-row: 3;
   margin: -15px 0 0 5px;
}

/* rigth side */
.header__element-twitter {
   grid-column: 2;
   margin-top: 6px;
}

.header__element-facebook {
   grid-column: 2;
   grid-row: 2;
   margin-top: -15px;
}

.header__element-youtube {
   grid-column: 2;
   grid-row: 3;
   margin: -15px 0 0 5px;
}

/* Mobile */
@media screen and (max-width: 600px) {
   .header__title {
      grid-column: span 4;
      font-size: var(--mobile-title);
   }

   .header__menu {
      display: none;
   }

   .header__searchbar {
      grid-column: span 4;
      margin-top: -30px;
   }

   .header__elements {
      display: none;
   }
}

</style>