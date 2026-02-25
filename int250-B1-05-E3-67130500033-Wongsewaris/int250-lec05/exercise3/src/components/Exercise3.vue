<script setup>
import checkIcon from '../assets/check.png'
</script>

<template>
  <div class="min-h-screen bg-slate-900 flex items-center justify-center p-10">
    <div class="flex gap-6 items-center">

      <!-- Basic -->
      <div class="bg-slate-800 rounded-2xl w-64 text-white border-2 border-slate-700">
        <div class="p-8 text-center">
          <p class="text-sm tracking-widest mb-4" style="font-family: 'Segoe UI', sans-serif;">BASIC</p>
          <h2 class="text-5xl font-light mb-2" style="font-family: 'Georgia', serif;">100GB</h2>
          <p class="text-sm mb-6">$1.99/month</p>
          <button class="w-full py-3 rounded-xl border border-purple-500">Purchase</button>
        </div>
        <hr class="border-slate-700" />
        <div class="p-8 space-y-3 text-sm text-center">
          <p class="flex items-center justify-center gap-2"><img :src="checkIcon" class="w-4 h-4" /> 100 GB storage</p>
          <p class="flex items-center justify-center gap-2"><img :src="checkIcon" class="w-4 h-4" /> Option to add members</p>
          <p class="flex items-center justify-center gap-2"><img :src="checkIcon" class="w-4 h-4" /> Extra member benefits</p>
        </div>
      </div>

      <!-- Standard -->
      <div class="bg-slate-800 rounded-2xl w-64 text-white border-4 border-purple-500 scale-105">
        <div class="p-8 text-center">
          <p class="text-sm tracking-widest mb-4" style="font-family: 'Segoe UI', sans-serif;">STANDARD</p>
          <h2 class="text-5xl font-light mb-2" style="font-family: 'Georgia', serif;">200GB</h2>
          <p class="text-sm mb-6">$3.99/month</p>
          <button class="w-full py-3 rounded-xl bg-purple-500">Purchase</button>
        </div>
        <hr class="border-slate-700" />
        <div class="p-8 space-y-3 text-sm text-center">
          <p class="flex items-center justify-center gap-2"><img :src="checkIcon" class="w-4 h-4" /> 200 GB storage</p>
          <p class="flex items-center justify-center gap-2"><img :src="checkIcon" class="w-4 h-4" /> Option to add members</p>
          <p class="flex items-center justify-center gap-2"><img :src="checkIcon" class="w-4 h-4" /> Extra member benefits</p>
        </div>
      </div>

      <!-- Premium -->
      <div class="bg-slate-800 rounded-2xl w-64 text-white border-2 border-slate-700">
        <div class="p-8 text-center">
          <p class="text-sm tracking-widest mb-4" style="font-family: 'Segoe UI', sans-serif;">PREMIUM</p>
          <h2 class="text-5xl font-light mb-2" style="font-family: 'Georgia', serif;">2TB</h2>
          <p class="text-sm mb-6">$8.99/month</p>
          <button class="w-full py-3 rounded-xl border border-purple-500">Purchase</button>
        </div>
        <hr class="border-slate-700" />
        <div class="p-8 space-y-3 text-sm text-center">
          <p class="flex items-center justify-center gap-2"><img :src="checkIcon" class="w-4 h-4" /> 2 TB storage</p>
          <p class="flex items-center justify-center gap-2"><img :src="checkIcon" class="w-4 h-4" /> Option to add members</p>
          <p class="flex items-center justify-center gap-2"><img :src="checkIcon" class="w-4 h-4" /> Extra member benefits</p>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>
</style>