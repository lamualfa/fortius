<?php

namespace App\Policies;

use App\Enums\PermissionEnum;
use App\Models\Transaction;
use App\Models\User;
use Illuminate\Auth\Access\Response;

class TransactionPolicy
{
    /**
     * Determine whether the user can view any models.
     */
    public function viewAny(User $user): bool
    {
        return $user->can(PermissionEnum::ReadAnyTransaction->value);
    }

    /**
     * Determine whether the user can view the model.
     */
    public function view(User $user, Transaction $transaction): bool
    {
        if (!$user->can(PermissionEnum::ReadTransaction->value)) {
            return false;
        }

        // Cashier can't view other cashier's transactions. Only admin can do that.
        $isForeign = $user->id !== $transaction->author_id;
        return $isForeign && $user->can(PermissionEnum::ReadAnyTransaction->value);
    }

    /**
     * Determine whether the user can create models.
     */
    public function create(User $user, Transaction $transaction): bool
    {
        if ($transaction->author_id != $user->id) {
            return false;
        }

        return $user->can(PermissionEnum::CreateTransaction->value);
    }

    /**
     * Determine whether the user can update the model.
     */
    public function update(User $user, Transaction $transaction): bool
    {
        return false;
    }

    /**
     * Determine whether the user can delete the model.
     */
    public function delete(User $user, Transaction $transaction): bool
    {
        return false;
    }

    /**
     * Determine whether the user can restore the model.
     */
    public function restore(User $user, Transaction $transaction): bool
    {
        return false;
    }

    /**
     * Determine whether the user can permanently delete the model.
     */
    public function forceDelete(User $user, Transaction $transaction): bool
    {
        return false;
    }
}
