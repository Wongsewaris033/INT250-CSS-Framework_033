<script setup>
import { ref } from "vue";

defineProps({
  menuItems: {
    type: Array,
    required: true,
  },
});

const mobileMenuOpen = ref(false);

function toggleMenu() {
  mobileMenuOpen.value = !mobileMenuOpen.value;
}
</script>

<template>
  <section class="bg-[url(assets/mobile/image-hero.jpg)] bg-no-repeat bg-cover md:bg-[url(assets/desktop/image-hero.jpg)] md:bg-no-repeat md:bg-cover">
    <div class="container max-w-6xl mx-auto px-6 py-12">
      <nav class="flex justify-between font-bold text-white">
        <img src="../assets/logo.svg" alt="Loopstudios Logo" />
        <div class="hidden h-10 font-sans md:flex md:space-x-8">
          <div v-for="item in menuItems" :key="item.name" class="group">
            <a :href="item.link">{{ item.name }}</a>
            <div class="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
          </div>
        </div>
        <button class="md:hidden" @click="toggleMenu">
          <img
            v-if="!mobileMenuOpen"
            src="../assets/icon-hamburger.svg"
            alt="Open Menu"/>
          <img
            v-else
            src="../assets/icon-close.svg"
            alt="Close Menu"/>
        </button>
      </nav>
      <div class="group mt-24 mb-16 md:mt-32 md:mb-24">
        <div
          class="border-2 border-white p-6 md:p-10 max-w-sm md:max-w-lg group-hover:border-b group-hover:border-blue-50">
          <h1 class="text-white text-4xl md:text-6xl font-light uppercase leading-tight">
            Impressive Experiences That Deliver
          </h1>
        </div>
        <div class="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
      </div>
    </div>
    <div
      v-if="mobileMenuOpen"
      class="fixed inset-0 bg-black z-50 flex flex-col px-6 py-12 md:hidden">
      <div class="flex justify-between items-center mb-16">
        <img src="../assets/logo.svg" alt="Loopstudios Logo" />
        <button @click="toggleMenu">
          <img src="../assets/icon-close.svg" alt="Close Menu" />
        </button>
      </div>
      <div class="flex flex-col space-y-6">
        <a
          v-for="item in menuItems"
          :key="item.name"
          :href="item.link"
          class="text-white text-2xl font-light uppercase"
          @click="mobileMenuOpen = false">
          {{ item.name }}
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped></style>