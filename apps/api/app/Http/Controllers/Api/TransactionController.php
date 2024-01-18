<?php

namespace App\Http\Controllers\Api;

use App\Enums\PermissionEnum;
use App\Http\Controllers\Controller;
use App\Models\Transaction;
use App\Models\TransactionItem;
use App\Models\User;
use Illuminate\Http\Request;
use Spatie\QueryBuilder\QueryBuilder;

class TransactionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $this->authorize('permission', [User::class, PermissionEnum::ReadManyTransaction]);

        $author = $request->user();
        $transactionsQuery = QueryBuilder::for(Transaction::class);
        if ($author->hasPermissionTo(PermissionEnum::ReadAnyTransaction)) {
            return $transactionsQuery->get();
        }

        if ($author->hasPermissionTo(PermissionEnum::ReadAuthoredUserTransaction)) {
            return $transactionsQuery
                ->whereHas('author', function ($query) use ($author) {
                    $query->where('author_id', $author->id);
                })
                ->orWhere('author_id', $author->id)
                ->get();
        }

        return $transactionsQuery->where('author_id', $author->id)->get();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $this->authorize('permission', [User::class, PermissionEnum::CreateTransaction]);

        $transactionData = $request->validate([
            'items' => ['required', 'array', 'min:1'],
            'items.*.product_id' => ['required', 'integer'],
            'items.*.quantity' => ['numeric', 'min:1']
        ]);

        $author = $request->user();
        $transaction = new Transaction();
        $transaction->author_id = $author->id;
        $transaction->save();

        $items = $transactionData['items'];
        foreach ($items as &$item) {
            $item['transaction_id'] = $transaction->id;
        }

        TransactionItem::insert($items);

        $transaction->load('items');

        return $transaction;
    }

    /**
     * Display the specified resource.
     */
    public function show(Transaction $transaction)
    {
        $this->authorize(
            'ownership',
            [
                Transaction::class,
                $transaction,
                PermissionEnum::ReadTransaction,
                PermissionEnum::ReadAuthoredUserTransaction,
                PermissionEnum::ReadAnyTransaction
            ]
        );

        $transaction->load('items');

        return $transaction;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Transaction $transaction)
    {
        $this->authorize(
            'ownership',
            [
                Transaction::class,
                $transaction,
                PermissionEnum::DeleteTransaction,
                PermissionEnum::DeleteAuthoredUserTransaction,
                PermissionEnum::DeleteAnyTransaction
            ]
        );

        $transaction->deleteOrFail();

        return response();
    }
}
