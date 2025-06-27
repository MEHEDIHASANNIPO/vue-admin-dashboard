<template>
    <div class="max-w-md bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-md p-6">
        <!-- Heading -->
        <h2 class="text-xl font-bold text-gray-800 dark:text-white mb-4">Recent Transactions</h2>

        <!-- Transactions List -->
        <ul class="divide-y divide-gray-200 dark:divide-gray-700">
            <!-- Item -->
            <li class="py-3 flex items-center justify-between">
            <div class="flex items-center space-x-3">
                <div class="bg-green-100 dark:bg-green-800 text-green-600 dark:text-green-200 p-2 rounded-full">
                <!-- Deposit Icon -->
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 21c4.97 0 9-4.03 9-9s-4.03-9-9-9S3 7.03 3 12c0 1.61.41 3.13 1.14 4.45l-1.1 4.12a.5.5 0 00.61.61l4.12-1.1A8.963 8.963 0 0012 21z"/>
                </svg>
                </div>
                <div>
                <p class="text-sm font-medium text-gray-800 dark:text-gray-200">Deposit from PayPal</p>
                <p class="text-xs text-gray-500 dark:text-gray-400">June 25, 2025</p>
                </div>
            </div>
            <span class="text-green-600 dark:text-green-300 font-semibold">+ $250.00</span>
            </li>

            <!-- Item -->
            <li class="py-3 flex items-center justify-between">
            <div class="flex items-center space-x-3">
                <div class="bg-red-100 dark:bg-red-800 text-red-600 dark:text-red-200 p-2 rounded-full">
                <!-- Payment Icon -->
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M21 7H3a2 2 0 00-2 2v2h22V9a2 2 0 00-2-2zm0 4H1v6a2 2 0 002 2h18a2 2 0 002-2v-6z"/>
                </svg>
                </div>
                <div>
                <p class="text-sm font-medium text-gray-800 dark:text-gray-200">Payment to Amazon</p>
                <p class="text-xs text-gray-500 dark:text-gray-400">June 24, 2025</p>
                </div>
            </div>
            <span class="text-red-600 dark:text-red-300 font-semibold">- $79.99</span>
            </li>

            <!-- Item -->
            <li class="py-3 flex items-center justify-between">
            <div class="flex items-center space-x-3">
                <div class="bg-yellow-100 dark:bg-yellow-800 text-yellow-600 dark:text-yellow-200 p-2 rounded-full">
                <!-- Transfer Icon -->
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 3a1 1 0 011 1v11.59l3.3-3.3a1 1 0 111.4 1.42l-5 5a1 1 0 01-1.4 0l-5-5a1 1 0 111.4-1.42L11 15.59V4a1 1 0 011-1z"/>
                </svg>
                </div>
                <div>
                <p class="text-sm font-medium text-gray-800 dark:text-gray-200">Bank Transfer</p>
                <p class="text-xs text-gray-500 dark:text-gray-400">June 23, 2025</p>
                </div>
            </div>
            <span class="text-yellow-600 dark:text-yellow-300 font-semibold">- $300.00</span>
            </li>
        </ul>
    </div>
</template>