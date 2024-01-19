'use server'

import { revalidatePath } from 'next/cache'

import { deleteUser, User } from '@/lib/user'

export async function handleDeleteUser(userId: User['id']) {
  await deleteUser(userId)
  revalidatePath('/users')
}
