<?php

namespace Database\Seeders;

use App\Enums\RoleEnum;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::create([
            'name' => 'Admin 1',
            'email' => 'admin-1@email.com',
            'password' => Hash::make('admin-1@email.com'),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now()
        ])
            ->assignRole(RoleEnum::Admin)->save();

        User::create([
            'name' => 'Admin 2',
            'email' => 'admin-2@email.com',
            'password' => Hash::make('admin-2@email.com'),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now()
        ])
            ->assignRole(RoleEnum::Admin)->save();

        User::create([
            'name' => 'Manager 1',
            'email' => 'manager-1@email.com',
            'password' => Hash::make('manager-1@email.com'),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now()
        ])
            ->assignRole(RoleEnum::Manager)->save();

        User::create([
            'name' => 'Manager 2',
            'email' => 'manager-2@email.com',
            'password' => Hash::make('manager-2@email.com'),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now()
        ])
            ->assignRole(RoleEnum::Manager)->save();


        User::create([
            'name' => 'Cashier 1',
            'email' => 'cashier-1@email.com',
            'password' => Hash::make('cashier-1@email.com'),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now()
        ])
            ->assignRole(RoleEnum::Cashier)->save();

        User::create([
            'name' => 'Cashier 2',
            'email' => 'cashier-2@email.com',
            'password' => Hash::make('cashier-2@email.com'),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now()
        ])
            ->assignRole(RoleEnum::Cashier)->save();
    }
}
