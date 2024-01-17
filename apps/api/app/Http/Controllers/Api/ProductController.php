<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\MutateProductRequest;
use App\Models\Product;
use F9Web\ApiResponseHelpers;
use Illuminate\Http\JsonResponse;
use Spatie\QueryBuilder\QueryBuilder;

class ProductController extends Controller
{
    use ApiResponseHelpers;

    /**
     * Display a listing of the resource.
     */
    public function index()
    {

        $data = QueryBuilder::for(Product::class)->get();
        return $this->respondWithSuccess($data);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(MutateProductRequest $request): JsonResponse
    {
        $this->authorize('create', Product::class);

        $incomingData = $request->validate([
            'name' => ['required'],
            'cogs' => ['required'],
            'selling_price' => ['required']
        ]);

        $data = new Product($incomingData);
        $data->save();

        return $this->respondCreated($data);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $data = Product::query()->findOrFail($id);
        return $this->respondWithSuccess($data);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(MutateProductRequest $request, string $id)
    {
        $this->authorize('update', Product::class);

        $incomingData = $request->validate();

        $data = Product::query()->findOrFail($id);
        $data->update($incomingData);

        return $this->respondWithSuccess($data);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $this->authorize('delete', Product::class);
        $data = Product::query()->findOrFail($id);
        $data->delete();

        return $this->respondWithSuccess();
    }
}
