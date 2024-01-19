'use server'

import { redirect } from 'next/navigation'

import { createUser, updateUser } from '@/lib/user'

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
    await updateUser({
      id: formData.get(FieldName.Id),
      name: formData.get(FieldName.Name),
      email: formData.get(FieldName.Email),
      // Use undefined instead of string to prevent validation error
      password: formData.get(FieldName.Password)?.toString() || undefined,
      role: formData.get(FieldName.Role),
    })
  } catch (error) {
    return error as HandleSubmitState
  }

  return redirect('/users')
}
