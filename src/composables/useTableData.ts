import { ref } from 'vue'

export interface IPaginatedTableData {
  picture: string
  name: string
  role: string
  created: string
  status: string
  statusColor: string
}

export function useTableData() {
  const paginatedTableData = ref<IPaginatedTableData[]>([
    {
      picture:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80',
      name: 'Vera Carpenter',
      role: 'Admin',
      created: 'Jan 21, 2020',
      status: 'Active',
      statusColor: 'green',
    },
    {
      picture:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80',
      name: 'Blake Bowman',
      role: 'Editor',
      created: 'Jan 01, 2020',
      status: 'Active',
      statusColor: 'green',
    },
    {
      picture:
        'https://images.unsplash.com/photo-1540845511934-7721dd7adec3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80',
      name: 'Dana Moore',
      role: 'Editor',
      created: 'Jan 10, 2020',
      status: 'Suspended',
      statusColor: 'orange',
    },
    {
      picture:
        'https://images.unsplash.com/photo-1522609925277-66fea332c575?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&h=160&w=160&q=80',
      name: 'Alonzo Cox',
      role: 'Admin',
      created: 'Jan 18, 2020',
      status: 'Inactive',
      statusColor: 'red',
    },
  ])

  return {
    paginatedTableData,
  }
}
