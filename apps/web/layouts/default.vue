<script setup lang="ts"></script>

<template>
  <div>
    <div class="fixed top-0 left-0 w-full">
      <NotificationBar />
      <Header />
    </div>
    <main class="min-h-screen pt-28">
      <slot />
    </main>
  </div>
</template>
