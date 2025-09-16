<template>
  <div>
    <ConfirmComponent
      v-model="isOpen"
      title="DELETE THIS ACCOUNT ?"
      message="ARE YOU SURE YOU WANT TO DELETE THIS ACCOUNT ? THIS ACTION CANNOT BE UNDONE."
      icon="clarity:warning-line"
      confirm-text="DELETE"
      cancel-text="CANCEL"
      @confirm="handleDelete"
      :loading="userStore.loading"
    />
  </div>
</template>

<script lang="ts" setup>
import ConfirmComponent from '@/components/ConfirmComponent.vue'
import { computed } from 'vue'
import { useUserStore } from '@/stores/user'

const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true,
  },
  userId: {
    type: Number,
    required: true,
  },
})

const userStore = useUserStore()

const emit = defineEmits(['update:modelValue'])

const isOpen = computed({
  get: () => props.modelValue,
  set: (value: boolean) => emit('update:modelValue', value),
})

const handleDelete = () => {
  userStore.destroy(props.userId)
  isOpen.value = false
}
</script>

<style></style>
