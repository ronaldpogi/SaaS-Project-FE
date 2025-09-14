import { defineStore } from 'pinia'
import { ref } from 'vue'
import api from '@/plugins/axios'
import type { UserInterface } from '@/interfaces/user'

export const useUserStore = defineStore('user', () => {
  const users = ref<UserInterface[]>([])
  const total = ref(0)
  const user = ref<UserInterface | null>(null)
  const loading = ref(false)
  const errors = ref<any>({})
  const error = ref<string | null>(null)

  const params = ref({
    page: 1,
    pageSize: 5,
    search: '',
    status: '',
  })

  const columns = [
    { key: 'first_name', label: 'First name' },
    { key: 'last_name', label: 'Last name' },
    { key: 'email', label: 'Email' },
    { key: 'phone', label: 'Phone' },
  ]

  async function index(newParams: Record<string, any> = {}) {
    loading.value = true
    error.value = null
    try {
      Object.assign(params.value, newParams)
      const { data } = await api.get('/users', { params: params.value })
      users.value = data.data ?? data
      total.value = data.total
    } catch (err: any) {
      error.value = err.response?.data?.message || 'Failed to fetch users'
    } finally {
      loading.value = false
    }
  }

  async function show(id: number) {
    loading.value = true
    error.value = null
    try {
      const { data } = await api.get(`/users/${id}`)
      user.value = data
    } catch (err: any) {
      error.value = err.response?.data?.message || 'Failed to fetch user'
    } finally {
      loading.value = false
    }
  }

  async function store(payload: Partial<UserInterface>) {
    loading.value = true
    try {
      errors.value = {}
      const { data } = await api.post('/users', payload)
      users.value.push(data)
      return data
    } catch (err: any) {
      errors.value = err.response?.data?.errors || 'Failed create user.'
      throw err.response?.data || err
    } finally {
      loading.value = false
    }
  }

  async function update(id: number, payload: Partial<UserInterface>) {
    loading.value = true
    try {
      errors.value = {}
      const { data } = await api.put(`/users/${id}`, payload)
      const index = users.value.findIndex((e) => e.id === id)
      if (index !== -1) users.value[index] = data
      return data
    } catch (err: any) {
      errors.value = err.response?.data?.errors || 'Failed create user.'
      throw err.response?.data || err
    } finally {
      loading.value = false
    }
  }

  async function destroy(id: number) {
    loading.value = true
    try {
      await api.delete(`/users/${id}`)
      users.value = users.value.filter((e: any) => e.id !== id)
    } catch (err: any) {
      throw err.response?.data || err
    } finally {
      loading.value = false
    }
  }

  return {
    users,
    user,
    total,
    loading,
    errors,
    error,
    params,
    columns,
    index,
    show,
    store,
    update,
    destroy,
  }
})
