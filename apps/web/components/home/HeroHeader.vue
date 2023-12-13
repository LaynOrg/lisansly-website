<template>
  <UContainer class="mt-24 sm:mt-44 text-center">
    <UBadge class="rounded-full px-3" variant="subtle">BETA</UBadge>
    <h1
      class="gradient-heading max-w-4xl m-auto text-4xl sm:text-6xl py-2 font-extrabold mb-2"
    >
      {{ $t("home.heroHeader.title") }}
    </h1>
    <p class="text-xl sm:text-2xl max-w-xl m-auto">
      {{ $t("home.heroHeader.description") }}
    </p>
    <div class="mt-10 flex flex-wrap gap-5 justify-center">
      <UButton size="xl" color="gray" to="docs">
        {{ $t("home.heroHeader.learnMore") }}
      </UButton>
      <UButton size="xl" to="dashboard">
        {{ $t("home.heroHeader.start") }}
      </UButton>
    </div>
  </UContainer>
</template>
