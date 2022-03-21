<template>
   <transition name="animation">
      <RouterView :key="$route.path" />
   </transition>
</template>

<script>
</script>

<style>
@import "../style/reset.css";
@import "../style/font.css";
@import "../style/variables.css";
@import "../style/style.css";
</style>
