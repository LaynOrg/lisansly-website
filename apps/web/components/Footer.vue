<script setup lang="ts">
const config = useRuntimeConfig();
const { navigations, socials } = useLinksStore();
</script>

<template>
  <UContainer
    as="footer"
    class="mt-10 rounded-t-3xl border-2 border-b-0 border-gray-200 dark:border-gray-800 py-5 bg-gradient-to-t from-gray-300 via-gray-100 to-white dark:from-gray-950 dark:via-gray-900 dark:to-gray-800"
  >
    <div class="flex items-center justify-center sm:justify-between">
      <div class="hidden sm:flex gap-5">
        <ULink
          v-for="link in navigations"
          :to="link.href"
          class="text-sm"
          active-class="text-primary"
          inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
        >
          {{ $t(link.label) }}
        </ULink>
      </div>
      <div class="flex gap-3">
        <UButton
          v-for="social in socials"
          :to="social.href"
          target="_blank"
          :icon="social.icon"
          variant="link"
          color="gray"
        />
      </div>
    </div>
    <div
      class="gap-3 flex-col sm:flex-row justify-center pt-5 mt-5 border-t-2 border-t-gray-200 dark:border-t-gray-800 flex sm:justify-between items-center"
    >
      <LuLogo />
      <div class="flex items-center gap-2">
        <UTooltip :text="$t('footer.tooltipText')">
          <img :src="config.public.laynLogoUrl" class="h-7" alt="layn-logo" />
        </UTooltip>
        <a class="text-xs" :href="config.public.laynUrl" target="_blank">
          {{ $t("footer.author") }}
        </a>
      </div>
    </div>
  </UContainer>
</template>
