<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\MutateProductRequest;
use App\Models\Product;
use App\Models\TransactionItem;
use F9Web\ApiResponseHelpers;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\DB;
use Spatie\QueryBuilder\QueryBuilder;

class ProductController extends Controller
{
    use ApiResponseHelpers;

    /**
     * Display a listing of the resource.
     */
    public function index()
    {

        $products = QueryBuilder::for(Product::class)->get();
        return $this->respondWithSuccess($products);
    }

    /**
     * Count the resource.
     */
    public function count()
    {
        $totalProducts = QueryBuilder::for(Product::class)->count();

        return [
            'total' => $totalProducts
        ];
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(MutateProductRequest $request): JsonResponse
    {
        $this->authorize('create', Product::class);

        $productData = $request->validate([
            'name' => ['required'],
            'cogs' => ['required'],
            'selling_price' => ['required']
        ]);

        $product = new Product($productData);
        $product->save();

        return $this->respondCreated($product);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $product = Product::query()->findOrFail($id);
        return $this->respondWithSuccess($product);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(MutateProductRequest $request, string $id)
    {
        $this->authorize('update', Product::class);

        $productData = $request->validate();

        $product = Product::query()->findOrFail($id);
        $product->update($productData);

        return $this->respondWithSuccess($product);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $this->authorize('delete', Product::class);

        $product = Product::query()->findOrFail($id);
        $product->delete();

        return $this->respondWithSuccess();
    }

    public function bestSellers()
    {
        return TransactionItem::query()
            ->select('product_id', DB::raw('SUM(quantity) as quantity'))
            ->groupBy('product_id')
            ->orderByDesc('quantity')
            ->take(4)
            ->get()
            ->map(function ($v) {
                // SQL SUM return a string instead of integer
                $v->quantity = (int) $v->quantity;
                return $v;
            });
    }
}
