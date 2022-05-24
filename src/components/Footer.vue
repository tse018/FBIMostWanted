<template>
   <footer class="footer grid">
      <RouterLink :to="{name: 'home'}" class="footer__logo grid__item">
         FBI
      </RouterLink>

   <span>
      This is only for FBI-API purpose and nothing else.
   </span>
   </footer>
</template>

<script>
</script>

<style scoped>
.footer {
   position: fixed;
   top: 90vh;
   right: 0;
   background-color: ghostwhite;
   z-index: 100;
}

.footer__logo {
   text-decoration: none;
   color: blue;
}

.footer__items {
   display: grid;
   grid-template-columns: repeat(9, 1fr);
}

.footer__item {
   display: grid;
   grid-template-columns: repeat(9, 1fr);
   padding: 20px;
   min-height: 100px;
   text-align: center;
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