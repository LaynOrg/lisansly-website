<script setup lang="ts">
import type { FeatureProps } from "~/types";

const ui = {
  base: "px-3 py-2 hover:bg-[#dbdee3] dark:hover:bg-gray-800 transition-all duration-500",
  ring: "ring-4 ring-gray-300 dark:ring-gray-800 hover:ring-blue-400 dark:hover:ring-blue-500",
  background: "bg-gradient-to-b from-transparent to-gray-200 dark:to-black",
  rounded: "rounded-2xl",
};

const features: FeatureProps[] = [
  {
    title: "home.features.contents.0.title",
    description: "home.features.contents.0.description",
    icon: "i-ph-stack",
  },
  {
    title: "home.features.contents.1.title",
    description: "home.features.contents.1.description",
    icon: "i-heroicons-code-bracket",
  },
  {
    title: "home.features.contents.2.title",
    description: "home.features.contents.2.description",
    icon: "i-ph-coins",
  },
];
</script>

<template>
  <div
    class="bg-gradient-to-b from-transparent pb-36 md:pb-56 pt-48 md:pt-80 via-gray-100 to-gray-200 dark:via-gray-900 dark:to-gray-950 border-b-4 border-b-gray-50 dark:border-b-gray-900"
  >
    <UContainer>
      <h1
        class="text-center text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-gray-800 dark:from-gray-300 dark:to-gray-500 mb-3"
      >
        {{ $t("home.features.title") }}
      </h1>
      <p class="text-center text-xl sm:text-2xl text-gray-500 mb-16">
        {{ $t("home.features.description") }}
      </p>
      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 lg:gap-10"
      >
        <UCard v-for="feature in features" :key="feature.title" :ui="ui">
          <UIcon
            :name="feature.icon"
            class="text-5xl text-blue-400 dark:text-blue-500"
          />
          <h1 class="mt-5 mb-2 text-2xl font-bold">
            {{ $t(feature.title) }}
          </h1>
          <p class="text-gray-500 dark:text-gray-400">
            {{ $t(feature.description) }}
          </p>
        </UCard>
      </div>
    </UContainer>
  </div>
</template>
