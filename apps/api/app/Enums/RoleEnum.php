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
        PermissionEnum::CreateProduct,
        PermissionEnum::UpdateProduct,
        PermissionEnum::DeleteProduct,

        PermissionEnum::CreateTransaction,
        PermissionEnum::ReadTransaction,
        PermissionEnum::ReadAnyTransaction,
      ],
      static::Cashier => [
        PermissionEnum::CreateTransaction,
        PermissionEnum::ReadTransaction,
      ],
    };
  }
}