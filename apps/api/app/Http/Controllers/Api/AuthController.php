<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function me(Request $request)
    {
        $user = $request->user();
        $user->load('roles');

        // Init the attribute with any value to trigger the setter
        $user->roles_names = null;
        $user->permissions_names = null;

        return $user->only(['id', 'email', 'name', 'roles_names', 'permissions_names']);
    }
}
