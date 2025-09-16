<template>
  <div class="flex items-center justify-center h-screen px-6 bg-gray-200">
    <div class="w-full max-w-sm p-6 bg-white shadow-md">
      <div class="flex items-center justify-center">
        <!-- YOU CAN ADD LOGO HERE -->
        <span class="text-2xl font-semibold text-gray-700">V-Dashboard</span>
      </div>

      <form class="mt-4" @submit.prevent="handleLogin">
        <!-- email -->
        <FormGroup
          label="EMAIL"
          type="email"
          v-model="authStore.loginForm.email"
          :error="authStore.errors.email"
        />

        <!-- password -->
        <FormGroup
          label="PASSWORD"
          type="password"
          v-model="authStore.loginForm.password"
          :error="authStore.errors.password"
        />

        <!-- remember me & forgot -->
        <div class="flex items-center justify-between mt-4">
          <label class="inline-flex items-center">
            <input type="checkbox" class="text-indigo-600" />
            <span class="mx-2 text-gray-600 text-[11px]">REMEMBER ME</span>
          </label>

          <a class="block text-indigo-700 fontme hover:underline text-[11px]" href="#">
            FORGOT PASSWORD ?
          </a>
        </div>

        <!-- actions -->
        <div class="flex flex-col gap-2 mt-6">
          <ButtonComponent
            class="w-full px-4 py-2 text-sm text-center text-white bg-primary focus:outline-none hover:bg-primary-hover"
            label="SIGN IN"
            type="submit"
            :loading="authStore.loading"
          />
          <router-link
            to="/register"
            class="block text-indigo-700 fontme hover:underline self-center text-[10px]"
          >
            CREATE ACCOUNT ?
          </router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import ButtonComponent from '@/components/ButtonComponent.vue'
import FormGroup from '@/components/FormGroup.vue'
import { useAuthStore } from '@/stores/auth'

const authStore = useAuthStore()

const handleLogin = async () => {
  await authStore.login()
}
</script>
