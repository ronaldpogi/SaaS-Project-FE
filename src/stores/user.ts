import { defineStore } from 'pinia'
import { ref, reactive } from 'vue'
import api from '@/plugins/axios'
import type {
  UserInterface,
  TabsInterface,
  ColumnsInterface,
  ParamsInterface,
  UserForm,
} from '@/interfaces/user'

export const useUserStore = defineStore('user', () => {
  const users = ref<UserInterface[]>([])
  const total = ref(0)
  const user = ref<UserInterface | null>(null)
  const loading = ref(false)
  const errors = ref<any>({})

  const userForm = reactive<UserForm>({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    address: '',
    password: '',
    password_confirmation: '',
  })

  const params = ref<ParamsInterface>({
    page: 1,
    pageSize: 5,
    search: '',
  })

  const columns: ColumnsInterface[] = [
    { key: 'first_name', label: 'FIRST NAME' },
    { key: 'last_name', label: 'LAST NAME' },
    { key: 'email', label: 'EMAIL' },
    { key: 'phone', label: 'PHONE' },
  ]

  const tabs: TabsInterface[] = [
    { key: 'list', label: 'LIST' },
    { key: 'create', label: 'CREATE' },
  ]

  async function index(newParams: Record<string, any> = {}) {
    loading.value = true
    try {
      Object.assign(params.value, newParams)
      const { data } = await api.get('/users', { params: params.value })
      users.value = data.data ?? data
      total.value = data.pagination.total
    } catch (err: any) {
      throw err
    } finally {
      loading.value = false
    }
  }

  async function show(id: number) {
    loading.value = true
    try {
      const { data } = await api.get(`/users/${id}`)
      user.value = data.data
      userForm.first_name = user.value?.first_name ?? ''
      userForm.last_name = user.value?.last_name ?? ''
      userForm.email = user.value?.email ?? ''
      userForm.phone = user.value?.phone ?? ''
      userForm.address = user.value?.address ?? ''
    } catch (err: any) {
      throw err
    } finally {
      loading.value = false
    }
  }

  async function store() {
    loading.value = true
    try {
      errors.value = {}
      const { data } = await api.post('/users', userForm)
      users.value.push(data)
      return data
    } catch (err: any) {
      errors.value = err.response?.data?.errors || 'user create error'
      throw err
    } finally {
      loading.value = false
    }
  }

  async function update(id: number) {
    loading.value = true
    try {
      errors.value = {}
      const { data } = await api.put(`/users/${id}`, userForm)
      const index = users.value.findIndex((e) => e.id === id)
      if (index !== -1) users.value[index] = data.data
      return data
    } catch (err: any) {
      errors.value = err.response?.data?.errors || 'user update error'
      throw err
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
      throw err
    } finally {
      loading.value = false
    }
  }

  return {
    userForm,
    users,
    user,
    total,
    loading,
    errors,
    params,
    columns,
    tabs,
    index,
    show,
    store,
    update,
    destroy,
  }
})
