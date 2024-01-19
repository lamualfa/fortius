'use client'

import {
  Add,
  Edit,
  TrashCan,
  UserCertification,
  UserMilitary,
  UserSpeaker,
} from '@carbon/icons-react'
import {
  Button,
  DataTable,
  InlineLoading,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableHeader,
  TableRow,
  TableToolbar,
  TableToolbarContent,
  Tag,
} from '@carbon/react'
import Link from 'next/link'
import { Fragment, useState } from 'react'

import { type User } from '@/lib/user'

import { handleDeleteUser } from './page.action'

const RoleTags = {
  admin: <Tag renderIcon={UserMilitary}>Admin</Tag>,
  manager: <Tag renderIcon={UserCertification}>Manager</Tag>,
  cashier: <Tag renderIcon={UserSpeaker}>Cashier</Tag>,
}

export interface ListUsersTableProps {
  data: User[]
}
export function ListUsersTable(props: ListUsersTableProps) {
  return (
    <DataTable
      headers={[
        {
          header: 'Email',
          key: 'email',
        },
        {
          header: 'Name',
          key: 'name',
        },
        {
          header: 'Roles',
          key: 'roles_names',
        },
        {
          header: 'Actions',
          key: '',
        },
      ]}
      // @ts-ignore
      rows={props.data}
    >
      {({
        rows,
        headers,
        getHeaderProps,
        getRowProps,
        getToolbarProps,
        getTableProps,
      }) => (
        <TableContainer>
          <TableToolbar {...getToolbarProps()}>
            <TableToolbarContent>
              <Button
                tabIndex={0}
                as={Link}
                kind='primary'
                renderIcon={Add}
                href={'/users/create'}
              >
                Create
              </Button>
            </TableToolbarContent>
          </TableToolbar>
          <Table {...getTableProps()} aria-label='sample table'>
            <TableHead>
              <TableRow>
                {headers.map((header, i) => (
                  // @ts-ignore
                  <TableHeader
                    // @ts-ignore
                    key={header.key}
                    {...getHeaderProps({
                      header,
                    })}
                  >
                    {header.header}
                  </TableHeader>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, i) => (
                <TableRow
                  // @ts-ignore
                  key={row.id}
                  {...getRowProps({
                    row,
                  })}
                >
                  <TableCell key={row.cells[0].id}>
                    {row.cells[0].value}
                  </TableCell>
                  <TableCell key={row.cells[1].id}>
                    {row.cells[1].value}
                  </TableCell>
                  <TableCell key={row.cells[2].id}>
                    {/* @ts-ignore */}
                    {row.cells[2].value.map((v) => RoleTags[v])}
                  </TableCell>
                  <TableCell key={row.cells[3].id}>
                    {/* @ts-ignore */}
                    <ActionsButtons userId={row.id} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </DataTable>
  )
}

interface ActionsButtonsProps {
  userId: User['id']
}
function ActionsButtons(props: ActionsButtonsProps) {
  const [isLoading, setIsLoading] = useState(false)

  return isLoading ? (
    <InlineLoading description='Deleting user' />
  ) : (
    <Fragment>
      <Button
        as={Link}
        renderIcon={Edit}
        size='sm'
        kind='ghost'
        href={`/users/${props.userId}/edit`}
      >
        Edit
      </Button>
      <Button
        renderIcon={TrashCan}
        size='sm'
        kind='danger--ghost'
        onClick={async () => {
          setIsLoading(true)
          await handleDeleteUser(props.userId)
          setIsLoading(false)
        }}
      >
        Delete
      </Button>
    </Fragment>
  )
}
