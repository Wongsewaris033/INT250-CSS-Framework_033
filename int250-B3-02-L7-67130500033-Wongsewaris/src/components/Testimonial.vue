<script setup>
const testimonials = [
  {
    id: 1,
    text: "Fylo has improved our team productivity by an order of magnitudes. Since making the switch our team has become a well-oiled collaboration machine.",
    name: "Satish Patel",
    title: "Founder & CEO, Huddle",
    avatar: "profile-1.jpg",
  },
  {
    id: 2,
    text: "Fylo has improved our team productivity by an order of magnitudes. Since making the switch our team has become a well-oiled collaboration machine.",
    name: "Bruce McKenzie",
    title: "Founder & CEO, Brief.ly",
    avatar: "profile-2.jpg",
  },
  {
    id: 3,
    text: "Fylo has improved our team productivity by an order of magnitudes. Since making the switch our team has become a well-oiled collaboration machine.",
    name: "Iva Boyd",
    title: "Founder & CEO, Huddle",
    avatar: "profile-3.jpg",
  },
]
</script>

<template>
  <!-- Testimonials Section -->
  <section id="testimonials" class="bg-white dark:bg-darkBlue py-16 md:py-24">
    <div class="container mx-auto px-6">

      <img
        src="../assets/bg-quotes.png"
        alt=""
        aria-hidden="true"
        class="w-10 md:w-12 ml-2"
      />

      <!-- Cards grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        <div
          v-for="t in testimonials"
          :key="t.id"
          class="bg-gray-50 dark:bg-darkBlue-03 rounded-lg p-6 md:p-8 shadow-md"
        >
          <p class="text-gray-600 dark:text-gray-300 text-sm leading-loose mb-6">
            {{ t.text }}
          </p>
          <div class="flex items-center gap-3">
            <img
              :src="`/src/assets/${t.avatar}`"
              :alt="`${t.name} profile photo`"
              class="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <p class="font-bold text-sm text-gray-900 dark:text-white">{{ t.name }}</p>
              <p class="text-xs text-gray-500 dark:text-gray-400">{{ t.title }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>