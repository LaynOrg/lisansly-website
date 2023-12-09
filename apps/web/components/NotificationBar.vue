<script setup lang="ts">
const isOpen = ref<boolean>(true);
const { locale } = useI18n()
</script>

<template>
    <div v-show="isOpen" class="text-white py-2 bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300
     dark:from-blue-950 dark:via-blue-900 dark:to-blue-800">
        <UContainer class="flex justify-between items-center">
            <div class="flex items-center gap-3">
                <p class="text-sm hidden sm:block">
                    {{ $t('notificationBarLabel') }}
                </p>
                <USelectMenu v-model="locale" :options="['tr', 'en']" class="uppercase w-16" size="2xs"
                    :ui-menu="{ option: { size: 'text-xs' } }">
                    <template #label>
                        <p class="uppercase">
                            {{ locale }}
                        </p>
                    </template>
                </USelectMenu>
            </div>
            <UButton variant="link" color="black" size="sm" icon="i-heroicons-x-mark-20-solid" @click="isOpen = false" />
        </UContainer>
    </div>
</template>