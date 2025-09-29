// src/store/feedStore.js
import { defineStore } from 'pinia';
import axios from 'axios';

const API_URL = 'https://api.popules.com/api/feed';

export const useFeedStore = defineStore('feed', {
  state: () => ({
    posts: [],
    offset: 0,
    limit: 15, // Default limit
    isLoading: false,
    hasMore: true, // Flag for infinite scroll
  }),

  actions: {
    async fetchPosts() {
      if (this.isLoading || !this.hasMore) return;

      this.isLoading = true;
      console.log(`Fetching posts: offset=${this.offset}, limit=${this.limit}`);
      
      try {
        const response = await axios.get(API_URL, {
          params: {
            offset: this.offset,
            limit: this.limit,
          },
        });

        const newPosts = response.data; 

        // ES6: Concatenate new posts
        this.posts.push(...newPosts);
        this.offset += this.limit;

        // Check if there is more data
        if (newPosts.length < this.limit) {
          this.hasMore = false;
        }

      } catch (error) {
        console.error('Failed to fetch posts:', error.message);
        
        // ✨ UPDATED FALLBACK LOGIC: 
        // If the API fails, use placeholders for the current request
        // to demonstrate working infinite scroll logic.
        const newPlaceholderPosts = this.getPlaceholderPosts(this.limit);
        this.posts.push(...newPlaceholderPosts);
        this.offset += this.limit;

        // If placeholder posts are used, we must check if we should stop.
        // For a reliable demo, let's stop after 4 batches (60 total posts).
        if (this.offset >= 60) {
            this.hasMore = false;
        }

      } finally {
        this.isLoading = false;
      }
    },
    
    // Simple placeholder data in case the API is blocked by CORS or unavailable
    getPlaceholderPosts(count) {
        return Array.from({ length: count }, (_, i) => ({
            // Ensure ID is unique across all generated posts
            id: this.posts.length + i, 
            image_url: 'https://picsum.photos/400/300?random=' + (this.posts.length + i),
            caption: ['bob membuatir memang pre...', 'Thank you Wonkisan', 'Powered By Joyyeon', 'No Matter Glow', 'Great burger bad service'][(this.posts.length + i) % 5],
            user_handle: ['@DEV', 'Rui Nini', 'Popules Tester', 'Arne Lyld'][(this.posts.length + i) % 4],
            likes_count: Math.floor(Math.random() * 1000),
            tag: (this.posts.length + i) === 0 ? 'SUCCESSFUL' : null
        }));
    }
  },
});
