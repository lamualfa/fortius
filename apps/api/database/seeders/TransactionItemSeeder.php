<?php

namespace Database\Seeders;

use App\Models\TransactionItem;
use Illuminate\Database\Seeder;

class TransactionItemSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        TransactionItem::insert([
            [
                'transaction_id' => 1,
                'product_id' => 1,
                'quantity' => 1
            ],
            [
                'transaction_id' => 1,
                'product_id' => 2,
                'quantity' => 2
            ],
            [
                'transaction_id' => 1,
                'product_id' => 3,
                'quantity' => 1
            ],
            [
                'transaction_id' => 2,
                'product_id' => 4,
                'quantity' => 5
            ],
            [
                'transaction_id' => 2,
                'product_id' => 5,
                'quantity' => 2
            ],
            [
                'transaction_id' => 3,
                'product_id' => 1,
                'quantity' => 8
            ],
            [
                'transaction_id' => 3,
                'product_id' => 2,
                'quantity' => 5
            ],
            [
                'transaction_id' => 3,
                'product_id' => 6,
                'quantity' => 10
            ],
            [
                'transaction_id' => 3,
                'product_id' => 7,
                'quantity' => 3
            ],
            [
                'transaction_id' => 4,
                'product_id' => 2,
                'quantity' => 1
            ],
            [
                'transaction_id' => 4,
                'product_id' => 3,
                'quantity' => 7
            ],
            [
                'transaction_id' => 4,
                'product_id' => 4,
                'quantity' => 1
            ],
            [
                'transaction_id' => 4,
                'product_id' => 5,
                'quantity' => 9
            ],
            [
                'transaction_id' => 4,
                'product_id' => 6,
                'quantity' => 12
            ],
            [
                'transaction_id' => 4,
                'product_id' => 7,
                'quantity' => 1
            ],
        ]);
    }
}
