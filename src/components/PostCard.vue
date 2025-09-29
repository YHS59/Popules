<script setup>
defineProps({
    post: {
        type: Object,
        required: true,
    },
});
</script>

<template>
  <div class="post-card bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:scale-[1.01] transition-all duration-300 cursor-pointer group">
    
    <div class="relative w-full aspect-[4/3]">
      <img :src="post.image_url" 
           :alt="post.caption" 
           class="w-full h-full object-cover transition-all duration-300 group-hover:brightness-90">
      
      <div v-if="post.tag" 
           class="absolute top-3 left-3 bg-pink-600/80 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
        {{ post.tag }}
      </div>
    </div>
    
    <div class="p-4">
      <h3 class="text-base font-extrabold mb-1 truncate text-gray-900">{{ post.caption || 'Untitled Post' }}</h3>
      
      <div class="flex justify-between items-center mt-2">
        
        <p class="text-xs text-gray-700 bg-gray-100 px-2 py-0.5 rounded-full font-medium truncate">
          {{ post.user_handle || '@anonymous' }}
        </p>

        <div class="flex text-gray-400 text-sm space-x-3">
          
          <div class="flex items-center space-x-0.5 hover:text-pink-600 transition-colors cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-pink-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
              </svg>
              <span class="text-xs">{{ post.likes_count || 0 }}</span>
          </div>
          
          <div class="flex items-center space-x-0.5 hover:text-gray-700 transition-colors cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <span class="text-xs">0</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>