<template>
  <UserForm @submit="handleCreate()" />
</template>

<script lang="ts" setup>
import UserForm from './UserForm.vue'
import { useUserStore } from '@/stores/user'

const userStore = useUserStore()

const handleCreate = () => {
  userStore.store()
}
</script>

<style></style>
