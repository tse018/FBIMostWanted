<template>
   <footer class="footer-container">
      <p class="footer-container__content">
         Built in Vue.js, Vuex, Router & FBI REST-API
      </p>
   </footer>
</template>

<style>
.footer-container {
   position: fixed;
   bottom: 0;
   width: 100%;
   height: 60px;
   background: whitesmoke;
   z-index: 100;
}

.footer-container__content {
   margin-top: 15px;
   text-align: center;
   color: black;
   font-size: 20px;
}

@media screen and (min-width: 981px) and (max-width: 1200px) {
   .footer-container__content {
      font-size: 20px;
   }
}
</style>
