import {
  User,
  UserCertification,
  UserFavorite,
  UserSponsor,
} from '@carbon/icons-react'

import { Column, Content, Grid, Tile } from '@/element/carbon'
import { PageTitleCard } from '@/element/page-title-card'
import { SectionTitleCard } from '@/element/section-title-card'
import { TotalReport } from '@/element/total-report'

import { ListUsersTable } from './page.element'

export default function UsersLayout() {
  return (
    <Content>
      <Grid>
        <PageTitleCard title='User' />

        <Column md={5}>
          <TotalReport Icon={User} title='Total Users' value={230} />
        </Column>
        <Column md={5}>
          <TotalReport
            Icon={UserCertification}
            title='Total Managers'
            value={230}
          />
        </Column>
        <Column md={5}>
          <TotalReport
            Icon={UserFavorite}
            title='Total Customers'
            value={504}
          />
        </Column>

        <SectionTitleCard title='List Users' />
        <Column span={'100%'}>
          <Tile>
            <ListUsersTable />
          </Tile>
        </Column>
      </Grid>
    </Content>
  )
}
