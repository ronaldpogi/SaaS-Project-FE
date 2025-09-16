<!-- components/BaseModal.vue -->
<template>
  <div :class="`modal ${!isOpen && 'opacity-0 pointer-events-none'} z-50 fixed w-full h-full top-0 left-0 flex items-center justify-center`">
    <!-- Backdrop -->
    <div @click="isOpen = false" class="fixed inset-0 bg-gray-900/90 transition-opacity"></div>

    <!-- Modal -->

      <div
        class="z-50 w-11/12 mx-auto overflow-y-auto bg-white shadow-lg modal-container md:max-w-md"
      >
        <!-- Header -->
        <div v-if="title || icon" class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <div class="sm:flex sm:items-start">
            <div
              v-if="icon"
              class="mx-auto flex size-10 items-center justify-center rounded-full border border-error"
            >
              <Icon class="text-error p-1" :icon="icon" width="40" height="40" />
            </div>
            <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
              <h3 v-if="title" class="text-[14px] font-semibold text-gray-900">
                {{ title }}
              </h3>
              <div v-if="message" class="mt-2">
                <p class="text-[12px] text-gray-500">{{ message }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Body (slot for custom content) -->
        <div class="px-4 pb-4 sm:px-6">
          <slot />
        </div>

        <!-- Footer -->
        <div class="bg-gray-50 px-4 pb-4 flex flex-row-reverse px-6">

          <ButtonComponent
            class="text-[12px] inline-flex justify-center bg-error px-3 py-2 font-semibold text-white hover:bg-error-hover ml-3"
            :label="confirmText"
            type="submit"
            v-if="showConfirm"
            @click="handleConfirm"
            :loading="loading"
          />

          <ButtonComponent
            class="text-[12px] inline-flex justify-center bg-white px-3 py-2 font-semibold text-gray-900 ring-1 ring-gray-300 hover:bg-gray-100"
            :label="cancelText"
            type="submit"
            v-if="showCancel"
            @click="isOpen = false"
          />
        </div>
      </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { Icon } from '@iconify/vue'
import ButtonComponent from './ButtonComponent.vue'

const props = defineProps({
  modelValue: { type: Boolean, required: true },
  title: { type: String, default: '' },
  message: { type: String, default: '' },
  icon: { type: String, default: '' },
  confirmText: { type: String, default: 'Confirm' },
  cancelText: { type: String, default: 'Cancel' },
  showConfirm: { type: Boolean, default: true },
  showCancel: { type: Boolean, default: true },
  loading: {type: Boolean, required: true}
})

const emit = defineEmits(['update:modelValue', 'confirm'])

const isOpen = computed({
  get: () => props.modelValue,
  set: (value: boolean) => emit('update:modelValue', value),
})

const handleConfirm = () => {
  emit('confirm')
}
</script>

<style scoped>
.modal {
  transition: opacity 0.25s ease;
}
</style>
