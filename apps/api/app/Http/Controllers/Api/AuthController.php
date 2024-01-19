<?php

namespace App\Http\Controllers\Api;

use App\Enums\OauthClientEnum;
use App\Http\Controllers\Controller;
use App\Models\User;
use F9Web\ApiResponseHelpers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    use ApiResponseHelpers;
    public function me(Request $request)
    {
        $user = $request->user();
        $user->load('roles');

        // Init the attribute with any value to trigger the custom setter
        $user->roles_names = null;
        $user->permissions_names = null;

        return $user->only(['id', 'email', 'name', 'roles_names', 'permissions_names']);
    }

    public function signIn(Request $request)
    {
        $incomingData = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required']
        ]);

        if (!Auth::attempt($incomingData)) {
            return response([
                'errors' => [
                    'email' => 'The provided credentials do not match our records.'
                ]
            ], 401);
        }

        $user = User::query()
            ->where('email', $incomingData['email'])
            ->firstOrFail();

        $credential = $user->createToken(OauthClientEnum::Backoffice->value);
        return $this->respondWithSuccess([
            'access_token' => $credential->accessToken
        ]);
    }
}
