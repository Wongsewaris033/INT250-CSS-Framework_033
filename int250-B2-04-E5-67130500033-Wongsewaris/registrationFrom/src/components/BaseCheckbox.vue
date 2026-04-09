<script setup>
defineProps({
  modelValue: Boolean,
  label: String,
  error: String,
  submitted: Boolean,
})
defineEmits(['update:modelValue'])
</script>

<template>
  <div>
    <label class="flex items-start gap-2 cursor-pointer">
      <input
        type="checkbox"
        :checked="modelValue"
        @change="$emit('update:modelValue', $event.target.checked)"
        class="mt-0.5 w-4 h-4 accent-blue-600"
      />
      <span class="text-sm text-slate-700">{{ label }}</span>
    </label>
    <p v-if="submitted && error" class="mt-1 text-xs text-red-500">{{ error }}</p>
  </div>
</template>