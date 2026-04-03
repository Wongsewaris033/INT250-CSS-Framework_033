<script setup>
const creations = [
  {
    name: "Deep Earth",
    desktop: new URL("../assets/desktop/image-deep-earth.jpg", import.meta.url).href,
    mobile: new URL("../assets/mobile/image-deep-earth.jpg", import.meta.url).href,
  },
  {
    name: "Night Arcade",
    desktop: new URL("../assets/desktop/image-night-arcade.jpg", import.meta.url).href,
    mobile: new URL("../assets/mobile/image-night-arcade.jpg", import.meta.url).href,
  },
  {
    name: "Soccer Team VR",
    desktop: new URL("../assets/desktop/image-soccer-team.jpg", import.meta.url).href,
    mobile: new URL("../assets/mobile/image-soccer-team.jpg", import.meta.url).href,
  },
  {
    name: "The Grid",
    desktop: new URL("../assets/desktop/image-grid.jpg", import.meta.url).href,
    mobile: new URL("../assets/mobile/image-grid.jpg", import.meta.url).href,
  },
  {
    name: "From Up Above VR",
    desktop: new URL("../assets/desktop/image-from-above.jpg", import.meta.url).href,
    mobile: new URL("../assets/mobile/image-from-above.jpg", import.meta.url).href,
  },
  {
    name: "Pocket Borealis",
    desktop: new URL("../assets/desktop/image-pocket-borealis.jpg", import.meta.url).href,
    mobile: new URL("../assets/mobile/image-pocket-borealis.jpg", import.meta.url).href,
  },
  {
    name: "The Curiosity",
    desktop: new URL("../assets/desktop/image-curiosity.jpg", import.meta.url).href,
    mobile: new URL("../assets/mobile/image-curiosity.jpg", import.meta.url).href,
  },
  {
    name: "Make It Fisheye",
    desktop: new URL("../assets/desktop/image-fisheye.jpg", import.meta.url).href,
    mobile: new URL("../assets/mobile/image-fisheye.jpg", import.meta.url).href,
  },
];
</script>

<template>
  <section>
    <div class="container max-w-6xl mx-auto my-32 px-6 text-gray-800 md:px-0">
      <div class="flex flex-col items-center mb-8 md:flex-row md:justify-between">
        <h2 class="text-4xl text-center uppercase md:text-left md:text-5xl">
          Our Creations
        </h2>
        <button class="hidden px-10 py-2 my-0 font-bold tracking-widest uppercase border-2 border-black hover:bg-black hover:text-white md:block">
          See All
        </button>
      </div>
      <div class="flex flex-col w-full space-y-6 text-2xl text-white uppercase md:flex-row md:flex-wrap md:space-y-0 md:gap-8">
        <div
          v-for="item in creations"
          :key="item.name"
          class="group relative overflow-hidden md:w-[calc(25%-1.5rem)]">
          <img
            :src="item.desktop"
            :alt="item.name"
            class="hidden w-full h-full object-cover duration-200 md:block group-hover:scale-110"/>
          <img
            :src="item.mobile"
            :alt="item.name"
            class="w-full md:hidden"/>
          <div class="absolute top-0 bottom-0 right-0 left-0
          bg-gradient-to-b from-transparent to-gray-800
          group-hover:from-white/30 group-hover:to-white/60 group-hover:opacity-80"></div>
          <h5 class="md:px-10 group-hover:scale-110 group-hover:text-black">
            {{ item.name }}
          </h5>
        </div>
      </div>
      <div class="flex justify-center mt-8 md:hidden">
        <button class="w-full px-10 py-2 my-0 font-bold tracking-widest uppercase border-2 border-black hover:bg-black hover:text-white">
          See All
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped></style>