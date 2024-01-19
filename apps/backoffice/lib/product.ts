import ky from 'ky'

import { apiFetchOptions } from './api'

export interface Product {
  id: number
  name: string
}

export async function countProducts() {
  const body = await ky('products/count', apiFetchOptions()).json<{
    total: number
  }>()

  return body.total
}

export async function getProduct(id: Product['id']) {
  const body = await ky(`products/${id}`, apiFetchOptions()).json<Product>()
  return body
}

export async function getBestSellingProducts() {
  const body = await ky('products/best-sellers', apiFetchOptions()).json<
    {
      product_id: Product['id']
      quantity: number
    }[]
  >()

  return body
}
