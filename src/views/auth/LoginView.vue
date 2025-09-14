<template>
  <div class="flex items-center justify-center h-screen px-6 bg-gray-200">
    <div class="w-full max-w-sm p-6 bg-white shadow-md">
      <div class="flex items-center justify-center">
        <!-- YOU CAN ADD LOGO HERE -->
        <span class="text-2xl font-semibold text-gray-700">V-Dashboard</span>
      </div>

      <form class="mt-4" @submit.prevent="handleLogin">
        <label class="block">
          <span class="text-sm text-gray-700">Email</span>
          <input
            type="email"
            class="block w-full border-0 border-b focus:outline-none focus:ring-0 focus:border-indigo-500 pb-1"
            v-model="authStore.loginForm.email"
          />
          <small v-if="authStore.errors.email" class="text-red-500 text-xs mt-1">{{
            authStore.errors.email[0]
          }}</small>
        </label>

        <label class="block mt-3">
          <span class="text-sm text-gray-700">Password</span>
          <input
            type="password"
            class="block w-full border-0 border-b focus:outline-none focus:ring-0 focus:border-indigo-500 pb-1"
            v-model="authStore.loginForm.password"
          />
          <small v-if="authStore.errors.password" class="text-red-500 text-xs mt-1">{{
            authStore.errors.password[0]
          }}</small>
        </label>

        <div class="flex items-center justify-between mt-4">
          <div>
            <label class="inline-flex items-center">
              <input type="checkbox" class="text-indigo-600" />
              <span class="mx-2 text-sm text-gray-600">Remember me</span>
            </label>
          </div>

          <div>
            <a class="block text-sm text-indigo-700 fontme hover:underline" href="#"
              >Forgot your password?</a
            >
          </div>
        </div>

        <div class="flex flex-col gap-2 mt-6">
          <ButtonComponent
            class="w-full px-4 py-2 text-sm text-center text-white bg-primary focus:outline-none hover:bg-primary-hover"
            label="SIGN IN"
            type="submit"
            :loading="authStore.loading"
          />
          <router-link
            to="/register"
            class="block text-sm text-indigo-700 fontme hover:underline self-center text-[12px]"
          >
            create account ?
          </router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import ButtonComponent from '@/components/ButtonComponent.vue'
import { useAuthStore } from '@/stores/auth'

const authStore = useAuthStore()

const handleLogin = async () => {
  await authStore.login()
}
</script>
