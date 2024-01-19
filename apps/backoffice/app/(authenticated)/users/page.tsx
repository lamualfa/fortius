import { User, UserCertification, UserSpeaker } from '@carbon/icons-react'
import { Fragment, Suspense } from 'react'

import { Column, DataTableSkeleton, TagSkeleton, Tile } from '@/element/carbon'
import { SectionTitleCard } from '@/element/section-title-card'
import { TotalReport } from '@/element/total-report'
import { RoleName } from '@/lib/const'
import { countUsers, getUsers } from '@/lib/user'

import { ListUsersTable } from './page.element'

export default function UsersPage() {
  return (
    <Fragment>
      <Column md={5}>
        <TotalReport Icon={User} title='Total Users'>
          <Suspense fallback={<TagSkeleton />}>
            <TotalUsers />
          </Suspense>
        </TotalReport>
      </Column>
      <Column md={5}>
        <TotalReport Icon={UserCertification} title='Total Managers'>
          <Suspense fallback={<TagSkeleton />}>
            <TotalManagers />
          </Suspense>
        </TotalReport>
      </Column>
      <Column md={5}>
        <TotalReport Icon={UserSpeaker} title='Total Cashiers'>
          <Suspense fallback={<TagSkeleton />}>
            <TotalCashiers />
          </Suspense>
        </TotalReport>
      </Column>

      <SectionTitleCard title='List Users' />
      <Column span={'100%'}>
        <Tile>
          <Suspense fallback={<DataTableSkeleton />}>
            <ListUsers />
          </Suspense>
        </Tile>
      </Column>
    </Fragment>
  )
}

async function TotalUsers() {
  const totalUsers = await countUsers()
  return <p className='text-2xl'>{totalUsers.toLocaleString('id')}</p>
}

async function TotalManagers() {
  const totalManagers = await countUsers({
    role: RoleName.Manager,
  })
  return <p className='text-2xl'>{totalManagers.toLocaleString('id')}</p>
}

async function TotalCashiers() {
  const totalManagers = await countUsers({
    role: RoleName.Cashier,
  })
  return <p className='text-2xl'>{totalManagers.toLocaleString('id')}</p>
}

async function ListUsers() {
  const users = await getUsers()
  return <ListUsersTable data={users} />
}
