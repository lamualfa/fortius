export const CookieName = {
  AccessToken: 'access_token',
} as const
export type CookieName = (typeof CookieName)[keyof typeof CookieName]

export const RoleName = {
  Admin: 'admin',
  Manager: 'manager',
  Cashier: 'cashier',
} as const
export type RoleName = (typeof RoleName)[keyof typeof RoleName]

export const RoleLabel = {
  [RoleName.Admin]: 'Admin',
  [RoleName.Manager]: 'Manager',
  [RoleName.Cashier]: 'Cashier',
} as const
