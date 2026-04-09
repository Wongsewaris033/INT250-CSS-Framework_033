<script setup>
defineProps({
  label: String,
  modelValue: String,
  placeholder: String,
  error: String,
  required: Boolean,
  submitted: Boolean,
  maxLength: { type: Number, default: 200 },
})
defineEmits(['update:modelValue'])
</script>

<template>
  <div>
    <label class="block text-sm font-medium text-slate-700 mb-1">
      {{ label }} <span v-if="required" class="text-red-500">*</span>
    </label>
    <textarea
      :value="modelValue"
      :placeholder="placeholder"
      :maxlength="maxLength"
      @input="$emit('update:modelValue', $event.target.value)"
      rows="4"
      class="w-full px-3 py-2 text-sm border rounded outline-none resize-y focus:ring-2 focus:ring-blue-400 focus:border-blue-400 bg-white"
      :class="submitted && error ? 'border-red-400' : 'border-slate-300'"
    ></textarea>
    <div class="flex justify-between mt-1">
      <p class="text-xs text-slate-400">Optional: briefly describe your interests or previous experience.</p>
      <p class="text-xs text-slate-400 shrink-0 ml-2">{{ (modelValue || '').length }} / {{ maxLength }}</p>
    </div>
    <p v-if="submitted && error" class="mt-1 text-xs text-red-500">{{ error }}</p>
  </div>
</template>