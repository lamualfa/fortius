<?php

namespace App\Http\Controllers\Api;

use App\Enums\PermissionEnum;
use App\Http\Controllers\Controller;
use App\Http\Requests\MutateUserRequest;
use App\Models\User;
use F9Web\ApiResponseHelpers;
use Illuminate\Http\Request;
use Spatie\QueryBuilder\QueryBuilder;

class UserController extends Controller
{
    use ApiResponseHelpers;

    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $this->authorize('permission', [User::class, PermissionEnum::ReadManyUser]);

        $author = $request->user();
        $usersQuery = QueryBuilder::for(User::class);
        if (!$author->hasPermissionTo(PermissionEnum::ReadAnyUser)) {
            $usersQuery = $usersQuery->where('author_id', $author->id);
        }

        $users = $usersQuery->get()
            ->map(function ($v) {
                $v->roles_names = null;
                return $v;
            });

        return $users;
    }

    /**
     * Count the resource.
     */
    public function count(Request $request)
    {
        $this->authorize('permission', [User::class, PermissionEnum::ReadManyUser]);

        $author = $request->user();
        $usersQuery = QueryBuilder::for(User::class)
            ->allowedFilters('roles.name');
        if (!$author->hasPermissionTo(PermissionEnum::ReadAnyUser)) {
            $usersQuery = $usersQuery->where('author_id', $author->id);
        }

        $totalUsers = $usersQuery->count();

        return [
            'total' => $totalUsers
        ];
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(MutateUserRequest $request)
    {
        $this->authorize('permission', [User::class, PermissionEnum::CreateUser]);

        $userData = $request->validate([
            'name' => ['required'],
            'email' => ['required'],
            'password' => ['required'],
            'role' => ['required']
        ]);
        $isEmailExists = User::query()->where('email', $userData['email'])->exists();
        if ($isEmailExists) {
            return response([
                'errors' => [
                    'email' => 'Email is already in use.'
                ]
            ], 409);
        }

        $this->authorize('roleAssignment', [User::class, $userData['role']]);

        $author = $request->user();
        $user = new User($userData);
        $user->author_id = $author->id;
        $user->assignRole($userData['role']);
        $user->save();

        return $user;
    }

    /**
     * Display the specified resource.
     */
    public function show(User $user)
    {
        $this->authorize('permission', [User::class, PermissionEnum::ReadUser]);
        $this->authorize(
            'ownership',
            [
                User::class,
                $user,
                PermissionEnum::ReadAuthoredUser,
                PermissionEnum::ReadAnyUser
            ]
        );
        $user->roles_names = null;

        return $user;
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(MutateUserRequest $request, User $user)
    {
        $this->authorize('permission', [User::class, PermissionEnum::UpdateUser]);
        $this->authorize(
            'ownership',
            [
                User::class,
                $user,
                PermissionEnum::UpdateAuthoredUser,
                PermissionEnum::UpdateAnyUser
            ]
        );

        $userData = $request->validate();
        $isRoleChanged = array_key_exists('role', $userData);
        if ($isRoleChanged) {
            $this->authorize('roleAssignment', [User::class, $userData['role']]);
        }

        $user->update($userData);
        if ($isRoleChanged) {
            $user->assignRole($userData['role']);
        }

        return $user;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $user)
    {
        $this->authorize('permission', [User::class, PermissionEnum::UpdateUser]);
        $this->authorize(
            'ownership',
            [
                User::class,
                $user,
                PermissionEnum::UpdateAuthoredUser,
                PermissionEnum::UpdateAnyUser
            ]
        );

        $user->deleteOrFail();

        return $this->respondWithSuccess();
    }
}
