<script setup lang="ts">
const { metaSymbol } = useShortcuts();
const colorMode = useColorMode();

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
    <ClientOnly>
        <UTooltip>
            <UButton :icon="isDark
                ? 'i-heroicons-moon-20-solid'
                : 'i-heroicons-sun-20-solid'
                " color="gray" variant="ghost" aria-label="Theme" @click="isDark = !isDark" />

            <template #text>
                <UKbd :value="metaSymbol" size="xs" />
                <UKbd value="K" size="xs" />
            </template>
        </UTooltip>
        <template #fallback>
            <div class="w-8 h-8" />
        </template>
    </ClientOnly>
</template>