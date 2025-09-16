// src/stores/auth.ts
import { defineStore } from 'pinia'
import { computed, reactive, ref } from 'vue'
import api from '@/plugins/axios'
import { type RegisterFormInterface, type LoginFormInterface } from '@/interfaces/auth'
import type { UserInterface } from '@/interfaces/user'
import router from '@/router'

export const useAuthStore = defineStore('auth', () => {
  const user = ref<UserInterface | null>(null)
  const token = ref<string | null>(localStorage.getItem('token'))
  const loading = ref(false)
  const errors = ref<any>({})

  const registerForm = reactive<RegisterFormInterface>({
    email: '',
    password: '',
    password_confirmation: '',
    phone: '',
    name: '',
    address: '',
    subdomain: '',
    settings: [],
  })

  const loginForm = reactive<LoginFormInterface>({
    email: '',
    password: '',
  })

  const setToken = async (newToken: string | null) => {
    token.value = newToken
    if (newToken) {
      localStorage.setItem('token', newToken)
    } else {
      localStorage.removeItem('token')
    }
  }

  const register = async () => {
    try {
      loading.value = true
      errors.value = {}
      const { data } = await api.post('/register', registerForm)
      router.push('/')
      return data.data
    } catch (err: any) {
      errors.value = err.response?.data?.errors
      throw err
    } finally {
      loading.value = false
    }
  }

  const login = async () => {
    try {
      loading.value = true
      errors.value = {}
      const { data } = await api.post('/login', loginForm)
      console.log('TEST', data)
      console.log('DATA', data)
      setToken(data.data.token)
      user.value = data.data.user
      router.push('/dashboard')
    } catch (err: any) {
      errors.value = err.response?.data?.errors || 'login error'
      throw err
    } finally {
      loading.value = false
    }
  }

  const fetchUser = async () => {
    if (!token.value) return
    try {
      const { data } = await api.get('/me')
      user.value = data
    } catch {
      logout()
    }
  }

  const logout = async () => {
    await api.post('/logout')
    setToken(null)
    user.value = null
    router.push('/')
  }

  return {
    token,
    user,
    loading,
    errors,
    registerForm,
    loginForm,
    register,
    login,
    fetchUser,
    logout,
    isAuthenticated: computed(() => !!token.value),
  }
})
