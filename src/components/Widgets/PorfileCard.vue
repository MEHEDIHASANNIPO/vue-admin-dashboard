<template>
    <div class="max-w-sm p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md border border-gray-100 dark:border-gray-700">
        <div class="flex flex-col items-center">
            <img class="w-28 h-28 rounded-full border-4 border-white dark:border-gray-800 shadow-lg" src="@/assets/img/widgets/profile.jpg" alt="Profile Photo" />
            <h2 class="mt-4 text-2xl font-bold text-gray-800 dark:text-white">John Doe</h2>
            <p class="text-sm text-gray-500 dark:text-gray-400">Full-Stack Developer</p>
            <p class="mt-3 text-center text-gray-600 dark:text-gray-300 text-sm">
            Passionate about building performant web apps and empowering users through technology.
            </p>
            
            <!-- Social Link -->
            <div class="mt-4 flex gap-4">
            <a href="#" class="text-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.522-4.478-10-10-10S2 6.478 2 12a9.993 9.993 0 007.193 9.486v-6.712H6.744v-2.774h2.449V9.845c0-2.422 1.441-3.755 3.653-3.755 1.059 0 2.166.189 2.166.189v2.38h-1.22c-1.203 0-1.577.748-1.577 1.515v1.82h2.684l-.429 2.774h-2.255v6.712A9.993 9.993 0 0022 12z"/>
                </svg>
            </a>
            <a href="#" class="text-pink-500 hover:text-pink-600 dark:hover:text-pink-400 transition">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.206.058 2.003.25 2.465.418a4.92 4.92 0 011.675 1.096 4.92 4.92 0 011.096 1.675c.168.462.36 1.259.418 2.465.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.058 1.206-.25 2.003-.418 2.465a4.92 4.92 0 01-1.096 1.675 4.92 4.92 0 01-1.675 1.096c-.462.168-1.259.36-2.465.418-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.206-.058-2.003-.25-2.465-.418a4.902 4.902 0 01-2.771-2.771c-.168-.462-.36-1.259-.418-2.465C2.175 15.747 2.163 15.367 2.163 12s.012-3.584.07-4.85c.058-1.206.25-2.003.418-2.465a4.902 4.902 0 012.771-2.771c.462-.168 1.259-.36 2.465-.418C8.416 2.175 8.796 2.163 12 2.163zm0 1.838a8 8 0 100 16 8 8 0 000-16zm0 3.838a4.162 4.162 0 110 8.324 4.162 4.162 0 010-8.324zm0 6.783a2.621 2.621 0 100-5.243 2.621 2.621 0 000 5.243zm4.406-6.88a.96.96 0 11-1.92 0 .96.96 0 011.92 0z"/>
                </svg>
            </a>
            <a href="#" class="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.954 4.569a10 10 0 01-2.825.775 4.933 4.933 0 002.163-2.724c-.935.555-1.967.959-3.067 1.184A4.92 4.92 0 0016.616 3c-2.717 0-4.92 2.203-4.92 4.92 0 .386.045.762.127 1.124C7.728 8.795 4.1 6.79 1.671 3.149a4.822 4.822 0 00-.666 2.475c0 1.708.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616c-.054 1.992 1.388 3.868 3.447 4.29a4.935 4.935 0 01-2.224.084c.63 1.965 2.445 3.392 4.6 3.432A9.867 9.867 0 010 19.54a13.924 13.924 0 007.548 2.209c9.056 0 14.002-7.496 14.002-13.986 0-.213-.005-.425-.014-.636A9.935 9.935 0 0024 4.59z"/>
                </svg>
            </a>
            </div>
        </div>
    </div>
</template>