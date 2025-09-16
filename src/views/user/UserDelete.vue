<template>
  <div>
    <ConfirmComponent
      v-model="isOpen"
      title="Deactivate account"
      message="Are you sure you want to deactivate your account? This action cannot be undone."
      icon="clarity:warning-line"
      confirm-text="Deactivate"
      cancel-text="Cancel"
      @confirm="handleDeactivate"
    />
  </div>
</template>

<script lang="ts" setup>
import ConfirmComponent from '@/components/ConfirmComponent.vue'
import { computed } from 'vue'

const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true,
  },
  userId: {
    type: Number,
    requireed: true,
  },
})

const emit = defineEmits(['update:modelValue'])

const isOpen = computed({
  get: () => props.modelValue,
  set: (value: boolean) => emit('update:modelValue', value),
})

const handleDeactivate = () => {
  alert('Account deactivated!')
  isOpen.value = false
}
</script>

<style></style>
