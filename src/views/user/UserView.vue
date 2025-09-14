<template>
  <TableComponent
    title="Users"
    :columns="userStore.columns"
    :rows="userStore.users"
    :total="userStore.total"
    :loading="userStore.loading"
    :page="userStore.params.page"
    :pageSize="userStore.params.pageSize"
    showFilters
    @update:params="(params) => userStore.index(params)"
  >
    <template #user="{ row }">
      <div class="flex items-center">
        <img :src="row.picture" class="w-10 h-10 rounded-full" />
        <span class="ml-3">{{ row.name }}</span>
      </div>
    </template>
  </TableComponent>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import TableComponent from '@/components/TableComponent.vue'
import { useUserStore } from '@/stores/user'

const userStore = useUserStore()

onMounted(() => {
  userStore.index()
})
</script>
