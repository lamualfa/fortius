'use client'

import { ArrowRight } from '@carbon/icons-react'
import {
  Button,
  InlineLoading,
  InlineNotification,
  TextInput,
} from '@carbon/react'
import { useFormState, useFormStatus } from 'react-dom'

import { handleSubmit, HandleSubmitState } from './page.action'
import { FieldName } from './page.const'

// @ts-ignore
const { PasswordInput } = TextInput

export function Form() {
  const [state, formAction] = useFormState(handleSubmit, {})
  return (
    <form className='flex flex-col mt-5 gap-y-5' action={formAction}>
      {state.errors?.form ? (
        <InlineNotification hideCloseButton subtitle={state.errors.form} />
      ) : null}

      <TextInput
        id='email'
        type='email'
        labelText='Email'
        name={FieldName.Email}
        invalid={state.errors && state.errors[FieldName.Email] !== undefined}
        invalidText={state.errors && state.errors[FieldName.Email]}
      />

      <PasswordInput
        id='password'
        type='password'
        labelText='Password'
        name={FieldName.Password}
      />

      <SubmitButton />
    </form>
  )
}

function SubmitButton() {
  const { pending } = useFormStatus()
  return pending ? (
    <div className='self-end'>
      <InlineLoading description='Signing in' />
    </div>
  ) : (
    <Button type='submit' renderIcon={ArrowRight} className='self-end'>
      Sign in
    </Button>
  )
}
