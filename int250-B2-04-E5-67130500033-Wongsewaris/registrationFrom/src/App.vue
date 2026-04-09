<script setup>
import { computed, reactive, ref } from "vue"
import BaseInput from "./components/BaseInput.vue"
import BaseSelect from "./components/BaseSelect.vue"
import BaseTextarea from "./components/BaseTextarea.vue"
import BaseRadioGroup from "./components/BaseRadioGroup.vue"
import BaseCheckbox from "./components/BaseCheckbox.vue"

const form = reactive({
  fullName: "",
  studentId: "",
  email: "",
  password: "",
  program: "",
  yearLevel: "",
  bio: "",
  track: "",
  agree: false,
})

const submitted = ref(false)
const showModal = ref(false)

const programOptions = [
  { label: "Computer Science", value: "CS" },
  { label: "Digital Service Innovation", value: "DSI" },
  { label: "Information Technology", value: "IT" },
  { label: "Software Engineering", value: "SE" },
]

const trackOptions = [
  { label: "Frontend UI Development", value: "frontend" },
  { label: "Backend API Design", value: "backend" },
  { label: "UX/UI Design", value: "ux" },
  { label: "AI for Productivity", value: "ai" },
]

const yearOptions = [
  { label: "Year 1", value: "1" },
  { label: "Year 2", value: "2" },
  { label: "Year 3", value: "3" },
  { label: "Year 4", value: "4" },
]

const yearDescriptions = {
  "1": "Beginner student level",
  "2": "Intermediate foundation",
  "3": "Project-focused stage",
  "4": "Internship or capstone stage",
}

const errors = computed(() => {
  const e = {}
  if (!form.fullName.trim()) e.fullName = "Full name is required."
  if (!form.studentId.trim()) {
    e.studentId = "Student ID is required."
  } else if (!/^\d{10,11}$/.test(form.studentId)) {
    e.studentId = "Student ID must be 10-11 digits."
  }
  if (!form.email.trim()) {
    e.email = "Email is required."
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    e.email = "Please enter a valid email address."
  }
  if (!form.password.trim()) {
    e.password = "Password is required."
  } else if (form.password.length < 8) {
    e.password = "Password must be at least 8 characters."
  }
  if (!form.program) e.program = "Please select your program."
  if (!form.yearLevel) e.yearLevel = "Please select your year level."
  if (!form.track) e.track = "Please choose a workshop track."
  if (!form.agree) e.agree = "You must accept the terms before submitting."
  return e
})

const isFormValid = computed(() => Object.keys(errors.value).length === 0)

function handleSubmit() {
  submitted.value = true
  if (!isFormValid.value) return
  showModal.value = true
}

function handleReset() {
  form.fullName = ""
  form.studentId = ""
  form.email = ""
  form.password = ""
  form.program = ""
  form.yearLevel = ""
  form.bio = ""
  form.track = ""
  form.agree = false
  submitted.value = false
}

function closeModal() {
  showModal.value = false
  handleReset()
}
</script>

<template>
  <div class="min-h-screen bg-gray-100 flex items-start justify-center py-10 px-4">
    <div class="w-full max-w-3xl bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden">

      <!-- Header -->
      <div class="border-b border-gray-200 px-8 py-6">
        <p class="text-sm font-semibold text-blue-600 mb-1">Hands-on Lab</p>
        <h1 class="text-2xl font-bold text-gray-900">Student Workshop Registration Form</h1>
        <p class="text-sm text-gray-500 mt-1">
          Practice styling form controls, focus states, and validation feedback with Vue.js and Tailwind CSS.
        </p>
      </div>

      <!-- Form Fields -->
      <div class="px-8 py-6 flex flex-col gap-5">

        <!-- Full Name + Student ID -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <BaseInput
            label="Full Name"
            :required="true"
            placeholder="Enter your full name"
            v-model="form.fullName"
            :error="errors.fullName"
            :submitted="submitted"
          />
          <BaseInput
            label="Student ID"
            :required="true"
            placeholder="e.g. 6601234567"
            v-model="form.studentId"
            :error="errors.studentId"
            :submitted="submitted"
          />
        </div>

        <!-- Email + Password -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <BaseInput
            label="Email"
            :required="true"
            type="email"
            placeholder="yourname@example.com"
            v-model="form.email"
            :error="errors.email"
            :submitted="submitted"
          />
          <BaseInput
            label="Password"
            :required="true"
            type="password"
            placeholder="At least 8 characters"
            v-model="form.password"
            :error="errors.password"
            :submitted="submitted"
          />
        </div>

        <!-- Program + Workshop Track -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <BaseSelect
            label="Program / Major"
            :required="true"
            placeholder="Select your program"
            :options="programOptions"
            v-model="form.program"
            :error="errors.program"
            :submitted="submitted"
          />
          <BaseSelect
            label="Workshop Track"
            :required="true"
            placeholder="Select a track"
            :options="trackOptions"
            v-model="form.track"
            :error="errors.track"
            :submitted="submitted"
          />
        </div>

        <!-- Year Level - Selectable Cards -->
        <BaseRadioGroup
          label="Year Level"
          :required="true"
          :options="yearOptions"
          :descriptions="yearDescriptions"
          v-model="form.yearLevel"
          :error="errors.yearLevel"
          :submitted="submitted"
        />

        <!-- Short Bio with Character Counter -->
        <BaseTextarea
          label="Short Bio"
          placeholder="Tell us about your interests..."
          :maxLength="200"
          v-model="form.bio"
          :submitted="submitted"
        />

        <!-- Confirmation Checkbox -->
        <BaseCheckbox
          label="I confirm that the information provided is correct and I agree to participate in the workshop activities."
          v-model="form.agree"
          :error="errors.agree"
          :submitted="submitted"
        />

        <!-- Footer: Tip + Buttons -->
        <div class="flex flex-wrap items-center justify-between gap-4 border-t border-gray-200 pt-5 mt-1">
          <p class="text-sm text-gray-500">
            <span class="font-medium">Tip:</span> Try submitting with empty fields to test validation feedback.
          </p>
          <div class="flex gap-3">
            <button
              type="button"
              @click="handleReset"
              class="px-4 py-2 text-sm font-medium border border-gray-300 rounded-lg text-gray-700 bg-white hover:bg-gray-50"
            >
              Reset Form
            </button>
            <button
              type="button"
              @click="handleSubmit"
              class="px-4 py-2 text-sm font-medium rounded-lg text-white"
              :class="!submitted || isFormValid
                ? 'bg-blue-600 hover:bg-blue-700'
                : 'bg-gray-300 cursor-not-allowed'"
            >
              Submit Registration
            </button>
          </div>
        </div>

      </div>
    </div>
  </div>

  <!-- Success Modal -->
  <div
    v-if="showModal"
    class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4"
  >
    <div class="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
      <div class="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mb-6">
        <span class="text-green-500 text-2xl font-bold">✓</span>
      </div>
      <h2 class="text-2xl font-bold text-gray-900 mb-2">Registration Submitted</h2>
      <p class="text-base text-gray-500 mb-8">Your workshop registration has been recorded successfully.</p>
      <div class="flex justify-end">
        <button
          @click="closeModal"
          class="px-8 py-3 text-base font-bold text-white bg-green-600 rounded-xl hover:bg-green-700"
        >
          Close
        </button>
      </div>
    </div>
  </div>
</template>