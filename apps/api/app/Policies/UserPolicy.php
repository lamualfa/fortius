<?php

namespace App\Policies;

use App\Enums\PermissionEnum;
use App\Enums\RoleEnum;
use App\Models\User;

class UserPolicy
{
    public function action(User $author, PermissionEnum $permission)
    {
        return $author->hasPermissionTo($permission);
    }

    public function ownership(
        User $author,
        User $user,
        PermissionEnum $authorPermission,
        PermissionEnum $ownerPermission
    ) {
        $isAuthor = $author->id === $user->author_id;
        if ($isAuthor && !$author->hasPermissionTo($authorPermission)) {
            return false;
        }

        $isOwner = $author->id === $user->id;
        if (!$isAuthor && !$isOwner && !$author->hasPermissionTo($ownerPermission)) {
            return false;
        }

        return true;
    }

    public function roleAssignment(
        User $author,
        string $role
    ) {
        if ($author->hasPermissionTo(PermissionEnum::AssignAnyRole)) {
            return true;
        }

        switch ($role) {
            case RoleEnum::Cashier->value:
                return $author->hasPermissionTo(PermissionEnum::AssignCashierRole);
        }

        return false;
    }
}
