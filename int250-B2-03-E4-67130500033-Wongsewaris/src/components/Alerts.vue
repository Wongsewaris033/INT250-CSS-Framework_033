<script setup>
</script>

<template>
  <div class="bg-white rounded-2xl border border-gray-200 p-8">
    <h2 class="text-lg font-bold text-gray-900 mb-1">3. Alerts</h2>
    <p class="text-sm text-gray-400 mb-5">Reusable feedback messages for success, warning, and error states.</p>
    <div class="flex flex-col gap-3">
      <div class="rounded-lg border border-green-200 bg-green-50 px-4 py-3">
        <p class="text-sm font-semibold text-green-700">Success Alert</p>
        <p class="text-sm text-green-600 mt-0.5">Your profile has been updated successfully.</p>
      </div>
      <div class="rounded-lg border border-yellow-200 bg-yellow-50 px-4 py-3">
        <p class="text-sm font-semibold text-yellow-700">Warning Alert</p>
        <p class="text-sm text-yellow-600 mt-0.5">Please review the form before submitting.</p>
      </div>
      <div class="rounded-lg border border-red-200 bg-red-50 px-4 py-3">
        <p class="text-sm font-semibold text-red-700">Error Alert</p>
        <p class="text-sm text-red-600 mt-0.5">Something went wrong. Please try again later.</p>
      </div>
    </div>
  </div>
</template>

<style scoped></style>