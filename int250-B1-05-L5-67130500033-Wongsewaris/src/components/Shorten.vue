<template>
    <section class="bg-gray-100 py-10 px-6">
      <!-- Form Box -->
      <div class="max-w-3xl mx-auto rounded-xl p-6 md:p-10 relative overflow-hidden"
           style="background-color: #3b3054;">
        <img src="@/assets/bg-shorten-mobile.svg" class="absolute top-0 right-0 h-full md:hidden pointer-events-none" alt="" />
        <img src="@/assets/bg-shorten-desktop.svg" class="absolute top-0 right-0 h-full hidden md:block pointer-events-none" alt="" />
  
        <div class="relative flex flex-col md:flex-row gap-4">
          <input
            type="text"
            placeholder="Shorten a link here"
            class="flex-1 rounded-lg px-4 py-3 text-sm outline-none bg-white ring-2 ring-cyan-400 text-amber-600"
          />
          <button class="bg-cyan-400 text-white font-bold px-8 py-3 rounded-lg hover:opacity-80 whitespace-nowrap">
            Shorten It!
          </button>
        </div>
      </div>
  
      <!-- Link List -->
      <div class="max-w-3xl mx-auto mt-4 flex flex-col gap-3">
  
        <div class="bg-white rounded-lg p-4 flex flex-col items-center md:flex-row md:justify-between gap-2 text-center md:text-left">
          <p class="text-gray-900 text-sm font-bold md:font-medium">https://frontendmentor.io</p>
          <div class="flex flex-col items-center md:flex-row md:items-center gap-2">
            <span class="text-cyan-400 text-sm">https://rel.ink/k4lKyk</span>
            <button class="bg-cyan-400 text-white text-sm font-bold px-10 py-2 rounded-lg hover:opacity-80">Copy</button>
          </div>
        </div>
  
        <div class="bg-white rounded-lg p-4 flex flex-col items-center md:flex-row md:justify-between gap-2 text-center md:text-left">
          <p class="text-gray-900 text-sm font-bold md:font-medium">https://twitter.com/frontendmentor</p>
          <div class="flex flex-col items-center md:flex-row md:items-center gap-2">
            <span class="text-cyan-400 text-sm">https://rel.ink/gxOXp9</span>
            <button class="bg-cyan-400 text-white text-sm font-bold px-10 py-2 rounded-lg hover:opacity-80">Copy</button>
          </div>
        </div>
  
        <div class="bg-white rounded-lg p-4 flex flex-col items-center md:flex-row md:justify-between gap-2 text-center md:text-left">
          <p class="text-gray-900 text-sm font-bold md:font-medium">https://linkedin.com/frontend-mentor</p>
          <div class="flex flex-col items-center md:flex-row md:items-center gap-2">
            <span class="text-cyan-400 text-sm">https://rel.ink/gob3X9</span>
            <button class="bg-cyan-400 text-white text-sm font-bold px-10 py-2 rounded-lg hover:opacity-80">Copy</button>
          </div>
        </div>
  
      </div>
    </section>
  </template>