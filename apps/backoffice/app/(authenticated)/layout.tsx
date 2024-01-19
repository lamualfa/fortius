import Link from 'next/link'
import { redirect } from 'next/navigation'
import { Fragment, PropsWithChildren } from 'react'

import { HeaderMenuItem } from '@/element/carbon'
import { AuthenticatedPageHeader } from '@/element/page-header'
import { getMe } from '@/lib/auth'
import { RoleLabel } from '@/lib/const'

export default async function ManagerLayout(props: PropsWithChildren) {
  const me = await getMe()
  if (me === null) {
    return redirect('/sign-in')
  }

  const roleName = me.roles_names[0]

  return (
    <AuthenticatedPageHeader
      account={me}
      title={RoleLabel[roleName]}
      menuItems={
        <Fragment>
          <HeaderMenuItem as={Link} href='/'>
            Summary
          </HeaderMenuItem>
          <HeaderMenuItem as={Link} href='/users'>
            User
          </HeaderMenuItem>
          <HeaderMenuItem as={Link} href='/products'>
            Product (WIP)
          </HeaderMenuItem>
          <HeaderMenuItem as={Link} href='/transactions'>
            Transaction (WIP)
          </HeaderMenuItem>
        </Fragment>
      }
    >
      {props.children}
    </AuthenticatedPageHeader>
  )
}
