'use server'

import { redirect } from 'next/navigation'

import { createUser } from '@/lib/user'

import { FieldName } from './page.const'

export interface HandleSubmitState {
  errors?: {
    form?: string
    [FieldName.Name]?: string
    [FieldName.Email]?: string
    [FieldName.Password]?: string
    [FieldName.Role]?: string
  }
}
export async function handleSubmit(
  prevState: HandleSubmitState,
  formData: FormData
): Promise<HandleSubmitState> {
  try {
    await createUser({
      name: formData.get(FieldName.Name),
      email: formData.get(FieldName.Email),
      password: formData.get(FieldName.Password),
      role: formData.get(FieldName.Role),
    })
  } catch (error) {
    return error as HandleSubmitState
  }

  return redirect('/users')
}
