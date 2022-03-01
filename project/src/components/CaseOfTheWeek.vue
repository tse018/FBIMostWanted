<template>
   <article class="article grid">
      <h2 class="article__title grid__item">
         {{ title }}
      </h2>
   </article>
</template>

<script>
export default {
   data() {
      return {
         title: 'Case of the week',
      }
   }

}
</script>

<style>
.article {
   margin-top: 150px;
}

.article__title {
   grid-column: 5 / 8;
   font-size: var(--desktop-undertitle);
}

@media screen and (max-width: 600px) {
   .article__title {
      grid-column: span 4;
      font-size: var(--mobile-undertitle);
   }
}

</style>