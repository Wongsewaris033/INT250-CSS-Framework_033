<script setup>
import { ref } from 'vue'
import UserDropdown from './UserDropdown.vue'

const menuOpen = ref(false)
</script>

<template>
  <header class="sticky top-0 z-30 border-b border-slate-200">
    <nav class="flex w-full items-center justify-between px-6 py-4">

      <!-- Logo -->
      <a href="#" class="flex items-center gap-3">
        <div class="flex h-10 w-10 items-center justify-center rounded-2xl bg-indigo-500 text-sm font-bold text-white shadow-sm">
          LS
        </div>
        <div>
          <h1 class="text-lg font-bold leading-tight">LearnSpace</h1>
          <p class="text-xs text-slate-500">Student Dashboard</p>
        </div>
      </a>

      <!-- Center Menu in Nav -->
      <ul class="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
        <li><a href="#" class="hover:text-indigo-600">Dashboard</a></li>
        <li><a href="#" class="hover:text-indigo-600">Courses</a></li>
        <li><a href="#" class="hover:text-indigo-600">Assignments</a></li>
        <li><a href="#" class="hover:text-indigo-600">Progress</a></li>
      </ul>

      <!-- Profile Button -->
      <div class="hidden md:block">
        <UserDropdown />
      </div>

      <!-- Mobile Profile + Menu Button -->
      <div class="flex items-center gap-2 md:hidden">
        <UserDropdown />

        <button
          class="flex h-9 w-9 items-center justify-center rounded-lg text-slate-600 hover:bg-slate-100"
          @click="menuOpen = !menuOpen"
        >
          <!-- Hamburger -->
          <svg v-if="!menuOpen" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <!-- X icon -->
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

    </nav>

    <!-- Menu Mobile -->
    <div v-if="menuOpen" class="border-t border-slate-200 bg-white px-6 py-4 md:hidden">
      <ul class="flex flex-col gap-3 text-sm font-medium text-slate-600">
        <li><a href="#" class="block hover:text-indigo-600">Dashboard</a></li>
        <li><a href="#" class="block hover:text-indigo-600">Courses</a></li>
        <li><a href="#" class="block hover:text-indigo-600">Assignments</a></li>
        <li><a href="#" class="block hover:text-indigo-600">Progress</a></li>
      </ul>
    </div>

  </header>
</template>