<template>
  <aside class="sidebar bg-gray-50 pt-6 flex flex-col justify-between sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto">
    
    <div>
      <nav class="main-nav-links space-y-2 mb-8">
        <a href="#" class="nav-item flex items-center py-2 px-6 text-gray-600 hover:text-black border-l-4 border-transparent hover:border-gray-300 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3" viewBox="0 0 24 24" fill="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2.586l.293-.293a1 1 0 011.414 0l.293.293V17a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293-.293a1 1 0 000-1.414l-7-7z" /></svg>
          Explore
        </a>       
        <a href="#" class="nav-item flex items-center py-2 px-6 text-gray-600 hover:text-black border-l-4 border-transparent hover:border-gray-300 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
          Following
        </a>
        <a href="#" class="nav-item flex items-center py-2 px-6 text-gray-600 hover:text-black border-l-4 border-transparent hover:border-gray-300 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
          Messages
        </a>
        <a href="#" class="nav-item flex items-center py-2 px-6 text-gray-600 hover:text-black border-l-4 border-transparent hover:border-gray-300 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
          Profile
        </a>
        <a href="#" class="nav-item flex items-center py-2 px-6 text-gray-600 hover:text-black border-l-4 border-transparent hover:border-gray-300 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M21 13.255A23.564 23.564 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
          Business
        </a>
      </nav>

      <div class="community-cta p-6 pt-4 border-t border-b">
        <p class="text-sm font-medium mb-3 italic">Join our community now!</p>
        <button class="login-button w-full bg-pink-600 text-white font-semibold py-2 rounded hover:bg-pink-700 transition-colors">
          Login
        </button>
      </div>
    </div>
    
    <div class="p-6 border-t">
        <a href="#" class="flex items-center text-sm text-gray-600 hover:text-black">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            More
        </a>
    </div>
  </aside>
</template>