// Don't use Typescript Enum, use const instead.
// https://dev.to/ivanzm123/dont-use-enums-in-typescript-they-are-very-dangerous-57bh
export const FieldName = {
  Id: 'id',
  Name: 'name',
  Email: 'email',
  Password: 'password',
  Role: 'role',
} as const

export type FieldName = (typeof FieldName)[keyof typeof FieldName]
