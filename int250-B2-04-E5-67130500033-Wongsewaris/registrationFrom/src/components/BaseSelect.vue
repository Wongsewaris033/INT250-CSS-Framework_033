<script setup>
defineProps({
  label: String,
  modelValue: String,
  options: Array,
  placeholder: String,
  error: String,
  required: Boolean,
  submitted: Boolean,
})
defineEmits(['update:modelValue'])
</script>

<template>
  <div>
    <label class="block text-sm font-medium text-slate-700 mb-1">
      {{ label }} <span v-if="required" class="text-red-500">*</span>
    </label>
    <select
      :value="modelValue"
      @change="$emit('update:modelValue', $event.target.value)"
      class="w-full px-3 py-2 text-sm border rounded outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 bg-white"
      :class="submitted && error ? 'border-red-400' : 'border-slate-300'"
    >
      <option value="">{{ placeholder }}</option>
      <option v-for="opt in options" :key="opt.value" :value="opt.value">
        {{ opt.label }}
      </option>
    </select>
    <p v-if="submitted && error" class="mt-1 text-xs text-red-500">{{ error }}</p>
  </div>
</template>