<template>
    <UContainer class="mt-36 text-center">
        <UBadge class="rounded-full px-3" variant="subtle">
            BETA
        </UBadge>
        <h1 class="max-w-4xl m-auto text-4xl sm:text-6xl py-2 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-gray-800
        dark:from-gray-300 dark:to-gray-500 mb-4">
            {{ $t('home.heroHeader.title') }}
        </h1>
        <p class="text-xl sm:text-2xl text-gray-500 max-w-xl m-auto">
            {{ $t('home.heroHeader.description') }}
        </p>
        <div class="mt-10 flex flex-wrap gap-5 justify-center">
            <UButton size="xl" color="gray" to="docs">
                {{ $t('home.heroHeader.learnMore') }}
            </UButton>
            <UButton size="xl" to="dashboard">
                {{ $t('home.heroHeader.start') }}
            </UButton>
        </div>
    </UContainer>
</template>

