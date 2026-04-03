<script setup>
const cards = [
  {
    tag: 'New',
    title: 'Basic Card',
    description: 'A simple reusable card for general content blocks in a dashboard or landing page.',
  },
  {
    tag: 'Profile',
    title: 'Student Profile Card',
    description: 'A profile summary card showing student status, program, and quick information.',
  },
  {
    tag: 'Event',
    title: 'Event Card',
    description: 'A reusable event component for workshops, seminars, or hackathon activities.',
  },
];
</script>

<template>
  <div class="bg-white rounded-2xl border border-gray-200 p-8">
    <h2 class="text-lg font-bold text-gray-900 mb-1">5. Cards</h2>
    <p class="text-sm text-gray-400 mb-5">Responsive card layout for reusable content blocks such as event, profile, or product cards.</p>
    <div class="grid grid-cols-3 gap-4">
      <div
        v-for="card in cards"
        :key="card.tag"
        class="border border-gray-200 rounded-xl p-4 flex flex-col"
      >
        <div class="flex items-center justify-between mb-4">
          <span class="text-xs font-medium px-2.5 py-1 rounded-full bg-blue-100 text-blue-600">{{ card.tag }}</span>
          <span class="text-xs text-gray-400">Reusable</span>
        </div>
        <h3 class="text-base font-bold text-gray-900 mb-2">{{ card.title }}</h3>
        <p class="text-sm text-gray-400 flex-1">{{ card.description }}</p>
        <div class="mt-4">
          <button class="text-xs px-4 py-1.5 border border-gray-300 rounded-lg text-gray-500 hover:bg-gray-50 transition-colors">
            View Details
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>