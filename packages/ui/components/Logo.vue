<script setup lang="ts">
const config = useRuntimeConfig()
</script>

<template>
    <div class="flex items-center gap-2">
        <img :src="config.public.logoUrl" alt="logo" class="h-8 object-contain" />
        <h1 class="text-md font-semibold">
            Lisansly
        </h1>
    </div>
</template>