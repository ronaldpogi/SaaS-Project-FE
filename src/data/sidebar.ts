interface sidebarInterface {
  id: number
  label: string
  name: string
  icon: string
  to: string
}

const sidebarData: sidebarInterface[] = [
  {
    id: 1,
    label: 'DASHBOARD',
    name: 'Dashboard',
    icon: 'clarity:dashboard-solid',
    to: '/dashboard',
  },
  {
    id: 1,
    label: 'USERS',
    name: 'Users',
    icon: 'clarity:users-solid',
    to: '/user',
  },
]

export { sidebarData }
