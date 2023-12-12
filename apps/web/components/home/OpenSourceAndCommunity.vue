<script setup lang="ts">
const { socials } = useLinksStore();
</script>

<template>
  <UContainer class="text-center flex flex-col justify-center mb-48">
    <h1
      class="py-2 text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-gray-800 dark:from-gray-300 dark:to-gray-500 mb-3"
    >
      {{ $t("home.openSourceAndCommunity.title") }}
    </h1>
    <p class="text-xl sm:text-2xl text-gray-500 mb-10">
      {{ $t("home.openSourceAndCommunity.description") }}
    </p>
    <div class="flex flex-wrap justify-center gap-5">
      <UButton
        v-for="social in socials"
        :label="social.label"
        :icon="social.icon"
        :color="social.label !== 'Discord' && 'black'"
        size="xl"
        :to="social.href"
        target="_blank"
        :class="{
          'bg-[#7289da] dark:text-white': social.label === 'Discord',
        }"
      />
    </div>
  </UContainer>
</template>
