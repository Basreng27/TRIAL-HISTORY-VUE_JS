<template>
  <div>
    <Header />
    <div class="container">
      <RouterView />
    </div>
    <Footer />
  </div>
</template>

<script setup>
  import './assets/js/bootstrap/vite.config'

  import Header from './views/template/header.vue'
  import Footer from './views/template/footer.vue'
  import { RouterLink, RouterView } from 'vue-router'
</script>
