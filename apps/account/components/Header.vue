<script setup lang="ts">
import type { LinkProps } from "ui/types";
import { storeToRefs } from "pinia";

const isOpen = ref<boolean>(false);
const authStore = useAuthStore();
const { isAuthenticated } = storeToRefs(authStore);
const config=useRuntimeConfig();

const isAuth = computed(() => isAuthenticated.value);


const navigations: LinkProps[] = [
  {
    href: config.public.webUrl,
    label: "header.links.0",
  },
  {
    href: "/",
    label: "header.links.1",
  },
  {
    href: "/plan",
    label: "header.links.2",
  },
];
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
      <div class="hidden sm:flex gap-3" v-show="!isAuth">
        <UButton
          :label="$t('header.buttons.login')"
          color="black"
          size="xs"
          to="/login"
        />
        <UButton
          :label="$t('header.buttons.register')"
          color="gray"
          size="xs"
          to="/register"
        />
      </div>
      <UButton
        icon="i-heroicons-arrow-left-on-rectangle-20-solid"
        size="sm"
        variant="ghost"
        color="red"
        v-show="isAuth"
        @click="authStore.logout"
      />
      <LuToggleTheme />
      <UButton
        class="sm:hidden"
        icon="i-heroicons-bars-3-20-solid"
        color="gray"
        variant="ghost"
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
