'use client'

import { Add } from '@carbon/icons-react'
import {
  Button,
  ButtonSet,
  InlineLoading,
  InlineNotification,
  Select,
  SelectItem,
  TextInput,
} from '@carbon/react'
import { useRouter } from 'next/navigation'
import { useFormState, useFormStatus } from 'react-dom'

import { RoleLabel, RoleName } from '@/lib/const'

import { handleSubmit } from './page.action'
import { FieldName } from './page.const'

// @ts-ignore
const { PasswordInput } = TextInput

export function Form() {
  const [state, formAction] = useFormState(handleSubmit, {})
  const router = useRouter()

  return (
    <form
      autoComplete='off'
      className='flex flex-col mt-5 gap-y-5'
      action={formAction}
    >
      {/* https://gist.github.com/niksumeiko/360164708c3b326bd1c8 */}
      <input
        autoComplete='false'
        name='hidden'
        type='text'
        style={{
          display: 'none',
        }}
      ></input>
      {state.errors?.form ? (
        <InlineNotification hideCloseButton subtitle={state.errors.form} />
      ) : null}

      <TextInput
        id='name'
        labelText='Name'
        name={FieldName.Name}
        invalid={state.errors && state.errors[FieldName.Name] !== undefined}
        invalidText={state.errors && state.errors[FieldName.Name]}
      />

      <TextInput
        id='email'
        type='email'
        labelText='Email'
        name={FieldName.Email}
        autoComplete='off'
        invalid={state.errors && state.errors[FieldName.Email] !== undefined}
        invalidText={state.errors && state.errors[FieldName.Email]}
      />

      <PasswordInput
        id='password'
        type='password'
        labelText='Password'
        name={FieldName.Password}
        invalid={state.errors && state.errors[FieldName.Password] !== undefined}
        invalidText={state.errors && state.errors[FieldName.Password]}
      />

      <Select
        id='role'
        labelText='Role'
        name={FieldName.Role}
        placeholder='Select role'
        invalid={state.errors && state.errors[FieldName.Role] !== undefined}
        invalidText={state.errors && state.errors[FieldName.Role]}
      >
        <SelectItem value='' text='' />
        <SelectItem value={RoleName.Admin} text={RoleLabel[RoleName.Admin]} />
        <SelectItem
          value={RoleName.Manager}
          text={RoleLabel[RoleName.Manager]}
        />
        <SelectItem
          value={RoleName.Cashier}
          text={RoleLabel[RoleName.Cashier]}
        />
      </Select>

      <ButtonSet>
        <Button
          kind='secondary'
          onClick={() => {
            router.back()
          }}
        >
          Cancel
        </Button>
        <SubmitButton />
      </ButtonSet>
    </form>
  )
}

function SubmitButton() {
  const { pending } = useFormStatus()
  return pending ? (
    <div className='self-end'>
      <InlineLoading description='Creating' />
    </div>
  ) : (
    <Button type='submit' renderIcon={Add} className='self-end'>
      Create
    </Button>
  )
}
