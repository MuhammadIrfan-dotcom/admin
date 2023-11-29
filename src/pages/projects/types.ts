import { User } from '../users/types'

export type Project = {
  id: number
  project_name: string
  project_owner: Omit<User, 'projects'>
  team: Omit<User, 'projects'>[]
  status: 'important' | 'completed' | 'archived' | 'in progress'
  creation_date: '1 Oct 2023'
}

export type EmptyProject = Omit<Project, 'id' | 'project_owner' | 'creation_date'> & {
  project_owner: Project['project_owner'] | undefined
}
