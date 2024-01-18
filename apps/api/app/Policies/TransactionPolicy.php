<?php

namespace App\Policies;

use App\Enums\PermissionEnum;
use App\Models\Transaction;
use App\Models\User;

class TransactionPolicy
{
  public function ownership(
    User $author,
    Transaction $transaction,
    PermissionEnum $permissionOwner,
    PermissionEnum $permissionAuthoredUser,
    PermissionEnum $permissionAny
  ) {
    if ($author->id === $transaction->author_id) {
      return $author->hasPermissionTo($permissionOwner);
    }

    if ($author->id === $transaction->author()->first()->id) {
      return $author->hasPermissionTo($permissionAuthoredUser);
    }

    return $author->hasPermissionTo($permissionAny);
  }
}
