<script setup></script>

<template>
  <!-- Footer -->
  <footer class="bg-darkBlue-02 text-gray-300 pt-16 pb-10">
    <div class="container mx-auto px-6">

      <!-- Logo -->
      <div class="mb-10">
        <img src="../assets/logo-dark-mode.svg" alt="Fylo" class="h-8" />
      </div>

      <div class="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">

        <!-- Contact (phone + email only) -->
        <div class="space-y-4 text-sm">
          <div class="flex items-center gap-4">
            <img src="../assets/icon-phone.svg" alt="" aria-hidden="true" class="w-5 flex-shrink-0" />
            <span>+1-543-123-4567</span>
          </div>
          <div class="flex items-center gap-4">
            <img src="../assets/icon-email.svg" alt="" aria-hidden="true" class="w-5 flex-shrink-0" />
            <span>example@fylo.com</span>
          </div>
        </div>

        <!-- About links -->
        <div>
          <ul class="space-y-3 text-sm">
            <li><a href="#" class="hover:text-accent-cyan transition-colors">About</a></li>
            <li><a href="#" class="hover:text-accent-cyan transition-colors">Jobs</a></li>
            <li><a href="#" class="hover:text-accent-cyan transition-colors">Press</a></li>
            <li><a href="#" class="hover:text-accent-cyan transition-colors">Blog</a></li>
          </ul>
        </div>

        <!-- Legal links -->
        <div>
          <ul class="space-y-3 text-sm">
            <li><a href="#" class="hover:text-accent-cyan transition-colors">Contact Us</a></li>
            <li><a href="#" class="hover:text-accent-cyan transition-colors">Terms</a></li>
            <li><a href="#" class="hover:text-accent-cyan transition-colors">Privacy</a></li>
          </ul>
        </div>

        <!-- Social icons -->
        <div class="flex items-center justify-center gap-4 md:items-start">
          <a href="#" aria-label="Facebook" class="w-9 h-9 rounded-full border border-gray-500 flex items-center justify-center hover:border-accent-cyan hover:text-accent-cyan transition-colors">
            <img src="../assets/facebook.svg" alt="Facebook" class="w-4 h-4" />
          </a>
          <a href="#" aria-label="Twitter" class="w-9 h-9 rounded-full border border-gray-500 flex items-center justify-center hover:border-accent-cyan hover:text-accent-cyan transition-colors">
            <img src="../assets/twitter.svg" alt="Twitter" class="w-4 h-4" />
          </a>
          <a href="#" aria-label="Instagram" class="w-9 h-9 rounded-full border border-gray-500 flex items-center justify-center hover:border-accent-cyan hover:text-accent-cyan transition-colors">
            <img src="../assets/instagram.svg" alt="Instagram" class="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped></style>