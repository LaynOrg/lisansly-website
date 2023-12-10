<script setup lang="ts">
const slots = useSlots().default?.() || [];
const activeTabIndex = ref<number>(0);

const tabs = slots.map((slot) => {
  return {
    filename: slot.props?.filename,
    language: slot.props?.language,
    slot,
  };
});

const icons = new Map<string, string>([
  ["c#", "i-vscode-icons-file-type-csharp"],
  ["java", "i-logos-java"],
  ["ts", "i-devicon-typescript"],
  ["go", "i-logos-go"],
]);

const copied = ref<boolean>(false);

const copy = (text: string) => {
  navigator.clipboard.writeText(text);
  copied.value = true;
};

watch(copied, () => {
  if (copied.value) {
    setTimeout(() => {
      copied.value = false;
    }, 2000);
  }
});
</script>

<template>
  <UCard
    v-if="tabs"
    class="rounded-b-none p-2 bg-gradient-to-r from-gray-100 to-gray-50 dark:from-gray-950 dark:to-gray-900"
    :ui="{ body: { padding: '', base: 'flex gap-2' } }"
  >
    <UButton
      v-for="(tab, i) in tabs"
      :variant="activeTabIndex === i ? 'solid' : 'ghost'"
      :icon="icons.get(tab.language)"
      :ui="{ icon: { size: 'text-lg' } }"
      @click="activeTabIndex = i"
      :label="tab.filename"
      color="gray"
      :key="i"
    />
    <UButton
      class="ml-auto"
      :icon="
        copied
          ? 'i-heroicons-clipboard-document-check'
          : 'i-heroicons-clipboard-document'
      "
      color="gray"
      @click="copy(tabs[activeTabIndex].slot.props?.code)"
    />
  </UCard>
  <component :is="tabs[activeTabIndex].slot" />
</template>
