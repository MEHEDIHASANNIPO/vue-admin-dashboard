<template>
    <div class="max-w-md bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden border border-gray-200 dark:border-gray-700">
        <!-- Header -->
        <div class="flex items-center justify-between px-4 py-3">
            <div class="flex items-center space-x-3">
            <img class="w-10 h-10 rounded-full border border-gray-300 dark:border-gray-700" src="@/assets/img/widgets/profile.jpg" alt="User profile" />
            <div>
                <p class="text-sm font-semibold text-gray-800 dark:text-white">john_doe</p>
                <p class="text-xs text-gray-500 dark:text-gray-400">New York, USA</p>
            </div>
            </div>
            <button class="text-gray-400 hover:text-gray-600 dark:hover:text-white">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 7a2 2 0 110-4 2 2 0 010 4zm0 7a2 2 0 110-4 2 2 0 010 4zm0 7a2 2 0 110-4 2 2 0 010 4z" />
            </svg>
            </button>
        </div>

        <!-- Post Image -->
        <img class="w-full max-h-[400px] object-cover" src="@/assets/img/widgets/instagram.jpg" alt="Post image" />

        <!-- Actions -->
        <div class="px-4 pt-4 pb-2 flex items-center justify-between">
            <div class="flex space-x-4 text-gray-600 dark:text-gray-300">
            <!-- Like -->
            <button class="hover:text-red-500 transition">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 
                5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 
                4.5 2.09C13.09 3.81 14.76 3 16.5 
                3 19.58 3 22 5.42 22 8.5c0 
                3.78-3.4 6.86-8.55 11.54L12 
                21.35z"/>
                </svg>
            </button>
            <!-- Comment -->
            <button class="hover:text-blue-500 transition">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 2H4a2 2 0 00-2 2v14l4-4h14a2 2 0 002-2V4a2 2 0 00-2-2z"/>
                </svg>
            </button>
            <!-- Share -->
            <button class="hover:text-green-500 transition">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 
                12.7a3.274 3.274 0 000-1.39l7.05-4.11a3 
                3 0 10-.95-1.66l-7.05 4.11a3 3 0 
                100 4.88l7.05 4.11c.52-.49 1.2-.77 
                1.96-.77a3 3 0 100-6z"/>
                </svg>
            </button>
            </div>
            <!-- Bookmark -->
            <button class="hover:text-yellow-500 text-gray-500 dark:text-gray-400">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 4a2 2 0 00-2 2v16l8-4 8 4V6a2 2 0 00-2-2H6z"/>
            </svg>
            </button>
        </div>

        <!-- Caption -->
        <div class="px-4 pb-3">
            <p class="text-sm text-gray-800 dark:text-white">
            <span class="font-semibold">john_doe</span> Exploring the wild trails 🌿🌄 #NatureLover #AdventureTime </p>
            <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">2 hours ago</p>
        </div>
    </div>
</template>