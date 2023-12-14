<script setup lang="ts">
const { navigations } = useLinksStore();
const isOpen = ref<boolean>(false);
</script>

<template>
  <header
    class="bg-gradient-to-br from-gray-300 via-gray-100 to-white dark:from-black dark:via-gray-950 dark:to-gray-900 border-solid border-b-2 border-gray-100 dark:border-gray-800"
  >
    <UContainer class="flex items-center py-4 justify-between">
      <LuLogo />
      <ClientOnly>
        <div class="gap-3 hidden sm:flex">
          <UButton
            v-for="{ href, label } in navigations"
            :key="href"
            :to="href"
            :aria-label="label"
            :label="$t(label)"
            color="gray"
            variant="ghost"
          />
        </div>
      </ClientOnly>
      <div class="flex gap-3">
        <UButton icon="i-heroicons-user-circle-solid" color="gray" />
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
