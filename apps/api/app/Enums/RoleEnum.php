<?php

namespace App\Enums;

enum RoleEnum: string
{
  case Admin = 'admin';
  case Manager = 'manager';
  case Cashier = 'cashier';

  public function permissions(): array
  {
    return match ($this) {
      static::Admin => PermissionEnum::cases(),
      static::Manager => [
        PermissionEnum::CreateUser,
        PermissionEnum::ReadUser,
        PermissionEnum::ReadAuthoredUser,
        PermissionEnum::ReadManyUser,
        PermissionEnum::UpdateUser,
        PermissionEnum::UpdateAuthoredUser,
        PermissionEnum::DeleteUser,
        PermissionEnum::DeleteAuthoredUser,

        PermissionEnum::AssignRole,
        PermissionEnum::AssignCashierRole,

        PermissionEnum::CreateProduct,
        PermissionEnum::UpdateProduct,
        PermissionEnum::DeleteProduct,

        PermissionEnum::ReadTransaction,
        PermissionEnum::ReadManyTransaction,
        PermissionEnum::ReadAuthoredUserTransaction,
        PermissionEnum::DeleteTransaction,
        PermissionEnum::DeleteAuthoredUserTransaction
      ],
      static::Cashier => [
        PermissionEnum::ReadUser,
        PermissionEnum::UpdateUser,

        PermissionEnum::CreateTransaction,
        PermissionEnum::ReadTransaction,
        PermissionEnum::ReadManyTransaction
      ],
    };
  }
}