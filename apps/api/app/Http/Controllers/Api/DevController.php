<?php

namespace App\Http\Controllers\Api;

use App\Enums\OauthClientEnum;
use App\Enums\RoleEnum;
use App\Http\Controllers\Controller;
use App\Models\User;

class DevController extends Controller
{
    public function signIn(RoleEnum $role)
    {
        $admin = User::query()
            ->whereHas('roles', function ($query) use ($role) {
                $query->where('name', $role);
            })->first();

        return $admin->createToken(OauthClientEnum::Backoffice->value);
    }
}
