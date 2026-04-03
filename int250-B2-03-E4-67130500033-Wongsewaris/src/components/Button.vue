<script setup>
</script>

<template>
  <div class="bg-white rounded-2xl border border-gray-200 p-8">
    <h2 class="text-lg font-bold text-gray-900 mb-1">1. Buttons</h2>
    <p class="text-sm text-gray-400 mb-5">Reusable action styles for primary, secondary, outline, and disabled states.</p>
    <div class="flex flex-wrap gap-3">
      <button class="px-5 py-2.5 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors">
        Primary Button
      </button>
      <button class="px-5 py-2.5 bg-gray-800 text-white text-sm font-medium rounded-lg hover:bg-gray-900 transition-colors">
        Secondary Button
      </button>
      <button class="px-5 py-2.5 border border-blue-600 text-blue-600 text-sm font-medium rounded-lg hover:bg-blue-50 transition-colors">
        Outline Button
      </button>
      <button class="px-5 py-2.5 bg-gray-200 text-gray-400 text-sm font-medium rounded-lg cursor-not-allowed" disabled>
        Disabled Button
      </button>
    </div>
  </div>
</template>

<style scoped></style>