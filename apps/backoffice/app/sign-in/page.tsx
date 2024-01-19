import { redirect } from 'next/navigation'
import { Fragment } from 'react'

import { Content } from '@/element/carbon'
import { PageHeader } from '@/element/page-header'
import { getMe } from '@/lib/auth'

import { Form } from './page.element'

export default async function SignInPage() {
  const me = await getMe()
  if (me) {
    return redirect('/')
  }

  return (
    <Fragment>
      <PageHeader />
      <Content>
        <div className='flex justify-center'>
          <div className='md:w-96'>
            <h1 className='text-3xl'>Sign In</h1>
            <Form />
          </div>
        </div>
      </Content>
    </Fragment>
  )
}
