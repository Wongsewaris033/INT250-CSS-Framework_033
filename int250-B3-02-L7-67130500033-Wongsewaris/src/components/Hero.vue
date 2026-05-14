<script setup></script>

<template>
  <!-- Hero Section -->
  <section class="relative bg-white dark:bg-darkBlue overflow-hidden">
    <div class="absolute bottom-0 left-0 w-full pointer-events-none" aria-hidden="true">
      <img src="../assets/bg-curvy-light-mode.svg" class="w-full dark:hidden" alt="" />
      <img src="../assets/bg-curvy-dark-mode.svg" class="w-full hidden dark:block" alt="" />
    </div>

    <div class="relative container mx-auto px-6 pb-40 text-center">
      <!-- Illustration -->
      <img
        src="../assets/illustration-intro.png"
        alt="Fylo cloud storage illustration"
        class="mx-auto w-full max-w-lg md:max-w-xl lg:max-w-2xl"
      />

      <!-- Headline -->
      <h1 class="font-sans font-bold text-3xl md:text-4xl lg:text-5xl mt-10 mb-6 leading-tight text-gray-900 dark:text-white max-w-2xl mx-auto">
        All your files in one secure location,
        accessible anywhere.
      </h1>

      <!-- Description -->
      <p class="max-w-md mx-auto mb-8 text-gray-600 dark:text-gray-300 text-base leading-relaxed">
        Fylo stores all your most important files in one secure location.
        Access them wherever you need, share and collaborate with friends,
        family, and co-workers.
      </p>

      <!-- CTA Button -->
      <a
        href="#"
        class="inline-block px-10 py-4 rounded-full text-white font-bold bg-gradient-to-r from-accent-cyan to-accent-blue 
        hover:opacity-90 transition-opacity duration-200 focus:outline-none focus:ring-4 focus:ring-accent-cyan/50"
      >
        Get Started
      </a>
    </div>
  </section>
</template>

<style scoped></style>