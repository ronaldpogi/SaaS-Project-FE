<template>
  <ModalComponent heading="UPDATE" action="UPDATE" v-model="isOpen" :showFooter="false">
    <UserForm @submit="handleUpdate()" />
  </ModalComponent>
</template>

<script lang="ts" setup>
import { computed, watchEffect } from 'vue'
import ModalComponent from '@/components/ModalComponent.vue'
import UserForm from './UserForm.vue'
import { useUserStore } from '@/stores/user'

const userStore = useUserStore()

// define props
const props = defineProps({
  modelValue: { type: Boolean, required: true },
  userId: { type: Number, required: true },
})

const handleUpdate = async () => {
  const success = await userStore.update(props.userId)
  isOpen.value = !success
}

// define emits
const emit = defineEmits(['update:modelValue', 'submit'])

// computed wrapper for v-model
const isOpen = computed({
  get: () => props.modelValue,
  set: (value: boolean) => emit('update:modelValue', value),
})

watchEffect(() => {
  if (isOpen.value) {
    userStore.show(props.userId)
  }
})
</script>
