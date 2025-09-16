<!-- components/BaseModal.vue -->
<template>
  <div>
    <!-- Backdrop -->
    <div
      v-if="isOpen"
      class="fixed inset-0 bg-gray-500/75 transition-opacity"
      @click="closeOnBackdrop && (isOpen = false)"
    ></div>

    <!-- Modal -->
    <div v-if="isOpen" class="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-0">
      <div
        class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
      >
        <!-- Header -->
        <div v-if="title || icon" class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <div class="sm:flex sm:items-start">
            <div
              v-if="icon"
              class="mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-gray-100 sm:mx-0 sm:size-10"
            >
              <Icon :icon="icon" width="36" height="36" />
            </div>
            <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
              <h3 v-if="title" class="text-base font-semibold text-gray-900">
                {{ title }}
              </h3>
              <div v-if="message" class="mt-2">
                <p class="text-sm text-gray-500">{{ message }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Body (slot for custom content) -->
        <div class="px-4 pb-4 sm:px-6">
          <slot />
        </div>

        <!-- Footer -->
        <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
          <button
            v-if="showConfirm"
            type="button"
            @click="handleConfirm"
            class="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-red-500 sm:ml-3 sm:w-auto"
          >
            {{ confirmText }}
          </button>
          <button
            v-if="showCancel"
            type="button"
            @click="isOpen = false"
            class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs ring-1 ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
          >
            {{ cancelText }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { Icon } from '@iconify/vue'

const props = defineProps({
  modelValue: { type: Boolean, required: true },
  title: { type: String, default: '' },
  message: { type: String, default: '' },
  icon: { type: String, default: '' },
  confirmText: { type: String, default: 'Confirm' },
  cancelText: { type: String, default: 'Cancel' },
  showConfirm: { type: Boolean, default: true },
  showCancel: { type: Boolean, default: true },
  closeOnBackdrop: { type: Boolean, default: true },
})

const emit = defineEmits(['update:modelValue', 'confirm'])

const isOpen = computed({
  get: () => props.modelValue,
  set: (value: boolean) => emit('update:modelValue', value),
})

const handleConfirm = () => {
  emit('confirm')
  isOpen.value = false
}
</script>
