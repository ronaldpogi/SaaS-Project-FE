<template>
  <TabsComponent v-model="activeTab" />
  <UserTable
    v-if="activeTab === userStore.tabs[0].key"
    @updateUser="handleUpdate"
    @deleteUser="handleDelete"
  />
  <UserCreate v-if="activeTab === userStore.tabs[1].key" />

  <!-- short hand for this -->
  <!-- <UserUpdate :modelValue="isOpen" @update:modelValue="isOpen = $event" /> -->
  <UserUpdate v-model="isOpenUpdate" :userId="userId" />
  <UserDelete v-model="isOpenDelete" :userId="userId" />
</template>

<script lang="ts" setup>
import TabsComponent from '@/components/TabsComponent.vue'
import UserTable from './UserTable.vue'
import UserCreate from './UserCreate.vue'
import UserUpdate from './UserUpdate.vue'
import UserDelete from './userDelete.vue'
import { ref } from 'vue'
import { useUserStore } from '@/stores/user'

const userStore = useUserStore()

const userId = ref<number>(0)

const isOpenUpdate = ref<boolean>(false)
const isOpenDelete = ref<boolean>(false)

const handleUpdate = (id: number) => {
  userId.value = id
  isOpenUpdate.value = true
}

const handleDelete = (id: number) => {
  userId.value = id
  isOpenDelete.value = true
}

const activeTab = ref(userStore.tabs[0].key)
</script>
