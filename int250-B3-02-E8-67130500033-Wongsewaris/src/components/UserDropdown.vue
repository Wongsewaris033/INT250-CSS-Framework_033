<script setup>
import { ref } from 'vue'

const dropdownOpen = ref(false)
</script>

<template>
  <div class="relative">

    <!-- Profile -->
    <button
      class="flex items-center gap-2 rounded-xl bg-white px-3 py-2 shadow-sm hover:shadow-md hover:bg-slate-100"
      @click="dropdownOpen = !dropdownOpen"
    >
      <div class="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-100 text-xs font-bold text-indigo-600">
        ST
      </div>
      <span class="text-sm font-medium text-slate-700">Student</span>
      <!-- Rotate Arrow เมื่อเปิด -->
      <svg
        class="h-3 w-3 text-slate-500 transition-transform"
        :class="{ 'rotate-180': dropdownOpen }"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
      </svg>
    </button>

    <!-- Dropdown Menu -->
    <div v-if="dropdownOpen" class="absolute right-0 mt-2 w-40 rounded-xl border border-slate-200 bg-white py-1 shadow-lg">
      <a href="#" class="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50">View Profile</a>
      <a href="#" class="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50">Account Settings</a>
      <a href="#" class="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50">Learning Progress</a>
      <a href="#" class="block px-4 py-2 text-sm text-red-500 hover:bg-slate-50">Sign out</a>
    </div>

  </div>
</template>