<script setup>
const footerLinks = ["About", "Careers", "Events", "Products", "Support"];
</script>

<template>
  <footer class="bg-black py-8">
    <div class="container max-w-6xl mx-auto px-6 flex flex-col items-center md:flex-row md:justify-between">
      <div class="flex flex-col items-center md:items-start space-y-4">
        <img src="../assets/logo.svg" alt="Loopstudios Logo" />
        <div class="flex flex-col items-center md:flex-row md:space-x-6 space-y-2 md:space-y-0">
          <a
            v-for="link in footerLinks"
            :key="link"
            href="#"
            class="text-white text-sm hover:text-gray-300"
          >
            {{ link }}
          </a>
        </div>
      </div>

      <div class="flex flex-col items-center md:items-end space-y-4 mt-6 md:mt-0">
        <div class="flex space-x-4">
          <a href="#">
            <img src="../assets/icon-facebook.svg" alt="Facebook" />
          </a>
          <a href="#">
            <img src="../assets/icon-twitter.svg" alt="Twitter" />
          </a>
          <a href="#">
            <img src="../assets/icon-pinterest.svg" alt="Pinterest" />
          </a>
          <a href="#">
            <img src="../assets/icon-instagram.svg" alt="Instagram" />
          </a>
        </div>
        <p class="text-gray-500 text-sm">
          &copy; 2022 Loopstudios. All Rights Reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<style scoped></style>