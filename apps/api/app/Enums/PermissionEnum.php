<?php

namespace App\Enums;

enum PermissionEnum: string
{
  case CreateUser = 'create-user';
  case ReadUser = 'read-user';
  case ReadAuthoredUser = 'read-authored-user';
  case ReadAnyUser = 'read-any-user';
  case ReadManyUser = 'read-many-user';
  case UpdateUser = 'update-user';
  case UpdateAuthoredUser = 'update-authored-user';
  case UpdateAnyUser = 'update-any-user';
  case DeleteUser = 'delete-user';
  case DeleteAuthoredUser = 'delete-authored-user';
  case DeleteAnyUser = 'delete-any-user';

  case AssignRole = 'assign-role';
  case AssignAnyRole = 'assign-any-role';
  case AssignCashierRole = 'assign-cashier-role';

  case CreateProduct = 'create-product';
  case UpdateProduct = 'update-product';
  case DeleteProduct = 'delete-product';

  case CreateTransaction = 'create-transaction';
  case ReadTransaction = 'read-transaction';
  case ReadAuthoredUserTransaction = 'read-authored-user-transaction';
  case ReadAnyTransaction = 'read-any-transaction';
  case ReadManyTransaction = 'read-many-transaction';
  case DeleteTransaction = 'delete-transaction';
  case DeleteAuthoredUserTransaction = 'delete-authored-user-transaction';
  case DeleteAnyTransaction = 'delete-any-transaction';
}