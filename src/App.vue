<template>
  <AlertComponent
    v-for="alert in toastStore.alerts"
    :key="alert.id"
    :type="alert.type"
    :title="alert.title"
    :message="alert.message"
  />
  <component :is="layout">
    <router-view />
  </component>
</template>

<script lang="ts" setup>
import AlertComponent from './components/AlertComponent.vue'
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useToastStore } from './stores/toast'

const defaultLayout = 'default'

const { currentRoute } = useRouter()
const toastStore = useToastStore()

const layout = computed(() => `${currentRoute.value.meta.layout || defaultLayout}-layout`)
</script>
