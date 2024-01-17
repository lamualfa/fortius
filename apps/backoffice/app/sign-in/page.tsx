'use client'

import { ArrowRight } from '@carbon/icons-react'
import { Button, Content, TextInput } from '@carbon/react'
import { Fragment } from 'react'

import { PageHeader } from '@/element/page-header'

// @ts-ignore
const { PasswordInput } = TextInput

export default function SignInPage() {
  return (
    <Fragment>
      <PageHeader />
      <Content>
        <div className='flex justify-center'>
          <div className='md:w-96'>
            <h1 className='text-3xl'>Sign In</h1>

            <form className='flex flex-col mt-5 gap-y-5'>
              <TextInput id='email' type='email' labelText='Email' />
              <PasswordInput
                id='password'
                type='password'
                labelText='Password'
              />

              <div className='flex justify-end mt-4'>
                <Button renderIcon={ArrowRight}>Sign In</Button>
              </div>
            </form>
          </div>
        </div>
      </Content>
    </Fragment>
  )
}
