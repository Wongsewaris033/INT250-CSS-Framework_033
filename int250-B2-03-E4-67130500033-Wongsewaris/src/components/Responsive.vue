<script setup>
</script>

<template>
  <div class="bg-white rounded-2xl border border-gray-200 p-8">
    <h2 class="text-lg font-bold text-gray-900 mb-1">6. Responsive Layout Example</h2>
    <p class="text-sm text-gray-400 mb-5">A reusable section layout with content on the left and summary panel on the right.</p>
    <div class="flex gap-4">
      <!-- Main Content -->
      <div class="flex-1 bg-gray-100 rounded-xl p-5">
        <h3 class="text-sm font-bold text-gray-700 mb-2">Main Content Area</h3>
        <p class="text-sm text-gray-500 leading-relaxed">
          This area can be used for dashboard content, a feature section, course details, or product descriptions.
          It demonstrates a simple reusable container pattern with consistent padding, rounded corners, and spacing.
        </p>
      </div>
      <!-- Summary Panel -->
      <div class="w-64 bg-blue-600 rounded-xl p-5 text-white flex flex-col">
        <h3 class="text-sm font-bold mb-2">Summary Panel</h3>
        <p class="text-sm leading-relaxed mb-4 opacity-90">
          This panel can be reused for quick stats, announcements, or call-to-action content.
        </p>
        <button class="self-start bg-white text-blue-600 text-sm font-medium px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors">
          Learn More
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>