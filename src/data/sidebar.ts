interface sidebarInterface {
  id: number
  name: string
  icon: string
  to: string
}

const sidebarData: sidebarInterface[] = [
  {
    id: 1,
    name: 'DASHBOARD',
    icon: 'clarity:dashboard-solid',
    to: '/dashboard',
  },
  {
    id: 1,
    name: 'USERS',
    icon: 'clarity:users-solid',
    to: '/user',
  },
]

export { sidebarData }
