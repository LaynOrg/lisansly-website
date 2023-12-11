<template>
  <UCard class="rounded-xl rounded-t-none" :ui="{ body: { padding: '' } }">
    <slot />
  </UCard>
</template>

<style scoped>
:slotted(pre) {
  padding: 0.7rem;
  counter-reset: lines;
  text-align: left;
  overflow-x: auto;
}
:slotted(.line::before) {
  counter-increment: lines;
  content: counter(lines);
  margin-right: 1rem;
  opacity: 0.3;
}
</style>
