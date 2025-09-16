<template>
  <div class="mt-6">
    <h2 v-if="title" class="text-xl font-semibold leading-tight text-gray-700">
      {{ title }}
    </h2>

    <!-- Filters -->
    <div class="flex flex-col mt-3 sm:flex-row" v-if="showFilters">
      <div class="flex">
        <!-- Page Size -->
        <select
          v-model="localPageSize"
          @change="emitChange"
          class="block w-full h-full px-4 py-2 pr-8 text-gray-700 bg-white border border-gray-400 focus:outline-none"
        >
          <option v-for="s in [5, 10, 20]" :key="s" :value="s">{{ s }}</option>
        </select>
      </div>

      <!-- Search -->
      <div class="relative block mt-2 sm:mt-0">
        <span class="absolute inset-y-0 left-0 flex items-center pl-2">
          <svg viewBox="0 0 24 24" class="w-4 h-4 text-gray-500 fill-current">
            <path
              d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z"
            />
          </svg>
        </span>
        <input
          v-model="search"
          @input="debounceEmit"
          placeholder="SEARCH"
          class="block w-full h-full px-4 py-2 pr-8 pl-8 text-gray-700 bg-white border border-gray-400 focus:outline-none"
        />
      </div>
    </div>

    <!-- Table -->
    <div class="px-4 py-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8">
      <div class="inline-block min-w-full overflow-hidden shadow">
        <table class="min-w-full leading-normal">
          <thead>
            <tr>
              <th
                v-for="col in columns"
                :key="col.key"
                class="px-5 py-3 text-xs font-semibold tracking-wider text-center text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200"
              >
                {{ col.label }}
              </th>
              <th
                class="px-5 py-3 text-xs font-semibold tracking-wider text-center text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200"
              >
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-if="loading">
              <td :colspan="columns.length + 1" class="px-5 py-5 text-sm bg-white border-b border-gray-200 text-center">Loading...</td>
            </tr>
            <tr v-else-if="rows.length === 0">
              <td :colspan="columns.length + 1" class="px-5 py-5 text-sm bg-white border-b border-gray-200 text-center">No data found</td>
            </tr>
            <tr v-else v-for="(row, index) in rows" :key="index">
              <td
                v-for="col in columns"
                :key="col.key"
                class="px-5 py-5 text-sm bg-white border-b border-gray-200 text-center"
              >
                <slot :name="col.key" :row="row">
                  {{ row[col.key] }}
                </slot>
              </td>
              <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                <div class="flex items-center justify-center gap-2">
                  <!-- <ButtonComponent
                    class="w-auto px-3 py-1 text-sm text-center text-white bg-info focus:outline-none hover:bg-info-hover"
                    label="view"
                    type="button"
                    :loading="loading"
                    @click="$emit('rowView', row.id)"
                  /> -->
                  <ButtonComponent
                    class="w-auto px-3 py-1 text-[12px] font-semibold text-center text-white bg-warning focus:outline-none hover:bg-warning-hover"
                    label="UPDATE"
                    type="button"
                    :loading="loading"
                    @click="$emit('rowUpdate', row.id)"
                  />
                  <ButtonComponent
                    class="w-auto px-3 py-1 text-[12px] font-semibold text-center text-white bg-error focus:outline-none hover:bg-error-hover"
                    label="DELETE"
                    type="button"
                    :loading="loading"
                    @click="$emit('rowDelete', row.id)"
                  />
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        <!-- Pagination -->
        <div class="flex flex-col items-center px-5 py-5 bg-white xs:flex-row xs:justify-between">
          <span class="text-xs text-gray-900 xs:text-sm">
            Showing {{ start + 1 }} to {{ Math.min(end, total) }} of {{ total }} Entries
          </span>

          <div class="inline-flex mt-2 xs:mt-0">
            <button
              @click="prevPage"
              :disabled="page === 1"
              class="px-4 py-2 text-[12px] font-semibold text-gray-800 bg-gray-300 hover:bg-gray-400 disabled:opacity-50"
            >
              Prev
            </button>
            <button
              @click="nextPage"
              :disabled="page * localPageSize >= total"
              class="px-4 py-2 text-[12px] font-semibold text-gray-800 bg-gray-300 hover:bg-gray-400 disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import { debounce } from '@/utils/debounce'
import ButtonComponent from './ButtonComponent.vue'

interface Column {
  key: string
  label: string
}

interface Props {
  title?: string
  columns: Column[]
  rows: Record<string, any>[]
  total: number
  loading?: boolean
  page: number
  pageSize: number
  showFilters?: boolean
}

const props = defineProps<Props>()
const emit = defineEmits(['update:params', 'rowView', 'rowUpdate', 'rowDelete'])

const search = ref('')
const localPageSize = ref(props.pageSize)
const page = ref(props.page)

const start = computed(() => (page.value - 1) * localPageSize.value)
const end = computed(() => start.value + localPageSize.value)

function emitChange() {
  emit('update:params', {
    page: page.value,
    pageSize: localPageSize.value,
    search: search.value,
  })
}

const debounceEmit = debounce(emitChange, 500)

function prevPage() {
  if (page.value > 1) {
    page.value--
    emitChange()
  }
}

function nextPage() {
  if (page.value * localPageSize.value < props.total) {
    page.value++
    emitChange()
  }
}
</script>
