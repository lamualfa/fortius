import ky, { HTTPError } from 'ky'
import { cookies } from 'next/headers'

import { apiFetchOptions, parseApiError } from './api'
import { CookieName, RoleName } from './const'

export interface Account {
  id: number
  email: string
  name: string
  roles_names: RoleName[]
  permission_names: string[]
}
export async function getMe() {
  try {
    return await ky('me', apiFetchOptions()).json<Account>()
  } catch (error) {
    if (error instanceof HTTPError) {
      if (error.response.status === 401) {
        return null
      }
    }

    throw await parseApiError(error)
  }
}

export interface SignInData {
  email: FormDataEntryValue | null
  password: FormDataEntryValue | null
}
export async function signIn(data: SignInData) {
  try {
    const body = await ky
      .post(
        'sign-in',
        apiFetchOptions({
          json: data,
        })
      )
      .json<{
        access_token: string
      }>()

    cookies().set(CookieName.AccessToken, body['access_token'])
  } catch (error) {
    throw await parseApiError(error)
  }
}

export function signOut() {
  cookies().delete(CookieName.AccessToken)
}
