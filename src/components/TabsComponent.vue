<template>
  <div class="text-center text-[13px] text-gray-400 border-b ">
    <ul class="flex flex-wrap -mb-px">
      <li v-for="x in userStore.tabs" :key="x.key">
        <button
          @click="$emit('update:modelValue', x.key)"
          :class="[
            'inline-block w-20 py-1 border-b-2',
            modelValue === x.key
              ? 'text-primary border-primary'
              : 'border-transparent hover:text-gray-500  cursor-pointer',
          ]"
        >
          {{ x.label }}
        </button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { useUserStore } from '@/stores/user'

defineProps<{
  modelValue: string
}>()

defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const userStore = useUserStore()
</script>
