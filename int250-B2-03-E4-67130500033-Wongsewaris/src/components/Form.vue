<script setup>
</script>

<template>
  <div class="bg-white rounded-2xl border border-gray-200 p-8">
    <h2 class="text-lg font-bold text-gray-900 mb-1">4. Form Controls</h2>
    <p class="text-sm text-gray-400 mb-5">Consistent form patterns with labels, helper text, and validation style.</p>

    <!-- Row 1: Full Name + Email -->
    <div class="grid grid-cols-2 gap-5 mb-4">
      <div class="flex flex-col gap-1">
        <label class="text-sm font-semibold text-gray-700">Full Name</label>
        <input
          type="text"
          placeholder="Enter your full name"
          class="border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-700 placeholder-gray-400 outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-200"
        />
        <p class="text-xs text-gray-400">Use a clear and complete student name.</p>
      </div>
      <div class="flex flex-col gap-1">
        <label class="text-sm font-semibold text-gray-700">Email Address</label>
        <input
          type="email"
          placeholder="Enter your email"
          class="border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-700 placeholder-gray-400 outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-200"
        />
        <p class="text-xs text-gray-400">Example: student@mail.kmutt.ac.th</p>
      </div>
    </div>

    <!-- Row 2: Role select -->
    <div class="flex flex-col gap-1 mb-4">
      <label class="text-sm font-semibold text-gray-700">Role</label>
      <select class="border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-400 outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-200 bg-white appearance-auto">
        <option value="" disabled selected>Select your role</option>
        <option>Student</option>
        <option>Instructor</option>
        <option>Admin</option>
      </select>
    </div>

    <!-- Row 3: Message textarea -->
    <div class="flex flex-col gap-1 mb-2">
      <label class="text-sm font-semibold text-gray-700">Message</label>
      <textarea
        placeholder="Write your message here"
        rows="4"
        class="border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-700 placeholder-gray-400 outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-200 resize-none"
      ></textarea>
      <p class="text-xs text-red-500">This is an example of validation/helper text styling.</p>
    </div>

    <button class="mt-3 px-5 py-2.5 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors">
      Submit Form
    </button>
  </div>
</template>

<style scoped></style>