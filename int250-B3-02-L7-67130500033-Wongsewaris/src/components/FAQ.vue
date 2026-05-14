<script setup>
import { ref } from "vue"

const faqs = [
  {
    id: 1,
    question: "What is Fylo?",
    answer:
      "Fylo is a cloud storage application that allows you to securely store all your files in one convenient location. Access, share, and collaborate with friends, family, and co-workers from any device, anywhere.",
  },
  {
    id: 2,
    question: "How can I request a new feature?",
    answer:
      "We welcome feature requests! Please submit your ideas through our feedback portal, or send us an email at support@fylo.com. Our product team reviews all suggestions regularly.",
  },
  {
    id: 3,
    question: "Is there a mobile app?",
    answer:
      "Yes! Fylo is available on both iOS and Android. You can download the app from the App Store or Google Play Store and access all your files on the go.",
  },
  {
    id: 4,
    question: "What about other Chromebook/Desktop browsers?",
    answer:
      "Fylo works with all modern browsers including Chrome, Firefox, Safari, and Edge. We also have a desktop application available for Windows, Mac, and Linux for an even better experience.",
  },
]

// Track which FAQ item is open (null = all closed)
const openId = ref(null)

function toggle(id) {
  openId.value = openId.value === id ? null : id
}
</script>

<template>
  <!-- FAQ Section -->
  <section id="faq" class="bg-gray-50 dark:bg-darkBlue py-16 md:py-24">
    <div class="container mx-auto px-6 max-w-3xl">

      <!-- Heading -->
      <div class="text-center mb-10">
        <h2 class="font-sans font-bold text-2xl md:text-3xl text-gray-900 dark:text-white mb-4">
          Frequently Asked Questions
        </h2>
        <p class="text-gray-500 dark:text-gray-300 max-w-lg mx-auto text-sm md:text-base">
          Here are some of our FAQs. If you have any other questions you'd like
          answered please feel free to email us.
        </p>
      </div>

      <!-- FAQ Items -->
      <div>
        <div
          v-for="faq in faqs"
          :key="faq.id"
          class="border-b border-gray-200 dark:border-gray-600 py-5 cursor-pointer"
          @click="toggle(faq.id)"
        >
          <!-- Question row -->
          <div
            class="flex items-center justify-between gap-4"
            role="button"
            :aria-expanded="openId === faq.id"
            tabindex="0"
            @keydown.enter="toggle(faq.id)"
            @keydown.space.prevent="toggle(faq.id)"
          >
            <p class="font-semibold text-sm md:text-base text-gray-900 dark:text-white">
              {{ faq.question }}
            </p>
            
            <svg
              class="w-4 h-4 flex-shrink-0 text-accent-cyan transition-transform duration-300"
              :class="{ 'rotate-180': openId === faq.id }"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>

          <!-- Answer -->
          <div
            v-show="openId === faq.id"
            class="mt-3 text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed pr-8"
          >
            {{ faq.answer }}
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped></style>