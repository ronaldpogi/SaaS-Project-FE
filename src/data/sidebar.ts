interface sidebarInterface {
  id: number
  name: string
  icon: string
  to: string
}

const sidebarData: sidebarInterface[] = [
  {
    id: 1,
    name: 'Dashboard',
    icon: 'clarity:dashboard-solid',
    to: '/dashboard',
  },
  {
    id: 1,
    name: 'Users / Employees',
    icon: 'clarity:users-solid',
    to: '/user',
  },
]

export { sidebarData }
