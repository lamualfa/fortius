import { PropsWithChildren } from 'react'

import { Content, Grid } from '@/element/carbon'
import { PageTitleCard } from '@/element/page-title-card'

export default function UsersLayout(props: PropsWithChildren) {
  return (
    <Content>
      <Grid>
        <PageTitleCard title='User' />

        {props.children}
      </Grid>
    </Content>
  )
}
