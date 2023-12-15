<script setup lang="ts">
import type { LinkProps } from "ui/types";

const navigations: LinkProps[] = [
  {
    href: "/",
    label: "header.links.0",
  },
  {
    href: "/settings",
    label: "header.links.1",
  },
  {
    href: "/plan",
    label: "header.links.2",
  },
];

const isOpen = ref<boolean>(false);
</script>

<template>
  <UCard
    class="gradient-card rounded-t-none"
    :ui="{ body: { base: 'flex justify-between px-6 py-5', padding: '' } }"
  >
    <div class="flex gap-3 items-center">
      <LuLogo class="mr-2" />
      <UButton
        v-for="{ href, label } in navigations"
        :to="href"
        variant="ghost"
        color="gray"
        class="hidden sm:flex"
      >
        {{ $t(label) }}
      </UButton>
    </div>
    <div class="flex gap-3 items-center">
      <UButton
        :label="$t('header.buttons.login')"
        color="black"
        size="xs"
        class="hidden sm:flex"
      />
      <UButton
        :label="$t('header.buttons.register')"
        color="gray"
        size="xs"
        class="hidden sm:flex"
        to="/register"
      />
      <LuToggleTheme />
      <UButton
        class="sm:hidden"
        icon="i-heroicons-bars-3-20-solid"
        color="gray"
        variant="ghost"
        aria-label="Menu"
        @click="isOpen = !isOpen"
      />
    </div>
  </UCard>
  <USlideover v-model="isOpen">
    <UCard
      class="flex flex-col flex-1"
      :ui="{
        body: { base: 'flex-1' },
        ring: '',
        divide: 'divide-y divide-gray-100 dark:divide-gray-800',
      }"
    >
      <template #header>
        <UButton
          color="gray"
          variant="ghost"
          icon="i-heroicons-x-mark-20-solid"
          @click="isOpen = false"
        />
      </template>
      <ClientOnly>
        <div class="grid gap-3">
          <UButton
            v-for="{ href, label } in navigations"
            :key="href"
            :to="href"
            :aria-label="label"
            :label="$t(label)"
            color="gray"
            variant="ghost"
            size="lg"
          />
        </div>
      </ClientOnly>
    </UCard>
  </USlideover>
</template>
