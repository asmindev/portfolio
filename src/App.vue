<template>
  <main class="theme smooth font-mono">
    <Navbar />
    <div class="container mx-auto md:p-8">
      <router-view />
    </div>
    <Footer />
  </main>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';

export default {
  components: {
    Navbar,
    Footer,
  },
};
</script>
<style>
.theme {
  @apply text-gray-800 bg-white dark:bg-gray-800 dark:text-gray-100;
}
.smooth {
  @apply transition-colors duration-500;
}
</style>
