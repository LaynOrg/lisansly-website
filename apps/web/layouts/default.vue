<script setup lang="ts">
useSeoMeta({
  title: "Lisansly",
});
</script>

<template>
  <div class="fixed top-0 left-0 w-full z-10">
    <NotificationBar />
    <Header />
  </div>
  <main class="min-h-screen pt-28">
    <NuxtPage />
  </main>
  <Footer />
</template>
