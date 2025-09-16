export interface UserInterface {
  id?: number // optional, usually auto-generated
  tenant_id: number
  first_name: string
  last_name: string
  email: string
  phone?: string | null
  address?: string | null
  password?: string // optional (usually not returned by API)
  created_at?: string // timestamps from Laravel
  updated_at?: string
}

export interface UserForm {
  first_name: string
  last_name: string
  email: string
  phone: string | number
  address: string
  password: string
  password_confirmation: string
}

export interface TabsInterface {
  key: string
  label: string
}

export interface ColumnsInterface {
  key: string
  label: string
}

export interface ParamsInterface {
  page: number
  pageSize: number
  search: string
}
