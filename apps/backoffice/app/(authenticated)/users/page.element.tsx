'use client'

import { UserCertification, UserFavorite } from '@carbon/icons-react'
import {
  Button,
  DataTable,
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

const RoleTags = {
  manager: <Tag renderIcon={UserCertification}>Manager</Tag>,
  customer: <Tag renderIcon={UserFavorite}>Customer</Tag>,
}

export function ListUsersTable() {
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
          header: 'Role',
          key: 'role',
        },
      ]}
      rows={[
        {
          id: '1',
          email: 'user1@email.com',
          name: 'User 1',
          role: 'manager',
        },
        {
          id: '2',
          email: 'user2@email.com',
          name: 'User 2',
          role: 'customer',
        },
      ]}
    >
      {({
        rows,
        headers,
        getHeaderProps,
        getRowProps,
        getSelectionProps,
        getToolbarProps,
        getBatchActionProps,
        onInputChange,
        selectedRows,
        getTableProps,
        getTableContainerProps,
        selectRow,
      }) => (
        <TableContainer>
          <TableToolbar {...getToolbarProps()}>
            <TableToolbarContent>
              <Button tabIndex={0} kind='primary'>
                Add new
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
                    {RoleTags[row.cells[2].value]}
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
