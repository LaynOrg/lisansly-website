<script setup lang="ts">
const examples = await queryContent().find();
const { locale } = useI18n();

let groups = Object.values(
  examples.reduce((groups: any, example: any) => {
    const dir = example._dir;
    if (!groups[dir]) {
      groups[dir] = [];
    }
    groups[dir].push(example);
    return groups;
  }, {}),
);

const getCode = (group: any) => {
  return group.filter((example: any) => example._path.includes("code"))[0];
};

const getAbout = (group: any) => {
  return group.filter((example: any) =>
    example._path.includes(locale.value),
  )[0];
};
</script>

<template>
  <UContainer class="flex flex-col my-32 md:my-56 gap-40 md:gap-48">
    <div
      v-for="(group, i) in groups"
      :key="i"
      :class="{
        'text-center lg:text-left gap-20 md:gap-32 flex flex-col': true,
        'lg:text-right': i % 2 === 0,
        'lg:flex-row-reverse': i % 2 === 0,
        'lg:flex-row': i % 2 === 1,
      }"
    >
      <ContentRendererMarkdown
        :value="getAbout(group)"
        class="[&>h1]:text-5xl [&>h1]:mb-6 [&>h1]:text-blue-400 dark:[&>h1]:text-blue-500 [&>p]:text-gray-600 dark:[&>p]:text-gray-400 lg:w-1/2 [&>p]: text-lg"
      />
      <ContentRendererMarkdown :value="getCode(group)" class="lg:w-1/2" />
    </div>
  </UContainer>
</template>
