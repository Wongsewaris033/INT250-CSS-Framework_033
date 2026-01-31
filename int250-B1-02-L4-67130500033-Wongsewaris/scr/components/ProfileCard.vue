<script setup>
defineProps([
    "profileimg",
    "background",
    "name",
    "subheading",
    "followers",
    "following",
    "projects",
    "facebook",
    "instagram",
    "tiktok"
]);
</script>

<template>
    <div
      class="bg-white shadow-lg rounded-2xl min-[320px] overflow-hidden text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
    >
      <div
        class="relative min-h-32 bg-cover bg-center"
        :style="'background-image:url(' + background + ')'"
      >
        <img
          :src="profileimg"
          alt="Profile Image"
          class="inline-block w-32 h-32 rounded-full object-center object-cover border-4 border-white absolute top-full left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        />
      </div>
      <div class="px-6 pt-20 pb-4">
        <h2 class="font-bold text-gray-800 text-2xl mb-2">{{ name }}</h2>
        <h3 class="text-gray-600 text-lg mb-4">{{ subheading }}</h3>
        
        <!-- Social Icons -->
        <div class="flex items-center justify-center gap-4 mb-2">
          <a 
            :href="facebook" 
            target="_blank"
            class="hover:scale-110 transition-all duration-200"
          >
            <img src="https://cdn.simpleicons.org/facebook/1877F2" alt="Facebook" class="w-8 h-8">
          </a>
          
          <a 
            :href="instagram" 
            target="_blank"
            class="hover:scale-110 transition-all duration-200"
          >
            <img src="https://cdn.simpleicons.org/instagram/E4405F" alt="Instagram" class="w-8 h-8">
          </a>
          
          <a 
            :href="tiktok" 
            target="_blank"
            class="hover:scale-110 transition-all duration-200"
          >
            <img src="https://cdn.simpleicons.org/tiktok/000000" alt="TikTok" class="w-8 h-8">
          </a>
        </div>
      </div>

      <!-- Stats -->
      <div
        class="p-6 border-t border-gray-200 flex items-center justify-center gap-6">
        <!-- Followers -->
        <div>
          <h4 class="text-gray-600 text-sm">Followers</h4>
          <p class="font-bold text-gray-800 text-2xl">{{followers}}</p>
        </div>
        <!-- Following -->
        <div>
          <h4 class="text-gray-600 text-sm">Following</h4>
          <p class="font-bold text-gray-800 text-2xl">{{ following }}</p>
        </div>
        <!-- Project -->
        <div>
          <h4 class="text-gray-600 text-sm">Project</h4>
          <p class="font-bold text-gray-800 text-2xl">{{projects}}</p>
        </div>
      </div>
    </div>
</template>
   
<style></style>