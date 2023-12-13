<template>
  <UContainer class="mb-64">
    <UCard class="relative shadow-xl gradient-card">
      <div class="absolute left-0 top-0 backdrop-blur-sm w-full h-full z-[1]" />
      <USkeleton class="h-24 w-full mb-5" />
      <div class="flex gap-5">
        <USkeleton class="h-96 w-52" />
        <USkeleton class="h-96 w-full" />
      </div>
      <div class="z-[2] px-6 absolute m-auto left-0 right-0 top-40">
        <h1
          class="text-center text-4xl sm:text-5xl font-extrabold mb-12 max-w-xl m-auto"
        >
          {{ $t("home.dashboard.title") }}
        </h1>
        <UButton
          :label="$t('home.dashboard.button')"
          block
          class="max-w-xs m-auto"
          size="xl"
        />
      </div>
    </UCard>
  </UContainer>
</template>
