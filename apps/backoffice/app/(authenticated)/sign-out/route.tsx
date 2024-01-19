import { redirect } from 'next/navigation'

import { signOut } from '@/lib/auth'

export function GET() {
  signOut()
  return redirect('/sign-in')
}
