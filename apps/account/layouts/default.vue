<script setup lang="ts">
useSeoMeta({
  title: "Lisansly Account",
});
</script>

<template>
  <Header />
  <UContainer :ui="{ constrained: 'max-w-xl mt-8' }">
    <NuxtPage />
  </UContainer>
  <UNotifications />
</template>
