import { Fragment } from 'react'

import { Column } from '@/element/carbon'
import { SectionTitleCard } from '@/element/section-title-card'

import { Form } from './page.element'

export default function CreateUserPage() {
  return (
    <Fragment>
      <SectionTitleCard isFirstSection title='Create a User' />
      <Column span={6}>
        <Form />
      </Column>
    </Fragment>
  )
}
