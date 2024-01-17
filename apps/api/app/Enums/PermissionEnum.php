<?php

namespace App\Enums;

enum PermissionEnum: string
{
  case CreateProduct = 'create-product';
  case UpdateProduct = 'update-product';
  case DeleteProduct = 'delete-product';

  case ReadTransaction = 'read-transaction';
  case ReadAnyTransaction = 'read-any-transaction';
  case CreateTransaction = 'create-transaction';

  case UpdateOwnRole = 'update-own-role';
}