<script setup>
import { ref } from "vue"

const email = ref("")
const submitted = ref(false)
const error = ref("")

function handleSubmit() {
  if (!email.value || !email.value.includes("@")) {
    error.value = "Please enter a valid email address."
    return
  }
  error.value = ""
  submitted.value = true
  email.value = ""
}
</script>

<template>
  <!-- Early Access Section -->
  <section class="bg-gray-100 dark:bg-darkBlue-01 py-16 md:py-24">
    <div class="container mx-auto px-6">

      <!-- Card -->
      <div class="max-w-3xl mx-auto bg-white dark:bg-darkBlue rounded-xl shadow-xl px-8 py-12 md:py-14 text-center">
        <h2 class="font-sans font-bold text-2xl md:text-3xl text-gray-900 dark:text-white mb-4">
          Get early access today
        </h2>
        <p class="text-gray-500 dark:text-gray-300 mb-8 max-w-lg mx-auto text-sm md:text-base leading-relaxed">
          It only takes a minute to sign up and our free starter tier is
          extremely generous. If you have any questions, our support team would
          be happy to help you.
        </p>

        <!-- Success message -->
        <p v-if="submitted" class="text-accent-cyan font-semibold mb-4">
          Thank you! We'll be in touch soon.
        </p>

        <!-- Form -->
        <div class="flex flex-col md:flex-row gap-4 justify-center">
          <div class="flex-1 md:max-w-sm">
            <input
              v-model="email"
              type="email"
              placeholder="email@example.com"
              aria-label="Email address"
              class="w-full px-6 py-3 rounded-full border text-sm bg-white dark:bg-darkBlue-03 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-cyan"
              :class="error ? 'border-lightRed' : 'border-gray-300 dark:border-gray-500'"
            />
            <p v-if="error" class="text-lightRed text-xs mt-2 text-left pl-4">{{ error }}</p>
          </div>
          <button
            @click="handleSubmit"
            class="px-8 py-3 rounded-full bg-gradient-to-r from-accent-cyan to-accent-blue text-white font-bold text-sm hover:opacity-90 transition-opacity duration-200 whitespace-nowrap focus:outline-none focus:ring-4 focus:ring-accent-cyan/50"
          >
            Get Started For Free
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>