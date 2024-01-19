'use server'

import { redirect } from 'next/navigation'

import { signIn } from '@/lib/auth'

import { FieldName } from './page.const'

export interface HandleSubmitState {
  errors?: {
    form?: string
    [FieldName.Email]?: string
    // Password field doesn't have error message
  }
}
export async function handleSubmit(
  prevState: HandleSubmitState,
  formData: FormData
): Promise<HandleSubmitState> {
  console.log(Object.fromEntries(formData.entries()))
  try {
    await signIn({
      email: formData.get(FieldName.Email),
      password: formData.get(FieldName.Password),
    })
  } catch (error) {
    return error as HandleSubmitState
  }

  return redirect('/')
}
