<script setup lang="ts">
import { defineProps } from 'vue'
import LoadingComponent from './LoadingComponent.vue'

const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  type: {
    type: String as () => 'button' | 'submit' | 'reset',
    default: 'button',
  },
  class: {
    type: String,
    default: '',
  },
  icon: {
    type: String,
    default: '',
  },
  loading: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <button
    :type="props.type"
    :class="[
      'inline-flex items-center justify-center',
      props.class,
      !props.loading ? 'cursor-pointer' : 'cursor-not-allowed opacity-70',
    ]"
    :disabled="props.loading"
  >
    <div v-if="!props.loading" class="flex items-center gap-1">
      <Icon
        v-if="props.icon && props.icon !== ''"
        :icon="props.icon"
        width="20"
        height="20"
        class="flex-shrink-0"
      />
      <span>{{ props.label }}</span>
    </div>

    <div v-else class="flex items-center justify-center">
      <LoadingComponent />
    </div>
  </button>
</template>
