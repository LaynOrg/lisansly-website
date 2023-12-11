<script setup lang="ts">
import type { LinkProps } from "ui/types";

const { metaSymbol } = useShortcuts();
const isOpen = ref<boolean>(false);
const colorMode = useColorMode();

const links: LinkProps[] = [
  { label: "header.links.0", href: "/" },
  { label: "header.links.1", href: "/docs" },
  { label: "header.links.2", href: "/pricing" },
  { label: "header.links.3", href: "/dashboard" },
];

const isDark = computed({
  get() {
    return colorMode.value === "dark";
  },
  set() {
    colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
  },
});

defineShortcuts({
  meta_k: {
    usingInput: true,
    handler: () => {
      isDark.value = !isDark.value;
    },
  },
});
</script>

<template>
  <header
    class="bg-gradient-to-br from-gray-300 via-gray-100 to-white dark:from-black dark:via-gray-950 dark:to-gray-900 border-solid border-b-2 border-gray-100 dark:border-gray-800"
  >
    <UContainer class="flex items-center py-4 justify-between">
      <LuLogo />
      <div class="gap-3 hidden sm:flex">
        <UButton
          v-for="link in links"
          :key="link.href"
          :to="link.href"
          :aria-label="link.label"
          :label="$t(link.label)"
          color="gray"
          variant="ghost"
        />
      </div>
      <div class="flex gap-3">
        <UButton icon="i-heroicons-user-circle-solid" color="gray" />
        <ClientOnly>
          <UTooltip :ui="{ base: 'pb-6 px-1 gap-1 flex' }">
            <UButton
              :icon="
                isDark
                  ? 'i-heroicons-moon-20-solid'
                  : 'i-heroicons-sun-20-solid'
              "
              color="gray"
              variant="ghost"
              aria-label="Theme"
              @click="isDark = !isDark"
            />
            <template #text>
              <UKbd :value="metaSymbol" />
              <UKbd value="K" />
            </template>
          </UTooltip>
          <template #fallback>
            <div class="w-8 h-8" />
          </template>
        </ClientOnly>
        <UButton
          class="sm:hidden"
          icon="i-heroicons-bars-3-20-solid"
          color="gray"
          variant="ghost"
          aria-label="Menu"
          @click="isOpen = !isOpen"
        />
      </div>
    </UContainer>
  </header>
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
      <div class="grid gap-3">
        <UButton
          v-for="link in links"
          :key="link.href"
          :to="link.href"
          :aria-label="link.label"
          :label="$t(link.label)"
          color="gray"
          variant="ghost"
          size="lg"
        />
      </div>
    </UCard>
  </USlideover>
</template>
