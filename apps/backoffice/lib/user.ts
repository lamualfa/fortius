import ky from 'ky'

import { apiFetchOptions, parseApiError } from './api'
import { RoleName } from './const'

export interface User {
  id: number
  name: string
  email: string
  roles_names: string[]
}

export interface CountUsersFilter {
  role: RoleName
}
export async function countUsers(filter?: CountUsersFilter) {
  const params = new URLSearchParams()
  if (filter && filter.role) {
    params.set('filter[roles.name]', filter.role)
  }

  const body = await ky(
    'users/count',
    apiFetchOptions({
      searchParams: params,
    })
  ).json<{
    total: number
  }>()

  return body.total
}

export async function getUser(id: User['id']) {
  const body = await ky(`users/${id}`, apiFetchOptions()).json<User>()
  return body
}

export async function getUsers() {
  const body = await ky('users', apiFetchOptions()).json<User[]>()
  return body
}

export interface CreateUserData {
  name: FormDataEntryValue | null
  email: FormDataEntryValue | null
  password: FormDataEntryValue | null
  role: FormDataEntryValue | null
}
export async function createUser(data: CreateUserData) {
  try {
    await ky
      .post(
        'users',
        apiFetchOptions({
          json: data,
        })
      )
      .json()
  } catch (error) {
    throw await parseApiError(error)
  }
}

export interface UpdateUserData {
  id: FormDataEntryValue | null
  name: FormDataEntryValue | null
  email: FormDataEntryValue | null
  password?: string
  role: FormDataEntryValue | null
}
export async function updateUser(data: UpdateUserData) {
  try {
    await ky
      .put(
        `users/${data.id?.toString()}`,
        apiFetchOptions({
          json: data,
        })
      )
      .json()
  } catch (error) {
    throw await parseApiError(error)
  }
}

export async function deleteUser(id: User['id']) {
  await ky.delete(`users/${id}`, apiFetchOptions()).json<User>()
}
