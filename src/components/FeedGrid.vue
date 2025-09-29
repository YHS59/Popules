<script setup>
import { onMounted, ref } from 'vue';
import { useFeedStore } from '../stores/feedStore.js'; // CORRECTED PATH
import PostCard from './PostCard.vue';

const feedStore = useFeedStore();
const sentinel = ref(null); // Ref to the hidden element at the bottom

// Intersection Observer for Infinite Scroll (Bonus)
onMounted(() => {
  feedStore.fetchPosts(); // Initial load

  const observer = new IntersectionObserver(
    (entries) => {
      // If the sentinel is visible and we aren't loading, fetch more posts
      if (entries[0].isIntersecting && !feedStore.isLoading && feedStore.hasMore) {
        feedStore.fetchPosts();
      }
    },
    { 
      rootMargin: '100px', // Start loading slightly before reaching the bottom
      threshold: 0.1 
    } 
  );

  if (sentinel.value) {
    observer.observe(sentinel.value);
  }
});
</script>

<template>
  <section class="feed-container">
    <nav class="flex space-x-6 pb-4 overflow-x-auto whitespace-nowrap text-sm border-b mb-6 
                sticky top-16 z-10 bg-gray-50 backdrop-blur-sm">
      
      <a href="#" class="font-bold text-black border-b-2 border-black pb-2 transition-colors">All</a>
      
      <a href="#" class="text-gray-600 hover:text-black border-b-2 border-transparent hover:border-black/50 pb-2 transition-colors">Vacancies</a>
      <a href="#" class="text-gray-600 hover:text-black border-b-2 border-transparent hover:border-black/50 pb-2 transition-colors">Workplace</a>
      <a href="#" class="text-gray-600 hover:text-black border-b-2 border-transparent hover:border-black/50 pb-2 transition-colors">Food</a>
      <a href="#" class="text-gray-600 hover:text-black border-b-2 border-transparent hover:border-black/50 pb-2 transition-colors">Design</a>
      <a href="#" class="text-gray-600 hover:text-black border-b-2 border-transparent hover:border-black/50 pb-2 transition-colors">Cars</a>
      <a href="#" class="text-gray-600 hover:text-black border-b-2 border-transparent hover:border-black/50 pb-2 transition-colors">Lifestyle</a>
      <a href="#" class="text-gray-600 hover:text-black border-b-2 border-transparent hover:border-black/50 pb-2 transition-colors">Travel</a>
      <a href="#" class="text-gray-600 hover:text-black border-b-2 border-transparent hover:border-black/50 pb-2 transition-colors">Makeup</a>
      <a href="#" class="text-gray-600 hover:text-black border-b-2 border-transparent hover:border-black/50 pb-2 transition-colors">Fitness</a>
    </nav>

    <div class="post-grid grid gap-6 sm:gap-8 xl:gap-10" 
         style="grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));">
      
      <PostCard 
        v-for="post in feedStore.posts" 
        :key="post.id" 
        :post="post" 
      />
    </div>

    <div ref="sentinel" class="h-1 bg-transparent my-10"></div>

    <div v-if="feedStore.isLoading" class="text-center py-4 text-gray-500">
      Loading more posts...
    </div>
    <div v-if="!feedStore.hasMore && feedStore.posts.length > 0" class="text-center py-4 text-gray-500">
      You've reached the end of the feed.
    </div>
  </section>
</template>