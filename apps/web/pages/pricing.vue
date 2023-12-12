<script setup lang="ts">
import type { PlanProps } from "~/types";

const ui = (mostPopular: boolean) => ({
  base: "px-3 py-2 overflow-visible",
  body: { base: "grid grid-rows-[auto,auto,1fr,10fr] relative" },
  ring: `${mostPopular ? "ring-blue-500" : "ring-gray-300"} dark:${
    mostPopular ? "ring-blue-500" : "ring-gray-800"
  } ${mostPopular ? "ring-4" : "ring-2"}`,
  background: "bg-gradient-to-b from-transparent to-gray-200 dark:to-black",
  rounded: "rounded-2xl",
  divide: "divide-gray-300",
});

const plans: PlanProps[] = [
  {
    name: "pricing.plans.0.name",
    description: "pricing.plans.0.description",
    list: [
      "pricing.plans.0.list.0",
      "pricing.plans.0.list.1",
      "pricing.plans.0.list.2",
      "pricing.plans.0.list.3",
    ],
    price: 0,
  },
  {
    name: "pricing.plans.1.name",
    description: "pricing.plans.1.description",
    list: ["pricing.plans.1.list.0", "pricing.plans.1.list.1"],
    price: 10,
    mostPopular: true,
  },
  {
    name: "pricing.plans.2.name",
    description: "pricing.plans.2.description",
    list: [
      "pricing.plans.2.list.0",
      "pricing.plans.2.list.1",
      "pricing.plans.2.list.2",
      "pricing.plans.2.list.3",
      "pricing.plans.2.list.4",
    ],
    price: 50,
  },
];
</script>
<template>
  <UContainer class="mt-0">
    <h1
      class="py-2 text-center text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-gray-800 dark:from-gray-300 dark:to-gray-500 mb-3"
    >
      {{ $t("pricing.title") }}
    </h1>
    <p class="text-center text-xl sm:text-2xl text-gray-500 mb-16">
      {{ $t("pricing.description") }}
    </p>
    <div
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 xl:gap-16"
    >
      <UCard
        v-for="{ description, list, name, mostPopular, price } in plans"
        :key="name"
        :ui="ui(mostPopular ? true : false)"
      >
        <UBadge
          v-show="mostPopular"
          class="absolute -top-6 flex right-0 rounded-full px-4"
          size="md"
        >
          {{ $t("pricing.mostPopular") }}
        </UBadge>
        <h1
          class="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-gray-800 dark:from-gray-300 dark:to-gray-500"
        >
          {{ $t(name) }}
        </h1>
        <span class="mb-4 mt-1 font-extrabold text-xl">
          {{ price + "$" }}
        </span>
        <p class="text-gray-500">
          {{ $t(description) }}
        </p>
        <ul class="list-disc ml-5 mt-10 text-sm">
          <li v-for="item in list" :key="item">
            {{ $t(item) }}
          </li>
        </ul>
        <UButton
          block
          :label="$t('pricing.button')"
          class="mt-7"
          size="md"
          :color="mostPopular ? 'blue' : 'black'"
        />
      </UCard>
    </div>
  </UContainer>
</template>
