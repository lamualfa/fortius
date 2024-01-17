import Link from 'next/link'
import { Fragment, PropsWithChildren } from 'react'

import { HeaderMenuItem } from '@/element/carbon'
import { PageHeaderWithMenu } from '@/element/page-header'

export default function ManagerLayout(props: PropsWithChildren) {
  return (
    <PageHeaderWithMenu
      title='Manager'
      menuItems={
        <Fragment>
          <HeaderMenuItem as={Link} href='/'>
            Summary
          </HeaderMenuItem>
          <HeaderMenuItem as={Link} href='/users'>
            User
          </HeaderMenuItem>
          <HeaderMenuItem as={Link} href='/products'>
            Product
          </HeaderMenuItem>
          <HeaderMenuItem as={Link} href='/transactions'>
            Transaction
          </HeaderMenuItem>
          <HeaderMenuItem as={Link} href='/me'>
            My Account
          </HeaderMenuItem>
        </Fragment>
      }
    >
      {props.children}
    </PageHeaderWithMenu>
  )
}
