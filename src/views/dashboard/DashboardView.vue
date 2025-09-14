<template>
  <div>
    <h3 class="text-3xl font-medium text-gray-700">Dashboard</h3>

    <div class="mt-4">
      <div class="flex flex-wrap -mx-6">
        <div class="w-full px-6 sm:w-1/2 xl:w-1/3">
          <div class="flex items-center px-5 py-6 bg-white shadow-sm">
            <div class="p-3 bg-indigo-600 bg-opacity-75 rounded-full">
              <Icon class="text-white" icon="fa6-solid:users" width="30" height="30" />
            </div>

            <div class="mx-5">
              <h4 class="text-2xl font-semibold text-gray-700">8,282</h4>
              <div class="text-gray-500">New Users</div>
            </div>
          </div>
        </div>

        <div class="w-full px-6 mt-6 sm:w-1/2 xl:w-1/3 sm:mt-0">
          <div class="flex items-center px-5 py-6 bg-white shadow-sm">
            <div class="p-3 bg-blue-600 bg-opacity-75 rounded-full">
              <Icon class="text-white" icon="mdi:cart" width="30" height="30" />
            </div>

            <div class="mx-5">
              <h4 class="text-2xl font-semibold text-gray-700">200,521</h4>
              <div class="text-gray-500">Total Orders</div>
            </div>
          </div>
        </div>

        <div class="w-full px-6 mt-6 sm:w-1/2 xl:w-1/3 xl:mt-0">
          <div class="flex items-center px-5 py-6 bg-white shadow-sm">
            <div class="p-3 bg-pink-600 bg-opacity-75 rounded-full">
              <Icon class="text-white" icon="solar:bag-bold" width="30" height="30" />
            </div>

            <div class="mx-5">
              <h4 class="text-2xl font-semibold text-gray-700">215,542</h4>
              <div class="text-gray-500">Available Products</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>
