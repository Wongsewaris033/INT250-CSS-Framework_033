<script setup>
import { ref } from 'vue'

const course1 = {
  code: 'INT250',
  status: 'In Progress',
  title: 'CSS Framework',
  description: 'Learn how to build responsive and interactive web applications using Vue.js and Tailwind CSS.',
  progress: 72,
}

const course2 = {
  code: 'INT161',
  status: 'In Progress',
  title: 'Object-Oriented Programming',
  description: 'Practice Java programming, object-oriented design, and software development principles.',
  progress: 58,
}

const selectedCourse = ref(null)
</script>

<template>
  <!-- Course Card -->
  <div class="flex flex-col gap-6 px-4 py-4 sm:flex-row sm:px-10">

    <!-- First Card -->
    <div class="flex-1 bg-white rounded-2xl shadow p-6 flex flex-col gap-4 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg">
      <div class="flex justify-between items-center">
        <span class="text-xs font-medium bg-gray-100 text-gray-600 px-3 py-1 rounded-full">{{ course1.code }}</span>
        <span class="text-xs font-medium bg-yellow-100 text-yellow-600 px-3 py-1 rounded-full">{{ course1.status }}</span>
      </div>
      <div>
        <h2 class="text-lg font-bold text-gray-900">{{ course1.title }}</h2>
        <p class="text-sm text-gray-500 mt-1">{{ course1.description }}</p>
      </div>
      <div>
        <div class="flex justify-between text-sm text-gray-500 mb-1">
          <span>Progress</span>
          <span>{{ course1.progress }}%</span>
        </div>
        <div class="w-full bg-gray-200 rounded-full h-2">
          <div class="bg-indigo-500 h-2 rounded-full" :style="{ width: course1.progress + '%' }"></div>
        </div>
      </div>
      <div class="flex items-center gap-4 mt-auto">
        <button
          class="bg-indigo-500 text-white text-sm font-medium px-4 py-2 rounded-xl hover:bg-indigo-600"
          @click="selectedCourse = course1"
        >
          View Course Details
        </button>
        <button class="text-sm font-medium text-gray-700 hover:text-indigo-600">Submit Assignment</button>
      </div>
    </div>

    <!-- Second Card -->
    <div class="flex-1 bg-white rounded-2xl shadow p-6 flex flex-col gap-4 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg">
      <div class="flex justify-between items-center">
        <span class="text-xs font-medium bg-gray-100 text-gray-600 px-3 py-1 rounded-full">{{ course2.code }}</span>
        <span class="text-xs font-medium bg-yellow-100 text-yellow-600 px-3 py-1 rounded-full">{{ course2.status }}</span>
      </div>
      <div>
        <h2 class="text-lg font-bold text-gray-900">{{ course2.title }}</h2>
        <p class="text-sm text-gray-500 mt-1">{{ course2.description }}</p>
      </div>
      <div>
        <div class="flex justify-between text-sm text-gray-500 mb-1">
          <span>Progress</span>
          <span>{{ course2.progress }}%</span>
        </div>
        <div class="w-full bg-gray-200 rounded-full h-2">
          <div class="bg-indigo-500 h-2 rounded-full" :style="{ width: course2.progress + '%' }"></div>
        </div>
      </div>
      <div class="flex items-center gap-4 mt-auto">
        <button
          class="bg-indigo-500 text-white text-sm font-medium px-4 py-2 rounded-xl hover:bg-indigo-600"
          @click="selectedCourse = course2"
        >
          View Course Details
        </button>
        <button class="text-sm font-medium text-gray-700 hover:text-indigo-600">Submit Assignment</button>
      </div>
    </div>

  </div>

  <!-- Popup (แสดงเมื่อกด View Course Details) -->
  <div
    v-if="selectedCourse"
    class="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
    @click.self="selectedCourse = null"
  >
    <div class="bg-white rounded-2xl shadow-xl p-6 sm:p-8 w-full max-w-md mx-4 sm:mx-0 relative">

      <!-- Close Button -->
      <button
        class="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-xl"
        @click="selectedCourse = null"
      >
        x
      </button>

      <span class="text-xs font-medium bg-indigo-100 text-indigo-500 px-3 py-1 rounded-full">
        {{ selectedCourse.code }}
      </span>
      <h2 class="text-2xl font-bold text-gray-900 mt-3 mb-2">{{ selectedCourse.title }}</h2>
      <p class="text-sm text-gray-500 mb-6">{{ selectedCourse.description }}</p>

      <!-- Progress bar ใน popup -->
      <div class="bg-gray-50 rounded-xl p-4 mb-6">
        <p class="text-sm font-semibold text-gray-700 mb-2">Learning Progress</p>
        <div class="w-full bg-gray-200 rounded-full h-3">
          <div class="bg-indigo-500 h-3 rounded-full" :style="{ width: selectedCourse.progress}"></div>
        </div>
        <p class="text-sm text-gray-500 mt-1">{{ selectedCourse.progress }}% completed</p>
      </div>

      <div class="flex justify-end gap-3">
        <button
          class="px-5 py-2 rounded-xl text-sm font-medium text-gray-700 border border-gray-200 hover:bg-gray-50"
          @click="selectedCourse = null"
        >
          Close
        </button>
        <button class="px-5 py-2 rounded-xl text-sm font-medium bg-indigo-500 text-white hover:bg-indigo-600">
          Start Learning
        </button>
      </div>

    </div>
  </div>
</template>