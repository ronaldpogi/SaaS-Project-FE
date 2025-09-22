<template>
  <header class="flex items-center justify-between px-6 py-4 bg-white border-b-4 border-indigo-600">
    <div class="flex items-center">
      <button @click="isOpen = true" class="text-gray-500 focus:outline-none lg:hidden">
        <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M4 6H20M4 12H20M4 18H11"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>

      <div class="relative mx-4 lg:mx-0">
        <span class="absolute inset-y-0 left-0 flex pl-3">
          <Icon class="text-gray-400" icon="clarity:search-line" width="20" height="20" />
        </span>

        <input
          class="text-[13px] w-32 pl-10 pr-4 text-gray-800 sm:w-64 border-b focus:outline-none focus:ring-0 focus:border-primary-hover pb-1"
          type="text"
          placeholder="SEARCH"
        />
      </div>
    </div>

    <div class="flex items-center">
      <button class="flex mx-4 text-gray-600 focus:outline-none">
        <Icon icon="clarity:bell-line" width="25" height="25" />
      </button>

      <div class="relative">
        <button
          @click="dropdownOpen = !dropdownOpen"
          class="relative z-10 block w-8 h-8 overflow-hidden rounded-full shadow focus:outline-none"
        >
          <img
            class="object-cover w-full h-full"
            src="https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=296&q=80"
            alt="Your avatar"
          />
        </button>

        <div
          v-show="dropdownOpen"
          @click="dropdownOpen = false"
          class="fixed inset-0 z-10 w-full h-full"
        ></div>

        <transition
          enter-active-class="transition duration-150 ease-out transform"
          enter-from-class="scale-95 opacity-0"
          enter-to-class="scale-100 opacity-100"
          leave-active-class="transition duration-150 ease-in transform"
          leave-from-class="scale-100 opacity-100"
          leave-to-class="scale-95 opacity-0"
        >
          <div
            v-show="dropdownOpen"
            class="absolute right-0 z-20 w-48 py-2 mt-2 bg-white shadow-xl"
          >
            <a
              href="#"
              class="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white"
              >PROFILE</a
            >
            <a
              href="#"
              class="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white"
              >PRODUCTS</a
            >
            <a
              @click="authStore.logout"
              type="button"
              class="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white"
              >LOG OUT</a
            >
          </div>
        </transition>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useSidebar } from '@/composables/useSidebar'
import { useAuthStore } from '@/stores/auth'

const authStore = useAuthStore()

const dropdownOpen = ref(false)

const { isOpen } = useSidebar()
</script>
