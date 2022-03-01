<template>
   <footer class="footer grid">
      <RouterLink :to="{name: 'home'}" class="footer__logo grid__item">
         FBI
      </RouterLink>

      <!-- Only visible on desktop -->
      <ul class="footer__items grid">
         <li class="footer__item grid__item">
            News
         </li>

         <li class="footer__item grid__item">
            Wanted
         </li>

         <li class="footer__item grid__item">
            Tip
         </li>

         <li class="footer__item grid__item">
            About
         </li>

         <li class="footer__item grid__item">
            Investigate
         </li>

         <li class="footer__item grid__item">
            Services
         </li>

         <li class="footer__item grid__item">
            Resources
         </li>

         <li class="footer__item grid__item">
            Jobs
         </li>

         <li class="footer__item grid__item">
            Contact
         </li>
      </ul>

      <!-- Only visible on mobile -->
      <ul class="footer__elements grid__item">
         <li class="footer__element">
            <Icons :icon="'instagram'" />
         </li>

         <li class="footer__element">
            <Icons :icon="'linkedIn'" />
         </li>

         <li class="footer__element">
            <Icons :icon="'mail'" />
         </li>

         <li class="footer__element">
            <Icons :icon="'twitter'" />
         </li>

         <li class="footer__element">
            <Icons :icon="'facebook'" />
         </li>

         <li class="footer__element">
            <Icons :icon="'youtube'" />
         </li>
      </ul>

      <Icons :icon="'menu'" class="footer__menu grid__item"/>
   </footer>
</template>

<script>
import Icons from '../components/Icons.vue';

export default {
   components: {
      Icons,
   },
}
</script>

<style>
.footer {
   position: fixed;
   top: 90vh;
   right: 0;
   background-color: ghostwhite;
}

.footer__logo {
   text-decoration: none;
   color: blue;
}

.footer__elements {
   display: none;
}

.footer__menu {
   display: none;
}

/* Mobile */
@media screen and (max-width: 600px) {
   .footer {
      background-color: ghostwhite;
      position: fixed;
      top: 90vh;
      height: 80px;
   }
   
   .footer__logo {
      text-decoration: none;
      color: blue;
   }

   .footer__items {
      display: none;
   }

   .footer__elements {
      display: flex;
      margin-left: -20px;
      grid-column: 2 / 4;
   }

   .footer__element {
      margin: 5px;
   }

   .footer__menu {
      margin: -20px 0 0 20px;
      display: block;
   }
}
</style>