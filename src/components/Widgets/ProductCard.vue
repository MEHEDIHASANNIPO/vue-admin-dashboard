<template>
    <div class="max-w-xs bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-md">
        <!-- Image -->
        <img src="@/assets/img/widgets/product.jpg" alt="Product image" class="w-full h-48 object-cover" />

        <!-- Details -->
        <div class="p-5 flex flex-col gap-2">
            <!-- Name -->
            <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-100">Minimalist Bluetooth Speaker</h3>

            <!-- Description -->
            <p class="text-sm text-gray-600 dark:text-gray-400">Crystal-clear audio, 12-hour battery, and a sleek aluminum body designed for any space.</p>

            <!-- Price & Rating -->
            <div class="flex items-center justify-between mt-2">
            <span class="text-xl font-bold text-mainColor dark:text-mainColor">$49<span class="text-sm align-super">.99</span></span>

            <!-- Rating stars -->
            <div class="flex text-amber-400">
                <!-- Filled stars -->
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.563-.955L10 0l2.949 5.955 6.563.955-4.756 4.635 1.122 6.545z"/></svg>
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.563-.955L10 0l2.949 5.955 6.563.955-4.756 4.635 1.122 6.545z"/></svg>
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.563-.955L10 0l2.949 5.955 6.563.955-4.756 4.635 1.122 6.545z"/></svg>
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.563-.955L10 0l2.949 5.955 6.563.955-4.756 4.635 1.122 6.545z"/></svg>
                <!-- Half-filled star -->
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.563-.955L10 0v15z"/><path fill="currentColor" fill-opacity=".3" d="M10 0l2.949 5.955 6.563.955-4.756 4.635 1.122 6.545L10 15V0z"/></svg>
            </div>
            </div>

            <!-- Button -->
            <button class="mt-4 w-full bg-mainColor hover:bg-mainColor dark:bg-mainColor dark:hover:bg-mainColor text-white font-medium py-2 rounded-lg transition-colors duration-200">Add to Cart</button>
        </div>
    </div>
</template>