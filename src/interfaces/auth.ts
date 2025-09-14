export interface LoginFormInterface {
  email: string
  password: string
}

export interface RegisterFormInterface {
  email: string
  password: string
  password_confirmation: string
  phone: number | null
  name: string
  address: string
  subdomain: string
  settings: string[]
}
