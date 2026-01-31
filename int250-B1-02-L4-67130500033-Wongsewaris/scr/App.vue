<script setup>
import ProfileCard from "./components/ProfileCard.vue"
</script>

<template>
  <div class="flex items-center justify-center gap-8 min-h-screen bg-gradient-to-br from-green-500 to-sky-400 p-8">
    <!-- Card 1 left -->
    <ProfileCard
      background="./src/assets/aombackground.jpeg"
      profileimg="./src/assets/aomprofile.jpeg"
      name="Sorrawich Prasopsub"
      subheading="Student, 19, BKK"
      followers="215"
      following="228"
      projects="1k"
      facebook="https://www.facebook.com/share/16LV3pD4vM/?mibextid=wwXIfr"
      instagram="https://www.instagram.com/axmsz_p?igsh=c2dkMWR2bWJsYjlm&utm_source=qr"
      tiktok="https://www.tiktok.com/@aom_sorrawich"
    />

    <!-- Card 2 mid -->
    <ProfileCard
      background="./src/assets/background.jpg"
      profileimg="./src/assets/profile.jpeg"
      name="Wongsewaris Tumsud"
      subheading="Student, 19, BKK"
      followers="864"
      following="749"
      projects="1k"
      facebook="https://www.facebook.com/wongsewaris.tumsud"
      instagram="https://www.instagram.com/win_wwr/"
      tiktok="https://www.tiktok.com/@winniewwr"
    />

    <!-- Card 3 right -->
    <ProfileCard
      background="./src/assets/cbackground.jpg"
      profileimg="./src/assets/cprofile.jpeg"
      name="Wachitanan Supho"
      subheading="Student, 20, SRI"
      followers="331"
      following="313"
      projects="1k"
      facebook="https://www.facebook.com/share/14T2MFxSmGN/?mibextid=wwXIfr"
      instagram="https://www.instagram.com/wachixii_?igsh=MTNsOXE2NDIwb3ltZA%3D%3D&utm_source=qr"
      tiktok="https://www.tiktok.com/@waaaaaaaaachi?_r=1&_t=ZS-93XERqWExQA"
    />
  </div>
</template>

<style scoped></style>