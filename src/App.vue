<script setup>
import TheHeader from './components/TheHeader.vue';
import TheSidebar from './components/TheSidebar.vue';
import FeedGrid from './components/FeedGrid.vue';
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <TheHeader />

    <main class="flex pt-16">
      <TheSidebar class="hidden lg:block w-60 xl:w-72 flex-shrink-0 border-r" />

      <FeedGrid class="flex-grow p-4 md:p-6 lg:p-8" />
    </main>
  </div>
</template>
