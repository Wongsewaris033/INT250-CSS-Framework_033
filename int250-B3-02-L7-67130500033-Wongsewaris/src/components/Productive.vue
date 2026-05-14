<script setup></script>

<template>
  <!-- Productive Section -->
  <section class="bg-white dark:bg-darkBlue py-16 md:py-24">
    <div class="container mx-auto px-6">
      <div class="flex flex-col md:flex-row items-center gap-12 md:gap-16">

        <!-- Illustration -->
        <div class="w-full md:w-1/2">
          <img
            src="../assets/illustration-stay-productive.png"
            alt="Stay productive illustration"
            class="w-full max-w-md mx-auto"
          />
        </div>

        <!-- Text Content -->
        <div class="w-full md:w-1/2">
          <h2 class="font-sans font-bold text-2xl md:text-3xl lg:text-4xl text-gray-900 dark:text-white mb-6 leading-snug">
            Stay productive,<br />wherever you are
          </h2>
          <p class="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
            Never let location be an issue when accessing your files. Fylo has
            you covered for all of your file storage needs.
          </p>
          <p class="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
            Securely share files and folders with friends, family and colleagues
            for live collaboration. No email attachments required.
          </p>

          <!-- See how Fylo works link -->
          <a
            href="#"
            class="inline-flex items-center gap-2 text-accent-cyan border-b border-accent-cyan pb-1 hover:opacity-70 transition-opacity duration-200"
          >
            See how Fylo works
            <img src="../assets/icon-arrow.svg" alt="" aria-hidden="true" class="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>