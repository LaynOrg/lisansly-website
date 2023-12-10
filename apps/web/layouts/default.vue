<template>
  <div>
    <div class="fixed top-0 left-0 w-full z-10">
      <NotificationBar />
      <Header />
    </div>
    <main class="min-h-screen pt-28">
      <slot />
    </main>
  </div>
</template>
