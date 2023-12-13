<script setup lang="ts">
import type { LicensingOptionProps } from "~/types";

const ui = {
  base: "px-3 py-2",
  rounded: "rounded-2xl",
  divide: "divide-gray-300",
};

const options: LicensingOptionProps[] = [
  {
    label: "home.licensingOptions.options.0.title",
    description: "home.licensingOptions.options.0.description",
    icon: "i-tabler-cloud-computing",
    href: "/",
  },
  {
    label: "home.licensingOptions.options.1.title",
    description: "home.licensingOptions.options.1.description",
    icon: "i-mdi-shield-account",
    href: "/",
  },
];
</script>

<template>
  <div
    class="bg-gradient-to-t from-transparent pt-36 md:pt-56 pb-48 md:pb-80 via-gray-100 to-gray-200 dark:via-gray-900 dark:to-gray-950 border-t-4 border-t-gray-50 dark:border-t-gray-900"
  >
    <UContainer>
      <h1
        class="gradient-heading max-w-3xl m-auto text-center text-4xl sm:text-5xl font-extrabold mb-14"
      >
        {{ $t("home.licensingOptions.title") }}
      </h1>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20">
        <UCard
          v-for="{ description, href, icon, label } in options"
          :ui="ui"
          class="gradient-card"
        >
          <template #header>
            <div class="flex flex-wrap items-center gap-5">
              <UIcon
                :name="icon"
                class="text-4xl text-blue-400 dark:text-blue-500"
              />
              <h1 class="text-2xl font-bold">
                {{ $t(label) }}
              </h1>
            </div>
          </template>
          <p>
            {{ $t(description) }}
          </p>
          <template #footer>
            <ULink
              :to="href"
              class="text-sm hover:text-blue-400 dark:hover:text-blue-500 transition-all duration-300 hover:drop-shadow-lg"
            >
              {{ $t("home.licensingOptions.moreInfo") }}
              <UIcon name="i-tabler-chevron-right" />
            </ULink>
          </template>
        </UCard>
      </div>
    </UContainer>
  </div>
</template>
