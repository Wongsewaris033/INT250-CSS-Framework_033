<script setup>
import searchIcon from '../assets/search-interface-symbol.png'
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpeg'
import img3 from '../assets/img3.jpeg'
import img4 from '../assets/img4.jpg'
import img5 from '../assets/img5.jpg'
import img6 from '../assets/img6.jpg'
</script>

<template>
  <!-- Blue Background -->
  <div class="min-h-screen bg-cyan-100 flex items-center justify-center p-10">

    <!-- Floating Card -->
    <div class="bg-white rounded-2xl shadow-xl w-full max-w-5xl p-10">

      <!-- Navbar -->
      <nav class="flex justify-end mb-10">
        <ul class="flex gap-6 text-sm text-gray-400">
          <li><a href="#" class="hover:text-gray-800 duration-200">Vector</a></li>
          <li><a href="#" class="hover:text-gray-800 duration-200">Illustrations</a></li>
          <li><a href="#" class="hover:text-gray-800 duration-200">Images</a></li>
          <li><a href="#" class="hover:text-gray-800 duration-200">Icons</a></li>
        </ul>
      </nav>

      <!-- Search + Upload -->
      <div class="flex items-center justify-between mb-6">
        <div class="flex items-center border-b border-gray-300 pb-1 w-56 gap-2">
          <input type="text" placeholder="Search" class="flex-1 outline-none text-sm text-gray-400 bg-transparent" />
          <img :src="searchIcon" class="w-4 h-4 opacity-40" />
        </div>
        <button class="px-6 py-3 bg-black text-white text-sm rounded-xl hover:bg-gray-700 duration-200">Upload</button>
      </div>

      <!-- Image Grid -->
      <div class="grid grid-cols-3 gap-3">
        <div class="overflow-hidden">
          <img :src="img1" alt="" class="w-full h-52 object-cover" />
        </div>
        <div class="overflow-hidden">
          <img :src="img2" alt="" class="w-full h-52 object-cover" />
        </div>
        <div class="overflow-hidden">
          <img :src="img3" alt="" class="w-full h-52 object-cover" />
        </div>
        <div class="overflow-hidden">
          <img :src="img4" alt="" class="w-full h-52 object-cover" />
        </div>
        <div class="overflow-hidden">
          <img :src="img5" alt="" class="w-full h-52 object-cover" />
        </div>
        <div class="overflow-hidden">
          <img :src="img6" alt="" class="w-full h-52 object-cover" />
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>
</style>