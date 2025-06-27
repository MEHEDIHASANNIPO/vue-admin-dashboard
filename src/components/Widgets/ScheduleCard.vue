<template>
    <div class="max-w-md bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-md p-6">
        <!-- Heading -->
        <h2 class="text-xl font-bold text-gray-800 dark:text-white mb-4">Today's Schedule</h2>

        <!-- Schedule List -->
        <ul class="space-y-3 text-sm">
            <li class="flex justify-between items-center bg-gray-50 dark:bg-gray-800 px-4 py-2 rounded-lg border border-gray-100 dark:border-gray-700">
            <div>
                <p class="font-semibold text-gray-700 dark:text-gray-200">Team Standup</p>
                <p class="text-xs text-gray-500 dark:text-gray-400">9:00 AM - 9:30 AM</p>
            </div>
            <span class="text-xs text-blue-600 bg-blue-100 dark:text-blue-200 dark:bg-blue-900 px-2 py-0.5 rounded-full">Meeting</span>
            </li>

            <li class="flex justify-between items-center bg-gray-50 dark:bg-gray-800 px-4 py-2 rounded-lg border border-gray-100 dark:border-gray-700">
            <div>
                <p class="font-semibold text-gray-700 dark:text-gray-200">Design Review</p>
                <p class="text-xs text-gray-500 dark:text-gray-400">10:00 AM - 11:00 AM</p>
            </div>
            <span class="text-xs text-green-600 bg-green-100 dark:text-green-200 dark:bg-green-900 px-2 py-0.5 rounded-full">Workshop</span>
            </li>

            <li class="flex justify-between items-center bg-gray-50 dark:bg-gray-800 px-4 py-2 rounded-lg border border-gray-100 dark:border-gray-700">
            <div>
                <p class="font-semibold text-gray-700 dark:text-gray-200">Development Time</p>
                <p class="text-xs text-gray-500 dark:text-gray-400">11:30 AM - 1:00 PM</p>
            </div>
            <span class="text-xs text-purple-600 bg-purple-100 dark:text-purple-200 dark:bg-purple-900 px-2 py-0.5 rounded-full">Focus</span>
            </li>

            <li class="flex justify-between items-center bg-gray-50 dark:bg-gray-800 px-4 py-2 rounded-lg border border-gray-100 dark:border-gray-700">
            <div>
                <p class="font-semibold text-gray-700 dark:text-gray-200">Client Call</p>
                <p class="text-xs text-gray-500 dark:text-gray-400">3:00 PM - 4:00 PM</p>
            </div>
            <span class="text-xs text-red-600 bg-red-100 dark:text-red-200 dark:bg-red-900 px-2 py-0.5 rounded-full">Call</span>
            </li>
        </ul>
    </div>
</template>