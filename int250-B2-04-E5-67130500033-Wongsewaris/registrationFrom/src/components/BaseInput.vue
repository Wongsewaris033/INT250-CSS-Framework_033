<script setup>
defineProps({
  label: String,
  modelValue: String,
  placeholder: String,
  type: { type: String, default: 'text' },
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
    <input
      :type="type"
      :value="modelValue"
      :placeholder="placeholder"
      @input="$emit('update:modelValue', $event.target.value)"
      class="w-full px-3 py-2 text-sm border rounded outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
      :class="submitted && error ? 'border-red-400 bg-white' : 'border-slate-300 bg-white'"
    />
    <p v-if="submitted && error" class="mt-1 text-xs text-red-500">{{ error }}</p>
  </div>
</template>