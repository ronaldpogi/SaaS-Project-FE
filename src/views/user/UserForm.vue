<template>
  <div>
    <form class="mt-4 space-y-5" @submit.prevent="handleSubmit">
      <!-- First & Last Name -->
      <div class="flex gap-5">
        <FormGroup
          label="FIRST NAME"
          v-model="userStore.userForm.first_name"
          :error="userStore.errors.first_name"
        />
        <FormGroup
          label="LAST NAME"
          v-model="userStore.userForm.last_name"
          :error="userStore.errors.last_name"
        />
      </div>

      <!-- Email & Phone -->
      <div class="flex gap-5">
        <FormGroup
          label="EMAIL"
          type="email"
          v-model="userStore.userForm.email"
          :error="userStore.errors.email"
        />
        <FormGroup
          label="PHONE"
          type="number"
          v-model="userStore.userForm.phone"
          :error="userStore.errors.phone"
        />
      </div>

      <!-- Single column fields -->
      <FormGroup
        label="ADDRESS"
        v-model="userStore.userForm.address"
        :error="userStore.errors.address"
      />

      <FormGroup
        label="PASSWORD"
        type="password"
        v-model="userStore.userForm.password"
        :error="userStore.errors.password"
      />

      <FormGroup
        label="CONFIRM PASSWORD"
        type="password"
        v-model="userStore.userForm.password_confirmation"
        :error="userStore.errors.password_confirmation"
      />

      <!-- Button -->
      <div class="mt-10">
        <ButtonComponent
          class="w-full px-4 py-2 text-sm text-center text-white bg-indigo-600 focus:outline-none hover:bg-indigo-500"
          label="SUBMIT"
          type="submit"
          :loading="userStore.loading"
        />
      </div>
    </form>
  </div>
</template>

<script lang="ts" setup>
import ButtonComponent from '@/components/ButtonComponent.vue'
import FormGroup from '@/components/FormGroup.vue'
import { useUserStore } from '@/stores/user'

const userStore = useUserStore()

const emit = defineEmits<{ (e: 'submit'): void }>()

const handleSubmit = () => {
  emit('submit')
}
</script>
