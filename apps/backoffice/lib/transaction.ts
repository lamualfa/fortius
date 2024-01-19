import ky from 'ky'

import { apiFetchOptions } from './api'

export async function countTransactions() {
  const body = await ky('transactions/count', apiFetchOptions()).json<{
    total: number
  }>()

  return body.total
}

export async function countDailyTransactions() {
  const body = await ky('transactions/count/daily', apiFetchOptions()).json<
    {
      date: string
      total: number
    }[]
  >()
  return body
}
