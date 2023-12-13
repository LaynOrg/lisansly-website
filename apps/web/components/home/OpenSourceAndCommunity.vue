<script setup lang="ts">
const { socials } = useLinksStore();
</script>

<template>
  <UContainer class="text-center flex flex-col justify-center mb-56">
    <h1 class="gradient-heading text-4xl sm:text-5xl mb-3">
      {{ $t("home.openSourceAndCommunity.title") }}
    </h1>
    <p class="text-xl sm:text-2xl mb-10">
      {{ $t("home.openSourceAndCommunity.description") }}
    </p>
    <div class="flex flex-wrap justify-center gap-5">
      <UButton
        v-for="{ href, icon, label } in socials"
        :label="label"
        :icon="icon"
        :color="label === 'Discord' ? 'primary' : 'black'"
        size="xl"
        :to="href"
        target="_blank"
        :class="{
          'bg-[#7289da] dark:text-white': label === 'Discord',
        }"
      />
    </div>
  </UContainer>
</template>
