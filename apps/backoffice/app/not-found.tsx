import { Fragment } from 'react'

import { BackButton } from '@/element/back-button'
import { Column, Content, Grid } from '@/element/carbon'
import { PageHeader } from '@/element/page-header'
import { PageTitleCard } from '@/element/page-title-card'

export default function NotFoundPage() {
  return (
    <Fragment>
      <PageHeader />
      <Content>
        <Grid>
          <PageTitleCard title='Page On Progress / Not Found' />
          <Column span={'100%'}>
            <p className='mb-6'>
              Sorry for the inconvenience. The page does not exist or has not
              been implemented yet.
            </p>

            <BackButton />
          </Column>
        </Grid>
      </Content>
    </Fragment>
  )
}
