<template>
  <header class="main-header fixed top-0 left-0 right-0 h-16 bg-gray-50 border-b z-20 flex items-center px-4 lg:px-6">
    
    <div class="flex-shrink-0 mr-6">
        <a href="/" class="logo text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-red-600 tracking-tight transform hover:scale-105 inline-block drop-shadow-md transition-all duration-300 font-serif italic">
            Popules.
        </a>
    </div>

    <div class="flex-grow flex items-center">
      <div class="relative hidden md:block w-96 mr-8">
        <input 
          type="text" 
          placeholder="Search..." 
          class="w-full py-2 pl-10 pr-4 text-sm border border-gray-300 rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-pink-500 transition-shadow duration-300"
        >
        <span class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </span>
      </div>
    </div>

    <div class="flex-shrink-0 flex items-center space-x-4 ml-4">
      
      <button class="post-button bg-pink-600 text-white font-semibold py-1.5 px-4 rounded hover:bg-pink-500 transition-all duration-300 hover:shadow-lg hover:shadow-pink-300/50">
        Post
      </button>

      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 cursor-pointer hover:text-gray-900 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
      </svg>

      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 cursor-pointer hover:text-gray-900 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
      </svg>
      
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 cursor-pointer hover:text-gray-900 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    </div>
  </header>
</template>