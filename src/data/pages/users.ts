import { sleep } from '../../services/utils'
import { repeatArray } from '../../services/utils'
import { InactiveUser, User } from './../../pages/users/types'

export const users = repeatArray<User | InactiveUser>(50, [
  {
    id: 1,
    fullname: 'Patrik Radkow',
    email: 'magicpan@example.gg',
    username: 'magicpan',
    role: 'user',
    projects: 3,
    avatar: '',
    notes: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
  },
  {
    id: 2,
    fullname: 'Martin Hoff',
    email: 'niceadmin@mail.com',
    username: 'admin',
    role: 'admin',
    projects: 5,
    avatar: '😍',
    notes: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
  },
  {
    id: 3,
    fullname: 'Liz Macintosh',
    email: 'ebrown@gmail.com',
    username: 'ebrown',
    role: 'user',
    projects: 2,
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    notes: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
  },
  {
    id: 4,
    fullname: 'M2',
    email: 'mrm@gmail.com',
    username: 'mrm',
    role: 'owner',
    projects: 1,
    avatar: '',
    notes: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
  },
  {
    id: 5,
    fullname: 'Kevin Smith',
    email: 'kevin@gmail.com',
    username: 'kevin13',
    role: 'user',
    projects: 13,
    avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
    notes: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
  },
  {
    id: 6,
    fullname: 'Martin Hoff',
    email: 'martin@gmail.com',
    username: 'martin3',
    role: 'user',
    projects: 2,
    avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
    notes: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
  },
  {
    id: 7,
    fullname: 'John Doe',
    email: 'john@mail.com',
    username: 'john',
    role: 'user',
    projects: 1,
    avatar: '',
    notes: '',
  },
  {
    id: 8,
    fullname: 'Maksim Nedo',
    email: 'maksim@epic.com',
    username: 'maksim',
    role: 'admin',
    projects: 1,
    avatar: 'https://avatars.githubusercontent.com/u/23530004?v=4',
    notes: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
  },
  {
    id: 9,
    fullname: 'Dmitry Kuzmenko',
    email: 'dd@pp.com',
    username: 'dd',
    role: 'user',
    projects: 1,
    avatar: '',
    notes: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
  },
  {
    id: 10,
    fullname: 'Rayan Gosling',
    email: 'rayan@u.ua',
    username: 'rayan',
    role: 'user',
    projects: 1,
    avatar: '',
    notes: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
  },
  {
    id: 0,
    fullname: 'Laura Smith',
    email: 'laura@example.gg',
    username: 'bbb',
    role: 'user',
    projects: 3,
    avatar: '',
    resignedAt: '2021-01-01',
    notes: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
  },
  {
    id: 2,
    fullname: 'Ted Mosby',
    email: 'tedmosby@mail.com',
    username: 'gamer777',
    role: 'user',
    projects: 5,
    avatar: '😭',
    resignedAt: '2021-15-17',
    notes: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
  },
])

// Simulate API calls
export type Filters = {
  isActive: boolean
  search: string
  pagination: {
    page: number
    perPage: number
    total: number
  }
}

export const getUsers = async (filters: Partial<Filters>) => {
  await sleep(1000)
  const { isActive, search } = filters
  let filteredUsers = users

  if (isActive) {
    filteredUsers = users.filter((user) => !('resignedAt' in user))
  } else {
    filteredUsers = users.filter((user) => 'resignedAt' in user)
  }

  if (search) {
    filteredUsers = users.filter((user) => user.fullname.toLowerCase().includes(search.toLowerCase()))
  }

  const { page = 1, perPage = 10 } = filters.pagination || {}
  return {
    data: filteredUsers.slice((page - 1) * perPage, page * perPage),
    pagination: {
      page,
      perPage,
      total: filteredUsers.length,
    },
  }
}

export const addUser = async (user: User) => {
  await sleep(1000)
  users.unshift(user)
}

export const updateUser = async (user: User) => {
  await sleep(1000)
  const index = users.findIndex((u) => u.id === user.id)
  users[index] = user
}

export const removeUser = async (user: User) => {
  await sleep(1000)
  users.splice(
    users.findIndex((u) => u.id === user.id),
    1,
  )
}
