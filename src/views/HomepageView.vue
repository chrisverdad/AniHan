<template>
  <v-app>
    <!-- Fullscreen Background with Centered Content -->
    <v-main class="main-background d-flex align-center justify-center">
      <v-container class="text-center">
        <h1 class="display-1 mb-4 font-weight-bold text-white">wassup ANIHAN</h1>
        <p class="lead text-white">
          We help farmers and vendors repurpose surplus produce into valuable products like
          jams, wine, and fertilizer — reducing food waste and supporting sustainability.
        </p>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
// No script logic needed yet
</script>

<style scoped>
.main-background {
  background-image: url('@/assets/images/bg.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh;
}

.lead {
  font-size: 1.25rem;
}
</style>
