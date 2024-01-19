import { HTTPError, Options } from 'ky'
import { cookies } from 'next/headers'

import { CookieName } from './const'

export function apiFetchOptions(options?: Options) {
  const headers: Record<string, any> = {
    accept: 'application/json',
    ...options?.headers,
  }

  if (cookies().has(CookieName.AccessToken)) {
    const accessToken = cookies().get(CookieName.AccessToken)?.value
    headers['authorization'] = `Bearer ${accessToken}`
  }

  return {
    ...options,
    prefixUrl: process.env.API_URL,
    headers,
  }
}

export interface ApiError {
  errors: Record<string, string>
}
export async function parseApiError(error: unknown): Promise<ApiError> {
  if (error instanceof HTTPError) {
    const body = await error.response.json()
    if ('errors' in body) {
      return body
    }
  }

  return {
    errors: {
      form: 'A system error occurred!',
    },
  }
}
