// Don't use Typescript Enum, use const instead.
// https://dev.to/ivanzm123/dont-use-enums-in-typescript-they-are-very-dangerous-57bh
export const FieldName = {
  Email: 'email',
  Password: 'password',
} as const

export type FieldName = (typeof FieldName)[keyof typeof FieldName]
