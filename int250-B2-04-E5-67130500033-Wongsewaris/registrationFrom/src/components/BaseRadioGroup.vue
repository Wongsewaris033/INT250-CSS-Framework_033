<script setup>
defineProps({
  label: String,
  modelValue: String,
  options: Array,
  descriptions: {
    type: Object,
    default: () => ({})
  },
  error: String,
  required: Boolean,
  submitted: Boolean,
})
defineEmits(['update:modelValue'])
</script>

<template>
  <div>
    <label class="block text-sm font-medium text-slate-700 mb-2">
      {{ label }} <span v-if="required" class="text-red-500">*</span>
    </label>
    <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
      <label
        v-for="opt in options"
        :key="opt.value"
        class="flex flex-col justify-between border rounded-lg p-3 cursor-pointer transition-colors"
        :class="modelValue === opt.value
          ? 'border-blue-500 bg-white ring-2 ring-blue-500'
          : 'border-slate-200 bg-white hover:border-slate-400'"
      >
        <div class="flex justify-between items-start">
          <span class="text-sm font-semibold text-slate-800">{{ opt.label }}</span>
          <input
            type="radio"
            :value="opt.value"
            :checked="modelValue === opt.value"
            @change="$emit('update:modelValue', opt.value)"
            class="mt-0.5"
          />
        </div>
        <span v-if="descriptions[opt.value]" class="text-xs text-slate-500 mt-1 leading-tight">
          {{ descriptions[opt.value] }}
        </span>
      </label>
    </div>
    <p v-if="submitted && error" class="mt-1 text-xs text-red-500">{{ error }}</p>
  </div>
</template>