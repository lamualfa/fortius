import { Fragment } from 'react'

import { Column } from '@/element/carbon'
import { SectionTitleCard } from '@/element/section-title-card'
import { getUser } from '@/lib/user'

import { Form } from './page.element'

interface EditUserPageProps {
  params: {
    id: string
  }
}
export default async function EditUserPage(props: EditUserPageProps) {
  const user = await getUser(parseInt(props.params.id, 10))

  return (
    <Fragment>
      <SectionTitleCard isFirstSection title='Edit User' />
      <Column span={6}>
        <Form
          data={{
            id: user.id,
            email: user.email,
            name: user.name,
            // TODO add support for editing multi roles
            role: user.roles_names[0],
          }}
        />
      </Column>
    </Fragment>
  )
}
