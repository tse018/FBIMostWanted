<template>
   <Header />
   <router-view v-slot="{ Component }">
      <transition name="animation">
         <component :is="Component" />
      </transition>
   </router-view>
   <Footer />
</template>

<script>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';

import seoMixin from '../mixins/seoMixin.js';

export default {
   mixins: [seoMixin],
   
   components: {
      Header,
      Footer
   },

   created() {
      this.metaTags({
         title: 'FBI Most Wanted',
		});
   },
}
</script>

<style>
@import "../style/reset.css";
@import "../style/font.css";
@import "../style/variables.css";
@import "../style/style.css";
</style>
