<template>
  <div
    :class="`modal ${!isOpen && 'opacity-0 pointer-events-none'} z-50 fixed w-full h-full top-0 left-0 flex items-center justify-center`"
  >
    <!-- Overlay -->
    <div @click="close" class="fixed inset-0 bg-gray-900/90 transition-opacity"></div>

    <div
      class="z-50 w-11/12 mx-auto overflow-y-auto bg-white shadow-lg modal-container md:max-w-md"
    >
      <!-- Header -->
      <div class="px-6 py-4 text-left modal-content">
        <div class="flex items-center justify-between pb-3">
          <p class="text-2xl">{{ heading }}</p>
          <div class="cursor-pointer modal-close" @click="close">
            <Icon class="text-back fill-current" icon="clarity:close-line" width="25" height="25" />
          </div>
        </div>

        <!-- Body -->
        <div>
          <slot />
        </div>

        <!-- Footer -->
        <div class="flex justify-end" v-if="showFooter">
          <button
            @click="close"
            class="px-4 py-1 mr-2 text-primary bg-transparent text-[13px] hover:bg-gray-200 hover:text-primary-hover focus:outline-none"
          >
            Close
          </button>
          <button
            @click="$emit('submit')"
            class="px-2 py-1 font-medium tracking-wide text-[13px] text-white bg-primary hover:bg-primary-hover focus:outline-none"
          >
            {{ action }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'

const props = defineProps({
  heading: { type: String, required: true },
  action: { type: String, required: true },
  modelValue: { type: Boolean, required: true },
  showFooter: { type: Boolean, required: true },
})

const emit = defineEmits(['update:modelValue', 'submit'])

// sync with v-model
const isOpen = computed({
  get: () => props.modelValue,
  set: (value: boolean) => emit('update:modelValue', value),
})

const close = () => {
  isOpen.value = false
}
</script>

<style scoped>
.modal {
  transition: opacity 0.25s ease;
}
</style>
