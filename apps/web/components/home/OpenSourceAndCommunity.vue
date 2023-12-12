<script setup lang="ts">
const config = useRuntimeConfig();
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
        label="Github"
        icon="i-simple-icons-github"
        color="black"
        size="xl"
        :to="config.public.gitHubUrl"
        target="_blank"
      />
      <UButton
        label="Twitter"
        icon="i-simple-icons-x"
        color="black"
        size="xl"
        :to="config.public.twitterUrl"
        target="_blank"
      />
      <UButton
        label="Discord"
        icon="i-simple-icons-discord"
        class="bg-[#7289da] dark:text-white"
        size="xl"
        :to="config.public.discordUrl"
        target="_blank"
      />
    </div>
  </UContainer>
</template>
