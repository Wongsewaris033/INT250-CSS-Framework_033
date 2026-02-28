<template>
    <nav class="bg-white px-6 py-4 flex items-center justify-between relative">
  
      <!-- Logo + Nav Links (Desktop Left) -->
      <div class="hidden lg:flex items-center gap-8">
        <img src="@/assets/logo.svg" alt="Shortly" class="h-8 mr-2" />
        <a href="#" class="text-gray-500 text-sm hover:text-gray-900">Features</a>
        <a href="#" class="text-gray-500 text-sm hover:text-gray-900">Pricing</a>
        <a href="#" class="text-gray-500 text-sm hover:text-gray-900">Resources</a>
      </div>
  
      <!-- Mobile Logo -->
      <img src="@/assets/logo.svg" alt="Shortly" class="h-8 lg:hidden" />
  
      <!-- Desktop Right -->
      <div class="hidden lg:flex items-center gap-4">
        <a href="#" class="text-gray-500 text-sm hover:text-gray-900">Login</a>
        <a href="#" class="bg-cyan-400 text-white text-sm px-6 py-2 rounded-full hover:opacity-80">Sign Up</a>
      </div>
  
      <!-- Hamburger / X Button (Mobile) -->
      <button @click="isOpen = !isOpen" class="lg:hidden flex flex-col justify-center items-center gap-1.5 w-6 h-6">
        <span class="block w-6 h-0.5 bg-gray-500 transition-all duration-300 origin-center"
              :class="isOpen ? 'rotate-45 translate-y-2' : ''"></span>
        <span class="block w-6 h-0.5 bg-gray-500 transition-all duration-300"
              :class="isOpen ? 'opacity-0' : ''"></span>
        <span class="block w-6 h-0.5 bg-gray-500 transition-all duration-300 origin-center"
              :class="isOpen ? '-rotate-45 -translate-y-2' : ''"></span>
      </button>
  
      <!-- Mobile Menu Panel -->
      <div v-show="isOpen" class="absolute top-16 left-4 right-4 bg-violet-900 rounded-xl p-8 flex flex-col items-center gap-4 z-50">
        <a href="#" class="text-white">Features</a>
        <a href="#" class="text-white">Pricing</a>
        <a href="#" class="text-white">Resources</a>
        <hr class="w-full border-white/20" />
        <a href="#" class="text-white">Login</a>
        <a href="#" class="bg-cyan-400 text-white px-10 py-2 rounded-full w-full text-center">Sign Up</a>
      </div>
    </nav>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  const isOpen = ref(false)
  </script>