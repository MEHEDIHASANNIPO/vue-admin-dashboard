<script setup>
/** All Library Import */
import { ref, inject } from 'vue';

/** All Variables */
const activeMenu = ref(null)
const navValue = inject('navbar')

/** All Methods */
const toggleMenu = (menuName) => {
  activeMenu.value = activeMenu.value === menuName ? null : menuName
}
</script>

<template>
    <!-- Navbar Start -->
    <div class="min-w-72 min-h-screen h-full origin-left fixed top-0 lg:translate-x-0 left-0 z-10 bg-white shadow-lg text-gray-50 py-8 px-9 transition-all ease-in-out duration-500 overflow-y-auto" :class="!navValue ? '-translate-x-[150%]' : ''">
        <span class="block lg:hidden absolute top-5 right-5 cursor-pointer text-mainColor" @click="navValue = false"><font-awesome-icon :icon="['fas', 'circle-xmark']" class="text-lg text-mainColor" /></span>
        <h2 class="text-center text-mainColor text-2xl font-bold">MHN <font-awesome-icon :icon="['fas', 'bolt']" class="text-lightColor text-3xl" /> Panel</h2>

        <!-- Dashboard -->
        <router-link :to="{name: 'dashboard'}" @click="navValue = false" class="py-2.5 px-4 rounded-lg bg-gray-100 mt-12 text-sm font-medium text-gray-700 flex items-center gap-3"><font-awesome-icon :icon="['fas', 'house']" /> Dashboard</router-link>
        <h4 class="text-sm font-semibold font-outfit mt-8 mb-6 text-gray-500">System Setting</h4>

        <ul class="space-y-6" id="mhnNav">

            <!-- Forms -->
            <li @click="toggleMenu('menu1')">
                <a href="javascript:void(0)" class="text-sm font-medium text-gray-700 flex items-center justify-between gap-3 hover:text-mainColor">
                    <span class="flex items-center gap-3"><font-awesome-icon :icon="['fab', 'wpforms']" /> Forms</span> <font-awesome-icon :icon="['fas', 'chevron-right']" class="transition duration-300 text-xs" />
                </a>
                <transition name="slide">
                    <ul v-show="activeMenu === 'menu1'" class="overflow-hidden py-1.5 my-3 space-y-4 list-disc ps-8 transition-all ease-in-out duration-500 marker:text-mainColor">
                        <li><router-link :to="{ name: 'formElement' }" @click="navValue = false" class="text-sm font-medium text-gray-700 hover:text-mainColor">Form Element</router-link></li>
                        <li><router-link :to="{ name: 'formGroup' }" @click="navValue = false" class="text-sm font-medium text-gray-700 hover:text-mainColor">Form Group</router-link></li>
                    </ul>    
                </transition>                
            </li>

            <!-- Tables -->
            <li @click="toggleMenu('menu2')">
                <a href="javascript:void(0)" class="text-sm font-medium text-gray-700 flex items-center justify-between gap-3 hover:text-mainColor">
                    <span class="flex items-center gap-3"><font-awesome-icon :icon="['fas', 'table']" /> Tables</span> <font-awesome-icon :icon="['fas', 'chevron-right']" class="transition duration-300 text-xs" />
                </a>
                <transition name="slide">
                
                    <ul v-show="activeMenu === 'menu2'" class="overflow-hidden py-1.5 my-3 space-y-4 list-disc ps-8 transition-all ease-in-out duration-500 marker:text-mainColor">
                        <li><router-link :to="{ name: 'basicTable' }" @click="navValue = false" class="text-sm font-medium text-gray-700 hover:text-mainColor">Basic Table</router-link></li>
                        <li><router-link :to="{ name: 'paginateTable' }" @click="navValue = false" class="text-sm font-medium text-gray-700 hover:text-mainColor">Paginate Table</router-link></li>
                    </ul>   
                </transition>
            </li>

            <!-- Authentication -->
            <li @click="toggleMenu('menu3')">
                <a href="javascript:void(0)" class="text-sm font-medium text-gray-700 flex items-center justify-between gap-3 hover:text-mainColor">
                    <span class="flex items-center gap-3"><font-awesome-icon :icon="['fas', 'lock']" /> Authentication</span>
                    <font-awesome-icon :icon="['fas', 'chevron-right']" class="transition duration-300 text-xs" />
                </a>
                <transition name="slide">
                    <ul v-show="activeMenu === 'menu3'" class="overflow-hidden py-1.5 my-3 space-y-4 list-disc ps-8 transition-all ease-in-out duration-500 marker:text-mainColor">
                        <li><router-link :to="{ name: 'register' }" @click="navValue = false" class="text-sm font-medium text-gray-700 hover:text-mainColor">Register</router-link></li>
                        <li><router-link :to="{ name: 'login' }" @click="navValue = false" class="text-sm font-medium text-gray-700 hover:text-mainColor">Login</router-link></li>
                    </ul>   
                </transition>
            </li>

            <!-- Ecommerce -->
            <li @click="toggleMenu('menu4')">
                <a href="javascript:void(0)" class="text-sm font-medium text-gray-700 flex items-center justify-between gap-3 hover:text-mainColor">
                    <span class="flex items-center gap-3"><font-awesome-icon :icon="['fas', 'cart-shopping']" /> Ecommerce</span>
                    <font-awesome-icon :icon="['fas', 'chevron-right']" class="transition duration-300 text-xs" />
                </a>
                <transition name="slide">
                    <ul v-show="activeMenu === 'menu4'" class="overflow-hidden py-1.5 my-3 space-y-4 list-disc ps-8 transition-all ease-in-out duration-500 marker:text-mainColor">
                        <li><router-link :to="{ name: 'products' }" @click="navValue = false" class="text-sm font-medium text-gray-700 hover:text-mainColor">Products List</router-link></li>
                        <li><router-link :to="{ name: 'pricing' }" @click="navValue = false" class="text-sm font-medium text-gray-700 hover:text-mainColor">Pricing</router-link></li>
                    </ul>   
                </transition>
            </li>

            <!-- Error Pages -->
            <li @click="toggleMenu('menu5')">
                <a href="javascript:void(0)" class="text-sm font-medium text-gray-700 flex items-center justify-between gap-3 hover:text-mainColor">
                    <span class="flex items-center gap-3"><font-awesome-icon :icon="['fas', 'bug']" /> Error Pages</span>
                    <font-awesome-icon :icon="['fas', 'chevron-right']" class="transition duration-300 text-xs" />
                </a>
                <transition name="slide">
                    <ul v-show="activeMenu === 'menu5'" class="overflow-hidden py-1.5 my-3 space-y-4 list-disc ps-8 transition-all ease-in-out duration-500 marker:text-mainColor">
                        <li><router-link :to="{ name: '403Error' }" @click="navValue = false" class="text-sm font-medium text-gray-700 hover:text-mainColor">403 Error</router-link></li>
                        <li><router-link :to="{ name: '404Error' }" @click="navValue = false" class="text-sm font-medium text-gray-700 hover:text-mainColor">404 Error</router-link></li>
                    </ul>   
                </transition>
            </li>

            <!-- Charts -->
            <li>
                <router-link :to="{ name: 'Charts' }" @click="navValue = false" class="text-sm font-medium text-gray-700 flex items-center justify-between gap-3 hover:text-mainColor">
                    <span class="flex items-center gap-3"><font-awesome-icon :icon="['fas', 'chart-pie']" /> Charts</span>
                </router-link>
            </li>

            <!-- Widgets -->
            <li>
                <router-link :to="{ name: 'Widget' }" @click="navValue = false" class="text-sm font-medium text-gray-700 flex items-center justify-between gap-3 hover:text-mainColor">
                    <span class="flex items-center gap-3"><font-awesome-icon :icon="['fas', 'pager']" /> Widgets</span>
                </router-link>
            </li>
        </ul>
    </div>
    <!-- Navbar End -->
</template>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: max-height 0.4s ease-in-out, opacity 0.4s ease-in-out;
}

.slide-enter-from,
.slide-leave-to {
  max-height: 0;
  opacity: 0;
}

.slide-enter-to,
.slide-leave-from {
  max-height: 1000px;
  opacity: 1;
}

</style>