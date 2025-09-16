<template>
  <div class="flex items-center justify-center h-screen px-6 bg-gray-200">
    <div class="w-full max-w-sm p-6 bg-white shadow-md">
      <div class="flex items-center justify-center">
        <span class="text-2xl font-semibold text-gray-700">V-Dashboard</span>
      </div>

      <form class="mt-4" @submit.prevent="handleRegister">
        <!-- Company Name -->
        <FormGroup
          label="COMPANY NAME"
          v-model="authStore.registerForm.name"
          :error="authStore.errors.name"
        />

        <!-- Subdomain -->
        <FormGroup
          label="COMPANT SUBDOMAIN"
          v-model="authStore.registerForm.subdomain"
          :error="authStore.errors.subdomain"
        />

        <!-- Address -->
        <FormGroup
          label="COMPANY ADDRESS"
          v-model="authStore.registerForm.address"
          :error="authStore.errors.address"
        />

        <!-- Email -->
        <FormGroup
          label="EMAIL"
          type="email"
          v-model="authStore.registerForm.email"
          :error="authStore.errors.email"
        />

        <!-- Password -->
        <FormGroup
          label="PASSWORD"
          type="password"
          v-model="authStore.registerForm.password"
          :error="authStore.errors.password"
        />

        <!-- Confirm Password -->
        <FormGroup
          label="CONFIRM PASSWORD"
          type="password"
          v-model="authStore.registerForm.password_confirmation"
          :error="authStore.errors.password_confirmation"
        />

        <!-- Phone -->
        <FormGroup
          label="PHONE"
          type="number"
          v-model="authStore.registerForm.phone"
          :error="authStore.errors.phone"
        />

        <!-- Buttons -->
        <div class="flex flex-col gap-2 mt-6">
          <ButtonComponent
            class="w-full px-4 py-2 text-sm text-center text-white bg-indigo-600 focus:outline-none hover:bg-indigo-500"
            label="REGISTER"
            type="submit"
            :loading="authStore.loading"
          />
          <router-link to="/" class="block text-indigo-700 hover:underline self-center text-[10px]">
            ALREADY HAVE AN ACCOUNT ?
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

const handleRegister = async () => {
  await authStore.register()
}
</script>
