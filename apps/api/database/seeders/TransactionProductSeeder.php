<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TransactionProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('transaction_products')
            ->insert([
                [
                    'transaction_id' => 1,
                    'product_id' => 1,
                ],
                [
                    'transaction_id' => 1,
                    'product_id' => 2,
                ],
                [
                    'transaction_id' => 1,
                    'product_id' => 3,
                ],
                [
                    'transaction_id' => 2,
                    'product_id' => 4,
                ],
                [
                    'transaction_id' => 2,
                    'product_id' => 5,
                ],
                [
                    'transaction_id' => 3,
                    'product_id' => 1,
                ],
                [
                    'transaction_id' => 3,
                    'product_id' => 2,
                ],
                [
                    'transaction_id' => 3,
                    'product_id' => 6,
                ],
                [
                    'transaction_id' => 3,
                    'product_id' => 7,
                ],
                [
                    'transaction_id' => 4,
                    'product_id' => 2,
                ],
                [
                    'transaction_id' => 4,
                    'product_id' => 3,
                ],
                [
                    'transaction_id' => 4,
                    'product_id' => 4,
                ],
                [
                    'transaction_id' => 4,
                    'product_id' => 5,
                ],
                [
                    'transaction_id' => 4,
                    'product_id' => 6,
                ],
                [
                    'transaction_id' => 4,
                    'product_id' => 7,
                ],
            ]);
    }
}
